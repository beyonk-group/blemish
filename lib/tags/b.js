module.exports = function b (markdown) {
  return markdown.replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, '<b>$1</b>')
}
