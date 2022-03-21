const sumSalary = (salary) => {
  let result = 0;
  for (let person in salary) {
    let personalValue = salary[person];
    if (personalValue && typeof personalValue === 'number' && personalValue !== Infinity && personalValue !== -Infinity) { result += personalValue };
  }
  return result;
}