UPDATE: 8/1/2023

1. Need to add images (avatar)
2. Refactor state data and components
3. CSS styling and simple animations
4. Organize (folders, subfolders, assets etc... )
5. Add Interactivity (user inputs, mouse events, etc...)

<hr>

UPDATE: 8/3/2023

1. Added a "SaveEmployee" component and passed only the necessary props
2. Visualized what other components I could add (DeleteEmployee, UpdateEmployee) and how to strucutre and display their layout.

<hr>

Update: 8/28/2023 & 8/30/2023

1. Updated the CSS styling and refactored

<hr>

UPDATE: 8/31/2023

1. Finally got the Delete button working via the array filter method (filter out the index element and return new array). Since the employee data doesn't have a unique id, other array methods like find and splice don't work. Ran in circles with ChatGPT all night to finally end up with the filter method as being the best possible solution. Granted, if the size of the employee data grows the time complexity for the filter method is going to increase linearly and performance might take a hit. Need to keep this in mind moving forward.

P.S. The delete button removes the saved employee as a whole and not specific fileds such as (name, role, salary...).

2. Conditionally renderd the "Saved Employees" title below. If more than 1 employee saved, add "s" else not and if no employees.length === 0, then render nothing. Nice little touch =)

<hr>

UPDATE: 9/07/2023

1. Not sure if I should include the **_Edit_** button. It'll introduce state complexity and codebase is starting to give my eyes cancer. I think its a decent feature to have. For now, I'll shelf it as a nice to have feature.

2. Updated a little bit of the CSS. That's where I go to cry in the corner after dealing with react states.

3. I'll finish up the Edit button then hop on the next button. Still haven't decided if it should be an export, copy, favorite or etc. Need to draw up some diagrams and go from there. Peace!

<hr>

UPDATE: 9/08/2023

1. Well I decided to keep the **_Edit_** button. Introduced the **_isContentEditable_** state which fills each employee with a default false value and when onClick of **_Edit_** button is triggered, it toggles back and forth b/w active & inactive states (thanks to the Logical NOT (!) operator instead of using a <em>true</em> value). Next step is to conditionally add a CSS class (.editable, .non-editable) based on the state value changes. However, this might be tricky since the HTML elements for the values may not support the style I'm visioning). I could give a style to the **_Edit_** button also (maybe a blinking light to show editing is on or something).

2. CSS is also updated for the big screen. Need to fix up the :hover state of the buttons to reflect the same style look of the big screen for the medium and small screen media queries. Also need to adjust the width of the child-element on the small screen. It's not going the full length of the screen but at max-content (the content is driving the width of the saved employees which is producing unflattering result). I want each saved employee to have an equal amount of width (content length shouldn't be the deciding factor).

<hr>

UPDATE: 9/10/2023

1. Removed unnecessary functions <em>handleEditClick</em> and <em>handleDeleteClick</em> from SavedEmployeeButtons component.

2. Added a CSS style for the edit **_.editable_** button. Might add more to the style or replace with GSAP style moving forward but its functional for now and helps with development (don't have to keep each field to see if the content is editable). Nice little time saving hack.

3. Still need to target and add CSS to the editable fields. Also need to modify the return of **_SaveEmployee_** component.

<hr>

UPDATE: 9/11/2023

1. Added a <em>Nav component</em> and a <em>nav-style</em> page. Copied a quick design from Web. Authors credit in the file. In case this mini app gets bigger, I may need a couple of pages such as an "Employees", "Contact", "Homescreen w/ login", "FAQ" and etc. Thought I would do a quick nav page just to visualize how the webpage might looklike (current style is temporary). 

2. Added an "edit" style for the saved employee data. May need to touch it up a bit but it's functional for now. <br>
   However, there's a wordbreak and lineheight issues on small screen so I'll look into those. 

3. I need to refactor components (well overdue) so I'll focus on that for next commit and stop hiding behind CSS and pointless commits.

<hr>