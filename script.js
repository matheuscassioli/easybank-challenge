var menu = document.getElementById('icone-hamb')
var showmenu = document.getElementById('menu-invisivel');
var fechar = document.querySelector('#close')

menu.addEventListener('click', () => {  
    menu.classList.add('icone-hamb2')
    showmenu.classList.add('menu-invisivel2')
    document.getElementById('close').classList.add('close2')
})

fechar.addEventListener('click', () =>{
    showmenu.classList.remove('menu-invisivel2')
    menu.classList.remove('icone-hamb2')
    document.getElementById('close').classList.remove('close2')
})
