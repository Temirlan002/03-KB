// let num = 0;

// const count = () => {
//     num++;
//     console.log(num);
//     if(num < 1000){
//         count()
//     }
// }

// count();

// const block =  document.querySelector('.block');
// const blockMove = document.querySelector(".blockMove");

// let position = 0;

// const blockMoveAction =  ()=>{
//     position+= 15;
//     block.style.left = `${position}px`;
//     if(position <= 280){
//         blockMoveAction();
//     }
// }

// blockMove.addEventListener("click", () => {
//     blockMoveAction();

// })


//SET TIMEOUT

// console.log("hi");

// const hi  = ()=> {
//     console.log("hi2");
// }

// setTimeout(hi, 0)

// console.log("hi3");
// console.log("hi4");
// console.log("hi5");
// console.log("hi6");

// setInterval(()=>{
//     console.log("interval");
// }, 3000)

// const interval = setInterval(()=>{
//     console.log("interval");
// }, 1000);

// setTimeout(()=>{
//     clearInterval(interval)
// }, 3000)

// const block =  document.querySelector('.block');
// const blockMove = document.querySelector(".blockMove");

// let position = 0;
// let topPosition = 0;

// const blockMoveAction =  ()=>{
//     position+= 15;
//     block.style.left = `${position}px`;
//     if(position <= 480){
//         setTimeout(blockMoveAction, 100)
//     } else if( position >= 480 && topPosition <= 480) {
//         topPosition += 15;
//         block.style.top = `${topPosition}px`;
//         setTimeout(blockMoveAction, 100)
//     }
// }

// blockMove.addEventListener("click", () => {
//     blockMoveAction();

// })

// const func = (num) => {
//     const culk = () => {
//         console.log(1000 * num);
//     }
//     culk();
// }

// func(8)

const func = (n) => {
    console.log(n);
    return function (num) {
        console.log(num);
        return n + num;
    }
}

const addOne = func(1)

console.log(addOne(10));