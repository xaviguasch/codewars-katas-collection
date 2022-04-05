// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

const well = (x) => {
  let goodIdeas = []

  x.forEach((idea) => (idea === 'good' ? goodIdeas.push(idea) : ''))

  if (goodIdeas.length > 2) return 'I smell a series!'
  else if (goodIdeas.length > 0) return 'Publish!'
  else return 'Fail!'
}

console.log(well(['bad', 'bad', 'bad']))
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))

// ALTERNATIVE SOLUTION

// const well = x => {
//   const good_count = x.filter(x => x == 'good').length;
//   return good_count < 1 ? 'Fail!' :
//          good_count < 3 ? 'Publish!' : 'I smell a series!';
// }
