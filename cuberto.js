var cursor = document.querySelector("#cursor")
var main = document.querySelector("#main")

main.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
})

document.querySelector("#overlay1").addEventListener("mousemove",function(dets){
    document.querySelector("#elm1 img").style.scale = 1
    document.querySelector("#elm1 img").style.opacity = 1
    cursor.style.opacity = 0
    document.querySelector("#elm1 img").style.left = (dets.x - 300) + "px"
    document.querySelector("#elm1 img").style.top = (dets.y - 340) + "px"

})
document.querySelector("#overlay1").addEventListener("mouseleave",function(dets){
    document.querySelector("#elm1 img").style.scale = 0
    document.querySelector("#elm1 img").style.opacity = 0
    cursor.style.opacity = 1
})

document.querySelector("#overlay2").addEventListener("mousemove",function(dets){
    document.querySelector("#elm2 img").style.scale = 1
    document.querySelector("#elm2 img").style.opacity = 1
    cursor.style.opacity = 0
    document.querySelector("#elm2 img").style.left = (dets.x - 710) + "px"
    document.querySelector("#elm2 img").style.top = (dets.y - 320) + "px"

})
document.querySelector("#overlay2").addEventListener("mouseleave",function(dets){
    document.querySelector("#elm2 img").style.scale = 0
    document.querySelector("#elm2 img").style.opacity = 0
    cursor.style.opacity = 1
})

document.querySelector("#overlay3").addEventListener("mousemove",function(dets){
    document.querySelector("#elm3 img").style.scale = 1
    document.querySelector("#elm3 img").style.opacity = 1
    cursor.style.opacity = 0
    document.querySelector("#elm3 img").style.left = (dets.x - 1120) + "px"
    document.querySelector("#elm3 img").style.top = (dets.y - 330) + "px"

})
document.querySelector("#overlay3").addEventListener("mouseleave",function(dets){
    document.querySelector("#elm3 img").style.scale = 0
    document.querySelector("#elm3 img").style.opacity = 0
    cursor.style.opacity = 1
})