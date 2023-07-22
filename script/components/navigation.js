export const navigation = () => {
    const categories = ["3D", "paintings", "drawings", "embroidery", "contact"]
    const body = document.querySelector('body');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const home = document.createElement('li');
    const homeLink = document.createElement('a');
    homeLink.setAttribute('href', '/index.html');
    homeLink.textContent = "home"
    home.appendChild(homeLink);
    ul.appendChild(home);
    nav.appendChild(ul);
    if (document.querySelector('.gallery')){
        nav.setAttribute('class', 'nav--gallery')
    }
    body.appendChild(nav);
    for(let i = 0; i < categories.length; ++i) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.setAttribute('href', `/pages/${categories[i]}.html`);
      a.textContent = `${categories[i]}`;
      li.appendChild(a);
      ul.appendChild(li);
    }
  return
}

export const hamburgerMenu = () => {
    const body = document.querySelector('body');
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', 'menu-toggle');
    const ham = document.createElement('div');
    ham.setAttribute('id', 'ham');
    const cross = document.createElement('div');
    cross.setAttribute('id', 'cross');
    for(let i = 0; i < 3; ++i){
        const span = document.createElement('span');
        ham.appendChild(span)
    }
    for(let i = 0; i < 2; ++i){
        const span = document.createElement('span');
        cross.appendChild(span)
    }
    wrapper.appendChild(ham);
    wrapper.appendChild(cross);
    body.appendChild(wrapper);
    return
}
