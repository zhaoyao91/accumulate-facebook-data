const fetchBody = require('fetch-body')(require('node-fetch'))

async function accumulate (data, next) {
  if (!next) return data
  const body = await fetchBody(next)
  return accumulate(data.concat(body.data), body.paging.next)
}

module.exports = async function(url) {
  return accumulate([], url)
}