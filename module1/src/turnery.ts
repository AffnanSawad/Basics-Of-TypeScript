{
    
    // Ternary, optional chaining & nullish coalescing operator

    // ternary ( ? ) : jdi condition sotti hoi taile dekabe nahole : onnoti dekabe ;

    const age : number = 22 ;

    const isAdult = age >= 18 ? "Adult" : " Not Adult";

   console.log({isAdult})


//     NULLISH ( ?? ) => ( null , undefine er upor depend kore decesion making korte hole )

const authentication = null ;

const logIn = authentication ?? "Guest User" ;

console.log({logIn});


//  Optional Chaining 

const information = {
     
    name:'Affnan',
    age: 21 ,

    address: {

        Permanent : 'Khulshi',
        Present : 'Joynogor'
    
    }
}

 
//  optional chaining + Nullish Operator
const Per_Address = information?.address?.Permanent  ?? "No Permanent Address" ;
















}