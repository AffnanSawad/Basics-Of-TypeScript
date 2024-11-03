"use strict";
{
    //  ********  Function ********
    //  Normal Function 
    function summation(num1, num2) {
        return num1 + num2;
    }
    //  Arrow Function 
    const arrow_func_sum = (a1, a2) => a1 + a2;
    //  Object er vitore -> normal fuction thakle take => Method bole..
    const user = {
        name: 'AFFNAN',
        age1: 21,
        newAge(age) {
            // this function er uporer value jate pai;
            return this.age1 + age;
        }
    };
    const user1 = {
        name: 'AFFNAN',
        age11: 21,
        newAge22(age) {
            // this function er uporer value jate pai;
            return `this.age11 + age`;
        }
    };
    //  ARRAY
    const arr = [1, 2, 3, 4];
    const newArray = arr.map((item) => item * item);
    //  *****  END ****** 
}
