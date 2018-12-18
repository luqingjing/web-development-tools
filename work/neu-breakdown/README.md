# NEU Breakdown (due by the start of class)

* Create a feature branch "neu-breakdown"
* Create the app listed below and create a PR to merge those changes into master
* Be sure to add myself and the TA as reviewers on that PR

## Overview 
This is practice in creating a good React component structure

* Take a screenshot of northeastern.edu at your choice of dimensions and scrolled to a certain point
    * You should have a clear "start" to the top, not having mid-article.
* Save that screenshot to this directory as "mockup.png" or "mockup.jpg" 
    * Make sure the filename is correct.
* Run create-react-app to create a new react application INSIDE this directory
    * The resulting app will be in a directory inside this one
    * That new directory should be "re-neu"
* Create a structure of nested React components to recreate the appearance of the site

## Allowances

* Your app does not have to match the exact appearance of the screenshot
    * Your app should look reasonable by itself
* Your app does not need to be responsive
* Your app can have empty "gutters" to the sides if displayed on a screen wider than your screenshot
* You must have enough content to show at least two top-level containers with nested content in addition to header and footer
    * So don't go too narrow of a screen or you won't have enough content.
* Your app does not need to have all the content of the actual page, just what is in the screenshot and the requirements here
* Your app can scroll vertically to allow the needed content.
* You can copy any images from the NEU site and store them in a src/images/ directory
* The app does not need to do anything other than display - no links need to work
* Any "data" needed can be imported from a JSON file or returned by a fake service ( a function that returns hardcoded data )
* You can hardcode the order of components into your components, but pass in any data for components that would change data.
    * Example: If there were a "News" component and an "Events" component, you can hardcode in `<News/>` and `<Events/>` but should pass these any changing data rather than hardcoding that data into the components themselves (e.g. `<Events events={events}/>`

## Criteria
* You must have at least two top-level containers in addition to any header/footer
* You must have nested components
* Any "data" should be external to the components
* You should not hardcode any data into components, but pass them in through props
* The appearance of the page should be reasonable and demonstrate the ability to style different components
* You should follow React component best practices as described in class
* You should follow CSS best practices
* You should follow good HTML semantic practices
* You must have enough that you show you understand how to convert a mockup into a React structure

## Special Rules
* Do NOT copy the HTML from the NEU site - they use a very different framework and would be a poor lesson to draw from
* Do NOT link to the images on the NEU site - they can go away at any time.  Download the ones you use to your repo.



