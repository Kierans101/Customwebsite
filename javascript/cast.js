const dropdown = document.getElementsByClassName('contentbox'); //Giving my dropdown a const, this was done by using my document.get element, and referenceing it to my 'contentbox'

for (i = 0; i < dropdown.length; i++) { //Using a for statement, so when my dropdown menu is 0, the menu will not be changed, however, whenever I is less than the dropdown length, then the length will be on an increment (++)

    dropdown[i].addEventListener('click', function () {//Using an eventlistener, which will attach an event handler without overwriting exsisting events. This relates to the click of an interaction relating to my users
        this.classList.toggle('active')   //This toggles classes to the element, in this case, active.
    })

}
