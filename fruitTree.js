"use strict"

class Tree {

    constructor(treeMatureAge, treeLimitAge, treeStopAge) {

        this._age = 0;
        this._height = 0;
        this._fruits = [];
        this._harvested = '';
        this._healthStatus = true;
        this._matureAge = treeMatureAge;
        this._limitAge = treeLimitAge;
        this._stopAge = treeStopAge;
    }

    // Getter

    get age() {
        return this._age;
    }

    get height() {
        return this._height;
    }

    get fruit() {
        return this._fruit;
    }

    get harvested() {
        return this._harvested;
    }

    get healthStatus() {
        return this._healthStatus;
    }

    get matureAge() {
        return this._matureAge;
    }

    get limitAge() {
        return this._limitAge;
    }

    get stopAge() {
        return this.stopAge;
    }

    // Method
    
    grow() {
        this.age++
        let addingHeight = 0;

        if (this.age < this.limitAge) {
            addingHeight = Math.round(Math.random() * 100) / 100;
            this._height += addingHeight
        }
        if (this.age > this.StopAge) {
            this.healthStatus = false;
        }

        return this;
    }

    produceFruits() {
        if (this.age >= this.matureAge) {
            let fruitstotal = Math.round(Math.random() *100);

            for(let i = 1; i <= fruitstotal; i++) {
                this.fruits.push(i);
            }
        }
    }

    harvest() {
        let bagus = true;
        let jelek = false;
    }
}

class fruit {
    constructor(num) {
        this.quality = setQuality(num);
    }

    setQuality(num) {
        if(Math.random() > num){
            this.quality = 'bagus';
        } else {
            this.quality = 'jelek';
        }
    }
}