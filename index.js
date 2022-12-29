// function EmployeeFactory() {
//     this.create = (name, type) => {
//         if (type == 'dev') {
//             return new Developer(name);
//         }
//         else if (type == 'test') {
//             return new Tester(name);
//         }
//     }
// };

// function Developer(name) {
//     this.name = name;
//     this.type = 'developer';
// };

// function Tester(name) {
//     this.name = name;
//     this.type = 'tester';
// };

// function say() {
//     console.log(`Hello, my name is ${this.name} and I am a ${this.type}.`);
// }

// const employeeFactory = new EmployeeFactory();
// const employees = [];

// employees.push(employeeFactory.create('Petar', 'dev'));
// employees.push(employeeFactory.create('Zivko', 'test'));

// employees.forEach(emp => {
//     say.call(emp);
// });

// function Process(state) {
//     this.state = state;
// };

// const Singleton = (function () {
//     function ProcessManager() {
//         this.numProcess = 0;
//     };
//     let pManager;
//     function createProcessManager() {
//         pManager = new ProcessManager();
//         return pManager;
//     };

//     return {
//         getProcessManager: () => {
//             if (!pManager) {
//                 pManager = createProcessManager();
//             }
//             return pManager;
//         }
//     }
// })();

// const processManager1 = Singleton.getProcessManager();
// const processManager2 = Singleton.getProcessManager();

// console.log(processManager1 === processManager2);

// const SingletonPersonFactory = (function () {
//     function SingletonPerson(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     let personInstance;
//     return {
//         getPersonInstance: () => {
//             if (!personInstance) {
//                 personInstance = new SingletonPerson('Mika', 101);
//                 personInstance.constructor = null;
//             }
//             return personInstance;
//         }
//     };
// })();

// const mika = SingletonPersonFactory.getPersonInstance();
// console.log(mika);

// console.log(add(2, 4));

// var add = (a, b) => {
//     return a + b;
// }