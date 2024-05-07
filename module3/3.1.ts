{
    // oop -class

    class Animal {
        name: string;
        speceies: string;
        sound: string;

        constructor(name:string, speceies:string, sound:string){
            this.name = name;
            this.speceies = speceies;
            this.sound = sound;
        }

        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`);
            
        }
    }


    const dog = new Animal("Puppy","dog","bark");

    const cat = new Animal("caty","cat","meow");


    cat.makeSound();


    //
}