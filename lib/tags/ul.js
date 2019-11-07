module.exports = function ul (markdown) {
  let md = markdown.replace(/^\s*\n\*/gm, '<ul>\n*')
  md = md.replace(/^(\*.+)\s*\n([^\*])/gm, '$1\n</ul>\n\n$2')
  return md.replace(/^\*(.+)/gm, '<li>$1</li>')
}
