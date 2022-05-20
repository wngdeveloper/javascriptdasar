const numbers = [2,7,11,15,21]

const twoSum = (numbers, target) => {
    for ( let i=0; i < numbers.length; i++){
        for (let j=0; j < numbers.length; j++){
            if (numbers[i]+numbers[j]=== target){
                return[i,j]
            }
        }
    }
};

console.log(twoSum(numbers,9));