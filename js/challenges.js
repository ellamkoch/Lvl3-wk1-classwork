// data set used for tasks is a list of students, each student has a name, score and city within the array


//variables
const students = [
    { name: "Alicia", score: 80, city: "New York" },
    { name: "Luis", score: 90, city: "New York" },
    { name: "Maria", score: 70, city: "Los Angeles" },
    { name: "Juan", score: 100, city: "Los Angeles" },
    { name: "Sarah", score: 60, city: "New York" },
    { name: "Ethan", score: 74, city: "Chicago" },
    { name: "Olivia", score: 88, city: "Houston" },
    { name: "Mason", score: 55, city: "Phoenix" },
    { name: "Isabella", score: 95, city: "Philadelphia" },
    { name: "Noah", score: 67, city: "Chicago" },
    { name: "Emma", score: 82, city: "New York" },
    { name: "Liam", score: 91, city: "San Antonio" },
    { name: "Sophia", score: 69, city: "San Diego" },
    { name: "Jacob", score: 77, city: "Dallas" },
    { name: "Mia", score: 85, city: "San Jose" },
    { name: "Michael", score: 58, city: "Houston" },
    { name: "Charlotte", score: 93, city: "Phoenix" },
    { name: "Benjamin", score: 72, city: "Philadelphia" },
    { name: "Amelia", score: 79, city: "San Antonio" },
    { name: "Elijah", score: 86, city: "San Diego" },
    { name: "Harper", score: 64, city: "Dallas" },
    { name: "James", score: 97, city: "San Jose" },
    { name: "Evelyn", score: 71, city: "Chicago" },
    { name: "Alexander", score: 54, city: "New York" },
    { name: "Abigail", score: 83, city: "Los Angeles" },
    { name: "Daniel", score: 76, city: "Houston" },
    { name: "Emily", score: 89, city: "Phoenix" },
    { name: "Matthew", score: 62, city: "Philadelphia" },
    { name: "Avery", score: 94, city: "San Antonio" },
    { name: "Joseph", score: 68, city: "San Diego" }
];

// constant freeze variables are made with all capital cases and are separated with snake cases
const MIN_PASSING_GRADE = 70;

//Task 1: Create a function that does a manual loop through the array to pick out the passing students
// Challenge
//1. make ES Lint happy and have no warnings
//2. rewrite using array methods such as .filter & .map
//3. keep it simple and readable

function getPassingStudentNames(list) { // list equals the student array in this case
    // first we need to create an array to store the passing students
    //   const result = []; // empty array
    // to get a bonus, destruct the array
    // for method
    //   for (let i = 0; i < list.length; i += 1) {
    //     //can also do i++ instead of i += 1
    //    const student = list[i];
    //    console.log (student.city); this is a dictionary and uses dot notation.
    //     if (student.score >= MIN_PASSING_GRADE) {
    //       result.push(student.name.toUpperCase());
    //     }
    //   };
    //   return result;

    // ForEach method
    // 1. filter to grab only passing students
    //     const passingStudents = list.filter((student) => { // => makes it go through the array and look at each student
    //         return student.score >= MIN_PASSING_GRADE; // if a students score is 70 or greater, they get put into the array
    //     });
    // converts student objects into names and applies Upper Case to them
    //     const passingNames = passingStudents.map((student) => {
    // passingStudents essentially becomes a new array of only the students that we pulled out above that pass
    //         return student.name.toUpperCase(); //returns the student's name from the new array and makes it uppercase
    //     });

    //     return passingNames; // returns the values of the passingStudents array
    // }
    // // test the function
    // const passingStudents = getPassingStudentNames(students); // calls students in new function of getPassingStudentNames
    // console.log("Passing students: ", passingStudents);

    // Bonus: destructured array
    const passingStudents = list.filter(({ score }) => {  // goes through the array and filters by score
        return score >= MIN_PASSING_GRADE; // tells it to only return the score property
    });

    const passingNames = passingStudents.map(({ name }) => { // goes through the passingStudents gives the name property
        return name.toUpperCase(); // returns only the names of the passing students and capitalizes them
    });

    return passingNames; // returns the passingNames of the students
}
// test the function
const passingStudents = getPassingStudentNames(students); // calls students in new function of getPassingStudentNames
console.log("Passing students: ", passingStudents);


//run is a keyword that node uses to tell it to execute something.
//code runner does the node command instead of doing it in git with npm run
// npm is a cli assistant
// ok to use copilot to expand data, i.e., expand it up to 30 students - done

// Task 2: Add up the average score by city
// challenge
// 1. rewrite using .filter, .reduce and destruct the array
// 2. do not mutate the input array
// 3. try to keep functions short and declarative

// function getAverageScoreByCity(list, city) {
// let total = 0;
// let count = 0;

// update the loop to a for each or any other type of loop
// for (let i = 0; i < list.length; i += 1) {
// earn a bonus by destructuring the array and expand the response to include the city in another function
//         const student = list[i];

//         if (student.city === city) {
//             total += student.score;
//             count += 1;
//         }
//     }
//     if (count === 0) {
//         return 0;
//     }
//     return total / count;
// }
// forEach method with filter and reduce and destructuring
function getAverageScoreByCity(list, city) {
    //1. Filter first
    const studentsByCity = list.filter(({ city: studentCity }) => {
    //takes each student out of list and renames their city property to studentCity
        return studentCity === city; // looks at cities in the list and compares them to our new studentCity variable
        // and filters it so we have a unique list of city names
    });
    // return studentsByCity; // to test the filter
    //2. Now to reduce
    const total = studentsByCity.reduce((sum, { score }) => //takes the array of filtered cities & reduces the score down to a total sum for each city
        sum + score, 0); // this adds the scores together for students in the filtered cities and starts at 0.
    if (studentsByCity.length === 0) { //  this is a safety param, if there are no students belong to a city in our unique list, it returns a 0,
        return 0;
    }
    const average = (total / studentsByCity.length).toFixed(2); //toFixed(2) makes it so only 2 spots after the decimal point show
    // computes the avg, which is the sum of the scores for each city/ total # of students for a named city.
    return { city, average }; // returns the city and the average
}

// testing the function to see if we can get the avg by city
// const laAvg = getAverageScoreByCity(students, "Los Angeles");
// console.log("Avg for Los Angeles:", laAvg);

// created a way to list all the cities without having to list them individually and meet the other part of the bonus
const cityList = [...new Set(students.map((student) => student.city))]; //creates a variable to store the list of cities that students belong to.

// as part of the extract the list of cities is put into a new set of data into an array and maps it.
cityList.forEach((cityName) => { // loops through the cities in the list and calls the function for each.
    const avgScores = getAverageScoreByCity(students, cityName); //logs the avg score for each city
    console.log(avgScores); // gives us our average score by cities from the array.
});


// const averageByCity = getAverageScoreByCity(students, "Los Angeles");

// console.log("Average by City: ", averageByCity.toFixed(2));
// toFixed is a method that limits the number of decimal places

// Task 3: Group the results to make a summary object with the following the shape
// "New York": { count: X, average: Y },
// "Los Angeles": { count: X, average: Y },

// Challenge:
// 1. Implement this using the .reduce() function
// 2. Use objects and dictionaries (keys = city names)
// 3. Reuse getAverageScoreByCity or common helpers if it makes sense.
// 4. Avoid repeating code and keep functions small

//Since I already wrote the city List summary above to solve for the average and list out the cities uniquely in the array dynamically above,
// I'll reuse that part for the first part of this.
function buildCitySummary(list) {
// must implement this function using .reduce and objects
    const cityList = [...new Set(list.map((student) => student.city))];//makes our list of unique city names again.
    // set removes duplicates spreads them back out into an array
    // cannot reuse the cityList above created in another function because variables inside functions stay local
    // console.log("City list:", cityList); // testing our cityList. cityList now looks like: ["New York", "Los Angeles", "Chicago",etc.]

    // here we use reduce to build an object where each property is a city name and it turns the data into a string
    //I wanted to destruct in this step at first, but you can't destruct strings, only objects
    const citySummary = cityList.reduce((citySummary, cityName ) => { //cityName is each string from cityList, i.e., NY, Chicago, etc.
        // console.log("Reducing city:", cityName); testing our city list loop here
    //citySummary is the accumulator object in this case and where we collect the results of our loops as it reduces

        // now we filter the list inside the reduce to get the # of students that belong to each cityName
        const count = list.filter((student) =>
            student.city === cityName).length; //tells us that the student.city is strictly = to cityName and counts the # of students for each city
        const { average } = getAverageScoreByCity (list, cityName);// reuses our helper above to get the avg score for each city
        //destructures the returned object to extract only the average

        // need to add our student #'s for each city to the accumulator and pair them with the right average
        citySummary[cityName] = { count, average };
        return citySummary; // returning the accumulator from the reduce.
    },

    {}); // starts reduce with the empty object
    return citySummary; //returns our citySummary object now looks like: 'New York': { count: 5, average: '73.20' },
}
//testing
// console.log(buildCitySummary(students)); testing the list and the student counts in these 2 lines
// console.log(cityName, "has", count, "students");

// testing for all parts
console.log("City summary: ", buildCitySummary(students));



// do npm run challenges.js in git bash to see if it works the same as it does w/ coderunner
// need to do a pull request for every day for turn in. then merge each one in except the last one.

// talked about how to rebase branches with git to skip a commit or 2 if needed to update the git history.
