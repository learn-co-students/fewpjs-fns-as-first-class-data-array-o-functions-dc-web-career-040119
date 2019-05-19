// 1) has a function wakeDog
//       2) has a function leashDog
//       3) has a function walkToPark
//       4) has a function throwFrisbee
//       5) has a function walkHome
//       6) has a function unleashDog



    function wakeDog(dogName, dogBreed){
      return `Wake ${dogName} the ${dogBreed}`
    };

    function leashDog(dogName, dogBreed){
      return `Leash ${dogName} the ${dogBreed}`
    };

    function walkToPark(dogName, dogBreed){
      return `Walk to the park with ${dogName} the ${dogBreed}`
    };

    function throwFrisbee(dogName, dogBreed){
      return `Throw the frisbee for ${dogName} the ${dogBreed}`
    };

    function walkHome(dogName, dogBreed){
      return `Walk home with ${dogName} the ${dogBreed}`
    };

    function unleashDog(dogName, dogBreed){
      return `Unleash ${dogName} the ${dogBreed}`
    };

    const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

    function exerciseDog(dogName, dogBreed){
      const arrayOFunctions = routine.map(dogAction => dogAction(dogName, dogBreed));
      return arrayOFunctions();
    };

    // function arrayOFunctions(){}

    // console.log("Wake Byron the poodle");
    // console.log("Leash Byron the poodle");
    // console.log("Walk to the park with Byron the poodle");
    // console.log("Throw the frisbee for Byron the poodle");
    // console.log("Walk home with Byron the poodle");
    // console.log("Unleash Byron the poodle");
