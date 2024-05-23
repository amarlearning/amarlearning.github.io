+++
title = "Symptoms of Bad Code"
date = "2022-07-19T00:00:00-00:00"
description = "Symptoms of Bad Code - How to Identify and Address Code Quality Issues"

tags = ["cleancode", "codesmells", "softwareengineering", "softwarequality"]
+++

![banner](/images/symptoms-of-bad-code/banner.jpg)

## 1. Rigidity

- Rigidity is the tendency of the system to be hard to change.
- Code that has dependencies that snake out in so many directions and you cannot make an isolated change without changing everything around it.
- Rigidity causes compile time error.

## 2. Fragility

- A system is fragile when a small change in one module causes other unrelated modules to misbehave.
- It is the tendency of the code to break in many places even when you make changes in one place. You make a simple change and a whole bunch of things break. But they break into parts of the code that have no relationship to what you changed.

- Fragility causes runtime error.

## 3. Immobility

- A system is immobile when its internal components cannot be extracted and reused in a new environment.

- The desirable part of the code is so horribly coupled with the undesirable parts of the code that you cannot use the desirable part of the code somewhere else.

For instance, You are trying to write a module that I wrote sometime back. But the module that I wrote does more than what you need. It couples to some framework, some database.

You found out that you could use my code, but the problem that you are going to bring in with that code is just too much.

This is the famous [Gorilla-Banana problem](https://www.johndcook.com/blog/2011/07/19/you-wanted-banana/):

> You want a banana but what you get is a gorilla holding a banana and the entire jungle with it  — Joe Armstrong

## 4. Viscosity

- A system is viscous when necessary operations like building and testing are difficult to perform and take a long time to execute.
- The cause of viscosity is irresponsible tolerance. Developers tolerate conditions they know to be bad and do nothing to correct them.
