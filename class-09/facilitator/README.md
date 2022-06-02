# Facilitators Guide: HTML Forms and JS Events

## Overview

This is the second of the two toughest classes in the course. HTML forms themselves have a lot of parts that need to be managed, and then there is the JavaScript events side to handle the form submission. Again, it is a lot of brand new material, with greater complexity, all hitting at once.

### How does this topic fit?

**Where we've been**:
In the previous class we covered prototypal inheritance and the importance of wireframing a page.

**What are we focusing on in this class**:
In this class we will cover JavaScript events and event handling. This class will also cover HTML forms.

**Where we're headed**:
Next class we will discuss debugging code and review the different types of error messages we could potentially see in our console.

## Learning Objectives

Review the detailed objectives in this class's [student-facing readme](../README.md).

## Preparation

1. Skim the readings and be prepared if students have questions
1. Review the code demos and be sure you understand how to construct them within lecture. Review the respective markdown file for each demo.

## Lecture Outline
<!-- NOTE TO INSTRUCTOR: If you make any changes to the lecture, make matching changes into LECTURE.md -->

Refer to the [example lecture](LECTURE.md) for lecture details.

### Code review

### JavaScript Events

- **Why**
  - Events provide a dynamic interface to a webpage.
- **What**
  - Events are actions or occurances that happen to HTML elements. JavaScript code can then be written to react to these events.
- **How**
  - Start with a basic demonstration of an event and event listeners on a `<div>` element in CodePen or VSCode.
  - Break down the steps with event handling:
    - Grab element to listen to.
    - Add `addEventListener()` method and pass in the 2 arguments of the event type and callback/event handler function.
    - Build out the event handler function. You can demonstrate this as an inline anonymous function or a separately defined callback function.

### HTML forms

- **Why**
  - This is a great way for us to gather user info and input.
- **What**
  - An HTML form represents a document section containing interactive controls for submitting information.
- **How**
  - Demonstrate a form build out using the following semantic elements:
    - `<form>`
    - `<fieldset>`
    - `<legend>`
    - `<label>`
    - `<input>`
  - Add event handling to the form button.
  - Demonstrate grabbing form data on submit with an event handler function.

### Lab prep

- **Why**
  - Provides students with the tools to be successful with their lab.
- **What**
  - Review Lab 09 instructions in Canvas.
- **How**
  - Refer to lab notes below.

## Lab Notes

This is the third heavy class in a row. One of the less intuitive pieces is that the input fields will convert numbers to strings, so a reminder about using `parseInt` or `Number` is helpful.

## What changed from previous class?

In the previous class, students had a break from JavaScript to dive into CSS layouts and wireframes.

## What bugs, issues, or suprises have come up in the past for this class?

Expect students to struggle calling their functions in the correct order, or to forget to push their data into an array. 

It is also common to run into typos or confusion with naming.
