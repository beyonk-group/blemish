module.exports = function ol (markdown) {
  let md = markdown.replace(/^\s*\n\d\./gm, '<ol>\n1.')
  md = md.replace(/^(\d\..+)\s*\n([^\d\.])/gm, '$1\n</ol>\n\n$2')
  return md.replace(/^\d\.(.+)/gm, '<li>$1</li>')
}
  