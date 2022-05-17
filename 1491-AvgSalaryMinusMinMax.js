/**
 * You are given an array of unique integers salary where salary[i] is the salary of the ith employee.
 * Return the average salary of employees excluding the minimum and maximum salary
 * Answers within 10^-5 of the actual answer will be accepted.
 */
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = (salary) => {
  const ends = { low: salary[0], high: salary[0] };
  let total = salary[0];
  for (let i = 1; i < salary.length; i += 1) {
    if (salary[i] > ends.high) {
      ends.high = salary[i];
    }
    if (salary[i] < ends.low) {
      ends.low = salary[i];
    }
    total += salary[i];
  }

  return (total - (ends.low + ends.high)) / (salary.length - 2);
};

const salary = [4000, 3000, 1000, 2000];
average(salary) // 2500