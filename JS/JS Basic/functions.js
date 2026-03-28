//function sum(a,b=3){

    //return a+b;
//}

console.log(sum(6));
let arr=[1,2,3,4,5,64,21];

console.log(...arr);

let data1={
    id:"123",
    email:"devgvrg"
};
let data2={
    name:"player",
    fp:"3"
};

let data3={...data1,...data2};


function sum(...args){
    for(let i=0;i<args.length;i++){
        console.log("you gave us "+args[i]);
    }
}
sum(1,2,3,5,6);

let ar=[1,2,3,4,5];

let sm=ar.reduce((ac,num)=>{return ac+num;})
console.log(sum);

let sq=ar.map((num)=>{return num*num;});
console.log(sq);