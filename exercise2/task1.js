//  Let’s consider a backend service that performs a set of asynchronous tasks: A, B, C, D and E.
// The task dependencies are: Tasks A and B are independent; Task C depends on Task A; Task D
// depends on Task B and Task C; Task E depends on Task D.
// a. Submit a nodeJS code snippet in tasks1.js, that executes these asynchronous tasks in
// the expected order, each accepting and passing data locally to/from each other as
// defined above.
// b. Suppose Task A works on a HUGE dataset, consuming massive compute and time
// resources. Demonstrate in tasks2.js, how you would reconfigure the tasks, if Task A
// were to be broken up to work sequentially on N smaller chunks of data

// SCENARIO A (task1)
const taskA = () => new Promise((resolve) => resolve("Task A"));
const taskB = () => new Promise((resolve) => resolve("Task B"));
const taskC = (aData) =>
  new Promise((resolve) => resolve(`${aData} -> Task C`));
const taskD = (bData, cData) =>
  new Promise((resolve) => resolve(`${bData} -> ${cData} -> Task D`));
const taskE = (dData) =>
  new Promise((resolve) => resolve(`${dData} -> Task E`));

const executeTasks = async () => {
  try {
    // run tasks A and B simoultaneously (As both are independent)
    const [resultA, resultB] = await Promise.all([taskA(), taskB()]);
    console.log("A : " + resultA); // o/p -> A : Task A
    console.log("B : " + resultB); // o/p -> B : Task B

    // run task C with data from task A (as task C depends on task A)
    const resultC = await taskC(resultA);
    console.log("C : " + resultC); // o/p -> C : Task A -> Task C

    // run task D with data from task B & C (as task D depends on task B & C)
    const resultD = await taskD(resultB, resultC);
    console.log("D : " + resultD); // o/p -> D : Task B -> Task A -> Task C -> Task D

    // run task E with data from task D (as task E depends on taskD)
    const resultE = await taskE(resultD);
    console.log("E : " + resultE); // o/p -> E : Task B -> Task A -> Task C -> Task D -> Task E
  } catch (error) {
    console.error("Error:", error);
  }
};

// Call the function to execute the tasks
executeTasks();
