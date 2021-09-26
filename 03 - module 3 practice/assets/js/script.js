// var length = window.prompt('How many characters would you like your password to be? Please select a value between 8 and 128.')
// console.log(length)

var length;

promptOne();

function promptOne() {
    length = prompt('How many characters would you like your password to be? Please select a value between 8 and 128.');
    if (length >= 8 && length <= 128) {
        alert('Your password will be ' + length + ' characters in length.');
    } else {
        alert('Please input a number between 8 and 128.')
        promptOne();
    }
}
// promptOne();

console.log(length);