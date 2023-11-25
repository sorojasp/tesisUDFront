const pieceOfData=(percentage, data )=>{

    const n =data.length
    //console.log("amount of data: ", n);
    const nPercentage=(n*percentage)/100
    //console.log("nPercentage: ",nPercentage)

    //console.log("n/nPercentage: ", n/nPercentage)
    const steps= Math.floor(n/nPercentage);

    console.log("steps: ", steps)

    let newArray=[]

    let j=0
    for (let i=0; i<n; i += steps ){

        newArray[j]=data[i];
        j++;
    }

    newArray=JSON.parse(JSON.stringify(newArray));


    return newArray;



    //console.log(newArray)
    //console.log("amount new Array:", newArray.length)

}


export default pieceOfData;