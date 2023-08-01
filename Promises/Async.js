function getWater() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const water ="yes Water is here";
            resolve(water)
        },2000)
    })
}

function getchaiPatti() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const chaiPatti ="yes, water + chaipatti is here";
            resolve(chaiPatti)
        },2000)
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



async function OrderTea(){
    try {
    const water = await getWater();
    console.log("water received", water);

    const chaiPatti = await getchaiPatti();
    console.log("chaipatti received", chaiPatti);

    const sugar = await getSugar();
    console.log("sugar received", sugar);
    
    const milk = await getMilk();
    console.log("milk received", milk)

    const Tea = await getTea();
    console.log("here tea is ready", Tea)
    } catch(err){
        console.log("error occured", err);
    }
}
OrderTea();
