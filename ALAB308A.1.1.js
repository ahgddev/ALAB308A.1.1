let anarray = [1,2,3,4,4,[1,2,3,4,5,[1,2,3,4,5,5,[1,2,3,4,24,[1,2,3,42],1],23],34],53];
// let counter = 0;

// function counterFunction(){
//     counter++;
//     counterFunction()
// }

// try {
//     counterFunction()
// } catch (error) {
//     console.error(error)
//     console.log(counter)
// }

// console.log("This is still running after crashing")

//Part 2: Trampolines
function helper(hfunction) {
    let thunk = hfunction();
    while (typeof(thunk) === 'function') {
        thunk = thunk();
    }
    return thunk;
}
   
const flattenArray = (arr) => {
    for (const element of arr) {
        if(Array.isArray(element)){
            return () => flattenArray(arr.flat());   
        }
    }
    return arr
}

console.log(helper(flattenArray(anarray)))

//Part 3
let numDisplay = document.createElement("h1")
function displayPrimes(num){
    let primeArr = []
    while (num != 0){
        
    }
}