var cypherKey = {
      key: 'span[hidden]'
};

var TheQuestion = (function() {
  var selector = cypherKey.key;
  var sentence = [];
  var message;
  var convertArr;
  // var parser = new DOMParser();

  return {
      buildMatrix: function() {

        var eQuote = document.querySelector("#neat");

        // var regex = /\ /;
        // save the original paragraph as array of words
        // regex = /[,.?!;:]/; /* Uncomment for sentences */
        // var aQuote = eQuote.innerHTML.split(regex);

        // wrap each word with a span
        // eQuote.innerHTML = "";
        // for (var word in aQuote) {
        //   eQuote.innerHTML += "<span>" + aQuote[word] + "</span>";
        // }
        // ...and save them for later
        var eWords = document.querySelectorAll("span");

        var repeat = setInterval(function() {
          if (Math.random() > 0.99) fClearAllHighlights(eQuote);
          fHighlightRandomWord(eWords);
        }, 10);

        function fHighlightRandomWord(e) {
          var iRandom = Math.floor(Math.random() * e.length);
          e[iRandom].classList.add("highlight");
        }

        function fClearAllHighlights(e) {
          var nlHighlights = e.querySelectorAll(".highlight");
          // convert the nodeList into an array
          var aHighlights = Array.prototype.slice.call(nlHighlights);
          // remove .highlight from the spans which have it
          Array.prototype.map.call(aHighlights, function() {
            arguments[0].classList.remove("highlight");
          });
        }


      },

  		gottaCatchEmAll: function() {
          this.buildMatrix();
          convertArr = Array.prototype.slice.call(document.querySelectorAll(selector));
          convertArr.forEach(function(el) {
             var letters = el.textContent;
            sentence.push(letters);
          })
          message = sentence.join("");
          console.log('HIDDEN MESSAGE: ' + message);
  		},

      buildInterface: function() {




        // var hiddenMessageEl = '<div id="inputDecipher">';
        //     hiddenMessageEl += '<input type="text" ';
        //     hiddenMessageEl += 'value="';
        //     hiddenMessageEl += message;
        //     hiddenMessageEl +='"/>';
        //     hiddenMessageEl += '<div class="border-line"></div>';
        //     hiddenMessageEl += '</div>';

        // var parsedEl = parser.parseFromString(hiddenMessageEl, "text/xml");
        // var newDOMEl = parsedEl.firstChild;
        // document.body.insertBefore(newDOMEl, document.body.firstChild);
      },

      init: function() {
        this.gottaCatchEmAll();
        // this.buildInterface();
      }
  };

}(cypherKey));

TheQuestion.init();
