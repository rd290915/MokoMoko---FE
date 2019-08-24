var shoppingCart = {
  init: function() {
    this.data()
    this.dom()
    this.eventList()
  },
  data: function() {
    this.action = false
  },
  dom: function() {
    this.btn = $('[j-direction="show-shopping"]')
    this.place = $('.m-home-header-shopping-icons')
  },
  eventList: function() {
    this.btn.on('click', this.shoppingCart.bind(this))
  },
  shoppingCart: function() {
    this.action = !this.action

    if (this.action) {
      this.place.slideDown(300)
    } else {
      this.place.slideUp(300)
    }
  }
}

shoppingCart.init()
