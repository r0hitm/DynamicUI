// Drop Down Menu
// Author: Rohit Mehta

const dropDown = document.querySelector(".drop-down");
const dropDownHeaderTitle = document.querySelector(".drop-down__header__title");
const dropDownBodyItem = Array.from(document.querySelectorAll(".drop-down__body__item"));

// console.log(dropDownBodyItem);

dropDownBodyItem.forEach(item => {
    item.addEventListener("click", () => {
        // console.log(item);
        dropDownHeaderTitle.textContent = item.textContent;
    });
});
