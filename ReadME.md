TO-DO

1. Need to add images (avatar)
2. Refactor state data and components
3. CSS styling and simple animations
4. Organize (folders, subfolders, assets etc... )
5. Add Interactivity (user inputs, mouse events, etc...)

Update: 8/3/2023

1. Added a "SaveEmployee" component and passed only the necessary props
2. Visualized what other components I could add (DeleteEmployee, UpdateEmployee) and how to strucutre and display their layout.

Update: 8/28/2023 & 8/30/2023

1. Updated the CSS styling and refactored

Update: 8/31/2023

1. Finally got the Delete button working via the array filter method (filter out the index element and return new array). Since the employee data doesn't have a unique id, other array methods like find and splice don't work. Ran in circles with ChatGPT all night to finally end up with the filter method as being the best possible solution. Granted, if the size of the employee data grows the time complexity for the filter method is going to increase linearly and performance might take a hit. Need to keep this in mind moving forward.

P.S. The delete button removes the saved employee as a whole and not specific fileds such as (name, role, salary...).

2. Conditionally renderd the "Saved Employees" title below. If more than 1 employee saved, add "s" else not and if no employees.length === 0, then render nothing. Nice little touch =)


Update: 9/07/2023

1. Not sure if I should include the ***Edit*** button. It'll introduce state complexity and codebase is starting to give my eyes cancer. I think its a decent feature to have. For now, I'll shelf it as a nice to have feature.

2. Updated a little bit of the CSS. That's where I go to cry in the corner after dealing with react states.

3. I'll finish up the Edit button then hop on the next button. Still haven't decided if it should be an export, copy, favorite or etc. Need to draw up some diagrams and go from there. Peace!