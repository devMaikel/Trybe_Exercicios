
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const person = { ...user, ...jobInfos};

console.log(person);

const imprimir = ({ name, age, nationality, profession, squad}) => {
  //"Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"
  console.log(`Hi, my name is ${name}, i'm ${age} years old and i'm ${nationality}. I work as a ${profession} and my squad is ${squad}`);
}
imprimir(person);