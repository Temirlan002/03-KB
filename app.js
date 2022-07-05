// let string = prompt("tell me your name")

// const regExp = /m/i;

// console.log(string.match(regExp))

// const letter = "aaFSsssFD";

// const regExp = /s/gi

// console.log(letter.match(regExp));

// const numbers = "112d23fh23j5j5j6j659d";
 
// const regExp = /\w/g //g берет цифры w берет все 


// console.log(numbers.match(regExp));

// const phoneInput = document.querySelector(".phoneInput");
// const phoneCheck = document.querySelector(".phoneCheck");
// const phoneResult = document.querySelector(".phoneResult");

// console.log(phoneInput);
// console.log(phoneCheck);
// console.log(phoneResult);


// const phoneRegExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/;

// phoneCheck.addEventListener("click", () => {
//     // console.log(123);
//     if(phoneRegExp.test(phoneInput.value)){
//        phoneResult.innerText = "ok";
//        phoneResult.style.color  = "green"
//     } else {
//         phoneResult.innerText = "not ok";
//         phoneResult.style.color = "red"
//     }
// });

// let num = 0;

// const count = () => {
//     num++;
//     console.log(num);
//     if(num < 150) {
//         return count()
//     }
// }

// count()


const people = {
    John: {
        age: 25,
        parents: {
            Kelly: {
                age: 45,
                parents: {
                    Stive: {
                        age: 65,
                        parents: {
                            Brus: {
                                age: 95
                            }
                        }
                    }
                }
            },
            Tony: {
                age: 45
            }
        },
    },
    Sam: {
        age: 15,
        parents: {
            Jean: {
                age: 35
            },
        },
    },
}

const parentList = (obj) => {
    if(obj.parents){
        for(let key in obj.parents){
            console.log(key);
        }
    }
}

console.log(parentList(people.John));

for(let key in people){
    parentList(people[key])
}

