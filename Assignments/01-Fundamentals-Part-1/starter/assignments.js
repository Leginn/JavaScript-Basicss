// LECTURE: Values and Variables

const country = "The Netherlands";
let population = "17000000";
const continent = "Europe";

console.log("I live in: " + country + ", This lays in " + continent + ", there are " + population + " here.");

//LECTURE: Data Types
let isIsland = false;
let language;

console.log(typeof isIsland)
console.log(typeof language)
console.log(typeof country)
console.log(typeof population)

//LECTURE: let, const and var
language = "Dutch";

//LECTURE: Basic Operators
console.log(population / 2);
console.log(population + 1)
const finland = "6000000";
if (population > finland) {
    console.log("There are more people in The Netherlands then in Finland");
} else if (finland > population) {
    console.log("Finland has a bigger population then The Netherlands");
}
const average = "33000000";
if (population >= average) {
    console.log("The Netherlands has reached the average amount of population.");
} else if (population < average) {
    console.log("The Netherlands has less then average amount of people in their country.");
}
let description = "Portugal is in Europe, and its 11 million people speak portuguese";

//LECTURE: Strings and Template Literals

