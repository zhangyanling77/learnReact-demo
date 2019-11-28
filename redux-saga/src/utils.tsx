export function delay(this: any, ms: number, ms2: number) {
    console.log('this.name', this);
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(ms + ms2);
        }, ms + ms2);
    });
}

export function readFile(filename: string, callback: any) {
    setTimeout(function () {
        callback(null, filename);
    }, 1000);
}