# Lvl3-wk1-classwork

Repo for the the week 1, Level 3 classwork of CodeX

## # Week 1 – Day 1: Node Setup & First Script

This day focused on getting comfortable with Node.js as a runtime, setting up npm correctly, and running a simple script from the terminal. I treated the whole day as “get my environment solid before touching anything fancy.”

### **Goal**

Finish setting up Node and npm, confirm everything runs properly, and practice importing a tiny module into a basic script.

### **What I Did**

I started by reviewing what Node actually *is* —a JavaScript runtime that lets JS run outside the browser. We talked about how Node handles asynchronous, event-driven code and why it’s used for scalable backend apps.

From there:

1. **Checked my Node and npm versions** using the terminal.
2. **Set up my GitHub repo and cloned it down** into a new branch (continuing best practices).
3. Ran `npm init` to create a package.json.
4. Learned why choosing **Node** inside `.gitignore` matters (so the gigantic `node_modules` folder isn’t tracked).
5. Practiced running small JS files using:
   * `node file.js`
   * `npm run scriptName`
6. Wrote a tiny module, imported it, and logged a value to confirm everything worked.

### **What I Learned**

* Node isn’t a framework — it’s the engine that runs JS without a browser.
* npm is a **package manager + registry** for installing and sharing code.
* Scripts inside package.json make running small utilities easier.
* Keeping a clean repo structure early prevents headaches later.

## # Week 1 – Day 2: ES Modules, Imports, and Exports

Today was all about practicing ES Modules and getting used to how Node handles them. I kept everything as readable as possible and focused on building good habits early.

### **Goal**

Create one default export and one named export, import them, and run them using Node.

### **What I Did**

I built two small modules:

1. **A default export** to represent a single main function.
2. **A named export** for a second helper.

Then I created a main file that imported both using ES module syntax (`import … from`), and ran it with Node to make sure the wiring worked.

I also reviewed:

* Why some projects use **default exports** (usually one primary function).
* Why named exports are useful when you have multiple small helpers.
* How switching between CommonJS and ES Modules affects the import syntax.

### **What I Learned**

* ES Modules read cleaner and will matter more as projects grow.
* Having both a main function and smaller helpers makes code easier to maintain.
* Node needs `"type": "module"` when using modern ESM syntax.

## # Week 1 – Day 3: Async Setup, Package Rules & Starting the API Assignment

This day was mostly about learning how async modules work in Node projects and how npm versioning affects package updates. We didn’t finish the API assignment during class — today was all about getting the foundation right so the real async work could happen later.

### **Goal**

Set up the project so async functions using `await` work properly, review npm versioning rules, and begin the structure for the Day 3 assignment.

### **What I Did**

Most of today’s work focused on understanding how Node handles modules and packages:

1. Used `npm init -y` and reviewed how it defaults to **CommonJS** .
2. Switched the project to `"type": "module"` to make sure ES Module imports/exports work.
3. Reviewed the three scripts that every new project should have in package.json.
4. Learned the difference between:
   * **no symbol** → fixed version
   * **~** (tilde) → minor updates
   * **^** (caret) → major or breaking updates allowed
5. Talked through what lodash is and why utility packages should be safely version-pinned.
6. Practiced using npm’s audit tools:
   * `npm audit`
   * `npm audit fix`
   * `npm audit fix --force`
7. Reviewed how to handle branch mistakes when pushing to GitHub.
8. Looked at how we’ll structure the async assignment using an API similar to the Pokémon project.

### **Assignment Note**

The actual Day 3 async/API project lives in **its own separate repository** (following Anthony’s instructions).

For my version of this assignment, I’m building an API fetcher using **The One API** to pull *Lord of the Rings* information.

This README only covers what happened **today** — the hands-on code is in the separate repo.

### **What I Learned**

* `"type": "module"` is required when using modern `import` and `export`.
* Understanding version symbols helps avoid accidentally breaking a project.
* npm audit tools keep dependencies up-to-date and secure.
* Async API requests follow the same “fetch → wait → convert → use” pattern.
* Today was primarily setup — the real API logic continues in the separate assignment repo.

## # Week 1 – Day 4: Pure Utilities, Array Transforms & Linters

Today shifted into writing clean, pure functions and learning how to set up full linting across a project. This was my first time configuring multiple linters at once, so I took my time understanding each file.

### **Goal**

Write pure utilities that use `map`, `filter`, or `reduce` and set up ESLint, Stylelint, and HTMLHint for the project.

### **What I Did**

1. Created two small pure utility functions using array methods.
2. Reviewed how to keep these functions predictable (no mutation, same input structure → same output).
3. Installed all required linters using:
   `npm install --save-dev eslint stylelint stylelint-config-standard htmlhint`
4. Created config files:
   * `.eslintrc.cjs`
   * `.htmlhintrc`
   * `stylelint.config.cjs`
5. Ran linters using:
   * `npm run lint:js`
   * `npm run lint:html`
6. Reviewed how rules work:
   * No `var`
   * Must specify ECMAScript version
   * Environments and parser options
7. Talked about GitHub Actions and why code should never be committed without linting first.

### **What I Learned**

* Pure functions make testing and debugging far easier.
* Linting is “code hygiene” — it enforces consistency and catches mistakes early.
* Regex pops up inside linter rules, so learning the basics matters.
* GitHub Actions can automatically lint code on pull requests.
* All future CodeX projects will require linters, so getting comfortable now is important.

## Week 1 – Day 5 Challenges

These challenges focused on taking the longer, more manual loops we’ve been using and rewriting them with the modern JavaScript array methods we’ve been learning. I kept everything as readable and beginner-friendly as possible, while practicing destructuring, avoiding mutation, and keeping functions small and clean.

Below are my notes for Task 1, Task 2, and Task 3 — written the way I worked through them.

---

### Task 1: Get Passing Student Names

#### Goal

Rewrite the original `for` loop so that it uses `filter` and `map` instead. Keep the code clean and ES Lint happy. Bonus for destructuring.

#### What I Did

The original version looped through the entire array manually, checked each student’s score, and then pushed the uppercase version of their name into a results array.

To update it, I broke the job into two steps:

1. Use `filter()` to pull out only the students who passed.
2. Use `map()` to take just their names and convert them to uppercase.

I also used destructuring inside the array methods (`{ score }` and `{ name }`) so the code reads a lot cleaner and I don’t have to keep typing `student.score`.

#### What the Updated Function Does

* Filters out only the students with a passing score.
* Converts their names to uppercase.
* Returns just the cleaned-up list of names.
* No warnings or errors from ES Lint.
* The whole thing is shorter and easier to read than the loop version.

#### What I Learned

* `filter()` gives you a brand-new array based based on a condition, which is perfect for sorting out who passed.
* `map()` transforms each item, so it’s great for pulling out just the names.
* Destructuring makes the code feel lighter and less repetitive.
* Using array methods keeps things much more declarative and beginner-friendly.

---

### Task 2: Average Score by City

#### Goal

Rewrite the code that calculates the average score for students in a given city using `filter`, `reduce`, and destructuring. Keep it short and make sure the original array isn’t changed.

#### What I Did

1. Used `filter()` with destructuring and variable renaming to grab only the students whose `city` matched the one passed into the function.
2. Applied `reduce()` (again with destructuring) to add up just the scores from that smaller list.
3. Divided the total by the number of students in that city to get the average.
4. Used `.toFixed(2)` so the output only shows two decimal places.
5. Returned an object with both the city and the average.

#### Bonus Work

##### Using Destructuring With Renaming

Inside `filter()`, I used:

`({ city: studentCity })`

This let me rename the `city` property to `studentCity` so it didn’t collide with the `city` parameter in the function.

##### Creating a Unique List of Cities for Testing

Instead of typing each city name manually to test the function, I learned how to automatically make a list of unique cities by combining `map()`, `Set`, and the spread operator:

`[...new Set(students.map((student) => student.city))]`

This pattern works in three steps:

1. `map()` extracts all the city names from the student objects.
2. `new Set()` removes any duplicates because Sets only store unique values.
3. The `...` (spread operator) is essential because a Set is **not** an array.
   Spreading the Set into `[...]` turns it back into a regular JavaScript array so I can loop over it or use array methods.

Using this pattern gave me an easy way to loop over each unique city and test my function without manually typing every city name. This wasn’t part of the assignment requirements, but it made testing much easier.

I originally found this approach by searching for ways to extract a unique list of values from an array. After that, I read more about `Set`, `map()`, and the spread operator so I could understand *why* the pattern works and reuse it confidently in the future.

#### What I Learned

* `filter()` is great for narrowing a list to only what you want.
* `reduce()` handles the “add everything up” part really well.
* Destructuring inside the callback functions keeps things clear.
* `.toFixed(2)` is perfect for formatting averages.
* `Set` is useful for getting rid of duplicates when you need a clean list.
* Generating a city list automatically made testing much easier.

---

### Task 3: Build a Summary Object Grouped by City

#### Goal

Use .reduce() to build one final object that groups students by their city and shows:
"New York": { count: X, average: Y }

The challenge requirements:

* Must use .reduce()
* Store results in an object using city names as the keys
* Reuse my existing helper (getAverageScoreByCity)
* Keep functions small and avoid repeating logic

#### What I Did

1. Recreated a unique city list inside the new function using the same Set/map/spread pattern from Task 2.
2. Used `reduce()` on that city list.
3. For each city, ran a `filter()` to count how many students belonged to that city.
4. Reused `getAverageScoreByCity()` to get the average.
5. Added both values to the accumulator object.
6. Returned the final summary.

#### What the Final Object Looks Like

{
"New York": { count: 4, average: "80.75" },
"Los Angeles": { count: 3, average: "83.33" },
"Chicago": { count: 3, average: "70.66" },
...
}

#### What Was Tricky But Clicked

At first it felt weird to reduce over a list of strings (just the city names), but once I remembered:

* ***Strings can’t be destructured***
* ***My accumulator could be named whatever made sense***
* ***I could reuse my helper just like any other function***

…everything clicked into place.

#### Note on Efficiency vs Readibility

After I got this version working, I asked copilot and google if what I had done was the most efficient way to solve this problem, like what Ulises has mentioned he uses copilot for when writing code daily. Both suggested a different pattern: using a single `reduce()` directly on the `students` array to build the entire summary in one pass, and keeps track of `count`, `totalScore`, and `average` inside the accumulator as it goes.

That version is definitely more efficient for large datasets, but it also hides a lot more logic inside one function. For this assignment, I chose to stick with my current approach because:

* It reuses my `getAverageScoreByCity()` helper from Task 2.
* It keeps each step conceptually separate (filtering, averaging, then grouping).
* The flow is easier for me to read and reason about as a beginner.

I still experimented with the “single reduce” version on the side to understand how it works, but I kept the version in the final code because it lines up better with the learning goals for this week and is easier for me to understand at this point.

#### What I Learned

* Reduce doesn’t always have to work on numbers — it’s amazing for building objects.
* The accumulator is basically “my growing result,” so naming it well matters.
* Reusing helper functions keeps things clean.
* It’s okay for reduce callbacks to call other functions, filter inside them, etc.
* A multi-step reduce like this looks intimidating at first, but once you understand the pattern, it becomes really clear.
*

### Resources Used

#### MDN Documentation

* Array.filter():
  [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* Array.map():
  [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* Array.reduce():
  [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
* Spread syntax (...):
  [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
* Set (unique values):
  [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

#### Articles

* Samantha Ming – Remove Array Duplicates Using Set:
  [https://www.samanthaming.com/tidbits/10-remove-array-duplicates-using-set/](https://www.samanthaming.com/tidbits/10-remove-array-duplicates-using-set/)
* JavaScript Reduce Explained by Going on a Diet (Code Analogies)[https://blog.codeanalogies.com/2018/07/24/javascripts-reduce-method-explained-by-going-on-a-diet/](https://blog.codeanalogies.com/2018/07/24/javascripts-reduce-method-explained-by-going-on-a-diet/)
* Functional Programming in JavaScript: Map, Filter, Reduce (Medium)[https://medium.com/@gursimrankaur1664/functional-programming-in-javascript-map-filter-and-reduce-06fa904eb5fc](https://medium.com/@gursimrankaur1664/functional-programming-in-javascript-map-filter-and-reduce-06fa904eb5fc)
* Functional JS: Do More with Reduce (JR Sinclair)[https://jrsinclair.com/articles/2019/functional-js-do-more-with-reduce/](https://jrsinclair.com/articles/2019/functional-js-do-more-with-reduce/)
* ZeroToMastery — The Don’ts of Reduce
* [https://zerotomastery.io/blog/javascript-reduce/](https://zerotomastery.io/blog/javascript-reduce/)
* FreeCodeCamp — Basics of Data Analysis with JavaScript**[https://www.freecodecamp.org/news/basics-of-data-analysis-with-javascript/](https://www.freecodecamp.org/news/basics-of-data-analysis-with-javascript/)



#### Videos

* [Bro Code – JavaScript Arrays of Objects:](https://www.youtube.com/watch?v=w9078dAjcrY)
* [Vlogize – Understanding the Best Use of new Set():](https://www.youtube.com/watch?v=1d26ibGx0Jo&utm_source=chatgpt.com)
* [Coding2Go – filter(), map(), and reduce() explained simply:](https://www.youtube.com/watch?v=PojpwEbOQJg)
* [Coding2Go - Reduce for beginners:](https://www.youtube.com/watch?v=iDWtuWkuj8g)
* Vlogize — Reduce Tutorial
* [https://www.youtube.com/watch?v=2eZfxqHRZck](https://www.youtube.com/watch?v=2eZfxqHRZck)
* Vlogize — Reduce With Objects & Accumulator Pattern
* [https://www.youtube.com/watch?v=1LOnv31_3e4](https://www.youtube.com/watch?v=1LOnv31_3e4)
* Coding With Justin — Reduce for Grouping
* [https://www.youtube.com/watch?v=JXuws6DNEiE](https://www.youtube.com/watch?v=JXuws6DNEiE)

