var exec = require('cordova/exec');

// module.exports.coolMethod = function (arg0, success, error) {
//     exec(success, error, 'posplugin', 'coolMethod', [arg0]);
// };


module.exports.add = function( args0,success, error)
{
    exec(success,error,'posplugin', 'add' [args0])
}

module.exports.substract= function( args0,success, error)
{
    exec(success,error,'posplugin', 'substract' [args0])
}