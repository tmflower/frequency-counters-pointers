// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    const obj = {};
    let pointer = 0;

    while (pointer < keys.length) {
        if (values[pointer]) {
            obj[keys[pointer]] = values[pointer]
        }
        else {
            obj[keys[pointer]] = null;
        }
        pointer++;
    }
    return obj;
}
