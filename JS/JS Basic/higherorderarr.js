let arr=[
    {name:"aman",
     marks:85   
    },
    {
        name:"nava",
        marks:99
    },
    {
        name:"preethi",
        marks:98
    }
]
let gpa=arr.map((ele)=>{
    return ele.marks/10;
})
let nums=[1,2,3,4,5,6];

let ans=nums.filter((ele)=>{
    return ele%2==0;
})


let val=nums.reduce((rel,el)=>{
    return rel+el;

})
let max=nums.reduce((max,ele)=>{
    if(max<ele){
        return ele;
    }
    else{
        return max;
    }
})