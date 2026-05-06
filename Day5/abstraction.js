class CoffeeMachine
{
    #waterTemperature=90;

    #boilWater()
    {
        return `Boiling Water to ${this.#waterTemperature} degree Celsius`;
    }

    #grindBeans()
    {
        return "Grinding Coffee Beans";
    }
    brewCoffee()
    {
        const boilWater = this.#boilWater();
        const grindBeans = this.#grindBeans();
        return `${boilWater} and ${grindBeans}`;
    }
}
const myCoffeeMachine = new CoffeeMachine();
console.log(myCoffeeMachine.brewCoffee());