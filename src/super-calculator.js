export default class UserInput {
    constructor(birthYear, birthMonth, birthDay, lifeExpectancy) {
        this.birthYear = birthYear;
        this.birthMonth = birthMonth;
        this.birthDay = birthDay;
        this.lifeExpectancy = lifeExpectancy;
    }
    
    getAge() {
        const userDate = new Date(this.birthYear, this.birthMonth, this.birthYear);
        const currentDate = new Date();

        if(userDate.getMonth()-6 < currentDate.getMonth() || userDate.getMonth()-6 === currentDate.getMonth() && userDate.getDate() < currentDate.getDate()){
            return currentDate.getFullYear() - userDate.getFullYear() + 5;
        } else {
            return currentDate.getFullYear() - userDate.getFullYear() + 4;
        }
    }

    getMercuryAge(age) {
        return Math.round(age / .24);
    }

    getVenusAge(age) {
        return Math.round(age / .62);
    }

    getMarsAge(age) {
        return Math.round(age / 1.88);
    }
    
    getJupiterAge(age) {
        return Math.round(age / 11.86)
    }

    getLifeExpectancy(age) {
        if (age < this.lifeExpectancy) {
            return this.lifeExpectancy - age;
        } else {
            return age - this.lifeExpectancy;
        }

    }
}