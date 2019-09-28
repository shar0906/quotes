export const quotes = [
  {
    body: 'Mood is Illusion',
  },
  {
    body: 'See self in other',
  },
  {
    body: 'What does finishing look like here?',
  },
  {
    body: 'Mood swings as unresolved internal conflicts',
    link: 'https://docs.google.com/document/d/1u1-az7tKfeVusg4fxPGbpZKierFkID-N8psiTrOrPqQ/edit',
  },
  {
    body: '"Nothing Bad is Happening" said the Giraffe to the Scared Boy',
  },
  {
    body: '"People can only tell you what is best for them" -Esther Hicks',
  },
  {
    body: '"How do you keep your heart open in hell?" -Ram Dass',
  },
  {
    body: '"You have no right to take away someone\'s suffering" -Ram Dass',
  },
  {
    body: '"Our spirit is fed by a boundless interaction by all that is around us." -Ram Dass',
  },
  {
    body: '"People want to hear what you have to say" -A Star Is Born',
  },
  {
    body: '1st Relax',
  },
  {
    body: 'Seeking Harmony w/o Desiring It',
  },
  {
    body: 'Dismantle The Machine. All Answers Lie Beneath. -Luna',
  },
  {
    body: 'Trying to fix yourself, you\'ll never do it. -Luna',
  },
  {
    body: 'Codify Insights. Update Environment. -Luna',
  },
  {
    body: 'Make a decision once. Then just make efforts. -Luna',
  },
]

export function getRandomQuote() {
  const max = quotes.length
  // returns a random integer up to max - 1
  const i = Math.floor(Math.random() * Math.floor(max))
  return quotes[i]
}

export default quotes
