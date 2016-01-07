// Hello Barabarian Group! My name is Branden Dane.
// Thinker. Coffee Drinker. Creative Software Engineer.
//
//
var BarbarianApp = (function(){

////////////////////////////////////////////////////
// APPLICATION UTILTY FUNCTIONS
////////////////////////////////////////////////////

    // Set Multiple Attributes In Object Literal Format //
    function setAttributes(el, attrs) {
      for(var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    }

    // Generates Random Characters //
    function randoCharGenerator() {
        var randomChars = "abcdefghijkmnpqrstuvwxyz23456789ABCDEFGHJKLMNPQRSTUVWXYZ!@#$%^&*()?{[}]|",
            stringLength = randomChars.length,
            randomNumber = Math.floor(Math.random() * stringLength) + 1;

                return randomChars[randomNumber];
    }

////////////////////////////////////////////////////
// APPLICATION MODEL MODULE
////////////////////////////////////////////////////

    // GENERATE USER INTERFACE //
    var uiElems = function(){

        var docBody = document.querySelector('body'),
            uiDocFrag = document.createDocumentFragment(),
            txtInptEl = document.createElement("TEXTAREA"),
            bttnEncrypt = document.createElement("BUTTON"),
            bttnDecrypt = document.createElement("BUTTON"),
            bttnReset = document.createElement("BUTTON"),
            containerEl = document.createElement("DIV"),
            backgroundEl = document.createElement("DIV");

            setAttributes(txtInptEl, {
                            "type": "text",
                            "id": "encrypter",
                            "class": "active",
                            "name": "hiddenMessage",
                            "placeholder": "Type Message To Encrypt"
            })
            setAttributes(bttnEncrypt, {
                            "id": "bttnEncrypt",
                            "class": "show active"
            })
            setAttributes(bttnDecrypt, {
                            "id": "bttnDecrypt",
                            "class": "hide"
            })
            setAttributes(bttnReset, {
                            "id": "bttnReset",
                            "class": "hide"
            })
            setAttributes(containerEl, {
                            "id": "mainContainer"
            })
            setAttributes(backgroundEl, {
                            "id": "bgContainer"
            })


            bttnEncrypt.textContent = 'ENCRYPT';
            bttnDecrypt.textContent = 'DECRYPT';
            bttnReset.textContent = 'RESET';

            uiDocFrag.appendChild(txtInptEl);
            uiDocFrag.appendChild(bttnEncrypt);
            uiDocFrag.appendChild(bttnDecrypt);
            uiDocFrag.appendChild(bttnReset);
            uiDocFrag.appendChild(containerEl);
            uiDocFrag.appendChild(backgroundEl);

        function init(){
            docBody.insertBefore(uiDocFrag, docBody.firstChild);
        }

        return { create:init }

    }();

////////////////////////////////////////////////////
// APPLICATION LOGIC MODULE
////////////////////////////////////////////////////

    // BUILD SPAN GENERATOR //
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
                var hiddenSpans = document.createElement("SPAN");
                    setAttributes(hiddenSpans, {
                      "type": "text",
                      "hidden": ""
                    })
                    hdnMsgDocFrag.appendChild(hiddenSpans);
              }

              for (j, len2 = rando; j < len2; j++) {
                var visibleSpans = document.createElement("SPAN");
                    setAttributes(visibleSpans, {
                      "type": "text"
                    })
                    visibleSpans.textContent = randoCharGenerator();
                    hdnMsgDocFrag.appendChild(visibleSpans);
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
  // Creates UI Elems //
  uiElems.create();
  // Creates Random Generation Logic //
  cypherEngine.encrypt();
  // Creates Events That Fire Generation Logic //
  cypherControls.listen();
  // Runs TextArea Value To Screen //
  hiddenMsgToScreen.makeFakeScreen();
  // Terminal Button Event Control //
  terminalUI.create();

  decryptionScreen.testIt();

}

return { enterTheMatrix: init }

}()).enterTheMatrix();
