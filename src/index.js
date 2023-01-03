Promise.prototype.pipe = function () {
    console.dir('Test', this, arguments);
    return Array.from(arguments).reduce((acc, curr) => {
        return acc.then(curr);
    }, this);

    // return this;
};

function timer(time = 1000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Timer', time);
            resolve(time);
        }, time);
    });
}

function a10() {
    const promise = timer(10000);
    promise.pipe(
        () => timer(3000),
        () => timer(2000),
    ).then(() => {
        console.log('This', this);
    })
}

console.log('--------STARTED----------');
a10();
console.log('--------ENDED------------');
