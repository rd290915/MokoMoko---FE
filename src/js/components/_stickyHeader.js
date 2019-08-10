var stickyHeader = {
  init: function() {
    this.dom()
    this.eventList()
  },
  dom: function() {
    this.window = $(window)
    this.header = $('#header')
    this.headerInner = this.header.find('.mk-header-inner')
  },
  eventList: function() {
    this.stickyHeader()
    this.window.on('scroll', this.stickyHeader.bind(this))
  },
  stickyHeader: function() {
    if (this.window.scrollTop() > 50) {
      this.headerInner.addClass('bg-white')
    } else {
      this.headerInner.removeClass('bg-white')
    }
  }
}
stickyHeader.init()
