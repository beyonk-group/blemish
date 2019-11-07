module.exports = function i (markdown) {
  return markdown.replace(/[\*\_]{1}([^\*\_]+)[\*\_]{1}/g, '<i>$1</i>')
}
