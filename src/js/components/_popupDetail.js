var popupDetail = {
  init: function() {
    this.dom()
    this.eventList()
  },
  dom: function() {
    this.btnpopupDetail = $('[j-direction="popup-detail-show"]')
    this.btnClose = $('[j-direction="popup-detail-hide"]')
  },
  eventList: function() {
    this.btnpopupDetail.on('click', this.popupDetail.bind(this))
    this.btnClose.on('click', this.closepopupDetail.bind(this))
  },
  popupDetail: function(e) {
    var target = e.currentTarget.getAttribute('j-popup-detail-target')
    var place = $('[j-popup-detail-place="' + target + '"]')

    place.addClass('in')
    setTimeout(function() {
      place.removeClass('in').addClass('active')
    }, 50)
  },
  closepopupDetail: function(e) {
    var target = e.currentTarget.getAttribute('j-popup-detail-hide-target')
    var place = $('[j-popup-detail-place="' + target + '"]')


    place.removeClass('active').addClass('in')
    setTimeout(function() {
      place.removeClass('in')
    }, 350)
  }
}

popupDetail.init()
