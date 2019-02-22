export default {
  inserted: function (el, binding) {
    if (document.title === el.dataset.title) return
    document.title = el.dataset.title
    if (document.title) {
      var iframe = document.createElement('iframe')
      iframe.title = el.dataset.title
      iframe.width = 0
      iframe.height = 0
      iframe.style.display = 'none'
      iframe.addEventListener('load', function () {
        setTimeout(function () {
          document.body.removeChild(iframe)
        }, 0)
      })
      document.body.appendChild(iframe)
    }
  },
  update: function (el, binding) {
    if (document.title === el.dataset.title) return
    document.title = el.dataset.title
    if (document.title) {
      var iframe = document.createElement('iframe')
      iframe.title = el.dataset.title
      iframe.width = 0
      iframe.height = 0
      iframe.style.display = 'none'
      iframe.addEventListener('load', function () {
        setTimeout(function () {
          document.body.removeChild(iframe)
        }, 0)
      })
      document.body.appendChild(iframe)
    }
  }
}
