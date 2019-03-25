import UserInput from "./../src/super-calculator";
describe('UserInput', function () {
    it('should correctly determine and return age', function() {
        let testUser = new UserInput(1994, 2, 14, 75);
        expect(testUser.getAge()).toEqual(25);
    });
    it('should return their age in Mercury years', function() {
        let testUser = new UserInput(1994, 2, 14, 75);
        let age = testUser.getAge();
        expect(testUser.getMercuryAge(age)).toEqual(104);
    });
    it('should return their age in Venus years', function() {
        let testUser = new UserInput(1994, 2, 14, 75);
        let age = testUser.getAge();
        expect(testUser.getVenusAge(age)).toEqual(40);
    });
    it('should return their age in Mars years', function() {
        let testUser = new UserInput(1994, 2, 14, 75);
        let age = testUser.getAge();
        expect(testUser.getMarsAge(age)).toEqual(13);
    });
    it('should return their age in Jupiter years', function() {
        let testUser = new UserInput(1994, 2, 14, 75);
        let age = testUser.getAge();
        expect(testUser.getJupiterAge(age)).toEqual(2);
    });
    it('should determine how many years a user has left to live on each planet', function() {
        let testUser = new UserInput(1994, 2, 14, 75);
        let age = testUser.getAge();
        let lifeExpectancy = testUser.getLifeExpectancy(age);
        let jupiterExpectancy = testUser.getJupiterAge(lifeExpectancy);
        let marsExpectancy = testUser.getMarsAge(lifeExpectancy);
        let venusExpectancy = testUser.getVenusAge(lifeExpectancy);
        let mercuryExpectancy = testUser.getMercuryAge(lifeExpectancy);
        expect(lifeExpectancy, jupiterExpectancy, marsExpectancy, venusExpectancy, mercuryExpectancy).toEqual(50, 5, 29, 89, 229);
    });
    it('should determine how many years a user has outlived on a planet', function() {
        let testUser = new UserInput(1994, 2, 14, 20);
        let age = testUser.getAge();
        let lifeExpectancy = testUser.getLifeExpectancy(age);
        let jupiterExpectancy = testUser.getJupiterAge(lifeExpectancy);
        let marsExpectancy = testUser.getMarsAge(lifeExpectancy);
        let venusExpectancy = testUser.getVenusAge(lifeExpectancy);
        let mercuryExpectancy = testUser.getMercuryAge(lifeExpectancy);
        expect(lifeExpectancy, jupiterExpectancy, marsExpectancy, venusExpectancy, mercuryExpectancy).toEqual(5, 0, 3, 8, 21);
    });
});
//Determines how many years a user has left to live on each planet.
//If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.