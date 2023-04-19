// function display(){
//    let fn=document.getElementById("inp").value
//  document.getElementById("output").innerHTML=fn
// }

// function check(){
//     let h=document.getElementById("img").src
//     alert(h)
// }

// function check(){
//     // let h=document.getElementById("img")
//     // h.setAttribute("id","picture")
//     // alert(h)

// }

// function check(){
//    let link=document.getElementById("link")
// link.setAttribute("href","https://www.instagram.com/")
//    //    alert(link)
// }

// function change(){
//     let d=document.getElementById("div")
//     // d.setAttribute("class","r")
//     d.classList.add("r")
// }
// function remove(){
//     let d=document.getElementById("div")
//     d.classList.remove("r") 
// }


// let btn=document.getElementById("ch")
// btn.addEventListener("click",display())
// function display(){
//     let n=document.getElementById("name").value
//     alert(n)
// }

// function check(){
//     let n=document.getElementById("name")
//     let verify=n.getAttribute("id")
//     console.log(verify)
// }

function createHeading(){
    const para = document.createElement("h1");
    var input=prompt("Enter your text")
    const text = document.createTextNode(input);
    para.appendChild(text);
    const element = document.getElementById("root");
    element.appendChild(para);
    para.setAttribute("class","h")
    }

    // function createParagraph(){
    //     const para = document.createElement("p");
    //     var input=prompt("Enter your text")
    //     const text = document.createTextNode(input);
    //     para.appendChild(text);
    //     const element = document.getElementById("root");
    //     element.appendChild(para);
    //     para.setAttribute("class","p")
    //     }
    
   let frameworks=["React.js","Angular.js","Vue.js","Node.js"] 
   let text=""
   for (let i of frameworks){
    text=text+i
   }

   console.log(text)
    