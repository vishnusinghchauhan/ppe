const nodemailer = require('nodemailer');// const transporter = nodemailer.createTransport({
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: 'vsvishnusingh8@gmail.com',
        pass: 'Gmail@9929'
    }
});

module.exports.productInquiry = function( toEmail, subject, emailBody) {
    return new Promise(function(resolve,reject){
         console.info('sending email to..', toEmail, subject, emailBody);
        transporter.sendMail({
            from: "vsvishnusingh8@gmail.com",
            to: toEmail,
            subject: subject,
            html:emailBody,
        },
        function(err, res) {
            if (err) {
                 console.info("Error while sending email ...", err)
                reject(false)
            } else {
                 console.info("Email send successfully!");
                resolve(true)
            }
        })
    })
}

