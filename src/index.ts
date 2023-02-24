interface User {
  name: string;
  age: number;
}

function greet(data: User) {
  console.log(`Hello ${data.name}!You are ${data.age} years old`);
  return data;
}
export { greet };
