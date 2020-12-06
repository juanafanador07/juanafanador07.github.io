const nodemailer = require('nodemailer');
const {google} = require("googleapis");
const ejs = require("ejs");

const OAuth2Client = new google.auth.OAuth2(
    process.env.OAUTH_CLIENT_ID,
    process.env.OAUTH_CLIENT_SECRET,
);

OAuth2Client.setCredentials({
    refresh_token: process.env.OAUTH_REFRESH_TOKEN,
});

const emailTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        accessToken: OAuth2Client.getAccessToken(),
    },
    tls: {
        rejectUnauthorized: false
    }
});

function renderFile(path, options) {
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

/*Send Email*/
function notifyUser(body) {
    emailTransport.sendMail({
        from: process.env.EMAIL,
        to: body.email,
        subject: 'Mensaje Enviado',
        text: renderFile("mail/messageSentText.ejs", body),
        html: renderFile("mail/messageSent.ejs", body)
    }, error => {
        if (error) {
            console.log(`Failed to sent email: ${error}`);
        } else {
            console.log(`Email sent to ${body.email}`);
        };
        emailTransport.close();
    });
}

/*Notify to me*/
function notifyMe(body) {
    emailTransport.sendMail({
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: 'Alguien te ha enviado un mensaje',
        text: renderFile("mail/notificationText.ejs", body),
        html: renderFile("mail/notification.ejs", body)
    }, error => {
        if (error) {
            console.log(`Failed to sent email: ${error}`);
        } else {
            console.log(`Email sent to ${process.env.EMAIL}`);
        };
        emailTransport.close();
    });
}

module.exports = {
    notifyMe,
    notifyUser
}