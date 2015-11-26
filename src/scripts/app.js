(function() {

	var TheQuestion = {

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
