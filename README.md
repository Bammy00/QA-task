# TopSet Test Suite

## Summary

A test suite for the Curacel application that is written with cypress.

## Design Pattern
Utilizes the page object model design pattern.

## Requirements

The test suite focuses majorily on the following modules of the application:

- Login


## Frameworks and Technologies

The test suite is written in `Javascript` and uses `Cypress` as the test framework. The page object model design pattern was used in this project to reduce duplication of code and to improve the overall maintainability of the test suite. Other technologies involved are:

- Nodejs
- Mocha

### Prerequisites

To run this test suite, you must have Node.js (v12 or higher) and npm (6.4.1 or higher) installed on your local machine. Run `node -v` and `npm -v` in your terminal to confirm that you have them installed. You would also require a command line tool. 

### Recommendations

The following are improvements that can be introduced to this test suite.

- Introduce more test cases to improve the test suite coverage.
- Introduce performance tests by integrating with google lighthouse.
- Integrate test suite with CI pipeline.
- Optimize test suite.
