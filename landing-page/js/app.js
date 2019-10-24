// document.addEventListener('DOMContentLoaded', function () {

/**
Variables
*/
var head = document.getElementById("head_of_page");
var navList = document.getElementById("navbar_list"); 
var hoverButton = document.getElementsByClassName("dorpdown-button");


/**
Functions
*/
function hideList(){ 
    navList.style.display= "none";
    navList.style.cssFloat= "right";
    navList.style.backgroundColor = "grey";
    
}

function displayList(){
    navList.style.display= "block";
    navList.style.cssFloat= "right";
    navList.style.backgroundColor = "grey"; 
    
}




 hideList();
// displayList();

// function showListForGodsSake() { hoverButton.addEventListener('mouseover', displayList()); }

// showListForGodsSake(); 
// })
