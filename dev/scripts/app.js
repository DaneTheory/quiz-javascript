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



// function generateSpans(){
//
//   var i = 0, j = 0, e = 0;
//   var mainContainer = document.getElementById("mainContainer");
//   var hiddenMessageVal = document.getElementById("encrypter").value;
//   var hiddenMessageLength = hiddenMessageVal.length;
//   var allSpans = (hiddenMessageLength / 0.05 - hiddenMessageLength);
//   var containerLength = mainContainer.childNodes.length;
//
//         for (i, len = allSpans; i < len; i++) {
//             var randomSpans = document.createElement("SPAN");
//             setAttributes(randomSpans, {
//                 "type": "text"
//             })
//             // randomSpans.textContent = 'Q';
//             frag.appendChild(randomSpans);
//             // console.log(frag);
//         }
//
//         for (j, len2 = hiddenMessageLength; j < len2; j++) {
//             var hiddenSpans = document.createElement("SPAN");
//                 setAttributes(hiddenSpans, {
//                     "type": "text",
//                     "hidden": ""
//                 })
//              // hiddenSpans.textContent = hiddenMessageVal[j];
//                 frag.appendChild(hiddenSpans);
//                 // console.log(frag);
//         }
//
//         for (e, len3 = containerLength; e < len3; e++){
//             var random = Math.floor((Math.random() * --containerLength));
//             frag.appendChild(mainContainer.childNodes[random]);
//         }
//
//               mainContainer.appendChild( frag );
// }
    // console.log(mainContainer);
  //
  //   if (frag.hasChildNodes()) {
  //       var i=0;
  //       var myEl;
  //       var children = frag.childNodes;
  //       for (var r = 0; r < children.length; r++) {
  //           if (children[r].hasAttribute("hidden")) {
  //               myEl = children[r];
  //
  //               shuffle( document.getElementsByTagName('span') );
  //           }
  //       }
  //   }
  //
  // }
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


// GLOBAL VARS
var uiDocFrag = document.createDocumentFragment();
var msgDocFrag = document.createDocumentFragment();
var message = '';
var containerLength = 0;

// UTILITY FUNCTIONS
//
// Set Multiple Attributes
// In Object Literal Format
function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function randoCharGenerator() {
var randomChars = "abcdefghijkmnpqrstuvwxyz23456789ABCDEFGHJKLMNPQRSTUVWXYZ!@#$%^&*()?{[}]|";
var minChars = 1;
var maxChars = 1;
  randomChars = randomChars.replace(/\s/g,"");
  minChars = parseInt(minChars);
  maxChars = parseInt(maxChars);
    if( maxChars < minChars ) { maxChars = minChars; }
var charsLen = randomChars.length;
var strLen = 0;
    if( maxChars == minChars ) { strLen = minChars; }
      else { strLen = Math.floor(Math.random()*(maxChars-minChars+1)) + minChars; }
var randoStr = new String();
  while( randoStr.length < strLen ) { randoStr += randomChars.charAt(Math.floor(Math.random()*charsLen)); }
    return randoStr;
}


var buildUserInterface = (function(){
  var docBody = document.querySelector('body');

  function init(){
    generateInterface();
  }

  function generateInterface(){
        txtInputInterface();
        bttnInputInterface();
        containerInterface();
        docBody.insertBefore(uiDocFrag, docBody.firstChild);
  }

  function txtInputInterface(){
      var txtInptEl = document.createElement("TEXTAREA");
        setAttributes(txtInptEl, {
            "type": "text",
            "id": "encrypter",
            "name": "hiddenMessage",
            "placeholder": "Add Message To Encrypt"
        });
          uiDocFrag.appendChild(txtInptEl);

  }

  function bttnInputInterface(){
      var bttnEncrypt = document.createElement("BUTTON");
          setAttributes(bttnEncrypt, {
              "id": "bttnEncrypt"
          });
          bttnEncrypt.textContent = 'ENCRYPT';
          uiDocFrag.appendChild(bttnEncrypt);

      var bttnDecrypt = document.createElement("BUTTON");
              setAttributes(bttnDecrypt, {
                  "id": "bttnDecrypt"
              });
              bttnDecrypt.textContent = 'DECRYPT';
              uiDocFrag.appendChild(bttnDecrypt);

      var bttnReset = document.createElement("BUTTON");
              setAttributes(bttnReset, {
                  "id": "bttnReset"
              });
              bttnReset.textContent = 'RESET';
              uiDocFrag.appendChild(bttnReset);
  }

  function containerInterface(){
      var containerEl = document.createElement("DIV");
          setAttributes(containerEl, {
              "id": "mainContainer"
          });
          uiDocFrag.appendChild(containerEl);
  }

      return { interface:init }

}());


var buildGenerator = (function() {

  function init() {
    bindEvents();
    elemsGenerator();
  }


  function elemsGenerator(randoChar){
    var mainContainer = document.getElementById("mainContainer");
    var i = 0, j = 0, e = 0;
    var hiddenMsg = document.getElementById('encrypter').value;
    var hiddenMsgLen = hiddenMsg.length;
    var visibleElems = hiddenMsgLen / 0.05;
    var docFragLength = msgDocFrag.childNodes.length;
    var rando = Math.floor(Math.random() * (visibleElems - hiddenMsgLen) + hiddenMsgLen);
    var containerFrag = document.createDocumentFragment();



          for (i, len = hiddenMsgLen; i < len; i++) {
              var hSpans = document.createElement("SPAN");
                  setAttributes(hSpans, {
                      "type": "text",
                      "hidden": ""
                  })
                  // hSpans.textContent = hiddenMsg[i];
                  msgDocFrag.appendChild(hSpans);
          }

          for (j, len2 = rando; j < len2; j++) {
              var vSpans = document.createElement("SPAN");
              setAttributes(vSpans, {
                  "type": "text"
              })
              vSpans.textContent = randoCharGenerator();
              msgDocFrag.appendChild(vSpans);
          }

          for (var l = msgDocFrag.childNodes.length - 1; l > 0; l--) {
              var k = Math.floor(Math.random() * (l + 1));
              var temp = msgDocFrag.childNodes[l];
              msgDocFrag.childNodes[l] = msgDocFrag.childNodes[k];
              msgDocFrag.childNodes[k] = temp;
              containerFrag.appendChild(msgDocFrag.childNodes[k]);
          }


          if ( !mainContainer.hasChildNodes() && !containerFrag.hasChildNodes() ) {
              document.getElementById("bttnEncrypt").style.display = "";
              document.getElementById("bttnDecrypt").style.display = "none";
              document.getElementById("bttnReset").style.display = "none";

          } else if ( !mainContainer.hasChildNodes() && containerFrag.hasChildNodes() ){
              mainContainer.appendChild(containerFrag);
              addHiddenMessage();
              document.getElementById("bttnEncrypt").style.display = "";
              document.getElementById("bttnDecrypt").style.display = "";
              document.getElementById("bttnReset").style.display = "";
          } else if ( mainContainer.hasChildNodes() && containerFrag.hasChildNodes() ){
              mainContainer.innerHTML = '';
              mainContainer.appendChild(containerFrag);
              addHiddenMessage()
          }

          function addHiddenMessage() {
            var hdnMsg = document.querySelectorAll("span[hidden]"),
            q = 0;
              for (q, len4 = hdnMsg.length; q < len4; q++) {
                  hdnMsg[q].textContent = hiddenMsg[q];
              }
          }
      }

      function decrypt() {
            var spanFinder = document.getElementsByTagName('span'),
            i = 0;

        for (i = 0; i < spanFinder.length; i++) {
            if (spanFinder[i].hasAttribute('hidden')) {
                spanFinder[i].removeAttribute('hidden');
            } else {
              spanFinder[i].setAttribute('hidden', '');
            }
        }
      }

    function reset() {
      document.getElementById("bttnEncrypt").style.display = "";
      document.getElementById("bttnDecrypt").style.display = "none";
      document.getElementById("bttnReset").style.display = "none";
      document.getElementById("encrypter").value = "";
      elemsGenerator();
      mainContainer.innerHTML = '';
    }

    function bindEvents(e) {
      var bttnE = document.getElementById('bttnEncrypt');
      var bttnD = document.getElementById('bttnDecrypt');
      var bttnR = document.getElementById('bttnReset');

        bttnE.addEventListener('click', elemsGenerator, false);
        bttnD.addEventListener('click', decrypt, false);
        bttnR.addEventListener('click', reset, false);
    }

        return { generate:init }

}());

buildUserInterface.interface();
buildGenerator.generate();

