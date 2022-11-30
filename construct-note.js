// add whatever parameters you deem necessary
function constructNote(msg, str) {
    if (str.length < msg.length) return false;
    
    const msgFreq = {}
    for (let char of msg) {
        if (msgFreq[char]) {
            msgFreq[char]++;
        }
        else msgFreq[char] = 1;
    }

    const strFreq = {}
    for (let char of str) {
        if (strFreq[char]) {
            strFreq[char]++;
        }
        else strFreq[char] = 1;
    }

    for (let char in msgFreq) {
        if (!strFreq[char]) return false;
        if (strFreq[char] < msgFreq[char]) return false;
    }
    return true;
}
