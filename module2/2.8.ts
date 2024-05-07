{

    //Asycnchronous TS

    interface IData {
        name:string;
        age:number;
        address:string;
    }

    const data ={
        name:"Fahim",
        age:45,
        address: " Khulna, Bangladesh"
    }
    const showMessage = ():Promise<IData>=>{
        return new Promise((resolve,reject)=>{
            if(data){
                resolve(data);
        }
        reject("no data found!")
        
        })
    }

    // const result = showMessage();
    // console.log(result);
    

    interface IPost{
        userId:number;
        id:number;
        title:string;
        body:string;

    }

    const ShowResult  = async ()=>{
        const result = await showMessage();
        console.log(result);
        
    }

    // ShowResult()


    const fetchData = async(): Promise<IPost[]>=>{
        const res= await fetch("");
        const data = await res.json();
        // console.log(data);
        return data;
        
    }

    // const result1 = fetchData();
    // console.log(result1);
    
    const showData =async()=>{
 const result1 = await fetchData();
    console.log(result1);
    }
showData()




    //
}