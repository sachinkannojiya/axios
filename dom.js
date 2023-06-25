// Examine the document object
//console.dir(document);
//console.log(document.documentURI);
//console.log(document.contentType)
//document.title="sachin kannojiya";
// console.log(document.doctype);
// console.log(doucment.head);
// console.log(document.body);
// console.log(document.title);
// console.log(document.all)
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);
//console.log(document.getElementById("header-title"))
// const title=document.getElementById("header-title");
// // title.textContent="sachin kannojiya";
// // title.innerText="satyam Yadav";
// // title.innerHTML='<h2>abhishek patel</h2>'
// title.style.borderBottom='solid 3px black'

// // const items=document.getElementsByClassName('list-group-item')
// // console.log(items)

// const addItem=document.getElementsByClassName("title")
// // console.log(addItem[1].textContent)
// addItem[0].style.fontWeight='bold';
// addItem[0].style.color='green';
// const listItem=document.getElementsByClassName("list-group-item")
// listItem[2].style.backgroundColor = 'green';
//  listItem[0].style.fontWeight='bold';
//  listItem[1].style.fontWeight='bold';
//  listItem[3].style.fontWeight='bold';
//  listItem[2].style.fontWeight='bold';



// GET ELEMENT BY TAGNAME

//query selector

// let item2=document.querySelector('.list-group-item:nth-child(2)')
// console.log(items)
// item2.style.backgroundColor = 'green';
// let item3=document.querySelector('.list-group-item:nth-child(3)')
// item3.style.display='none'


// Travesing the DOM
// Parent Node
const items=document.querySelector('#items')
// console.log(items.parentNode);
// items.parentNode.style.backgroundColor='yellow'
//console.log(typeof(items.parentNode))


// Parent Elemnt
// const items=document.querySelector('#items')
// console.log(items.parentElement);
// items.parentElement.style.backgroundColor='yellow'
// Most of the time parent element and parent node are same


// ChildNodes
// console.log(items.childNodes)

// Children
// console.log(items.children)
// items.children[0].style.backgroundColor='yellow'



// FirstChild

// console.log(items.firstChild)
// items.firstChild.textContent="sachin"

// First element child
// console.log(items.firstElementChild)
// items.firstElementChild.textContent='hello abhishek'



// lst child and last elemnt child works same like first one 


//next sibling
//console.log(items.nextSibling);

// next element silbling
//console.log(items.nextElementSibling);

// previous sibling
//console.log(items.previousSibling)

// previous element silbling
//console.log(items.previousElementSibling)


// create element
// here we are create a new heading

//const newHeading=document.createElement('h1')
// console.log(newHeading)
// newHeading.innerText='sachin'
// newHeading.style.color='green'
//newHeading.setAttribute('title','hello world')
// document.body.appendChild(newHeading)

// here we are creating a div
// const newDiv=document.createElement('div')
// console.log(newDiv)

// newDiv.className='newDiv'
// newDiv.id='newDiv'
// newDiv.setAttribute('title', 'hello world')

// const newText=document.createTextNode('hello world')
// newDiv.appendChild(newText )

// const container=document.querySelector('header .container')
// const h1= document.querySelector('header h1')
// console.log(newDiv)
// container.insertBefore(newDiv, h1)

const url='https://catfact.ninja/fact'
const h1 = document.querySelector("h1")

// const fetchData = ()=>{
//     fetch(url)
//     console.log(fetchData)
//     .then((response)=>response.json())
//     .then((data)=>h1.innerText=data.fact)
    
// }

// fetchData();


const fetchData = async ()=>{
    const response= await fetch(url);
    const data= await response.json();
    h1.innerText=data.fact;
    console.log(data.fact)
    
}
fetchData();

































