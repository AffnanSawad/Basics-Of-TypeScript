{  

    //   *** UNION - INTERSECTION ***
   
   
    //  UNION ( | )


    type developer = "SkillFull" | "UnksillFull"

    const my_Self : developer = "SkillFull";

    //   
    
    type objects1 = {

       age : number ;
       role : string 
    }
    type objects2 = {

        name: string,

        type : 'Front-End' | 'Full-Stack'
    }

    type myThings_Union  = objects1 | objects2

    const my_Self_1 : myThings_Union = {

        name : 'Affnan' ,
    //    missing : union so somossa nai ;
        age: 21 ,
        role : 'Full Stack Developer'
    }


    //  INTERSECTION (  &   )

    type objects11 = {

        age : number ;
        role : string 
     }
     type objects22 = {
 
         name: string,
 
         type : 'Front-End' | 'Full-Stack'
     }

     type myThings_intersection  = objects11 & objects22

     const my_Self_2 : myThings_intersection = {

        name : 'Affnan' ,
        type: 'Full-Stack',
        age: 21 ,
        role : 'Full Stack Developer'
    }



//       ***********  END   **********













}