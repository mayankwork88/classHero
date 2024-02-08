// 2 schools with 5 students each, each student with a range of scores between 1 - 99. Include
// this as a hardcoded assignment statement at the top of your code snippet. All the code
// snippets below can be submitted in syntax.js. Input values like name, school and score ranges
// can be hardcoded in the one-line statements for easy testing.
// a. Write a one-line statement that can return the record which matches a given name
// b. How would you modify the above statement if some items in the list were null?
// c. Write a one-line statement that can return a set of records within a certain
// min_score, max_score range, belonging to a certain school
// d. Write a one-line statement that returns a list of distinct values in the school field
// e. Write a function that can be called as a parameter to the list.sort() function, and that
// sorts the records first by school, and then by name

const records = [
  { name: "Emily", school: "School A", score: 72 },
  { name: "Joshua", school: "School B", score: 52 },
  { name: "Sophia", school: "School A", score: 78 },
  { name: "Liam", school: "School B", score: 85 },
  { name: "Olivia", school: "School A", score: 91 },
  { name: "Ethan", school: "School A", score: 90 },
  { name: "Ava", school: "School B", score: 74 },
  { name: "Noah", school: "School A", score: 62 },
  { name: "Isabella", school: "School B", score: 93 },
  { name: "Mason", school: "School B", score: 68 },
];

// a. Write a one-line statement that can return the record which matches a given name
const matchedRecord = (records, name) =>
  records.find((record) => record.name.toLowerCase() === name.toLowerCase());
console.log(matchedRecord(records, "Ethan"));

// b. How would you modify the above statement if some items in the list were null?
// method 1 :- will add && operator to check whether an item is null or not
const recordWithNameOrNull = (records, name) =>
  records.find(
    (record) => record && record?.name?.toLowerCase() === name?.toLowerCase()
  );
console.log(recordWithNameOrNull(records, "Ethan"));

// method 2 :- we can use chaining operator (more preffered way now-a-days)
const recordWithNameOrNull2 = (records, name) =>
  records.find((record) => record?.name?.toLowerCase() === name?.toLowerCase());
console.log(recordWithNameOrNull2(records, "Ethan"));

// c. Write a one-line statement that can return a set of records within a certain
// min_score, max_score range, belonging to a certain school
const filteredRecord = (records, school, minScore, maxScore) => {
  return records?.filter(
    (record) =>
      record?.school?.toLowerCase() === school?.toLowerCase() &&
      record?.score >= minScore &&
      record?.score <= maxScore
  );
};
console.log(filteredRecord(records, "school b", 80, 98));

// d. Write a one-line statement that returns a list of distinct values in the school field
const distinctSchools = [...new Set(records.map((record) => record.school))];
console.log(distinctSchools);

// e. Write a function that can be called as a parameter to the list.sort() function, and that
// sorts the records first by school, and then by name
const sortRecords = (a, b) => {
  if (a.school === b.school) return a.name.localeCompare(b.name);
  return a.school.localeCompare(b.school);
};
records.sort(sortRecords);
console.log(records);
