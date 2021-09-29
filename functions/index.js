const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv')

dotenv.config()


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.sendEmail = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.sendEmail = functions.firestore.document('messages/{messageId}').onCreate(async (snap, context) => {

    const { name, email, text, date } = snap.data()
    
    try {
        const gmailTransport = {
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'neritechdev@gmail.com',
                pass: process.env.NODEMAILER_NERITECH_PASSWORD
            }
        }

        const transporter = nodemailer.createTransport(gmailTransport)

        await transporter.sendMail({
            from: 'NERITECH <neritechdev@gmail.com>',
            to: 'neritechdev@gmail.com',
            subject: 'Nuevo mensaje en NERITECH',
            text: `Name: ${name}\n\nEmail: ${email}\n\nText: ${text}\n\nDate: ${date}`
        })
        
        console.log(`Mensaje enviado a neritechdev@gmail.com.`);

        const emailSended = await transporter.sendMail({
            from: 'NERITECH <neritechdev@gmail.com>',
            to: email,
            subject: 'Mensaje recibido',
            text: `Hemos recibido su mensaje.\n"${text}"\nEn breve recibirás una respuesta.\nUn saludo.`
        })

        return emailSended;
        
    } catch (error) {
        console.error(error);
        console.log(error);
        return `Error: ${error}`;            

    }

});
