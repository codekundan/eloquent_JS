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
    [Symbol.iterator]() {
        return new GroupIterator(this);  /* confusion on Symbol.iterator */
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.position = 0;
    }

next() {
    if(this.position >= this.group.members.length) {
        return {done: true}
    }
    else {
        let result = {value: this.group.members[this.position], /* shouldn't [this.position++] beacuse we want next value */
        done: false}
        this.position++;
        return result;
    }
}
}

for( let value of Group.from(["a","b","c"])) {
    console.log(value);
}
