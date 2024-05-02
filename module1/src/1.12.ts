{
    //
    //nullable types


    const searchName = (value: string | null)=>{
        if(value){
            console.log("searching");
            
        } else {
            console.log("There is nothing searching");
            
        }
    };

    searchName("As");

    // unknown typeof 
    const getShpeedInMeterPerSceond=(value:unknown)=>{
        if(typeof value === 'number'){
            const convertedSpeed = (value*1000)/3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
            
        }
       else if(typeof value === "string"){
            const [result,unit]= value.split(" ");
            const convertedSpeed = (parseFloat(result)* 1000)/3600;
            console.log(`The speed is stringt to convert result is: ${convertedSpeed} ms^-1`);
                       
        }
        else{
            console.log('wrong input');
            
        }
    };
    getShpeedInMeterPerSceond(null)


    //never

    const throwError = (msg:string)=>{
        throw new Error(msg);
    }

    throwError("A Error paise");

    //
}