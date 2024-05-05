{
    // interface -generic
 interface Developer<T,X=null> {
    name:string;
    computer:{
        brand: string;
        model: string;
        releaseYear: number
        
    }
    smartWatch:T;
    bike?:X
 }

type EmilaWatch = {
    brand:string;
    model:string;
    display: string;
 }


 const  poorDeveloper : Developer<EmilaWatch> ={
    name: "Persian",
    computer:{
        brand: "Asus",
        model: "x-25UR",
        releaseYear :2018,
    },
    smartWatch: {
        brand: "",
        model :"kw66",
        display : "OLED",
    },
 };

 interface AppleWatch {
    brand:string;
    model:string;
    heartTrack: boolean;
    sleeptrack: boolean;
 }

 interface YamahaBike {
    model: string;
    engineCapacity: string;
 }
 const  richDeveloper : Developer<AppleWatch,YamahaBike> ={
    name: "Rich MArsh",
    computer:{
        brand: "Hp",
        model: "2154tu",
        releaseYear :2022,
    },
    smartWatch: {
        brand: "Apple Watch",
        model :"kw667",
        heartTrack :true,
        sleeptrack:true,
    },
    bike:{
        model: "Yamaha",
        engineCapacity:"100cc"
    }
 };



    //
}