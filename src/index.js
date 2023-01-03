Promise.prototype.pipe = function () {
    console.dir('Test', this, arguments);
    return this;
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
    const promise = timer(1000);
    const promise2Sec = timer(2000);
    const promise3Sec = timer(3000);
    promise.pipe(
        promise2Sec,
        promise3Sec
    ).then(() => {
        console.log('This', this);
    })
}

console.log('--------STARTED----------');
a10();
console.log('--------ENDED------------');
