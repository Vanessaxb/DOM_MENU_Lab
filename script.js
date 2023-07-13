// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
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
    topMenuEl.appendChild(a) //append thr new element to the DOM
}



