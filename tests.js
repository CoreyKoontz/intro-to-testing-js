"use strict"

// Reference: https://www.freecodecamp.org/news/jasmine-unit-testing-tutorial-4e757c2cbf42/

// -A suite groups a set of specs or test cases. It’s used to test a specific behavior
//  of the JavaScript code that’s usually encapsulated by an object/class or a function.
// -It’s created using the Jasmine global function describe() that takes two parameters,
//  the title of the test suite and a function that implements the actual code of the test suite.

// -A spec declares a test case that belongs to a test suite. This is done by calling the
//  Jasmine global function it() which takes two parameters, the title of the spec
//  (which describes the logic we want to test) and a function that implements the actual test case.

// -You can temporarily disable a suite using the xdescribe() function. It has the same
//  signature (parameters) as a describe() function which means you can quickly
//  disable your existing suites by simply adding an x to the function.

// -Just like suites, you can also exclude individual specs using the xit() function which temporary
//  disables the it() spec and marks the spec as pending.

// -Expectations are created using the expect() function that takes a value called
//  the actual (this can be values, expressions, variables, functions or objects etc.).
//  Expectations compose the spec and are used along with matcher functions (via chaining)
//  to define what the developer expect from a specific unit of code to perform.

// V Unit test suite for the helloWorld function V
describe('helloWorld', function() {
    // V First spec/case for the helloWorld unit test suite V
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    // V Second spec/case for the helloWorld unit test suite V
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit test suite for sayHello Function

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function') // Testing if it is a defined function
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string"); // Testing if it outputs a string
    });
    it('should return "Hello, Jane!" when  passed "Jane"', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!"); // Test to confirm actual vs. expected output
    });
    it('should return "Hello, Alex! when passed "Alex"', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!" when passed "Pat"', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
})


