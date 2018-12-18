# Intermediate JS Assignment (Due 11:59pm Sunday night)

**To submit: Create a PR merging the branch for this project into your master branch on Github.  Add me as a reviewer.  Though this has multiple parts, this should all be one PR**

Create a feature branch named `middle-js` to hold this work.  All work should be in this directory and subdirectories.

This assignment has multiple parts.  Be sure to complete them all, with their contents in the proper directories.  Be sure to follow all the rule outlined in the best practices given in class and in the files in this repo, especially `absolutes.md`

**Make sure not to include IDE files, node_modules directories, or files outside the work for this specific assignment in the commit.  Always check with `git status` before committing**

## Part 1 - Inheritance

Update `grad.js` and `undergrad.js` per the instructions in those files to make `node inherit.js` run properly.

Proper output will look like: 
```
Alia graduates with a Undecided degree
Jane graduates with a BS degree
Barb graduates with a Masters degree
```
* Do not create a `graduate` method, always use the one inherited from Student

## Part 2 - Using This

Update `using-this.js` so that it runs correctly.  

Proper output will look like:
```
Jane
Barb
Jane - 70
Barb - 75
```

* Make only the minimal changes necessary.
* Use one instance of using `self` to hold the value of `this`
* Use one instance of the .bind() method to explicitly bind the value of `this`
* Use one instance of a fat arrow function to maintain the value of `this`
