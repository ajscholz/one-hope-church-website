import React, { useState } from "react"
// import { navigateTo } from "gatsby-link"

// THIS LOGGIC IS WORKING!

// function encode(data) {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&")
// }

export default () => {
  const [name, updateName] = useState("Andrew")
  const [email, updateEmail] = useState("andrew@citynorth.church")
  const [message, updateMessage] = useState("hi! this is a test!")
  const [hidden, updateHidden] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    console.log(e)

    if (hidden === "") {
      fetch("/.netlify/functions/contact-submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "form-name": form.getAttribute("name"),
          name: name,
          email: email,
          message: message,
        }),
      })
        .then(response => console.log(response))

        .catch(error => alert(error))
    }
  }

  return (
    <div>
      <h1>Contact</h1>
      <form
        name="contact"
        method="post"
        action="/thanks"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={updateHidden} />
          </label>
        </p>
        <p>
          <label>
            Your name:
            <br />
            <input
              type="text"
              name="name"
              onChange={updateName}
              defaultValue={name}
            />
          </label>
        </p>
        <p>
          <label>
            Your email:
            <br />
            <input
              type="email"
              name="email"
              onChange={updateEmail}
              defaultValue={email}
            />
          </label>
        </p>
        <p>
          <label>
            Message:
            <br />
            <textarea
              name="message"
              onChange={updateMessage}
              defaultValue={message}
            />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}
