var showMenu = {
  init: function() {
    this.data()
    this.dom()
    this.eventList()
  },
  data: function() {
    this.action = false
  },
  dom: function() {
    this.btn = $('[j-direction="show-menu"]')
    this.place = $('.mk-header-menu-wrapper')
  },
  eventList: function() {
    this.btn.on('click', this.showMenu.bind(this))
  },
  showMenu: function() {
    this.action = !this.action

    if (this.action) {
      this.btn.html('<i class="fa fa-times"></i>')
      this.place.slideDown(300)
    } else {
      this.btn.html('<i class="fa fa-navicon"></i>')
      this.place.slideUp(300)
    }
  }
}

showMenu.init()
