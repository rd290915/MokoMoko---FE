var testimoni = {
  init: function() {
    this.data()
    this.dom()
    this.eventList()
  },
  data: function() {
    this.width = 0
    this.gapTop = 0
    this.gapTopOlshop = 0
  },
  dom: function() {
    this.window = $(window)
    this.wrap = $('.m-tipsdetail-testi')
    this.header = $('#header')
    this.olshop = $('.m-tipsdetail-olshop')
  },
  eventList: function() {
    if (this.wrap.length) {
      if (this.window.width() > 768) {
        this.initTrans()
        this.window.on('scroll', this.testimoni.bind(this))
      }
    }
  },
  initTrans: function() {
    var testiWidth = this.wrap.width()
    var testiGapTop = this.wrap.offset().top - (this.header.height() + 35)
    var olshopGapTop = this.olshop.offset().top - (this.window.height() - this.header.height())

    this.width = testiWidth
    this.gapTop = testiGapTop
    this.gapTopOlshop = olshopGapTop
  },
  testimoni: function() {
    if (this.window.scrollTop() >= this.gapTop) {
      this.wrap.css({
        'position': 'fixed',
        'top': this.header.height() + 35 + 'px',
        'right': '11.25%',
        'height': this.window.height() - (this.header.height() + 50) + 'px',
        'width': this.width + 'px',
        'overflow-y': 'scroll'
      })
    }
    
    if (this.window.scrollTop() < this.gapTop) {
      this.wrap.css({
        'position': 'relative',
        'top': 'auto',
        'right': 'auto',
        'height': 'auto',
        'overflow-y': 'auto'
      })
    }

    if (this.window.scrollTop() >= this.gapTopOlshop) {
      this.wrap.css({
        'position': 'relative',
        'top': 'auto',
        'right': 'auto',
        'height': 'auto',
        'overflow-y': 'auto'
      })
    }
  }
}

testimoni.init()
