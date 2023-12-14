function binarySearch(list, element) {
    list.sort;

    let low = 0;                //Start of the array
    let mid = 0;                //Middle
    let high = list.length - 1; //End of array
    let result = -1             //Set result to -1 if element isn't found

    while(low <= high){                    //While not at the end of the array
       const mid = Math.floor((low + high)/2);  //Find the middle of the array
        if(list[mid] == element){          //If the element in the middle of the array is equal to the element being looked for 
            result = mid;                  //The result is the value of mid
            high = mid - 1;                //Look for first occurance of duplicate if needed
    }
        else if(list[mid] < element){     //If the element in the middle of the array is less than the desired element
            low = mid + 1;               //Change the value of low to the middle of the array + 1 
        }
        else{                           //If the element in the middle of the array is less than the desired element
            high = mid - 1;             //Change the value of high to the middle of the array - 1 
        }
    }
    return result;                     //If the element is not found return -1
}

/* This function goes through a sorted list to find a certain element in that list. 
First the function finds the middle of the array and checks to see if that value is the element being looked for.
If so, it stores the value of list[mid] and looks for duplicates of that value. 
Otherwise it sees if the value at the middle of the array is less than the element.
If so, it makes the "new" start of the array at the middle value + 1 since we know the desired element is greater than 
the current middle value and the list is sorted. 
If the value at the middle of the array is greater than the element it does the same thing except 
with the end of the array.
It then repeats that loop until the element has been found. 
If element is not found it returns a value of -1.
*/