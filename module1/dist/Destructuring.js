"use strict";
{
    //  ****  DESTRUCTURING ****
    //  Object Destructure
    const information = {
        name: 'Affnan',
        age: 21,
        address: {
            Permanent: 'Khulshi',
            Present: 'Joynogor'
        }
    };
    const { name, address: { Permanent } } = information;
    //  Jodi Key Property Change Korte hoi . Like name => my_name , present => Now_ location
    const { name: my_name, address: { Permanent: Now_Location } } = information;
    //  ARRAY 
    const age_now = [1, 2, 3, 4, 5, 6];
    const [, , third, ...restOnes] = age_now;
    //    ********  END *********
}
