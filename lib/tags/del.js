module.exports = function del (markdown) {
  return markdown.replace(/[\~]{2}([^\~]+)[\~]{2}/g, '<del>$1</del>')
}