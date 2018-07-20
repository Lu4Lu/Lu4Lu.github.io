'use strict';
(function () {

  // var MOCK_BACKGROUNDS = [
  //   'rgb(101, 137, 164)',
  //   'rgb(241, 43, 107)',
  //   'rgb(146, 100, 161)',
  //   'rgb(56, 159, 117)',
  //   'rgb(215, 210, 55)',
  //   'rgb(0, 0, 0)'
  // ];

  var Keycode = {
    ESC: 27,
    SPACE: 32,
    ENTER: 13
  };

  var nauhatlWordElement = document.querySelector('.nauhatl_word');
  var transcriptionElement = document.querySelector('.transcription');
  var translationElement = document.querySelector('.translation');


  function setNewWord() {
    var index = window.getRandomInt(0, 7);
    // backgroundElement.style.backgroundColor = getRandomItem(MOCK_BACKGROUNDS);
    document.body.style.backgroundColor = window.wordEntries[index].background;
    nauhatlWordElement.textContent = window.wordEntries[index].nauhatlWord;
    transcriptionElement.textContent = window.wordEntries[index].transcription;
    translationElement.textContent = window.wordEntries[index].translation;
  }

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === Keycode.SPACE) {
      setNewWord();
    }
  });

  document.addEventListener('mouseclick', setNewWord);
})();
