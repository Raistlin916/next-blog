const fm = require('front-matter')

module.exports = function(content) {
  const output = fm(content)
  const attributes = Object.entries(output.attributes).map(([key, value]) => {
    return `export const ${key} = ${JSON.stringify(value)}`
  })

  return `${output.body}\n\n${attributes.join('\n\n')}\n`
}
