
const User={
    id:1,
    name:"Yasin"
}
const myBtn=document.getElementById('myBtn')
const contentDiv=document.getElementById('content')
myBtn.addEventListener('click',()=>{
    const ul=document.createElement("ul")
    console.log("butonatıklandı")
    for (let index = 0; index < 10; index++) {
        const li=document.createElement('li')
        li.innerText="Merhaba Ben Li" + (index+1)
        li.style.background="#ccc"
        ul.appendChild(li)
        contentDiv.append(ul)
    }
    const h1 =document.createElement("h1")
    h1.style.color="red"
    h1.innerText=User.name + " -  " + User.id
    contentDiv.append(h1)
})