const dropdown = document.getElementsByClassName ('contentbox');

for (i=0; i<dropdown.length; i++){
dropdown[i].addEventListener('click', function(){
 this.classList.toggle('active')   
})

}
