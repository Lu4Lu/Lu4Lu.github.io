'use strict';
(function mockData() {

  var MOCK_NAUHATL_WORDS = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var MOCK_TRANSCRIPTIONS = [
    'user01.png',
    'user02.png',
    'user03.png',
    'user04.png',
    'user05.png',
    'user06.png',
    'user07.png',
    'user08.png'
  ];

  var MOCK_TRANSLATIONS = [
    'Большая',
    'Маленькая',
    'Огромный',
    'Маленький',
    'Красивый',
    'Некрасивый',
    'Уютное',
    'Неуютное'
  ];

  var MOCK_BACKGROUNDS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(13, 210, 55)',
    'rgb(13, 45, 55)',
    'rgb(200, 47, 161)'
  ];

  // random from range
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // // random array index
  // function getRandomIndex(arr) {
  //   return getRandomInt(0, arr.length - 1);
  // }

  // function getRandomItem(arr) {
  //   // search for the index
  //   var index = getRandomIndex(arr);
  //   var item = arr[index];
  //   // remove this item from array
  //   return item;
  // }

  window.wordEntries = [];

  for (var i = 0; i < 8; i++) {
    var index = i;
    var wordEntry = {
      nauhatlWord: MOCK_NAUHATL_WORDS[index],
      transcription: MOCK_TRANSCRIPTIONS[index],
      translation: MOCK_TRANSLATIONS[index],
      background: MOCK_BACKGROUNDS[index]
    };
    window.wordEntries.push(wordEntry);
    console.log(wordEntry);
  }

  window.getRandomInt = getRandomInt;
})();
