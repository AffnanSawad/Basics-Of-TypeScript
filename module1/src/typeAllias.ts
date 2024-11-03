{

//    Type Allias : ekta structure banano ; jate setake call kore same structure er diff value nite pari.


 type user = {
    
    user_name : string ;
    age : number ;
    skilss : string[];
    isDeveloper : boolean ;
 }

 const affnan : user = {
 
    user_name : 'Affnan' ,
    age : 21 ,
    skilss : [ 'frontend' , 'backend'] ,
    isDeveloper : true 

 }

 const affnan1 : user = {
 
    user_name : 'Affnan1' ,
    age : 20 ,
    skilss : [ 'frontend' , 'backend'] ,
    isDeveloper : true 

 }

//   function

type  summation = ( x :number , y : number) => number;

//  

const add : summation = ( x , y) => {

    return x + y ;
}

add(2,2)


const multiplication : summation = ( a , b) => {

    return a * b ;
}
multiplication(2,3)





//   *********** END ************


















}