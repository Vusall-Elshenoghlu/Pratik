




// Task 1
var myArray = [32,25,85,89,45,76,7,41,45,2,12]
function reverseArray(arr){
    let evenArray = []
    let oddArray = []
    let evenOddArray = []
    for (let i = 0; i< arr.length;i++){
        if(arr[i] % 2 == 0){
            evenArray.push(arr[i])
        }
        else{
            oddArray.push(arr[i])
        }
    }
    console.log(evenArray);
    console.log(oddArray);
    evenOddArray = evenArray.concat(oddArray)
    console.log(evenOddArray);   
}

// reverseArray(myArray)

//var myArray = [32,25,85,89,45,76,7,41,2,12]

// task2
function deleteMinNumber(arr){
    let maxNumber = arr[0]
    let minNumber = arr[0]
    for(let i = 0;i < arr.length;i++){
        if (arr[i]>maxNumber){
            
            maxNumber = arr[i]
        }
        else if(arr[i] < minNumber){
            minNumber = arr[i]
        }
    }
    console.log(maxNumber);
    console.log(minNumber);
    let indexMax = arr.indexOf(maxNumber)
    let indexMin = arr.indexOf(minNumber)
    console.log(indexMax);
    console.log(indexMin);
    arr.splice(indexMax,1)
    arr.splice(indexMin - 1,1)
    console.log(arr);
    
}
deleteMinNumber(myArray)



//task 3
function getUnicalArray(arr){
    let newArray = []
    for(let i = 0; i < arr.length;i++){
        if (newArray.indexOf(arr[i]) === -1){
            newArray.push(arr[i])
        }
    }
    console.log(newArray);
    
}
let err = [1,1,2,4,1,3,2,5,4,5]
getUnicalArray(err)

//task 4

function isIncludeChar(text,char){
    let count = 0
    let sum = 0
    for(let i = 0; i < text.length;i++){
        if (text[i] == char){
            count++
            sum += i
        }
    }
    console.log(text + " sozunde " + count + " dene " + char + " var...");
    console.log("indexlerinin cemi: " + sum);
    
}

isIncludeChar("salam","a")


//text 5
function findWords(text){
    let textArrayy = text.split(" ")
    console.log(textArrayy)
    let maxElement = textArrayy[0]
    for(let i = 0;i< textArrayy.length;i++){
        if(textArrayy[i].length > maxElement.length){
            maxElement = textArrayy[i]
        }
    }
    console.log(maxElement);
    console.log("'" + text +"'" + " sozundeki en uzun soz " + "'" + maxElement + "'" + "-dir ve uzunlugu: " + maxElement.length);
    
    

}
let salam = "salam necesen veziyyet"
findWords(salam)


//task 6
function getRandomElement(arr){
    let randomElement = arr[Math.floor(Math.random() * arr.length) ]
    console.log(randomElement);
    
}
let textArray = ["a","e","o","u"]
getRandomElement(textArray)


//task 7
let tast7Array = ["salam","a","b","world"]
function addElementIndex(arr,index,string){
    if (index>arr.length){
        arr.splice(arr.length,0,string)
        console.log(arr);
    }else{
        arr.splice(index,0,string)
    console.log(arr);
    }
}
addElementIndex(tast7Array,10,"dev")

// task 8
function getPowerSum(arr){
    let sum = 0
    for(let i = 0; i< arr.length;i++){
        sum += (arr[i] * arr[i])
    }
    console.log(sum);
    
}
let task8Arr = [1,2,3,4,5]
getPowerSum(task8Arr)

//task9
const students = [  
    { name: "Leyla", points: 500 },
    { name: "Akif", points: 500 },
    { name: "Fikret", points: 3000 },
    { name: "Rashad", points: 500 },
    { name: "Turkan", points: 1900 },
    { name: "Sabir", points: 1000 },
    { name: "Idris", points: 340 },
    { name: "Nijat", points: 940 },
    { name: "Ismet", points: 1780 },
  ]
  function getIncreasePoint(arr){
    for(let i = 0; i < arr.length; i ++){
        arr[i].points += 30;
        
    }
    console.log(arr);
    
  }
  getIncreasePoint(students)
  









