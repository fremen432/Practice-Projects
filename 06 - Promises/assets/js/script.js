let p = new Promise((resolve, reject) => {
    let a = 1 + 3
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

p.then((productOfPromiseVariable) => {
    console.log('This is in the "then" ' + productOfPromiseVariable)
}).catch((productOfPromiseVariable) => {
    console.log('This is in the "catch" ' + productOfPromiseVariable)
})