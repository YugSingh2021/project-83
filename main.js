canvas=documentgetElementById("myCanvas")

ctx = canvas.getContext("2d")


var MouseEvent="";
var last_position_of_x,last_position_of_y;
ctx=canvas.getContext("2d");
color = "red";
width_of_line = 15;
canvas.addEventListener("mousedown",mymousedown())
function mymousedown(){
mouseEvent = mousedown;

}
canvas.addEventListener("mousemove",mymousemove())
function mymousemove(e){
current_position_of_mouse_x = e.clientX-canvas.offsetLeft;
current_position_of_mouse_y = e.clientY-canvas.offsetTop;
if (mouseEvent == mouseDown){
    ctx.beginPath();
    ctx.strokeStyle =color;
    ctx.lineWidth= width_of_line;
    ctx.moveTo(last_position_of_x,last_position_of_y)
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y)
    ctx.stroke();
}
last_position_of_x = current_position_of_mouse_x
last_position_of_y = current_position_of_mouse_y
}function  my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

       
    }

    
    

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_mouse_x = e.touches[0].clientX- canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY- canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
        
    }

