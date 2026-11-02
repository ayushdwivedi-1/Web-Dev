class Color {
    constructor(r,g,b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    greet() {
        return`Hello there...`
    }
}

const c1 = new Color(255,67,89);

class Cat extends Color {
    constructor(name,age,r,g,b) {
        super(r,g,b);
        this.name = name;
        this.age = age;
    }
    meow() {
        return `Meow...!`
    }
}

const cat1 = new Cat('Luna',25)