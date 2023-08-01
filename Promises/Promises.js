function getWater() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const water ="yes Water is here";
            resolve(water)
        },4000)
    })
}

function getchaiPatti() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const chaiPatti ="yes, water + chaipatti is here";
            resolve(chaiPatti)
        },4000)
    })
}

function getSugar() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const sugar ="yes sugar + chaipatti + water";
            resolve(sugar)
        },2000)
    })
}


function getMilk() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const milk ="yes Milk + sugar + chaipatti + water";
            resolve(milk)
        },2000)
    })
}

function getTea() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const Tea ="yes here it tea + Milk + Sugar + ChaiPatti + water";
            resolve(Tea)
        },2000)
    })
}



getWater()
.then((water)=>{
    console.log("water received", water);
    return getchaiPatti(water);
})
.then((chaiPatti)=>{
    console.log("chaitPati received", chaiPatti)
    return getSugar(chaiPatti);
})
.then((sugar)=>{
    console.log("sugar received", sugar)
    return getMilk(sugar);
})
.then((milk)=>{
console.log("milk received", milk)
return getTea(milk);
})
.then((Tea)=>{
    console.log("here tea is ready", Tea)
})

.catch((data)=>{
    console.log("some issue", data);
})

