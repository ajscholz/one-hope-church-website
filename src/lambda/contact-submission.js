const nodemailer = require("nodemailer")
// require("dotenv").config({
//   path: `/.env.${process.env.NODE_ENV}`,
// })

// https://github.com/kicholen/makeithappen/blob/79b9c8f3a7238dc75308f9a69d769d7cda7dd522/func/sendMail.js for more help

exports.handler = async function(event, context, callback) {
  const { body } = event
  let data = JSON.parse(body)

  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USERNAME,
      pass: process.env.MAILTRAP_PASSWORD,
      // user: "a949c930869b32",
      // pass: "00f4db531864a8",
    },
  })

  const message = {
    from: {
      name: "AJSolutions",
      address: "andrew@citynorth.church",
    },
    replyTo: data.values.email,
    to: "info@onehope.church",
    subject: "Website Contact Form Submission",
    text: `You've received a new form submission!

    Name: ${data.values.name}
    Email: ${data.values.email}
    Message: ${data.values.message}
    
To reply to your message simply reply to this email directly.`,
    html: `<h1>You've recieved a new form submission!</h1><hr><p><b>Name: </b>${data.values.name}</p><p><b>Email: </b>${data.values.email}</p><p><b>Message: </b>${data.values.message}</p><hr><h4>To reply to your message simply reply to this email directly!</h4>`,
  }

  let response
  try {
    response = await transporter.sendMail(message)
  } catch (error) {
    console.log(error)
  }

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      msg: "Form submitted successfully",
      data: response,
    }),
  })
}
