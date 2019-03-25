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
});
//Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
//Returns their age in Venus years. (A Venus year is .62 Earth years.) 
//Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
//Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
//Determines how many years a user has left to live on each planet.
//If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.