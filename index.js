const wakeDog = (dogName, dogBreed) => {
  const string = `Wake ${dogName} the ${dogBreed}`
  console.log(string)
  return string
}
const leashDog = (dogName, dogBreed) => {
  const string = `Leash ${dogName} the ${dogBreed}`
  console.log(string)
  return string
}
const walkToPark = (dogName, dogBreed) => {
  const string = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log(string)
  return string
}
const throwFrisbee = (dogName, dogBreed) => {
  const string = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(string)
  return string
}
const walkHome = (dogName, dogBreed) => {
  const string = `Walk home with ${dogName} the ${dogBreed}`
  console.log(string)
  return string
}
const unleashDog = (dogName, dogBreed) => {
  const string = `Unleash ${dogName} the ${dogBreed}`
  console.log(string)
  return string
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

const exerciseDog = (dogName, dogBreed) => {
  return routine.map(doActivity => doActivity(dogName, dogBreed))
}
