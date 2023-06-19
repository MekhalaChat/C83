var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    
    var width = screen.width;
    
    new_width = screen.width - 70;
    new_hieght = screen.height - 300;
    if( width < 992)
    {
    document.getElementById("myCanavas").width =new_width;
    document.getElementById("myCanavas").height =new_height;
    document.body.style.overflow = "hidden"
    }
    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        // END Addictonal Activity 
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft
        last_position_of_y = e.touches[0].clientX - canvas.offsetTop
    }


    canvas.addEventListener("mouseleave", my_touchmove);
    function my_touchmove(e)
    console.log("my_touchmove");
    current_position_of_mouse_x=

    

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {

         current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
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
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

