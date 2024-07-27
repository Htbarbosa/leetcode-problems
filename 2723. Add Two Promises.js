var addTwoPromises = async function (promise1, promise2) {
    const a = await promise1;
    const b = await promise2;
    return a + b;
};


addTwoPromises(new Promise(resolve => setTimeout(() => resolve(10), 50)), new Promise(resolve => setTimeout(() => resolve(-12), 30)));