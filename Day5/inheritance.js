class User
{
    constructor(name)
    {
        this.name = name;
    }
    logIn()
    {
        console.log(`${this.name} has logged in.`);
    }
}
class Admin extends User
{
    constructor(name, role)
    {
        super(name);
        this.role = role;
    }
    logIn()
    {
        console.log(`${this.name} with role ${this.role} has logged in.`);
    }
}
const user1 = new User("Alice");
user1.logIn();
const admin1 = new Admin("Bob", "SuperAdmin");
admin1.logIn();