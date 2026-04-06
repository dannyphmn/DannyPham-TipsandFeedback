# Week11 Homework: Tips and Feedback

In this homework, you will work with a group to add routes to an existing application. You will create one wildcard route for serving up a 404 page, a diagnostics route for logging failed form validation and display feedback stored in the database.

## User Story

* As a developer, I want to be able to add routes to an existing application.

* As a developer, I want to serve up a custom 404 page when the requested resource doesn't exist.

* As a developer, I want to use the given route to get information to display on a page.

## Acceptance Criteria

* It's done when I have created a wildcard route in `server.js` that will send the users to a 404 page.

* It's done when I have created a custom `404.html` page for my wildcard route to serve. 

* It's done when I have created a POST route for `/api/diagnostics` that will store information about the invalid form submissions.

* It's done when I have created a GET route for `/api/diagnostics` that will return the content of `db/diagnostics/json`.

* It's done when I have created a `fetch()` request on the front end that will send a POST request to `/api/diagnostics` every time a user attempts to submit an invalid form.

* It's done when I have tested my `/api/diagnostics` endpoint using Insomnia.

* It's done when I have tested the wildcard route by visiting any non-existent path, like `http://localhost/test`.

* It's done when I display the information stored in feedback.json on the `feedback.html` page.

## Hint
 Follow the logic used to display tips on the Homepage for displaying feedback on the home page.

## Grading Requirements

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:


### Deliverables: 36%

* Walkthrough Video

* Application GitHub URL submitted.

* GitHub repository contains application code.


### Application Quality: 11%

* Application console is free of errors.


### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality README file with description, screenshot, and link to deployed application.


## Review

You are required to submit BOTH of the following for review:

* Walkthrough Video.

* The URL of the GitHub repository, with a unique name and a README describing the project.


