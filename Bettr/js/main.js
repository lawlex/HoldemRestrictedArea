$(document).ready(function() {
    /* this script works */
    /* you can type your code here */
    function getTypeTitle(index) {
        var types = [
            'Мусорные карты',
            'Одномастные коннекторы',
            'Старшие коннекторы',
            'Старшие одномастные карты',
            'Слабые карманные пары',
            'Сильные карманные пары',
            'Слабые бродвейные руки',
            'Сильные бродвейные руки',
            'Премиум-руки'
        ];
        return types[index];
    }
    var types = [
        'Мусорные карты',
        'Одномастные коннекторы',
        'Старшие коннекторы',
        'Старшие одномастные карты',
        'Слабые карманные пары',
        'Сильные карманные пары',
        'Слабые бродвейные руки',
        'Сильные бродвейные руки',
        'Премиум-руки'
    ];
    var hands = {
        "AA": 8,
        "AKo": 8,
        "AKs": 8,
        "KK": 8,
        "QQ": 8,
        "AJo": 7,
        "AJs": 7,
        "AQo": 7,
        "AQs": 7,
        "KQo": 7,
        "KQs": 7,
        "ATo": 6,
        "ATs": 6,
        "KJo": 6,
        "KJs": 6,
        "QJo": 6,
        "QJs": 6,
        "88": 5,
        "99": 5,
        "JJ": 5,
        "TT": 5,
        "22": 4,
        "33": 4,
        "44": 4,
        "55": 4,
        "66": 4,
        "77": 4,
        "A2s": 3,
        "A3s": 3,
        "A4s": 3,
        "A5s": 3,
        "A6s": 3,
        "A7s": 3,
        "A8s": 3,
        "A9s": 3,
        "J8s": 3,
        "J9s": 3,
        "K8s": 3,
        "K9s": 3,
        "Q8s": 3,
        "Q9s": 3,
        "JTo": 2,
        "JTs": 2,
        "KTo": 2,
        "KTs": 2,
        "QTo": 2,
        "QTs": 2,
        "65s": 1,
        "75s": 1,
        "76s": 1,
        "87s": 1,
        "98s": 1,
        "T8s": 1,
        "T9s": 1,
        "32o": 0,
        "32s": 0,
        "42o": 0,
        "42s": 0,
        "43o": 0,
        "43s": 0,
        "52o": 0,
        "52s": 0,
        "53o": 0,
        "53s": 0,
        "54o": 0,
        "54s": 0,
        "62o": 0,
        "62s": 0,
        "63o": 0,
        "63s": 0,
        "64o": 0,
        "64s": 0,
        "65o": 0,
        "72o": 0,
        "72s": 0,
        "73o": 0,
        "73s": 0,
        "74o": 0,
        "74s": 0,
        "75o": 0,
        "76o": 0,
        "82o": 0,
        "82s": 0,
        "83o": 0,
        "83s": 0,
        "84o": 0,
        "84s": 0,
        "85o": 0,
        "85s": 0,
        "86o": 0,
        "86s": 0,
        "87o": 0,
        "92o": 0,
        "92s": 0,
        "93o": 0,
        "93s": 0,
        "94o": 0,
        "94s": 0,
        "95o": 0,
        "95s": 0,
        "96o": 0,
        "96s": 0,
        "97o": 0,
        "97s": 0,
        "98o": 0,
        "A2o": 0,
        "A3o": 0,
        "A4o": 0,
        "A5o": 0,
        "A6o": 0,
        "A7o": 0,
        "A8o": 0,
        "A9o": 0,
        "J2o": 0,
        "J2s": 0,
        "J3o": 0,
        "J3s": 0,
        "J4o": 0,
        "J4s": 0,
        "J5o": 0,
        "J5s": 0,
        "J6o": 0,
        "J6s": 0,
        "J7o": 0,
        "J7s": 0,
        "J8o": 0,
        "J9o": 0,
        "K2o": 0,
        "K2s": 0,
        "K3o": 0,
        "K3s": 0,
        "K4o": 0,
        "K4s": 0,
        "K5o": 0,
        "K5s": 0,
        "K6o": 0,
        "K6s": 0,
        "K7o": 0,
        "K7s": 0,
        "K8o": 0,
        "K9o": 0,
        "Q2o": 0,
        "Q2s": 0,
        "Q3o": 0,
        "Q3s": 0,
        "Q4o": 0,
        "Q4s": 0,
        "Q5o": 0,
        "Q5s": 0,
        "Q6o": 0,
        "Q6s": 0,
        "Q7o": 0,
        "Q7s": 0,
        "Q8o": 0,
        "Q9o": 0,
        "T2o": 0,
        "T2s": 0,
        "T3o": 0,
        "T3s": 0,
        "T4o": 0,
        "T4s": 0,
        "T5o": 0,
        "T5s": 0,
        "T6o": 0,
        "T6s": 0,
        "T7o": 0,
        "T7s": 0,
        "T8o": 0,
        "T9o": 0
    };
    $.each(types, function(index, value) {
        console.log('index: ' + index + ', value: ' + value);
    });

    $.each(hands, function(key, value) {
        $('#' + key).attr('title', getTypeTitle(value));
        $('#' + key).tooltip();
        console.log('key: ' + key + ', value: ' + getTypeTitle(value));
    });
    /*
        $('#AA').attr("title", "Премиум-руки");
        $('#AKs').attr("title", "Премиум-руки");
        $('#AKo').attr("title", "Премиум-руки");
        $('#KK').attr("title", "Премиум-руки");
        $('#QQ').attr("title", "Премиум-руки");
        $('#AA').tooltip();
        $('#AKs').tooltip();
        $('#AKo').tooltip();
        $('#KK').tooltip();
        $('#QQ').tooltip();*/
});
/*
  
$('<a>',{
  text: 'Я конетейнер-ссылка',
  href: 'http://google.com',
  target: "_blank",
  css: {
    color: 'green',
    backgroundColor: 'black',
    display: 'block',
    position: 'relative',
    padding: '10px',
  },
  width: 200,
  height: 100,
  offset: {
    top: 20,
    left: 120,
  },
  on: {
    click: function(event){
      alert('click');
    },
    mouseover: function(event){
      alert('mouse');
      $(this).off('mouseover');
    }
  },
  append: $('<br>')
    .add($('<span>',{
      text: 'text',
      css:{fonweight: 'bold'}
    })),
}).appendTo('#wrapper');
*/