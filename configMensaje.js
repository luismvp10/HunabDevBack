const nodemailer = require("nodemailer");
module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 587,
        secure: false,
        auth: {
            user: "fb947adf639ec4", // Cambialo por tu email
            pass: "51f27ab7c33657" // Cambialo por tu password
        }
    });
    const mailOptions = {
        from: `"<Sender’s name>", "<Sender’s email>"`,
        to: 'migueluis25@gmail.com', // Cambia esta parte por el destinatario
        subject: formulario.asunto,
        html: `
 <strong>Nombre:</strong> ${formulario.nombre} <br/>
 <strong>E-mail:</strong> ${formulario.email} <br/>
 <strong>Mensaje:</strong> ${formulario.mensaje}
 `
    };
    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}