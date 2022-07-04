exports.handler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      body: 'hello'
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
