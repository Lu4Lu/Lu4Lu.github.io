'use strict';
(function () {
  //
  // var MOCK_WORDS = [
  //   'Иван',
  //   'Хуан Себастьян',
  //   'Мария',
  //   'Кристоф',
  //   'Виктор',
  //   'Юлия',
  //   'Люпита',
  //   'Вашингтон'
  // ];

  var MOCK_BACKGROUNDS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var Keycode = {
    ESC: 27,
    SPACE: 32,
    ENTER: 13
  };

  // var backgroundElement = document.querySelector('.word');

  // random from range
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // random array index
  function getRandomIndex(arr) {
    return getRandomInt(0, arr.length - 1);
  }

  function getRandomItem(arr) {
    // search for the index
    var index = getRandomIndex(arr);
    var item = arr[index];
    // remove this item from array
    return item;
  }

  function setNewWord() {
    // backgroundElement.style.backgroundColor = getRandomItem(MOCK_BACKGROUNDS);
    document.body.style.background = getRandomItem(MOCK_BACKGROUNDS);
  }

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === Keycode.SPACE) {
      setNewWord();
    }
  });

  document.addEventListener('mouseclick', setNewWord);
})();
