var FFI = require('ffi');

function TEXT(text){
   return new Buffer(text, 'ucs2').toString('binary');
}

var user32 = new FFI.Library('C:\\Windows\\System32\\chron16.dll');

// var chronos = new FFI.Library('C:\\Windows\\System32\\chron32.dll', {
//    'MessageBoxW': [
//       'int32', [ 'int32', 'string', 'string', 'int32' ]
//    ]
// });

// var OK_or_Cancel = user32.MessageBoxW(
//    0, TEXT('I am Node.JS!'), TEXT('Hello, World!'), 1
// );
//---------
// var FFI = require('ffi');

// function TEXT(text){
//   return new Buffer(text, 'ucs2').toString('binary');
// }

// var user32 = new FFI.Library('C:\\Windows\\System32\\user32.dll', {
//   'FindWindowW': ['int', ['string', 'string']],
//   'ShowWindow': ['int', ['int', 'int']]
// });

// var handle = user32.FindWindowW(null, TEXT('Untitled - Notepad'));
// console.log(handle);
// user32.ShowWindow(handle, 0);

// var ffi = require('ffi');

// console.log('==>> ', __dirname)
// var lib = ffi.Library('C:\\Windows\\System32\\chron16.dll', {
//     'PLUS_Abre': ['int', ['int']]
// });

// lib.PLUS_Abre.async(3, 5, function (err, res) {
//     console.log('This should be eight: ' + res);
// });