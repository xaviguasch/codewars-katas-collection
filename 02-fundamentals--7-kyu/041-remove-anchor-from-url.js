// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

const removeUrlAnchor = (url) => {
  const urlArr = url.split('')

  const anchorIdx = urlArr.indexOf('#')

  if (anchorIdx !== -1) {
    return urlArr.slice(0, anchorIdx).join('')
  } else {
    console.log('testing')
    return url
  }
}

console.log(removeUrlAnchor('www.codewars.com#about'))
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'))
console.log(removeUrlAnchor('www.codewars.com/katas/'))

// ALTERNATIVE SOLUTIONS

// function removeUrlAnchor(url) {
//   return url.split('#')[0]
// }

// function removeUrlAnchor(url) {
//   let string = ''
//   for (let i = 0; i < url.length; i++) {
//     if (url[i] === '#') {
//       break
//     }
//     string += url[i]
//   }
//   return string
// }

// function removeUrlAnchor(url) {
//   var index = url.indexOf('#')
//   return index == -1 ? url : url.substring(0, url.indexOf('#'))
// }
