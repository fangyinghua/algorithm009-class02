

/***
 * 冒泡排序 （稳定排序）
 * 交换排序
 */
function bubbleSort(arr){
    let len=arr.length;
    if(len>1){
        for(let i=0;i<len;++i){
           for(let j=0;j<len-1-i;++j){
                if(arr[j]>arr[j+1]){
                    arr[j]=arr[j]^arr[j+1];
                    arr[j+1]=arr[j+1]^arr[j];
                    arr[j]=arr[j]^arr[j+1];
                }
           }
        }

    }
    return arr;
}


function quickSort(arr,left,right){


}
/**
 * 快排 不稳定
 * 平均复杂度 O(login(n))
 * 采用分治的方法
 * 
 */
function quickSort(arr,left,right){
    let len=arr.length; 
        var partitionIndex;
        left = typeof left != 'number'? 0 : left,
        right = typeof right != 'number'? len - 1 : right;

        // right=right || len-1;
        if(left<right){
            //划分
             partitionIndex=partition(arr,left,right);
            quickSort(arr,left,partitionIndex-1);
            quickSort(arr,partitionIndex+1,right);
        }
   
    return arr;   
}

/**
 * 分区
 * @param {*} arr 
 * @param {*} left 
 * @param {*} right   
 * 
 */
function partition(arr,left,right){// left--0    right--len-1
    let privot=left,index=privot+1;//privot--0  index=1
    for(let i=index;i<=right;++i){// i=1
        if(arr[i]<arr[privot]){
            swap(arr,i,index);// 2,5 换位置  3,2,5  （i为2 ，index为1） 换完后 index为2
            index++;    
        }
    }
    swap(arr,privot,index-1);//0 1 换位置 2,3,5，8， 9  
    return index-1;
}

function swap(arr, i, j) {
    if(i!=j){
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    } 
}