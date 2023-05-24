const updateRemoteStudents = require("../update-remote-students.js");

describe("updateRemoteStudents()", () => {
    test("returns an empty array when passed an empty array", () => {
      //arrange
      const testInput = [];
      const expectedOutput = [];
      //act
      const result = updateRemoteStudents(testInput);
      //assert
      expect(result).toEqual(expectedOutput);
    });
    test("returns a new array when passed an array", () => {
        //arrange
        const testInput = [];
        //act
        const result = updateRemoteStudents(testInput);
        //assert
        expect(result).not.toBe(testInput);
      });
    test("returns an array of objects when passed an array of objects", () => {
        //arrange
        const testInput = [
            { name: 'Euler', age: 27, location: 'remote' },
            { name: 'Hypatia', age: 31, location: 'leeds' }
        ];
        const expectedOutput = [
            { name: 'Euler', age: 27, location: 'remote' },
            { name: 'Hypatia', age: 31, location: 'leeds' }
        ];
        //act
        const result = updateRemoteStudents(testInput);
        //assert
        expect(result).toEqual(expectedOutput);
      });
      test("returns a new array of objects when passed an array of objects", () => {
        //arrange
        const testInput = [
            { name: 'Euler', age: 27, location: 'remote' },
            { name: 'Hypatia', age: 31, location: 'leeds' }
        ];
        //act
        const result = updateRemoteStudents(testInput);
        //assert
        expect(result).not.toBe(testInput);
      });  
      test(`checking for the location key on each object, and adding one with a string value of "remote" to any found without`, () => {
        //arrange
        const testInput = [
            { name: 'Euler', age: 27, },
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
        ];
        const expectedOutput = [
            { name: 'Euler', age: 27, location: 'remote'},
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 , location: 'remote'},
            { name: 'Tao', age: 47, location: 'manchester' }
        ];
        //act
        const result = updateRemoteStudents(testInput);
        //assert
        expect(result).toEqual(expectedOutput);
      }); 


});