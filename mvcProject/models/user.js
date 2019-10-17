const users = [];

module.exports = class User{
    constructor(name,firstname,access){
        this.name = name;
        this.firstname = firstname;
        this.access = access;
    }

    save()
    {
        users.push(this);
    }

    toString()
    {
        return `${this.name} ${this.firstname} with ${this.access} rank`;
    }

    static fetchAll()
    {
        return users;
    }
}