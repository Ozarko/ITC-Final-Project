COP-2042 - bulk update BP and plan codes
    Task - https://teladoc.atlassian.net/browse/COP-2042

1. I added the “Edit” link next to “Plan Code” and “BP Code” on Benefit Groups page.
2. I added the displaying of add and edit buttons according to the status of stored codes or codes received from the backend. 
3. I disabled the status of select component that was added. 
4. I added the instructional text for BP and plan codes 
5. I added the “Add new” option that when clicking, it exposes 3 blank columns 
6. When clicking on “Add new”, it adds a new entry to the bottom of the current list of codes 
7. When multiple codes are entered, the code box expans along with the codes entered. 
8. I added the display “Actions” and a drop-down list with options once 2 or more rows are visible 
9. A user will be able to apply actions when codes are selected 
10. Once rows and action are selected and applied, the screen reloads and filters out/ displays only the subset/the selected codes;
    entered codes and dates display in the view-only state;
    drop-down updates to reflect the selected action, 
    blank input field displays to the right of it (active state), 
    as well as icons for confirming the entree or delete/ clicking which reverts back to the previous state 
11. Once a new date is saved, the state changes the date and the rows to which the new date was applied. When display selected,
    rows bg color changed to a green color 
12. Added the ability to select multiple codes and apply an end date to all selected. 
13. Added the ability to update effective and termination dates that are already populated. 
14. Added the ability to select all codes in the list with a single click or by selecting individual codes. 
15. Added displaying of multiple checkboxes after entering 2 or more codes 
16. Added displaying of multiple checkboxes after entering 2 or more codes 
17. Added displaying confirmation modal when bulk delete action has been selected 
18. Fieldlabel component was changed in order to implement “Edit” button 
19. The middle size of the modal window has been changed in accordance with the design requirements. 
20. The middle size of the modal window has been changed in accordance with the design requirements. 
21. When there are no codes added, Benefit Groups page field displays the text “No plan code” 
22. If there are no plan/ BP codes, the user clicks "Add", modal with the heading "Add tariff plan codes" instead of "Change plan codes the text is displayed 
23. Added validation: 
    23.1. Required field validation 
    23.2. Exisiting codes validation. 
    23.3. Invalid codes validation. 
24. On the Add plan codes modal, only Codes field is required. 
25. On the Edit plan codes modal, Codes and Effective start date fields are required. 
26. Added the Tab navigation. 
27. Delete is removed from the dropdown when bulk date edit is in progress. 
28. Delete button or checkboxes are not displayed when there is only one code in the list. 
29. If plan codes received from back-end can not be deleted, code name is displayed as plain text. 
30. The “Save” button: 
    30.1. When one of the code fields is not populated then an error appear - “ The code field is required” 
    30.2. When user add additional codes to the existing code field on the Edit plan codes modal, 
    then clicks “save”, all bulk added codes will be separated (each code in a separate raw, in the order of adding codes). 
    The effective and term dates will be the same. 30.3. When “save” button is pressed and required fields are not populated, 
    then inline error highlights the input and error message and appear “The effective date is required”, “The termination date is required”. 
31. When bulk action was performed, applied (check icon) or “save” button was pressed, then user will be moved back to codes list screen. 
32. Tint green backgroud will disappear when a user clicks “Add new”.
