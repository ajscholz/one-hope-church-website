exports.handler = function(event, context, callback) {
  const { name } = JSON.parse(event.body)
  console.log(event)

  if (name === "james") {
    callback(null, {
      // return null to show no errors
      statusCode: 200, // http status code
      body: JSON.stringify({
        msg: `Thanks for visiting ${name}`,
      }),
    })
  } else {
    callback(new Error("you're not James!"))
  }
}
