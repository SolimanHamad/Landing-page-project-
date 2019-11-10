
// *** Definitions*** // 
const head= document.getElementById('head_of_page');
let sections = document.querySelectorAll('section'); // sections as array 
let navList = document.getElementById('navbar_list'); // where the list will go 
let ulTag = document.createElement('ul'); // add list element <ul> </ul> 
// *** functions *** // 

function makeMeAListOfSections(sections){ 
    for(let i=0; i<sections.length; i++)
    {
        // li tag is defined inside the for loop to regenerate every iteration instead of updating 
        let liTag = document.createElement('li'); // add list element <li> </li> 
        liTag.appendChild(document.createTextNode(sections[i])); // li tag for every section we have 
        let linkTag = document.createElement('a'); // add anchor <a> </a> 
        linkTag.href= `#${sections[i].id }`; // link to section 
        linkTag.innerText = (sections[i].id ); // name the element after its section 
        liTag.innerText =''; // don't show the text of list element.
        liTag.appendChild(linkTag); // merge the link into the list item
        ulTag.appendChild(liTag); // li tag is added into ul tag 
        // adding listeners to sections to highlight the current in the list 
        let x = document.getElementsByClassName('section')[i];
        x.addEventListener("mouseover", function(){ 
            linkTag.style.color = 'red';
        }) ;
        x.addEventListener("mouseout", function(){ 
            linkTag.style.color = "inherit";
        }) ;

    }
    return ulTag; // now give list 
}


navList.classList.add = 'nav_List';
navList.appendChild(makeMeAListOfSections(sections)); 
head.addEventListener("click", function(){ 
        navList.className = navList.className.replace("hidden", "not_hidden");
}) ; 




