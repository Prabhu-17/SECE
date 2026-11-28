console.log("start");

setTimeout(()=>{
    console.log("first Timeout");
},2000)

Promise.resolve().then(()=>{"first promises"})

setTimeout(()=>{
    console.log("inside timeout"); 
},3000)

Promise.resolve().then(()=>(console.log("From promises")))

console.log("end");
