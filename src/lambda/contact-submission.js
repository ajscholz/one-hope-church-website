exports.handler = function(event, context, callback) {
  const { body } = event
  let data = JSON.parse(body)
  console.log(data.values)

  callback(null, {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify({
      msg: `Here is your form data: `,
      values: data.values,
    }),
  })
}
