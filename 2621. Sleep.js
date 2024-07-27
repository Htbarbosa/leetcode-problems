async function sleep (millis) {
    const p = new Promise(resolve => setTimeout(() => resolve(millis), millis));
    await p
    return p;
}

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100
console.log("🚀 ~ sleep(100):", sleep(100));
console.log("🚀 ~ sleep(100).then(() => console.log(Date.now() - t)):", sleep(100).then(() => console.log(Date.now() - t)));
