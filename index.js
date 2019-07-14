const wakeDog = (name, breed) => {
    const action = `Wake ${name} the ${breed}`;
    console.log(action);
    return action
};

const leashDog = (name, breed) => {
    const action = `Leash ${name} the ${breed}`;
    console.log(action);
    return action
};

const walkToPark = (name, breed) => {
    const action = `Walk to the park with ${name} the ${breed}`;
    console.log(action);
    return action;
};

const throwFrisbee = (name, breed) => {
    const action = `Throw the frisbee for ${name} the ${breed}`;
    console.log(action);
    return action;
};

const walkHome = (name, breed) => {
    const action = `Walk home with ${name} the ${breed}`;
    console.log(action);
    return action;
};

const unleashDog = (name, breed) => {
    const action = `Unleash ${name} the ${breed}`;
    console.log(action);
    return action;
};

const routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog,
];

const exerciseDog = (dogName, dogBreed) => {
    return routine.map(v => {
        return v(dogName, dogBreed)
})};

