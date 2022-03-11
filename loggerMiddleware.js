const logger = (request, response, next) => {
  const { method, path } = request
  console.log(method, path)
  console.log('--------')
  next()
}

module.exports = logger
