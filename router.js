const express = require("express");
const ejs = require("ejs");
const nodemailer = require('nodemailer');
const Message = require(__dirname + "/models/message");
const router = express.Router();

function ejsRenderFile(path, options) {
    let data;
    ejs.renderFile(path, options, {}, (err, str) => {
        if (err) {
            console.log(err)
        } else {
            data = str
        }
    });
    return data;
}

/*Email Configuration*/
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

/*Router*/
router.post("/", async (req, res) => {
    const body = req.body;
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    try {
        await Message.create(body);

        /*Send Email*/
        transporter.sendMail({
            from: process.env.GOOGLE_USER,
            to: email,
            subject: 'Message Sent',
            text: ejsRenderFile("mail/messageSentText.ejs", {
                name
            }),
            html: ejsRenderFile("mail/messageSent.ejs", {
                name
            })
        });

        /*Notify to me*/
        transporter.sendMail({
            from: process.env.GOOGLE_USER,
            to: process.env.GOOGLE_USER,
            subject: 'Alguien te ha enviado un mensaje',
            text: `Nombre: ${name}
            Correo: ${email}
            Tema: ${subject}
            Mensaje: ${message}`,
            html: ejsRenderFile("mail/notification.ejs", {
                name,
                email,
                subject,
                message,
            })
        });

        res.redirect("/");

    } catch (error) {
        res.json({
            message: 'Error al enviar el mensaje: ' + error
        })
    }

});

router.post("/revive", (req,res)=>{
    res.send({
        alive: true
    });
})

module.exports = router;