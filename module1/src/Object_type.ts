{

//    ****** Object ********

// Normal JAVA SCRIPT  Object 

const mySelf = {

    name : 'Affnan',
    age: 21 ,
    desiganation : 'Junior Full Stack Developer',
    salary : '$75,000',
    isDeveloper : true
};


//  Object in TypeScript :

const my_Self : {
  
    name: string;
    age: number ;
    role : string ;
    skilss : string[];
    //  ReadOnly : Not Changable
    readonly isDeveloper: boolean ;   
//    optional : value thakteo pare na thakteo pare
    salary?: number ;
    // literal type : fixed value
    address : 'Khulshi'
} = {
    //  Values
    name: 'Affnan',
    age : 21,
    role : 'Junior Full Stack Developer',
    skilss : ['FrontEnd' , 'BackEnd'],
    isDeveloper: true ,
    address : 'Khulshi'
}
 

//               **** END ****

}