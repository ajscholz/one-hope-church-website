exports.handler = function(event, context, callback) {
  console.log(event)

  callback(null, {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify({
      msg: `Excellent! Your name is ${event.body.name}`,
    }),
  })
}
