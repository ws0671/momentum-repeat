const quotes = [
  {
    quote: "I never dreamed about success, I worked for it",
    author: "Estee Lauder",
  },
  {
    quote: "Do not try to be original, just try to be good.",
    author: "Paul Rand",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
    author: "Martin Luther King Jr.",
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas Edison",
  },
  {
    quote:
      "The fastest way to change yourself is to hang out with people who are already the way you want to be",
    author: "REid Hoffman",
  },
  {
    quote:
      "Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations",
    author: "Tim O Reilly",
  },
  {
    quote:
      "Some people dream of success, while other people get up every morning and make it happen",
    author: "Wayne Huizenga",
  },
  {
    quote:
      "The only thing worse than starting something and falling.. is not starting something",
    author: "SEth Godin",
  },
  {
    quote:
      "If you really want to do something, you will find a way. If you do not, you will find an excuse.",
    author: "Jim Rohn",
  },
];

const sentences = [
  {
    sentence:
      "그날, 별이 무수히 쏟아지던 날, 그것은 마치 꿈 속 풍경처럼 그저 한 없이 아름다운 광경이었다.",
  },
  {
    sentence: "아침에 눈을 뜨면 왠지 모르게 울고 있다.",
  },
  {
    sentence: "한가지는 분명해. 우리는 만나면 바로 알아볼거야.",
  },
  {
    sentence: "꿈에서 깨어나도 절대 잊지 않도록 서로에게 이름을 써주자.",
  },
  {
    sentence:
      "꿈을 꾸긴 했는데 매번 기억이 안 난다 계속해서 무언가를, 누군가를 찾고 있다.",
  },
  {
    sentence:
      "실로 이어지는 것도 무스비. 사람과 이어지는 것도 무스비. 흘러가는 것도 무스비. 다 같은 말을 쓰지.",
  },
  {
    sentence: "넌 누구야?",
  },
  {
    sentence:
      "어스레한 저녁, 낮도 밤도 아닌 시간, 세상의 윤곽이 흐려지고 신비한 존재를 만나는 기적의 황혼..!",
  },
  {
    sentence: "너 지금, 꿈을 꾸고 있지?",
  },
  {
    sentence: "소중한 사람, 잊으면 안되는 사람, 잊고 싶지 않았던 사람!",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const fadeEffect = document.querySelector(".fadeEffect");

const sayBtn = document.querySelector(".change-sentence");
function choiceSay() {
  const todaysQuote = sentences[Math.floor(Math.random() * sentences.length)];
  // const todaysQuote = sentences[9];
  quote.innerText = todaysQuote.sentence;
  // author.innerText = todaysQuote.author;
  fadeEffect.classList.remove("effect");
  void fadeEffect.offsetWidth;
  fadeEffect.classList.add("effect");
}
choiceSay();
sayBtn.addEventListener("click", choiceSay);
