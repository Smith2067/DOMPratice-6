var navBar = document.getElementById("navigation");
console.log(navBar.className);
console.log(navBar.classList);
navBar.classList.add("newClass");
navBar.classList.add("anotherNewClass", "ohWowItIsAnotherClass", "howManyOfTheseAreGoingToBeAdded", "okThatIsEnoughStopIt");
console.log(navBar.className);
console.log(navBar.classList);
navBar.classList.remove("anotherNewClass");
console.log(navBar.className);
console.log(navBar.classList);
navBar.classList.remove("ohWowItIsAnotherClass", "howManyOfTheseAreGoingToBeAdded", "okThatIsEnoughStopIt");
console.log(navBar.className);
console.log(navBar.classList);