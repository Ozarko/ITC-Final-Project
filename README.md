
    1. Added “Edit” link next to “Plan Code” and “BP Code” on Benefit Groups page.
    2. Added displaying add or edit buttons according to the status of stored codes or codes received from the backend.
    3. Disabled status of select component was added.
    4. Added instructional text for BP and plan codes
    5. Added “Add new” option that when clicked exposes 3 blank columns 
    6. Clicking “Add new” append a new entry to the bottom of the current list of codes
    7. When multiple codes entered, the code box expand along with the codes entered
    8. Added display “Actions” drop-down list with options once 2 or more rows are visible
    9. User be able to apply actions when codes are selected
    10. Once rows are selected and action selected and applied the screen reloads and filters out/ displays only the subset/
        the selected codes; entered codes and dates display in the view-only state; drop-down updates to reflect the selected action,
        blank input field displays to the right of it (active state), as well as icons for confirming the entree or delete/ 
        clicking which reverts back to the previous state
    11. Once a new date is saved the state changed the date the rows to which the new dated was applied display selected, rows bg color changed to a tint of green
    12. Added the ability to select multiple codes and apply an end date to all selected.
    13. Added the ability to update effective and termination dates that are already populated.
    14. Added the ability to select all codes in the list with a single click or by selecting individual codes.
    15. Added displaying of multiple checkboxes after entering 2 or more codes
    16. Added displaying of multiple checkboxes after entering 2 or more codes
    17. Added displaying confirmation modal when bulk delete action has been selected
    18. Fieldlabel component was changed in order to implement “Edit” button 
    19. The middle size of the modal window has been changed in accordance with the design requirements.
    20. The middle size of the modal window has been changed in accordance with the design requirements.
    21. When there are no excisting codes added,  Benefit Groups page field displays the text “No plan code”
    22. If there are no plan/ BP codes, the user clicks "Add", modal with the heading "Add tariff plan codes" instead of "Change plan codes the text is displayed
    23. Added validation: 
        23.1. Required field validation
        23.2. Exisiting codes validation. 
        23.3. Invalid codes validation.
    24. On the Add plan codes modal only Codes field is required. 
    25. On the Edit plan codes modal Codes and Effective start date fields are required. 
    26. Addded Tab navigation. 
    27. Delete is removed from the dropdown when bulk date edit is in progress.
    28. Delete button or checkboxes are not displayed when there is only one code in the list.
    29. Plan codes received from back-end could not be deleted, code name displayed as plain text.
    30. “Save” button: 
        30.1. When one of the code fields is not populated then an error appear - “ The code field is required”
        30.2. When user add additional codes to the existing code field on the Edit plan codes modal, then clicks “save”,
            all bulk added codes will be separated (each code in a separate raw, in the order of adding codes).
            The effective and term dates will be the same.
        30.3. When “save” button is pressed and required fields are not populated ,
            then inline error highlight the input and error message and appear “The effective date is required”, “The termination date is required”.
    31. When bulk action was performed, apply (check icon) or “save” button was pressed, then user will be led back to codes list screen.
    32. Tint green backgroud will be disappear when user makes next best action - clicks “Add new”.
