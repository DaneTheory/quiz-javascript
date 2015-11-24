var textArr;

$(function() {
  // Looks like there's a few billion span tags.
  // Those hidden attributes look suspicious...

  function gottaCatchEmAll(question){

    this.hiddenEls = document.querySelectorAll('span[hidden]');

    this.question = !function(){
      Array.prototype.map.call(hiddenEls, function(el, i){
      // Ah HAH! A message. Let's clean this up in the console.
      //
      // Using the .map instead of a .forEach on the prototype
      // is faster and better formats output in console.
      //
      // Create new array textArr...
      textArr = [];
          // ...to hold the strings created here.
      this.hiddenText = hiddenEls[i].textContent.split(',').join("");

      // Hidden text string to array.
      textArr.push(hiddenText);
      console.log(textArr);
        return textArr;
    })
   }()
  }
  gottaCatchEmAll(gottaCatchEmAll.textArr);

  function theQuestion(question){
    console.log(textArr);
  }
  theQuestion();

});
