// add whatever parameters you deem necessary

function separatePositive(arr) {
    let L = 0;
    let R = arr.length - 1;
    while (L < R) {
        if (arr[L] < 0) {
            if (arr[R] > 0) {
                let temp = arr[R];
                arr[R] = arr[L];
                arr[L] = temp;
            }
            else {
                R--;
            }
        }
        else {
            L++;
        }
    }
    return arr;
}
