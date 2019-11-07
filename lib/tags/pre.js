module.exports = function pre (markdown) {
  let md = markdown.replace(/^\s*\n\`\`\`(([^\s]+))?/gm, '<pre class="$2">')
  return md.replace(/^\`\`\`\s*\n/gm, '</pre>\n\n')
}
