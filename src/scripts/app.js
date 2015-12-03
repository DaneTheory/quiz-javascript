var BarbarianApp = (function(){

  ////////////////////////////////////////////////////
  // LOCAL APPLICATION VARIABLES
  ////////////////////////////////////////////////////

    var uiDocFrag = document.createDocumentFragment();
    var msgDocFrag = document.createDocumentFragment();
    var message = '';
    var containerLength = 0;



  ////////////////////////////////////////////////////
  // LOCAL APPLICATION UTILTY FUNCTIONS
  ////////////////////////////////////////////////////

    // Set Multiple Attributes In Object Literal Format //
    function setAttributes(el, attrs) {
      for(var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    }

    // Generates Random Characters //
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



  ////////////////////////////////////////////////////
  // APPLICATION MODEL MODULE
  ////////////////////////////////////////////////////

    // GENERATE USER INTERFACE //
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



  ////////////////////////////////////////////////////
  // APPLICATION LOGIC MODULE
  ////////////////////////////////////////////////////

    // BUILD SPAN GENERATOR //
    var buildGenerator = (function() {

        function init() {
            bindEvents();
            elemsGenerator();
        }

        function elemsGenerator(){

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

                    if (!mainContainer.hasChildNodes() && !containerFrag.hasChildNodes()) {
                        document.getElementById("bttnEncrypt").style.display = "";
                        document.getElementById("bttnDecrypt").style.display = "none";
                        document.getElementById("bttnReset").style.display = "none";

                    } else if (!mainContainer.hasChildNodes() && containerFrag.hasChildNodes()){
                        mainContainer.appendChild(containerFrag);
                        addHiddenMessage();
                        document.getElementById("bttnEncrypt").style.display = "";
                        document.getElementById("bttnDecrypt").style.display = "";
                        document.getElementById("bttnReset").style.display = "";
                    } else if (mainContainer.hasChildNodes() && containerFrag.hasChildNodes()){
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

}());
