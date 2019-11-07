module.exports = function code (markdown) {
  return markdown.replace(/[\`]{1}([^\`]+)[\`]{1}/g, '<code>$1</code>')
}
