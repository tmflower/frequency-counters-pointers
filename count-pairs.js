// add whatever parameters you deem necessary

function countPairs(arr, sum) {
    let count = 0;
    for (let i = 0 ; i < arr.length; i++) {
        let pointer = i + 1;
        while (pointer < arr.length) {
            if (arr[i] + arr[pointer] === sum) {
                count++;
            }
            pointer++;
        }
    }
    return count;
}