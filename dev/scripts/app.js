// var cypherKey = {
//       key: 'span[hidden]'
// };
//
// var TheQuestion = (function() {
//   var selector = cypherKey.key;
//   var sentence = [];
//   var message;
//   var convertArr;
//   // var parser = new DOMParser();
//
//   return {
//       buildMatrix: function() {
//
//         var eQuote = document.querySelector("#neat");
//
//         // var regex = /\ /;
//         // save the original paragraph as array of words
//         // regex = /[,.?!;:]/; /* Uncomment for sentences */
//         // var aQuote = eQuote.innerHTML.split(regex);
//
//         // wrap each word with a span
//         // eQuote.innerHTML = "";
//         // for (var word in aQuote) {
//         //   eQuote.innerHTML += "<span>" + aQuote[word] + "</span>";
//         // }
//         // ...and save them for later
//         var eWords = document.querySelectorAll("span");
//
//         var repeat = setInterval(function() {
//           if (Math.random() > 0.99) fClearAllHighlights(eQuote);
//           fHighlightRandomWord(eWords);
//         }, 10);
//
//         function fHighlightRandomWord(e) {
//           var iRandom = Math.floor(Math.random() * e.length);
//           e[iRandom].classList.add("highlight");
//         }
//
//         function fClearAllHighlights(e) {
//           var nlHighlights = e.querySelectorAll(".highlight");
//           // convert the nodeList into an array
//           var aHighlights = Array.prototype.slice.call(nlHighlights);
//           // remove .highlight from the spans which have it
//           Array.prototype.map.call(aHighlights, function() {
//             arguments[0].classList.remove("highlight");
//           });
//         }
//
//
//       },
//
//   		gottaCatchEmAll: function() {
//           this.buildMatrix();
//           convertArr = Array.prototype.slice.call(document.querySelectorAll(selector));
//           convertArr.forEach(function(el) {
//              var letters = el.textContent;
//             sentence.push(letters);
//           })
//           message = sentence.join("");
//           console.log('HIDDEN MESSAGE: ' + message);
//   		},
//
//       buildInterface: function() {
//
//
//
//
//         // var hiddenMessageEl = '<div id="inputDecipher">';
//         //     hiddenMessageEl += '<input type="text" ';
//         //     hiddenMessageEl += 'value="';
//         //     hiddenMessageEl += message;
//         //     hiddenMessageEl +='"/>';
//         //     hiddenMessageEl += '<div class="border-line"></div>';
//         //     hiddenMessageEl += '</div>';
//
//         // var parsedEl = parser.parseFromString(hiddenMessageEl, "text/xml");
//         // var newDOMEl = parsedEl.firstChild;
//         // document.body.insertBefore(newDOMEl, document.body.firstChild);
//       },
//
//       init: function() {
//         this.gottaCatchEmAll();
//         // this.buildInterface();
//       }
//   };
//
// }(cypherKey));
//
// TheQuestion.init();

// function InputObj(inputElem){
//     this.inputElem = inputElem;
//     // this.inputFragment = inputFragment;
// }
//
// InputObj.prototype.decipherInput = function(inputElem){
//         // inputFragment = document.createDocumentFragment();
//           inputElem = document.createElement('INPUT');
//           inputElem.setAttribute("type", "text");
//           inputElem.setAttribute("name", "hiddenMessage");
//           inputElem.setAttribute("placeholder", "Add A Message To Encrypt...");
//           inputElem.setAttribute("autofocus", "autofocus");
//           inputElem.setAttribute("required", "required");
//           inputElem.setAttribute("value", "");
//
//             return {inputElem}
// }
//
// InputObj.prototype.encryptBttn = function(inputElem){
//         // inputFragment = document.createDocumentFragment();
//           inputElem = document.createElement('INPUT');
//           inputElem.setAttribute("type", "button");
//           inputElem.setAttribute("name", "encryptBttn");
//           inputElem.setAttribute("value", "ENCRYPT");
//
//             return {inputElem}
// }
//
// InputObj.prototype.decipherBttn = function(inputElem){
//         // inputFragment = document.createDocumentFragment();
//         inputElem = document.createElement('INPUT');
//           inputElem.setAttribute("type", "button");
//           inputElem.setAttribute("name", "decipherBttn");
//           inputElem.setAttribute("value", "DECIPHER");
//
//             return {inputElem}
// }
//
// var decipherInput = new InputObj(),
//     encryptBttn = new InputObj(),
//     decipherBttn = new InputObj();
//
// var dInptAlias = decipherInput.decipherInput(),
//     eBttnAlias = encryptBttn.encryptBttn(),
//     dBttnAlias = decipherBttn.decipherBttn();
//
//     console.log(dInptAlias);

// console.log(docBody);
// console.log(decipherInput.decipherInput());
// console.log(encryptBttn.encryptBttn());
// console.log(decipherBttn.decipherBttn());

// var buildInterfaceTest = (function(){
//   var docBody = document.querySelector('body');
//   var docFrag = document.createDocumentFragment();
//   var elems = [
//       document.createElement("hr"),
//       text( document.createElement("b"), "Links:" ),
//       document.createTextNode(" "),
//       text( document.createElement("a"), "Link A" ),
//       document.createTextNode(" | "),
//       text( document.createElement("a"), "Link B" ),
//       document.createTextNode(" | "),
//       text( document.createElement("a"), "Link C" )
//   ];
//
//   function init(){
//     text();
//     console.log('init FUNCTION RUN');
//   }
//
//   function text(node, txt){
//       node.appendChild(document.createTextNode(txt) );
//       return node;
//   }
//
//     for (var e = 0; e < elems.length; e++){
//       docFrag.appendChild( elems[e] );
//     }
//
//     for (var i = 0; i < docBody.length; i++){
//        docBody[i].appendChild(docFrag.cloneNode(true));
//     }
//
//     return { init2:init }
//
// }()).init2();

// UTILITY FUNCTIONS
//
// Set Multiple Attributes
// In Object Literal Format
var frag = document.createDocumentFragment();

function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function shuffle(elems) {
    allElems = (function(){
  var ret = [], l = elems.length;
  while (l--) { ret[ret.length] = elems[l]; }
  return ret;
    })();

    var shuffled = (function(){
        var l = allElems.length, ret = [];
        while (l--) {
            var random = Math.floor(Math.random() * allElems.length),
                randEl = allElems[random].cloneNode(true);
            allElems.splice(random, 1);
            ret[ret.length] = randEl;
        }
        return ret;
    })(), l = elems.length;

    while (l--) {
        elems[l].parentNode.insertBefore(shuffled[l], elems[l].nextSibling);
        elems[l].parentNode.removeChild(elems[l]);
    }
}

function generateSpans(){

  var mainContainer = document.getElementById("mainContainer");

  var hiddenMessageVal = document.getElementById("encrypter").value;
    console.log('VALUE FROM INPUT FIELD: ' + hiddenMessageVal);

  var hiddenMessageLength = hiddenMessageVal.length;
    console.log('LENGTH FROM INPUT FIELD: ' + hiddenMessageLength);

  var allSpans = (hiddenMessageLength / 0.05 - hiddenMessageLength);
    console.log('EXTRA SPANS ' + allSpans);

    for (var j = 0, len2 = hiddenMessageLength; j < len2; j++) {
      var hiddenSpans = document.createElement("SPAN");
      setAttributes(hiddenSpans, {
          "type": "text",
          "hidden": ""
      })
      hiddenSpans.textContent = hiddenMessageVal[j];
      frag.appendChild(hiddenSpans);
    }

    for (var i = 0, len = allSpans; i < len; i++) {
        var spans = document.createElement("SPAN");
        setAttributes(spans, {
            "type": "text"
        })
        frag.appendChild(spans);
        //console.log(spans);
    }

    mainContainer.appendChild( frag.cloneNode(true) );
    // console.log(mainContainer);

    if (frag.hasChildNodes()) {
        var i=0;
        var myEl;
        var children = frag.childNodes;
        for (var r = 0; r < children.length; r++) {
            if (children[r].hasAttribute("hidden")) {
                myEl = children[r];

                shuffle( document.getElementsByTagName('span') );
            }
        }
    }

  }
    // console.log(myEl.innerHTML);

    // if (d.hasAttribute("align")) {
    //   d.setAttribute("align", "center");
    // }
    // mainContainer.appendChild(frag);



    // if(hiddenMessageLength !== 0){
    //   frag.appendChild(mainContainer);
    //   var messageGroup = document.getElementsByTagName("span");
    //
    //     function Shuffle(o) {
    //       for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    //       return o;
    //     }
    //     Shuffle(messageGroup);
    //
    //
    //     for (var e = 0, len2 = messageGroup.length; e < len2; e++) {
    //       frag.appendChild(messageGroup[e]);
    //     }
    //     console.log(messageGroup);
    //     mainContainer.appendChild(frag);
    // }

    // for (var j = 0, len2 = extraSpans; j < len; j++) {
    //     var spans = document.createElement("SPAN");
    //     setAttributes(spans, {
    //         "type": "text"
    //     });
    //     frag.appendChild(spans);
    // }

    // var messageGroup = document.querySelectorAll("span");
    //
    //     var repeat = setInterval(function() {
    //       if(hiddenMessageLength !== 0){
    //           mainContainer.appendChild(frag);
    //       }
    //       if (Math.random() > 0.99) {
    //         fClearAllHighlights(mainContainer);
    //         fHighlightRandomWord(messageGroup);
    //       }
    //     }, 10);
    //
    //
    //     function fHighlightRandomWord(messageGroup) {
    //       var iRandom = Math.floor(Math.random() * messageGroup.length);
    //         // messageGroup[iRandom].classList.add("highlight");
    //     }
    //
    //           function fClearAllHighlights(messageGroup) {
    //             var nlHighlights = messageGroup.querySelectorAll(".highlight");
    //             // convert the nodeList into an array
    //             var aHighlights = Array.prototype.slice.call(nlHighlights);
    //             // remove .highlight from the spans which have it
    //             // Array.prototype.map.call(aHighlights, function() {
    //             //   arguments[0].classList.remove("highlight");
    //             // });
    //           }




var enterTheMatrix = (function(){

  function init(){
    console.log('  init START 1');
    generateInterface();
    generateSpans();

      console.log('  init DONE 1');
  }

  function generateInterface(){
    console.log('   generateInterface START 2');
        txtInputInterface();
        bttnInputInterface();
        containerInterface();
        document.body.insertBefore(frag, document.body.firstChild);

          console.log('   generateInterface DONE 2');
  }

  function txtInputInterface(){
    console.log('    txtInputInterface START 3');
      var txtInptEl = document.createElement("INPUT");
        setAttributes(txtInptEl, {
            "type": "text",
            "id": "encrypter",
            "name": "hiddenMessage",
            "placeholder": "Add Message To Encrypt",
            "autofocus": "autofocus",
            "required": "required",
            "value": ""
        });
        frag.appendChild(txtInptEl);

          console.log('    txtInputInterface DONE 3');
  }

  function bttnInputInterface(){
    console.log('     bttnInputInterface START 4');
      var bttnInptEl = document.createElement("BUTTON");
          setAttributes(bttnInptEl, {
              "onclick": "generateSpans()"
          });
          bttnInptEl.textContent = 'ENCRYPT';
          frag.appendChild(bttnInptEl);

            console.log('     bttnInputInterface DONE 4');
  }

  function containerInterface(){
    console.log('      containerInterface START 5');
      var containerEl = document.createElement("DIV");
          setAttributes(containerEl, {
              "id": "mainContainer"
          });
          frag.appendChild(containerEl);

            console.log('      containerInterface DONE 5');
  }


      return { interface:init }

}()).interface(console.log('INTERFACE SCRIPT LAUNCH!!!!!!!!!!!!!!!!!!!!!!'));

