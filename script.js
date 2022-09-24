const abrir=document.getElementsByClassName('menu1')[0]
const fechar=document.getElementsByClassName('menu2')[0]
console.log(abrir)
console.log(fechar)

abrir.addEventListener('click',function(){
    document.querySelector("nav ul").classList.add('show')
    document.querySelector(".pesquisa").classList.add('show')
    abrir.setAttribute('id','hidden');
    fechar.removeAttribute('id','hidden');
})

fechar.addEventListener('click',function(){
    document.querySelector("nav ul").classList.remove('show')
    document.querySelector(".pesquisa").classList.remove('show')
    fechar.setAttribute('id','hidden');
    abrir.removeAttribute('id','hidden');
})

