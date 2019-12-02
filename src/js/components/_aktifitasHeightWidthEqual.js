var aktifitasHeightWidhtEqual = {
  init: function() {
    this.dom()
    this.eventList()
  },
  dom: function() {
    this.wrapper = $('#aktif-promo .m-aktif-c-l-photo')
  },
  eventList: function() {
    $(window).on('load', this.aktifitasHeightWidhtEqual.bind(this))
  },
  aktifitasHeightWidhtEqual: function() {
    if (this.wrapper.length) {
      var width = this.wrapper.width()
      var style = document.createElement('style')

      style.innerHTML = '#aktif-promo .m-aktif-c-l-photo { height: ' + width + 'px !important; }'
      style.innerHTML += '#aktif-aktifitas .m-aktif-c-l-photo { height: ' + width + 'px !important; }'
      document.head.appendChild(style)
    }
  }
}

aktifitasHeightWidhtEqual.init()