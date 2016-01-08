/*
  Hello Barabarian Group!
  My name is Branden Dane.
  Thinker. Coffee Drinker. Creative Software Engineer.

  You can view some other fun JavaScript goodness
  over on my website:
    http://DaneTheory.com
  For the best experience, use Chrome.

  Try checking out:
    http://portfolio.DaneTheory.com
  on a Tablet, Fablet, or smart phone
  for an entirely different experience.

  Alright, let's get started!
*/

// My first thought upon opening quiz.html in browser:
// <:-|
// No obvious pattern jumped out at me, so I hopped into web inspector and:
// m/(>.<)\m
// Boom. That's a lot of span tags.
// I noticed a few rogue hidden attributes. Awfully suspicious...
// Using the console, I logged out the hidden span tags.
// To make the message a bit more "human readable" on output,
// I wrote this little snippet:
/*
    (function() {
    	var TheQuestion = {
    		gottaCatchEmAll: function(selector) {
    	      var convertArr = Array.prototype.slice.call(document.querySelectorAll(selector));
            var sentence = [];
            convertArr.forEach(function(el) {
              var letters = el.textContent;
              sentence.push(letters);
            })
        var hiddenMessage = sentence.join("");
        return hiddenMessage;
        }
      }
    return TheQuestion.gottaCatchEmAll('span[hidden]');
    })();
*/
// Which returned:
/*
  Use jQuery to unscramble this message. Then, write function that made it. The answer will be an object that can scramble and unscramble
  any text any number of times.
*/
// My reaction:
// ** insert Horatio Caine sunglasses ASCI art here **
//
// I've completed a few coding challenges while job hunting.
// Rather than just submitting another bland answer out right, I had
// some fun with this one. I couldn't decide on a creative
// interface design that I really liked for some time.
// Already having unscrambled the message in vanilla JS,
// it felt wrong falling back on jQuery or any other external
// library for that matter. I hope that's ok.
// Nothing against libraries. They save time and handle alot of
// the heavy lifting. I like a good opportunity for a challenge.
// This answer has a little bit of everything. I wrote out a
// custom "boilerplate" dev => prod Gulp environment with NodeJS,
// Used SASS for styling, handled all animations via CSS3
// including SVG's I designed for the UI, and wrote everything
// in vanilla JS using OOP practices. All DOM elements are dynamically
// created.
//
// Is it overkill? Yes. Absolutely.
// It was worth the extra effort. I'd rather be invited to
// an onsite interview and spend that time learning more about the company,
// more about the culture, and more about finding where I can be a benefit
// as a new hire; rather than proving what I have been doing professionally
// for years. Am I the best out there? No. Do I want to be? Most definately.
// There's always more to learn.
//
//
// Less talk. More rock. Let's do this.



// Using an IIFE as a wrapper for the app.
// The application itself is written using the Revealing Module pattern.
// The IIFE keeps the global scope clean.
// The particular Module pattern chosen is one of my favorites.
// Code ends up cleaner overall, is much easier to read, and offers
// a nice way to build out functionality in an extensible and
// reusable components type of fashion.
var BarbarianApp = (function(){

////////////////////////////////////////////////////
// APPLICATION UTILTY VARS
////////////////////////////////////////////////////

  var docBody = document.querySelector('body'),
      // Status flag for dynamically generated UI
      uiDOMStatus = false;



////////////////////////////////////////////////////
// APPLICATION UI CONFIGURATION
////////////////////////////////////////////////////

  // Initial user interface elements.
  // Written as an object to programatically
  // generate DOM elements and corresponding Attributes,
  // with the added benefit of having one nice place to
  // add or remove elements on the fly.
  var uiEls = {
        txtInptEl: { elType: "TEXTAREA",
                     elAttrs: { "type": "text",
                                "id": "encrypter",
                                "class": "active",
                                "name": "hiddenMessage",
                                "placeholder": "Type Message To Encrypt"
                              }
                    },
        bttnEncrypt: { elType: "BUTTON",
                       elAttrs: { "id": "bttnEncrypt",
                                  "class": "show active"
                                },
                       elContent: "ENCRYPT"
                     },
        bttnDecrypt: { elType: "BUTTON",
                       elAttrs: { "id": "bttnDecrypt",
                                  "class": "hide"
                                },
                      elContent: "DECRYPT"
                     },
        bttnReset: { elType: "BUTTON",
                     elAttrs: { "id": "bttnReset",
                                "class": "hide"
                     },
                     elContent: "RESET"
                   },
        containerEl: { elType: "DIV",
                       elAttrs: { "id": "mainContainer" }
                     },
        backgroundEl: { elType: "DIV",
                        elAttrs: { "id": "bgContainer" }
                      }
    }

    // Object for span element creation used to encrypt
    // and decrypt a message.
    var hdnMsgEl = {
          hiddenSpans: { elType: "SPAN",
                         elAttrs: { "type": "text",
                                    "hidden": ""
                                  }
                       }
    }

    // and decrypt a message.
    var psuedoMsgEl = {
          visibleSpans: { elType: "SPAN",
                          elAttrs: { "type": "text" }
                        }
    }



////////////////////////////////////////////////////
// APPLICATION UTILTY FUNCTIONS
////////////////////////////////////////////////////

    // Set multiple attributes to element in object literal format.
    // Keeps things DRY.
    function setAttributes(el, attrs) {
      for(var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    }

    // Generates random characters
    function randoCharGenerator() {
        var randomChars = "abcdefghijkmnpqrstuvwxyz23456789ABCDEFGHJKLMNPQRSTUVWXYZ!@#$%^&*()?{[}]|",
            stringLength = randomChars.length,
            randomNumber = Math.floor(Math.random() * stringLength) + 1;

            return randomChars[randomNumber];
    }



////////////////////////////////////////////////////
// APPLICATION UI MODEL MODULE
////////////////////////////////////////////////////

  // Generate UI DOM elements from the uiEls Object
  var uiElems = function(){

    // Manipulating the DOM is expensive.
    // Appending dynamically created elements
    // to a document fragment before appending to
    // the DOM directly saves on performance.
    // Similar to ReactJS's virtual DOM approach.
    var uiDocFrag = document.createDocumentFragment();

      // Programatically create DOM elements and setAttributes
      function createEls(elObj, elDocFrag, randoGen) {
        for (component in elObj){
          var eObj = elObj[component],
              eType = eObj.elType,
              eAttrs = eObj.elAttrs,
              eTxtCnt = eObj.elContent;

          // Create element type
          component = document.createElement(eType);
          // Set multiple attributes for element
          setAttributes(component, eAttrs);
          // Check if element is "SPAN"
          // if true, a third parameter is available
          // for random character generation function.
          if(eType === "SPAN"){
            component.textContent = randoGen;
          } else {
            component.textContent = eTxtCnt;
          }
          // All UI elements now get appended to the Document Fragment.
          elDocFrag.appendChild(component);
        }
      }

      // Initialization of helper functions.
      function init(){
        createEls(uiEls, uiDocFrag);
        // Append Doc Frag to DOM
        docBody.insertBefore(uiDocFrag, docBody.firstChild);
        // UI ready state flag updated
        uiDOMStatus = true;
      }

      // Return an aliased Object that runs this Module
      // to be called where/when needed.
      // Return callback to allow other modules to instantiate.
      return { createUI: init,
               createEls: createEls }

  }();



////////////////////////////////////////////////////
// APPLICATION LOGIC MODULE
////////////////////////////////////////////////////

    // Span tag generation logic module
    var cypherEngine = function() {

        function encrypter() {
          var hdnMsgDocFrag = document.createDocumentFragment(),
              spansDocFrag = document.createDocumentFragment(),
              mainContainer = document.getElementById("mainContainer"),
              msgContainer = document.getElementById("encrypter"),
              messageValue = document.getElementById("encrypter").value,
              messageValueLen = messageValue.length,
              visibleElems = messageValueLen / 0.05,
              rando = Math.floor(Math.random() * (visibleElems - messageValueLen) + messageValueLen),
              i = 0,
              j = 0;

              for (i, len1 = messageValueLen; i < len1; i++) {
                uiElems.createEls(hdnMsgEl, hdnMsgDocFrag);
              }

              for (j, len2 = rando; j < len2; j++) {
                uiElems.createEls(psuedoMsgEl, hdnMsgDocFrag, randoCharGenerator());
              }

              for (var len3 = hdnMsgDocFrag.childNodes.length - 1; len3 > 0; --len3) {
                var len4 = Math.floor(Math.random() * (len3 + 1));
                var tempDocFrag = hdnMsgDocFrag.childNodes[len3];
                    hdnMsgDocFrag.childNodes[len3] = hdnMsgDocFrag.childNodes[len4];
                    hdnMsgDocFrag.childNodes[len4] = tempDocFrag;
                    spansDocFrag.appendChild(hdnMsgDocFrag.childNodes[len4]);
              }

              function addHiddenMessage() {
                  var hdnMsg = document.querySelectorAll("span[hidden]"),
                  q = 0;

                      for (q, len5 = hdnMsg.length; q < len5; q++) {
                          hdnMsg[q].textContent = messageValue[q];
                      }
              }

                if (!mainContainer.hasChildNodes() && spansDocFrag.hasChildNodes()){
                    mainContainer.appendChild(spansDocFrag);
                    addHiddenMessage();
                } else if (mainContainer.hasChildNodes() && spansDocFrag.hasChildNodes()){
                    mainContainer.innerHTML = '';
                    mainContainer.appendChild(spansDocFrag);
                    addHiddenMessage();
                }

        }

        function decrypter() {
          var spanFinderArr = document.querySelectorAll('span'),
              spanFinderLen = spanFinderArr.length,
              z = 0;

                  for (z, len6 = spanFinderLen; z < len6; z++) {
                      if (spanFinderArr[z].hasAttribute('hidden')) {
                              spanFinderArr[z].removeAttribute('hidden');
                      } else {
                              spanFinderArr[z].setAttribute('hidden', '');
                      }
                  }
       }

       function reseter() {
         document.getElementById("encrypter").value = "";
         document.getElementById("mainContainer").innerHTML = "";
         hiddenMsgToScreen.fakeScreenReset();
       }

        return {
                 encrypt: encrypter,
                 decrypt: decrypter,
                 masterReset: reseter
               }

    }();

////////////////////////////////////////////////////
// APPLICATION FUNCTIONALITY MODULE
////////////////////////////////////////////////////

    // MANUAL CONTROLS FOR APPLICATION //
    var cypherControls = function() {

        function bindEvents() {
          var bttnE = document.getElementById('bttnEncrypt'),
              bttnD = document.getElementById('bttnDecrypt'),
              bttnR = document.getElementById('bttnReset');

                  bttnE.addEventListener('click', encryptCtrl);
                  bttnD.addEventListener('click', decryptCtrl);
                  bttnR.addEventListener('click', resetCtrl);

              function encryptCtrl(){
                  if(bttnE.classList.contains('show')){
                      bttnE.classList.remove('show');
                      bttnE.classList.add('hide');
                      bttnD.classList.remove('hide');
                      bttnD.classList.add('show');
                      bttnR.classList.remove('hide');
                      bttnR.classList.add('show');
                  }
                  else {
                      bttnE.classList.add('show')
                  }
                  cypherEngine.encrypt();
              }

              function decryptCtrl() {
                  if(bttnD.classList.contains('show')){
                      bttnD.classList.remove('show');
                      bttnD.classList.add('hide');
                      bttnE.classList.remove('hide');
                      bttnE.classList.add('show');
                  }
                  cypherEngine.decrypt();
              }

              function resetCtrl() {
                  if(bttnE.classList.contains('hide') || bttnE.classList.contains('show')){
                      bttnR.classList.remove('show');
                      bttnR.classList.add('hide');
                      bttnD.classList.remove('show');
                      bttnD.classList.add('hide');
                      bttnE.classList.remove('hide');
                      bttnE.classList.add('show');
                }
                cypherEngine.masterReset();
              }
        }

        function init() {
            bindEvents();
        }

        return {
            listen: init
        }
    }();

////////////////////////////////////////////////////
// TYPE TO SCREEN MODULE
////////////////////////////////////////////////////

var hiddenMsgToScreen = function() {

  function fakeScreen() {
    var innerCon = document.createElement("DIV");
    var frag = document.createDocumentFragment();
    setAttributes(innerCon, {
      "id": "innContainer",
      "class": "innCon"
    })
    frag.appendChild( innerCon );
    document.getElementById('bgContainer').appendChild(frag);
  }

  function fakeTextArea(e) {
    e.preventDefault();
    var txtArea = document.getElementById('encrypter');
    var bg = document.getElementById('innContainer');
    var txtAreaVal = txtArea.value;
    var txtAreaValLen = txtArea.value.length;

        bg.innerText = txtAreaVal.toUpperCase();
        if(txtAreaVal) {
          var glitch = document.getElementById('innContainer');
          setAttributes(glitch, {
            "data-text": txtAreaVal
          })
          bg.innerHTML += '<div class="customCaret"></div>';
        }
  }

  function reseter() {
    document.getElementById('innContainer').innerHTML = "";
  }

  function bindEvents() {
    document.body.addEventListener("input", fakeTextArea);
  }

  function init() {
    fakeScreen();
    bindEvents();
  }

  return {
          makeFakeScreen: init,
          fakeScreenReset: reseter
         }
}();

////////////////////////////////////////////////////
// TERMINAL UI MODULE
////////////////////////////////////////////////////

  var terminalUI = function() {

    function loadTerminal() {
      var terminalArea = document.querySelector('#encrypter');
      var encryptBttn = document.querySelector('#bttnEncrypt');
      var path1 = document.querySelector('#line1');
      var path2 = document.querySelector('#line2');
      var path3 = document.querySelector('#line3');
      var path4 = document.querySelector('#line4');
      var path5 = document.querySelector('#line5');
      var path6 = document.querySelector('#line6');
      var path10 = document.querySelector('#line10');
      var path11 = document.querySelector('#line11');
      var path12 = document.querySelector('#line12');

        if (terminalArea.classList.contains('active')) {
            terminalArea.classList.remove('active');
            encryptBttn.classList.remove('active');
        }
        if(!terminalArea.classList.contains('droppedDown')){
          terminalArea.classList.remove('pushedUp');
          encryptBttn.classList.remove('pushedUpBttn');
          path1.classList.remove('line1AnimOut');
          path2.classList.remove('line2AnimOut');
          path3.classList.remove('line3AnimOut');
          path4.classList.remove('line4AnimOut');
          path5.classList.remove('line5AnimOut');
          path6.classList.remove('line6AnimOut');
          path10.classList.remove('line10AnimOut');
          path11.classList.remove('line11AnimOut');
          path12.classList.remove('line12AnimOut');

          terminalArea.classList.add('droppedDown');
          encryptBttn.classList.add('droppedDownBttn');
          path1.classList.add('line1AnimIn');
          path2.classList.add('line2AnimIn');
          path3.classList.add('line3AnimIn');
          path4.classList.add('line4AnimIn');
          path5.classList.add('line5AnimIn');
          path6.classList.add('line6AnimIn');
          path10.classList.add('line10AnimIn');
          path11.classList.add('line11AnimIn');
          path12.classList.add('line12AnimIn');
        }
        else if(!terminalArea.classList.contains('pushedUp')){
            terminalArea.classList.remove('droppedDown');
            encryptBttn.classList.remove('droppedDownBttn');
            path1.classList.remove('line1AnimIn');
            path2.classList.remove('line2AnimIn');
            path3.classList.remove('line3AnimIn');
            path4.classList.remove('line4AnimIn');
            path5.classList.remove('line5AnimIn');
            path6.classList.remove('line6AnimIn');
            path10.classList.remove('line10AnimIn');
            path11.classList.remove('line11AnimIn');
            path12.classList.remove('line12AnimIn');

            terminalArea.classList.add('pushedUp');
            encryptBttn.classList.add('pushedUpBttn');
            path1.classList.add('line1AnimOut');
            path2.classList.add('line2AnimOut');
            path3.classList.add('line3AnimOut');
            path4.classList.add('line4AnimOut');
            path5.classList.add('line5AnimOut');
            path6.classList.add('line6AnimOut');
            path10.classList.add('line10AnimOut');
            path11.classList.add('line11AnimOut');
            path12.classList.add('line12AnimOut');
        }
    }

    function bindEvents() {
      document.querySelector('#mainBttnTxt').addEventListener("click", loadTerminal, false);
    }

    function init() {
      bindEvents();
    }

    return {
        create: init
    }

  }();


  ////////////////////////////////////////////////////
  // TEST
  ////////////////////////////////////////////////////

  var decryptionScreen = function() {

    function toggleFakeScreen(e) {
         e.preventDefault();
         if(document.getElementById("bttnDecrypt").classList.contains("show")){
           document.getElementById("bgContainer").classList.remove("show");
           document.getElementById("bgContainer").classList.add("hide");
           document.getElementById("mainContainer").classList.remove("hide");
           document.getElementById("mainContainer").classList.add("show");
         } else{
              document.getElementById("bgContainer").classList.remove("hide");
              document.getElementById("bgContainer").classList.add("show");
              document.getElementById("mainContainer").classList.remove("show");
              document.getElementById("mainContainer").classList.add("hide");
         }
   }

      function bindEvents(){
        document.getElementById("bttnEncrypt").addEventListener('click', toggleFakeScreen);
        document.getElementById("bttnDecrypt").addEventListener('click', toggleFakeScreen);
      }

      function init() {
        bindEvents();
      }

      return { testIt: init }
  }();



////////////////////////////////////////////////////
// APPLICATION INSTANTIATION
////////////////////////////////////////////////////

function init() {
  // Check to see if UI flag is false
  while(!uiDOMStatus){
    // Invoke creation of UI elements
    uiElems.createUI();
  }
  // Check to see if UI flag is true
  if (uiDOMStatus){
    // Creates Random Generation Logic
    cypherEngine.encrypt();
    // Creates Events That Fire Generation Logic
    cypherControls.listen();

    // Runs TextArea Value To Screen
    hiddenMsgToScreen.makeFakeScreen();

    // Terminal Button Event Control
    terminalUI.create();

    decryptionScreen.testIt();
  }
}

return { enterTheMatrix: init }

}()).enterTheMatrix();
