const openTab = document.querySelector('.open')
const nav = document.querySelector('.nav')
const closeTab = document.querySelector('.close')

function open(){
nav.setAttribute("class","nav2")
closeTab.setAttribute("class","close2")
}

function close(){
    nav.setAttribute("class","none")
    closeTab.setAttribute("class","close")
    }
    

openTab.addEventListener('click',open)

closeTab.addEventListener('click',close)