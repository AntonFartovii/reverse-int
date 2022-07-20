module.exports = function reverse (n) {
    if ( n < 0 ) { n = n * -1 }
  const num = n.toString().split('').reverse().join('')
    return Number(num)
}

// console.log ( reverse( -345) )
