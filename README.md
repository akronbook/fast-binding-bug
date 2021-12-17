## Bug Description
When updating an element's attribute, the attribute didn't always take effect

## How to replicate the bug? Method 1
- npm install
- npm run start
- In the brower, right click on the text. A menu will pop up. Clicking the menu didn't close it.

## How to replicate the bug? Method 2
- npm install
- npm run start
- In parent-compoment.ts, update the following code:
```
 @observable
  parentStatus: string = 'hello world';
```
- In the brower, right click on the text. A menu will pop up. Clicking the menu will close the menu
- Now try right-clicking on the text again, and clicking the menu. This time, the menu will NOT close.

## What does it mean?
When clicking the menu, we intent to set a child element's attribute value to "none". But the attribute was NOT always updated to "none", thus the menu stays open. This seems to be a bug to me.