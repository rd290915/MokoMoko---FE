var inputFile = {
  init: function() {
    this.dom()
    this.eventList()
  },
  dom: function() {
    this.btn = $('.m-field-file-skin > [type="file"]')
  },
  eventList: function() {
    this.btn.on('change', this.inputFile.bind(this))
  },
  inputFile: function(e) {
    var valueName = e.currentTarget.files[0].name
    var parent = e.currentTarget.parentNode 
    var placeName = parent.querySelectorAll('.m-field-file-skin-descr-title')[0]

    placeName.innerHTML = valueName
  }
}

inputFile.init()
