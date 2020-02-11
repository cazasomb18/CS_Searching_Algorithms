//============================================================================================
//Section 10 SEARCHING ALGORITHMS
//============================================================================================

//What is the simplest way to search a list? (array)
	//Linear Search - check every element in the array for a specific value.

//Javascript has Linear Search:
	//-indexOf --> usernames.indexOf('tommy'); === 0; returns index position
	//-includes --> usernames.includes("tom") === true; return true/false value
	//-find --> 
	//-findIndex

//Linear Search Pseudocode
	//Function accepts an array and a value
	//Loop through the array and check if  the current array element is equal to the value
	//If it is, return the index at which the element is found
	//If the value is never found, return -1

	//[0,1,2,3];
	//length === 4;
	//max index === 3;

//SAME THING AS BULIT-IN JS FUNCTION arr.indexOf(value);

function linearSearch(arr, value) {
	for (let i = 0; i < arr.length; i++){
		if (arr[i] === value) return i;
	}
	return -1;
};

console.log(linearSearch([10,15,20,25,30], 15)); //1
console.log(linearSearch([9,8,7,6,5,4,3,2,1,0], 4)); //5
console.log(linearSearch([100], 100)); //0
console.log(linearSearch([1,2,3,4,5], 6)); //-1
console.log(linearSearch([9,8,7,6,5,4,3,2,1,0], 10)); //-1
console.log(linearSearch([100], 200)); //-1

//TIME COMPLEXITY OF 0(N) = N --> as n grows so does the time complexity

//LINEAR SEARCH BIG-0

//BEST CASE: O(1); (FIRST VALUE)
//WORST CASE: 0(N); (LAST VALUE)
//AVERAGE CASE: 0(N); 
	//**Does not average out because we care about the general trend, we throw away all constants and complify it to 0(N)
	//**best we can do with an unsorted piece of data.

//================================================================================================
//BINARY SEARCH
//================================================================================================
//BINARY SEARCH
	//Much faster form of search
	//Rather than eliminating one element at a time, you can elminate half the remaining elements at a time
	//Binary search ONLY WORKS ON SORTED ARRAYS

//Divide and Conquer
	//Let's Search for 15;
	[1, 3, 4, 6, 8, 9, 11, 12, 15, 17, 17, 18, 19]
   //^Left=1		   ^too small(11)		   ^right=19

//Binary Search Pseudocode
	//This function accepts a sorted array and a value;
	//Create a left pointer at the start of the array, and a right pointer at the end of the array
	//While the left pointer comes before the right pointer:
		//Create a pointer in the middle
		//If the value is too small, move the left pointer up
		//If the value is too large, move right pointer down
	//If you never find the value, return -1;

function binarySearch(arr, value){
	const len = arr.length-1;
	let left = 0;
	let right = len;
	while ( arr[left] <  arr[right] ) {
		let middle =arr[Math.floor(len / 2)];
		if ( value !== middle ) {
		    if (value < middle) {
		        left ++;
		    }
		    if (value > middle ) {
    			right --;
    		}
		}
		return arr.indexOf(value);
	}
	return -1;
}

console.log(binarySearch([1,2,3,4,5], 2)); //1
console.log(binarySearch([1,2,3,4,5], 3)); //2
console.log(binarySearch([1,2,3,4,5], 5)); //4
console.log(binarySearch([1,2,3,4,5], 6)); //-1
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,98,99], 10)); //2
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,98,99], 95)); //16
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,98,99], 100)); //-1




