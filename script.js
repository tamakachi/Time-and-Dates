const now = new Date()

console.log(now)

// year, months, day, times

console.log('getFullYear:',now.getFullYear())
console.log('getDate:',now.getDate())

console.log('getHours:',now.getHours())
console.log('getMinutes:',now.getMinutes())
console.log('getSeconds:',now.getSeconds())

// Problematic function, returns value of month as a number -1
// More bs from the array type nature of Javascript
// Careful when implementing these into your code
console.log('getMonth', now.getMonth()) 


// Problematic function, returns value of day of the week as number-1

console.log('getDay:',now.getDay())


// Timestamps

console.log('timestamp', now.getTime())

// Date Strings
console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.toLocaleString())

// For comparing dates and so on, see Working With Timestamps