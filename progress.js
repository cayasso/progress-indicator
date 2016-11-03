window.progress = (function component(options) {

  function toggle(e) {
    const el = document.getElementById('progress')
    isHidden(el) ? show(el) : hide(el)
    e.preventDefault()
  }

  function isHidden(el) {
    return !!/hide/.test(el.className)
  }

  function hide(el) {
    if (!isHidden(el)) el.className += ' hide'
  }

  function show(el) {
    el.className = el.className.replace('hide', ' ')
  }

  return { toggle }
}())
