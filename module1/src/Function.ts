{
    
    //  ********  Function ********

    //  Normal Function 

    function summation( num1 : number , num2:number ) : number {

     return num1 + num2 ;

    }


    //  Arrow Function 
    // 

    const arrow_func_sum = ( a1:number , a2:number) : number => a1 + a2 ;


    //  Object er vitore -> normal fuction thakle take => Method bole..

    const user = {

        name: 'AFFNAN',
        age1 : 21 ,

        newAge( age : number ) : number {
            
            // this function er uporer value jate pai;
            return this.age1 + age 

        }
    }



    const user1 = {

        name: 'AFFNAN',
        age11 : 21 ,

        newAge22( age : number ) : string {
            
            // this function er uporer value jate pai;
            return `this.age11 + age` ; 

        }
    }



    //  ARRAY

    const arr : number[] = [1,2,3,4];

    const newArray : number[] = arr.map( (item :number ) : number => item * item)



    //  *****  END ****** 












}