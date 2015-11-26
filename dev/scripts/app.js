(function() {

	var TheQuestion = {

<<<<<<< HEAD
		gottaCatchEmAll: function(selector) {
        // var nodes = document.querySelectorAll(selector);
        // console.log(({}).toString.call(nodes).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
        // RETURNS nodelist
	      var convertArr = Array.prototype.slice.call(document.querySelectorAll(selector));
        // console.log(({}).toString.call(convertArr).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
        // RETURNS array
        //
        var sentence = [];
        convertArr.forEach(function(el) {
          var letters = el.textContent;
          sentence.push(letters);
        })
        var hiddenMessage = sentence.join("");
        // console.log(({}).toString.call(hiddenMessage).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
        // RETURNS string
        //
        return hiddenMessage;
		}
  }
	TheQuestion.gottaCatchEmAll('span[hidden]');
  console.log(TheQuestion.gottaCatchEmAll('span[hidden]'));
})();
=======
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

>>>>>>> master
