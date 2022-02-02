const quiz= [
  {
    question :'次のうちショットガンはどれ?',
    answers : [
      'フラットライン',
      'ピースキーパー',
      'オルタネーター',
      'クレーバー'
    ],
    correct : 'ピースキーパー'
  },{
    question :'次のうちリコンキャラでないのは誰?',
    answers : [
      'ブラッドハウンド',
      'ヴァルキリー',
      'パスファインダー',
      'ホライゾン'
    ],
    correct: 'ホライゾン'
  },{
    question: '次のうちクソゴミゲロしゃぶマップはどれ？',
    answers:[
      'ストームポイント',
      'ワールズエッジ',
      'キングスキャニオン',
      'オリンパス'
    ],
    correct: 'ストームポイント'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;

let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength= $button.length;

const setupQuiz = function(){
  document.getElementById('js-question').textContent=quiz[quizIndex].question;
  let buttonIndex=0;
  while(buttonIndex<buttonLength){
    $button[buttonIndex].textContent=quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler=function(e){
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('やるやん');
    score++;
  }else{
    window.alert('ざーこ');
  }

  quizIndex++;

  if (quizIndex<quizLength){
    setupQuiz();
  }else{
    window.alert(quizLength+'問中'+score+'問正解だってさ、さいならー');
  }
};

let handlerIndex = 0;
while(handlerIndex<buttonLength){
  $button[handlerIndex].addEventListener('click',function(e){
    clickHandler(e);
  });
  handlerIndex++;
}

