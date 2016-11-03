window.progress = (function component(options) {
  return function create(val) {

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
      el.querySelector('.progress-status').style.width = val + '%'
      el.querySelector('.indicator-value').innerHTML = '$' + val
      el.className = el.className.replace('hide', ' ')
    }

    return { toggle }
  }
}())
