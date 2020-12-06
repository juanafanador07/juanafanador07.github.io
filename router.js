const express = require("express");
const Message = require(__dirname + "/models/message");
const JoiMessageSchema = require("./MessagePattern");
const mail = require("./mail");
const router = express.Router();

/*Router*/
router.post("/", async (req, res) => {
    const body = req.body;
    const script = body.script;

    try {
        /*Verificate inputs*/
        await JoiMessageSchema.schema.validateAsync(body);

        /*Add to Database*/
        body.date = new Date(Date.now());
        await Message.create(body);

        /*Send Emails*/
        mail.notifyUser(body);
        mail.notifyMe(body);

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