module.exports = function h (markdown) {  
  let md = markdown.replace(/[\#]{6}(.+)/g, '<h6>$1</h6>')
  md = md.replace(/[\#]{5}(.+)/g, '<h5>$1</h5>')
  md = md.replace(/[\#]{4}(.+)/g, '<h4>$1</h4>')
  md = md.replace(/[\#]{3}(.+)/g, '<h3>$1</h3>')
  md = md.replace(/[\#]{2}(.+)/g, '<h2>$1</h2>')
  md = md.replace(/[\#]{1}(.+)/g, '<h1>$1</h1>')

  md = md.replace(/^(.+)\n\=+/gm, '<h1>$1</h1>')
  return md.replace(/^(.+)\n\-+/gm, '<h2>$1</h2>')
}
