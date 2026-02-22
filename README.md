1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Ans: getElementById: It finds only one specific element using its unique ID.
   getElementsByClassName: It finds all elements that have the same class name and puts them in a list.
   querySelector: It used to select the first element in the html dom that matches a specified CSS selector or group of selectors.
   querySelectorAll: It is like querySelector, but it gives every element that matches the CSS style in a list.

2. How do you create and insert a new element into the DOM?
   Ans: In 3 steps, we can create and insert a new element into the dom.
   i. Create: Use document.createElement('div') to make the element.
   ii. Add Text: Use element.innerText = "Hello" to put some words inside.
   iii. Insert: Use appendChild() to put that new element inside a parent.

        const newItem = document.createElement('li');
        newItem.innerText = 'New list item';
        const parentElement = document.getElementById('ul');
        parentElement.appendChild(newItem);

3. What is Event Bubbling? And how does it work?
   Ans: When you click an element (like a button), the click doesn't stop there. The click "bubbles up" to the box, then to the body, and finally to the whole document.
   How it works: It starts from the target i clicked and goes up to all its parents one by one.
   
4. What is Event Delegation in JavaScript? Why is it useful?
   Ans: Instead of putting a "click" listener on every single button or list item, i can put one listener on their parent element.

   Why it is useful:
   Saves Memory: I don't need 100 listeners for 100 buttons.
   Easy Management: If i add a new button later, i don't need to add a new listener. The parent will handle it automatically.

6. What is the difference between preventDefault() and stopPropagation() methods?
   Ans: preventDefault(): It stops the default behavior of the browser. it stops a link from opening or a form from refreshing the page.
   stopPropagation(): It stops the Event Bubbling. this method stops the click from "traveling up" to the parent elements.
