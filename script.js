// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// 1.0
const mainEl = document.querySelector('main');

//1.1
mainEl.style.backgroundColor = 'var(--main-bg)';

//1.2
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

//1.3
mainEl.classList.add('flex-ctr');

//2.0
const topMenuEl = document.querySelector('#top-menu');

//2.1
topMenuEl.style.height = '100%';

//2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//2.3
topMenuEl.classList.add('flex-around');

//3.1
for (let i = 0; i < menuLinks.length; i++) {
    const a = document.createElement('a') // create element
    a.setAttribute('href', menuLinks[i].href) // setting atributes to the new element
    a.textContent = menuLinks[i].text //setting content
    topMenuEl.appendChild(a) //append the new element to the DOM
}

//*======== Section 2
//4.0
const subMenuEl = document.querySelector('#sub-menu');

//4.1
subMenuEl.style.height = '100%';

//4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

//4.3
subMenuEl.classList.add('flex-around');

//4.4
subMenuEl.style.position = 'absolute';

//4.5
subMenuEl.style.top = '0';

//5.1
const topMenuLinks = document.querySelectorAll('a');
console.log(topMenuLinks);
const showingSubMenu = 'false'


// console.log(allATags);

//5.2
topMenuEl.addEventListener('click', function(event) {
  event.preventDefault()
  // console.log(EventSource);

  if(event.target.tagName !== 'A') { // true if it's not a
        return
    // event.stopPropagation()
  }
  console.log(event.target);
  
  
  //5.3
  // console.log();
  // a.classList.contains('a')
  if(event.target.classList.contains('active')) {// only runs i=f class active is found
    event.target.classList.remove('active');
    showingSubMenu = 'false'
    subMenuEl.style.top = '0'
    return
  }
  //5.4
  event.target.classList.remove('active');//! not sure if its correct
  // console.log(event.target);
  
  //5.5
  event.target.classList.add('active');//! not sure if its correct
//!how can I check if it's adding the class 'active'

//5.6
//event.target.textContent = "about"
  const linkFound = menuLinks.find(obj => obj.text === 'account')
    console.log(linkFound);

    if (linkFound.subLinks !== undefined) {
      showingSubMenu = true

    } else {
      showingSubMenu = false
  }

}
)

// const linkFound = menuLinks.find(obj => obj.text === 'account');

//   console.log(linkFound);

//   if (linkFound.subLinks !== undefined) {
//     showingSubMenu = true
// } else {
//       showingSubMenu = false

//   }


