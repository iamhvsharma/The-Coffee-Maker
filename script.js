
// Cursor effect function 
function cursorEffect() {
    let page1Content = document.querySelector("#page1-content");
    let cursor = document.querySelector("#cursor");
    
    // Not Smooth
    // page1Content.addEventListener("mousemove", function(dets){
    //     cursor.style.left = dets.x+"px";
    //     cursor.style.top = dets.y+"px";
    // })
    
    // Dets is not a keyword we can write anything it's just a object which shows the details of the mouse move event
    
    
    // Smooth method
    
    page1Content.addEventListener("mousemove", function(dets){
        gsap.to(cursor,{
            x:dets.x,
            y:dets.y
        })
    })
    
    
    page1Content.addEventListener("mouseenter", function(){
        gsap.to(cursor,{
            scale: 1,
            opacity: 1
        })
    })
    
    
    page1Content.addEventListener("mouseleave", function(){
        gsap.to(cursor,{
            scale: 0,
            opacity: 0
        })
    })
    
}

cursorEffect();