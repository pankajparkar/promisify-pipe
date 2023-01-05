Promise.prototype.pipe = function () {
    return Array.from(arguments).reduce((acc, curr) => {
        if (curr.callee === catchError) {
            return acc.catch(curr[0]);
        }
        return acc.then(curr);
    }, this);
};

function timer(time = 1000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Timer', time);
            resolve(time);
        }, time);
    });
}

function catchError() {
    return arguments;
}

function a10() {
    const promise = timer(2000);
    promise.pipe(
        (t) => timer(t + 1000),
        (t) => timer(t + 2000),
        () => { throw 'error'; },
        catchError(() => timer(1500)),
    ).then((result) => {
        console.log('This', result);
    });
}

console.log('--------STARTED----------');
a10();
console.log('--------ENDED------------');
