export default function returnHowManyArguments(...x) {
    const arr = [];
    for (let args of x) {
        arr.push(args);
    }
    return arr.length
}
