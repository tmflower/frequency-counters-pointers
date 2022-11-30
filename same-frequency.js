// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
    const num1 = int1.toString();
    const num2 = int2.toString();
    if (num1.length !== num2.length) return false;
    const obj1 = {};
    const obj2 = {};
    for (let char of num1) {
        if (obj1[char]) {
            obj1[char]++;
        }
        obj1[char] = 1;
    }
    for (let char of num2) {
        if (obj2[char]) {
            obj2[char]++;
        }
        obj2[char] = 1;
    }
    for (let char in obj1) {
        if (!obj2[char]) return false;
        if (obj1[char] !== obj2[char]) return false;
    }
    return true;
}
