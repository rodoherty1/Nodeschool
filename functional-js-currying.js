


function curryN(fn, n) {
    n = n || fn.length;

    function _curryN(prev) {

        // Each function will take one argument. So, arg is the argument!
        return function(arg) {

            // Currying works by building up a structure of functions calling functions.
            // The list of arguments to be ultimately applied is captured by a gradually growing collection called args.
            var args = prev.concat(arg);

            // If this is the inner-most function then we call the function with the complete list of arguments.
            if (n === 1) {
                return fn.apply(this, args);
            }

            // Otherwise, we duduct one from n and create a new function that will take an argument and which will have
            // stored the partial list of previously applied arguments so far.
            n -= 1;

            return _curryN(args);
        }
    }
    
    return _curryN([]);
}


module.exports = curryN

