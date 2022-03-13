class Group {
    constructor() {
        this.members = [];
    }

    add(value) {
        if(!this.has(value)) return this.members.push(value);
    }
    delete(value) {
        if(this.has(value)) return this.members = this.members.filter( v => v!==value);
    }
    has(value) {
        return this.members.includes(value);
    }
    static from(collection) {
        let group = new Group;
        for(let value of collection) {
            group.add(value);
        }
        return group;
    }
}

let grp = Group.from([10,20]); /* made mistake let grp = new Group.from([10,20]). After "new", there has to be a constructor */
console.log(grp.has(10));
console.log(grp.has(30));
grp.add(10);
grp.delete(10);
console.log(grp.has(10));


