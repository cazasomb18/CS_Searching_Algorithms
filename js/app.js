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
	// +++ONLY WORKS ON SORTED ARRAYS +++

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
	const len = arr.length - 1;
	let left = 0;
	let right = len;
	while ( arr[left] <  arr[right] ) {
		let middle = arr[Math.floor(len / 2)];
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


//=============Logarithm Review=============
	// log2(8) = 3 ====> 2^3 = 8
	// log2(value) = exponent ====> 2^exponent = value
		// we'll omit the 2
		// log === log2

	//The logarithm of a number roughly measures the number of times you can divide that number 
	//by 2 before you get a value taht's less than or equal to 1.

	//Logarithm Examples:
		//  8 / 2 === 4
		//  4 / 2 === 2
		//  2 / 2 === 1
		// log(8) = 3

	//Logarithmic Time Complexity is GREAT!
		//It's just a little bit slower than O(1)

	//Logarithmic Time/Space Complexity is IMPORTANT b/c:
		// Certain searching algorithms have logarithmic time complexity.
		// Efficient sorting algorithms involve logarithms.
		// Recursion sometimes involves logarithmic space complexity
//=============Logarithm Review=============

//BINARY SEARCH BIG 0

//TIME COMPLEXITY -
	//worst and average case: O(log N)
	//best case: O(1) (constant)

//Suppose we're searching for 13
	[2,4,5,9,11,14,19,21,25,28,30,50,52,60,63];
   //S 			    M 						E
   		//13 is < 19 so we look at the first half of the arr
   	[2,4,5,9,11,14,15];
   //S     M 		E
   		// 13 is > 9 so we look at the second half of the arr
   [11,14,15];
  //S  M  E
  		// 14 is > 13 so we look at the first half of the arr
  	[11];
  		// 11 is all that's left; 11 !== 13 ==> NOT FOUND IN ARR

	//16 elements = 4 "steps" to say with certainty that en elemnt is not found in the arr\

//To add another "step", we need to double the number of elements --- let's search for 32
//	[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,35]
   //S 										M 												 E
//	[17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,35]
  //S 					  M 					  E
//  	[25,26,27,28,29,30,32,35]
 //  S 		  M 		   E
// 	[29,30,32,35]
 //	 S  M     E
// 	[32,35]
 	// 32 elements = 5 "steps" (worst case)
 	// Olog(N) ===> 2 to what power === N?

// ============ Naive String Search Exercise ============
	//Suppose you want to count the number of times a smaller string sppears in a longer string
	'wowomgzomg'
	//Long String
	'omg'
	//Short String
		//We would set up a counter to increment each time the substring appears in the longer string

//Naive String Search Pseudocode
	// Loop over the longer string (function stringSearch(){}
	// Loop over the shorter string
	// If the characters don't match, break out of the inner loop
	// If the characters do match, keep going
	// If you complete the inner loop and find a match, increment the count of matches
	// Return the count

// ============ Naive String Search Exercise ============
//instructor's solution
function naiveSearch(LS, SS){
	let count = 0;
	for (let i = 0; i < LS.length; i++) {
		for (let j = 0; j < SS.length; j++) {
			console.log((LS[i], SS[j]));
			if (SS[j] !== LS[i + j]) {
				console.log('BREAK!');
				break;
			}
			if ( j === SS.length - 1 ) {
				count ++;
			}
		}
	}
	console.log("FOUND ONE!");
	return count;
}

console.log(naiveSearch('lorie loled', 'lol'));

console.log(naiveSearch('lorie loled', 'lo'));
//YOU FORGOT TO ATTEMPT THIS PROBLEM ON YOUR OWN, THE ABOVE SOLUTION IS FROM THE INSTRUCTOR