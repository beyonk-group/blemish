module.exports = function blockquote (markdown) {
  return markdown.replace(/^\>(.+)/gm, '<blockquote>$1</blockquote>')
}
