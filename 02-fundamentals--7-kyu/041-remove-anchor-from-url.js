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
