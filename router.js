const express = require("express");
const ejs = require("ejs");
const nodemailer = require('nodemailer');
const Joi = require('joi');
const Message = require(__dirname + "/models/message");
const router = express.Router();

const JoiMessageSchema = Joi.object({
    name: Joi.string().min(3).max(255).pattern(/^[a-zA-Z]+$/).required(),
    email: Joi.string().min(3).max(255).email().required(),
    subject: Joi.string().required(),
    message: Joi.string().required(),
    script: Joi.string().required()
})

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
    const subject = body.subject;
    const message = body.message;
    const script = body.script;
    try {
        /*Verificate inputs*/
        await JoiMessageSchema.validateAsync(body);
        
        /*Add to Database*/
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

        if (script == "true") {
            return res.send({
                status: "Mensaje enviado correctamente"
            })
        }

        return res.redirect(301, "https://" + process.env.PORTFOLIO);

    } catch (error) {
        console.log(error);
        return res.json({
            status: error.details[0].message
        })
    }

});

router.post("/revive", (req, res) => {
    res.send({
        status: "Server prepared to receive requests"
    });
})

module.exports = router;