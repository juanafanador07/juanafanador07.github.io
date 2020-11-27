const express = require("express");
const ejs = require("ejs");
const nodemailer = require('nodemailer');
const Message = require(__dirname + "/models/message");
const router = express.Router();
const JoiMessageSchema = require("./MessagePattern");

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
    const name = body.name;
    const email = body.email;
    const message = body.message;
    const script = body.script;

    try {
        /*Verificate inputs*/
        await JoiMessageSchema.schema.validateAsync(body);

        /*Add to Database*/
        body.date = new Date(Date.now());
        await Message.create(body);

        /*Send Email*/
        transporter.sendMail({
            from: process.env.GOOGLE_USER,
            to: email,
            subject: 'Message Sent',
            text: ejsRenderFile("mail/messageSentText.ejs", body),
            html: ejsRenderFile("mail/messageSent.ejs", body)
        });

        /*Notify to me*/
        transporter.sendMail({
            from: process.env.GOOGLE_USER,
            to: process.env.GOOGLE_USER,
            subject: 'Alguien te ha enviado un mensaje',
            text: `Nombre: ${name}
            Correo: ${email}
            Mensaje: ${message}`,
            html: ejsRenderFile("mail/notification.ejs", body)
        });

        if (script == "true") {
            return res.send({
                error: false,
                status: "Mensaje enviado correctamente"
            })
        }

        return res.redirect(301, "https://" + process.env.PORTFOLIO);

    } catch (error) {
        return res.send(JoiMessageSchema.manageError(error))
    }

});

router.post("/revive", (req, res) => {
    res.send({
        status: true
    });
})

module.exports = router;
