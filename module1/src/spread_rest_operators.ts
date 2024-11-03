{
 
    //   Spread Operator => ...

    const age10 : number[] = [22,23,26];
    const age20 : number[] = [27,28,29];

    age10.push( ...age20 )

    //  ANSWER : 22 ,23 ,26,27,28,29

    // object => spread operator  ...

    const mySelf10 = {

        name : 'Affnan',
        age: 21 ,
        desiganation : 'Junior Full Stack Developer',
        salary : '$75,000',
        isDeveloper : true
    };

    const mySelf20 = {

        name : 'Mimnun',
        age: 25 ,
        desiganation : 'Financial Manager',
        salary : '$95,000',
        isDeveloper : true
    };


    const brothers = {
     
        ...mySelf10,
        ...mySelf20

    }



    //  Rest Operator 

    const total_words = ( ...words : string[]  ) => {
     
        words.forEach(  (word:string)=> console.log(`Alphabets are ${word} `)  )


    }

    total_words('a','b','c', 'd', 'e');













}