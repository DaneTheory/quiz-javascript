(function() {

	var TheQuestion = {

    // Converts NodeList to native Array.prototype method friendly Array.
		gottaCatchEmAll: function(selector) {
	      var convertArr = Array.prototype.slice.call(document.querySelectorAll(selector));
        return convertArr;
		},

    // Maps through length of converted array, gets inner letters from HTML,
    // then pushs these letters into thier own array.
		theLetters: function() {
        this.gottaCatchEmAll().map(function(els, i){
          var len = els.length;
          var txtArr = [];
          var letters = els.textContent.split('').join("").substr(0, 1);
          txtArr.push(letters);
            return txtArr;
        })
		},

    // Combines all arrays into one single array, then converts that
    // to a single, easily readable string.
    theSentence: function() {
        this.theLetters();
    }
  }
	TheQuestion.gottaCatchEmAll('span[hidden]');
  
})();
