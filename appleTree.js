"use strict"

class AppleTree {

    constructor(tree_name, tree_age, tree_height, treeMatureAge, treeHealthStatus, treeLimitAge, treeStopAge) {

        this._name = tree_name;
        this._age = tree_age;
        this._height = tree_height;
        this._fruits = [];
        this._harvested = '';
        this._healthStatus = treeHealthStatus || true;
        this._matureAge = treeMatureAge;
        this._limitAge = treeLimitAge;
        this._stopAge = treeStopAge;
    }

    // Getter

    get name() {
        return this._name;
    }

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
        return this.harvested;
    }

    get healthStatus() {
        return this.healthStatus;
    }

    get matureAge() {
        return this.matureAge;
    }

    get limitAge() {
        return this.limitAge;
    }

    get stopAge() {
        return this.stopAge;
    }

    // Setter

    set age(value) {
        this._age = value;
    }

    set height(value) {
        this._height = value;
    }

    set fruit(value) {
        this._fruit = value;
    }

    set harvested(value) {
        this._harvested = value;
    }

    set healthStatus(value) {
        this._healthStatus = value;
    }

    set matureAge(value) {
        this._matureAge = value;
    }

    set limitAge(value) {
        this._limitAge = value;
    }

    set stopAge(value) {
        this._stopAge = value;
    }

 // Grow
 grow() {
    this._age++;
    /**
     * Buatlah sebuah kondisi jika kalau umur pohon lebih besar atau sama dengan dari umur limitnya maka pohon tidak sehat
     * jika umur pohon lebih kecil dari umur pohon berhenti tumbuh, maka pohon bertambah tinggi secara random
     * tinggi pohon dibulatkan ke bulatan terbesar (dalam meter)
     */
}

//   Produce some fruits
produceFruits() {
    /**
     * jika pohon sudah mencapai umur matang (mature) atau lebih besar dari umur matangnya, maka pohon akan berbuah
     * Buat kelas buah di luar kelas pohon
     * Hasil buah akan disimpan di dalam properti fruits
     */
}

// Get some fruits
harvest() {
    /**
     * Menentukan jumlah seluruh buah, buah yang jelek, buah yang bagus
     */
}
}

// Class Buah

class AppleFruit {
  /**
   * tentukan kualitas buah "bad" atau "Good"
   */
}