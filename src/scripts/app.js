var cypherKey = {
      // Object that holds:
      // 1.) Message to scramble/unscramble
      // 2.) Times to scramble/unscramble
      key: 'span[hidden]',
      publicAccess: function() {
        return this.key;
      }
}

var TheQuestion = (function() {
  this.hiddenMessage = cypherKey.key;
  var selector = this.hiddenMessage;

  return {
  		gottaCatchEmAll: function() {
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
          console.log(hiddenMessage);
  		}
  };

}(cypherKey));

TheQuestion.gottaCatchEmAll();
