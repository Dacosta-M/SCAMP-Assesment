var fibonacci = function(n) {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};

// this is an example of the sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34