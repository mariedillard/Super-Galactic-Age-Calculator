export default class UserInput {
    constructor(birthYear, birthMonth, birthDay, lifeExpectancy) {
        this.birthYear = birthYear;
        this.birthMonth = birthMonth;
        this.birthDay = birthDay;
        this.lifeExpectancy = lifeExpectancy;
    }
    
    getAge() {
        let userDate = new Date(this.birthYear, this.birthMonth, this.birthYear);
        let currentDate = new Date();

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
}