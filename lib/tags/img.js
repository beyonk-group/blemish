module.exports = function h (markdown) { 
  return markdown.replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g, '<img src="$2" alt="$1" />')
}
 