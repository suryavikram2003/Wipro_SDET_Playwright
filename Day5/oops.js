class Animal
{
    constructor(name)
    {
        this.name = name;
    }
    speak()
    {
        console.log(`${this.name} makes a sound.`);
    }
}
const dog  = new Animal("Jhonny");
dog.speak();
const cat = new Animal("Whiskers");
cat.speak();