# Alpha Alpha Website Style Guide

## Preprocessor - SASS

A preprocessor is a computer program that modifies data to conform to the input requirements of another program.

For this project, we are using SASS (Stylistically Awesome Style Sheets). SASS will help us organize our style sheets by splitting up the files into partial style sheets, or simply, partials. Partials are the same thing as a style sheet, but they are not complete style sheets. They are denoted by an underscore (`_`) in front of the file name, e.g. `_typography.scss` or `_variables.scss.` These partials help split up relevant code based on the SMACSS methodology to allow for easier maintenance and organization of our stylesheets. Instead of having one large stylesheet, we can split them into smaller files imported into App.scss. Then, they are compiled by the SASS preprocessor into App.min.css. Notice the `.min` extension in the file name; that signifies that we minified the file or removed all unnecessary characters from the source code. The reason why we need the file to be compiled from `.scss` to `.css` is because browsers cannot interpret SCSS (Sassy Cascading Style Sheets). Still, they can understand CSS (Cascading Style Sheets). Also, an `App.min.css.map` file also appears, and that file helps create App.min.css; thus, it is left alone. If you wish to learn more about SASS, here is the link to their documentation (https://sass-lang.com/documentation)

One note of caution: try not to use mixins as much you use templates and extend them. It makes for cleaner CSS code when compiled and can increase performance.

## File Organization - SMACSS

SMACCS (Scalable and Modular Architecture for Cascading Style Sheets) is a methodology used by major websites such as Twitter and Facebook to create scalable, modular, and understandable CSS. It is very similar to OOCSS (Object-Oriented CSS) in that it looks to break down HTML into components, or objects, that can be styled. (Read this if you are interested in OOCSS: https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/) Essentially, SMACSS breaks down CSS into five modules: Base, Layout, Module, State, and Theme. (Read more here: http://smacss.com/) But, we are going to condense some of the similar or unneeded categories to simplify the folder structure.

- Of the five, Theme is least important for this project because we will maintain a singular theme on the website. So we will be removing the theme category for this project until it is necessary.

- Furthermore, the line that separates Layout and Modules is very fuzzy; thus, we will add Layout into the Modules category

- Finally, we will be combining the State with Modules to keep state changes together with their modular parent.

Alright, we have condensed the categories leaving us with Base and Module.

- Base is all of our base styles; this is where we define default element selectors, typography, color assignments, etc. Element selectors should be the only type of selector in these files.

- Module is the majority of the CSS code for a project; this represents reusable modular items. For instance, we may have button styles here with modifiers like `--active` or `--danger` or sub-component elements like `__button-text.` These are all the different containers, structures, etc. of the project.

To add a little more clarity and separate like items, we created a Helpers category, a Tools category, and a Pages category.

- The Helpers category will store files with basic definitions, functions, and templates that we create for the project. The `_variables.scss` file contains all the variable definitions, the `_functions.scss` contains all the function definitions, and the `_templates.scss` file contains all the template definitions.

- The pages category is technically a module, but we wanted to keep the pages in a separate file for easy access and maintainability. Partials used in a page will be easily identifiable and edited as needed.

Virtually, by following SMACSS, we are ensuring that the code will be scalable, modular, easily maintainable, and legible for any brother that looks at the CSS files in the future.

## Naming - BEM

BEM (Block Element Modifier) Naming refers to a naming convention that makes element class names easy to name, identify, and style. Components break into the three eponymous groups when using BEM.

- Block - Encapsulates a standalone entity that is meaningful on its own.

- Element - Parts of a block and have no standalone meaning. (Represented by `__` between the Block and the Element)

- Modifier - Flags on blocks or elements. Use them to change appearance, behavior, or state. (Represented by `--` between the Block or Element and the Modifier)

We will use these class names to create logical groupings for the various elements we create. Keep in mind, for each modifier that you create, have that modifier only do one thing.

Note: There is no reason that an HTML element should not have multiple class names. Structure and style live together within HTML. Do not believe that separating content and styling means that HTML and CSS are independent of one another. HTML displays our content and is the building block for laying out components. CSS styles that content and layout to make engaging webpages.
