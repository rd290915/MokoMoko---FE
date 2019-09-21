var mobileOlshop = {
  init: function() {
    this.data()
    this.dom()
    this.eventList()
  },
  data: function() {
    this.action = false
  },
  dom: function() {
    this.btn = $('[j-direction="mobile-olshop"]')
    this.place = $('.comp-olshop[j-mobile="olshop"]')
    this.menu = $('.mk-header-menu-wrapper')
  },
  eventList: function() {
    this.btn.on('click', this.mobileOlshop.bind(this))
  },
  mobileOlshop: function() {
    this.action = !this.action

    if (this.action) {
      this.btn.html('<i class="fa fa-times"></i>')
      this.place.slideDown(300)
    } else {
      this.btn.html('<i class="fa fa-shopping-cart"></i>')
      this.place.slideUp(300)
    }
  }
}

mobileOlshop.init()
