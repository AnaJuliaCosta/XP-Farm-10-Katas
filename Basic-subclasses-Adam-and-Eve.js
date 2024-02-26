class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Man extends Human {
    constructor(name) {
        super(name, 'male');
    }
}

class Woman extends Human {
    constructor(name) {
        super(name, 'female');
    }
}

class God {
    /**
     * @returns Human[]
     */
    static create() {
        const adam = new Man('Adam');
        const eve = new Woman('Eve');
        return [adam, eve];
    }
}

module.exports = { Human, Man, Woman, God };