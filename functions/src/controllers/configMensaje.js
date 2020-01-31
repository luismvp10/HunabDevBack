const nodemailer = require("nodemailer");
module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.CORREO, // Cambialo por tu email
            pass: process.env.PASS // Cambialo por tu password
        }
    });
    const mailOptions = {


        from: `"<Sender’s name>", "<Sender’s email>"`,
        to: 'luismvalenp@gmail.com', // Cambia esta parte por el destinatario
        subject: formulario.empresa,
        html: `
        <strong>Empresa:</strong> ${formulario.empresa} <br/>
        <strong>Nombre:</strong> ${formulario.nombre} <br/>
        <strong>E-mail:</strong> ${formulario.email} <br/>
        <strong>Mensaje:</strong> ${formulario.mensaje}
 `
    };
    transporter.sendMail(mailOptions, function(err, info) {

        if (err)
            console.log(err);
        else
            console.log(info);
    });
}
