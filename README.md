# **Popup Review Management Component**
The component allows users to add reviews and delete reviews.

Live demo:
https://popup-review.herokuapp.com/

## Technologies:
React,TypeScript, Styled Components, MongoDB, Express.js, Node.js.

## API routes:
### The API contains 4 routers.

  * GET	api/reviews - get all reviews.<br>
  * POST	api/reviews - create reviews.<br>
  *	DELETE api/reviews/:id - delete a review by id<br>
  *	DELETE api/reviews/ - delete all reviews.<br>
 
 
 ![image](https://user-images.githubusercontent.com/23708468/184546468-92d46d1d-f3af-4f5a-a9b4-a22e61cf8bfd.png)

### Main functionality

Review preview area - is the list under the review comment bar.

- Button: "Add" - add a new review bubble, to preview area.
- Button: "delete tag (X)" - remove the review bubble from the preview area.
- Button: "Learn how to add" - redirects to explanation page (can be any link you choose).
- Button: "Clear all reviews" - removes all reviews from preview area.
- Button: "+10 generic reviews" - each time the users clicks on it, 10 new reviews are added to the preview area.
- Button: "Import from file" - loads a list of reviews from CSV file into the preview area.
- Button: "Save" - Send to the server the list of available reviews in the preview area.
 

## Getting started

### How to run the  Client Side?

```
$ git clone https://github.com/dekelohad/popup-review.git
$ cd popup-review/client
$ npm install
$ npm start
navigate to http://localhost:3000
 ```


### How to run the Server Side?
```
$ cd popup-review
$create a .env file in the root of the project directory and within it, you will need to enter your MongoDB credentials.
$ npm install
$ npm run server
navigate to http://localhost:5000
```
