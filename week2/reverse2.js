function reverseString(value) {
    
    const reversendValue = value.split('').reverse().join('')
    return reversendValue;
}

console.log(reverseString("Hello JavaScript"));