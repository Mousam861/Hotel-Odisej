

// Shery.hoverWithMediaCircle(".page4 .room1" /* Element to target.*/, {
//     images: ["/Images/classic.jpg", "image2.jpg", "image3.jpg"] /*OR*/,
   
// });


var h1 = document.querySelectorAll(".page2 h1")
var h4 = document.querySelectorAll(".page3 h4")
var p5h4 = document.querySelectorAll(".page5 h4")
var p6h4 = document.querySelectorAll(".page6 h4")
var p7h4 = document.querySelectorAll(".page7 h4")


function page2h1(){
    h1.forEach(function(elem){
    var clutter ="" 
    var h1text = elem.textContent;
    var splittedText = h1text.split("")
    splittedText.forEach(function(e){
        clutter += `<span>${e}</span>`
    })
    elem.innerHTML=clutter;
})
gsap.to(".page2 h1 span",{
    color:"#E3E3C4",
    stagger:0.2,
    scrollTrigger:{
        trigger:".page2 h1",
        scroller:"body",
        start:"top 60%",
        // end:"top 0%",
        scrub:1
    }
})
}
page2h1();

function page3h4(){
    h4.forEach(function(elem){
    var clutter ="" 
    var h4text = elem.textContent;
    var splittedText = h4text.split("")
    splittedText.forEach(function(e){
        clutter += `<span>${e}</span>`
    })
    elem.innerHTML=clutter;
})
gsap.to(".page3 h4 span",{
    color:"#535D41",
    stagger:0.2,
    scrollTrigger:{
        trigger:".page3 h4",
        scroller:"body",
        start:"top 60%",
        end:"top 20%",
        scrub:1
    }
})
}
page3h4();


function page5h4(){
    p5h4.forEach(function(elem){
    var clutter ="" 
    var p5h4text = elem.textContent;
    var splittedText = p5h4text.split("")
    splittedText.forEach(function(e){
        clutter += `<span>${e}</span>`
    })
    elem.innerHTML=clutter;
})
gsap.to(".page5 h4 span",{
    color:"white",
    stagger:0.2,
    scrollTrigger:{
        trigger:".page5 h4",
        scroller:"body",
        start:"top 60%",
        end:"top 0%",
        scrub:1
    }
})
}
page5h4();

function page6h4(){
    p6h4.forEach(function(elem){
    var clutter ="" 
    var p6h4text = elem.textContent;
    var splittedText = p6h4text.split("")
    splittedText.forEach(function(e){
        clutter += `<span>${e}</span>`
    })
    elem.innerHTML=clutter;
})
gsap.to(".page6 h4 span",{
    color:"#434B34",
    stagger:0.2,
    scrollTrigger:{
        trigger:".page6 h4",
        scroller:"body",
        start:"top 60%",
        end:"top 30%",
        scrub:1
    }
})
}
page6h4();

var relax1 = document.querySelector(".page6 .relax1")
var relax3 = document.querySelector(".page6 .relax3")
gsap.to(relax1,{
    x:"-200",
    duration:4,
    scrollTrigger:{
        trigger:".page6 .relax1",
        scroller:"body",
        start:"top 70%",
        end:"top 0%",
        scrub:1
    }
})
gsap.to(relax3,{
    x:"200",
    duration:4,
    scrollTrigger:{
        trigger:".page6 .relax3",
        scroller:"body",
        start:"top 70%",
        end:"top 0%",
        scrub:1
    }
})

function page7h4(){
    p7h4.forEach(function(elem){
    var clutter ="" 
    var p7h4text = elem.textContent;
    var splittedText = p7h4text.split("")
    splittedText.forEach(function(e){
        clutter += `<span>${e}</span>`
    })
    elem.innerHTML=clutter;
})
gsap.to(".page7 h4 span",{
    color:"white",
    stagger:0.2,
    scrollTrigger:{
        trigger:".page7 h4",
        scroller:"body",
        start:"top 60%",
        end:"top 30%",
        scrub:1
    }
})
}
page7h4();



var page1text = document.querySelector(".page1 .hotel ")
gsap.from(page1text,{
    y:90,
    scale:0.5,
    duration:2
})

var page1nav = document.querySelector(".page1 .nav")
gsap.from(page1nav,{
    y:"-90",
    scale:0.5,
    duration:2
})

var p7card1 = document.querySelector(".page8 .page7card1 img")
var p7card2 = document.querySelector(".page8 .page7card2 img")
gsap.from(p7card1,{
    x:"200",
    duration:2,
    scrollTrigger:{
        trigger:".page8 .page7card1 img",
        scroller:"body",
     
        start:"top 70%",
        end:"top 0%",
        scrub:1
    }
})
gsap.from(p7card2,{
    x:"-200",
    duration:2,
    scrollTrigger:{
        trigger:".page8 .page7card2 img",
        scroller:"body",
       
        start:"top 70%",
        end:"top 0%",
        scrub:1
    }
})

var page9 = document.querySelector(".page9 .box")
gsap.from(page9,{
    y:300,
    scrollTrigger:{
        trigger:".page9 .box",
        scroller:"body",
        start:"top 190%",
        // end:"top 0%",
        scrub:3
    }
})








