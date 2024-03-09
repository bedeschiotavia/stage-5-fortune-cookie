const quotes = [
  "Don't just spend time, invest it.",
  'Take it easy',
  'It takes more than good memory to have good memories.',
  'Your passions sweep you away.',
  'Warning, do not eat your fortune.',
  'Better be the head of a chicken than the tail of an ox.',
  'Try? No! Do or do not, there is no try.',
  'You will always be surrounded by true friends',
  'Be prepared for extra energy.',
  'The cure for grief is movement.',
  'You will always have good luck in your personal affairs.',
  'Kiss is not a kiss without the heart.',
  'Accept something that you cannot change, and you will feel better.',
  'You will take a pleasant journey to a place far away.',
  'Everything happens for a reson.',
  'An angry man opens his mouth and shuts up his eyes.',
  'It is not necessary to show others you have change; the change will be obvious.',
  "The majority of the word 'can't' is can.",
  'Believing that you are beautiful will make you appear beautiful to others around you.',
  'The best is yet to come.'
]
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnOpen = document.querySelector('#btnOpen')
const btnReset = document.querySelector('#btnReset')

const fortuneCard = document.querySelector(".fortune-card")

let randomNumber = Math.round(Math.random() * 20)

btnOpen.addEventListener('click', handleOpenClick)
btnReset.addEventListener('click', handleResetClick)

function handleOpenClick () {
  toggleScreen()
  const quote = quotes[randomNumber]
  fortuneCard.innerHTML = `<p>${quote}</p>`
}

function handleResetClick () {
  toggleScreen()
  randomNumber = Math.round(Math.random() * 20)
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}