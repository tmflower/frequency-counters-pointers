// add whatever parameters you deem necessary
function averagePair(arr, target) {
    let L = 0;
    let R = arr.length - 1;

    while (L < R) {
        let avg = (arr[L] + arr[R])/2;
        if (avg === target) return true;
        else if (avg < target) {
            L++;
        }
        else R--;
    }
    return false;
}
