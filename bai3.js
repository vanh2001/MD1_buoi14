//khi mảng có đầy đủ giá trị
function minArray(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}

//khi mảng không có giá trị nào
function minArray2(arr) {
    if (arr.length == 0){
        return -1;
    }
    let i;
    let min = arr[0];
    for (i = 0; i < arr.length; i++) {
        if(min > arr[i]){
            min = arr[i];
        }
    }
    let result = "Phần tử: " + arr[i] + "ở vị trí: " + i;
    return result;
}

let arr1 = [3, 5, 1, 8, -3, 7, 8];
let arr2 = [7, 12, 6, 9, 20, 56, 89];
let arr3 = [];
let arr4 = [0, 0, 0, 0, 0, 0];
let min = minArray(arr1);
alert(min);

