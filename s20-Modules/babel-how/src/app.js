var cakeRecipe;
const eggCount = 4;
let sugarAmount = 1.5;
const timeToMix = 10;

const ingredients = [];
ingredients.push(`${eggCount} eggs`);
ingredients.push(`${sugarAmount} glass of sugar`);
ingredients.push(`1 ½ cups all-purpose flour`);
console.log(...ingredients);
cakeRecipe = `add ${eggCount} eggs and ${sugarAmount} glass of sugar into the mixer bowl, and mix for 
${timeToMix} minutes\nadd flour then mix again`;
const cook = () => {
  console.log(cakeRecipe);
  console.log('cake is cooking for 40mins');
};
cook();

class Person {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  greet() {
    return `Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${
      new Date().getFullYear() - this.birthYear
    } years old.`;
  }
}

const matthew = new Person('Matthew', 'Dunn', 1980);
console.log(matthew.greet());
