{
    // interface -generic
 interface Developer<T> {
    name:string;
    computer:{
        brand: string;
        model: string;
        releaseYear: number
        
    }
    smartWatch:T
 }

 const  poorDeveloper : Developer<{
    brand:string;
    model:string;
    display: string;
 }> ={
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
 const  richDeveloper : Developer<{
    brand:string;
    model:string;
    heartTrack: boolean;
    sleeptrack: boolean;
 }> ={
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
 };



    //
}