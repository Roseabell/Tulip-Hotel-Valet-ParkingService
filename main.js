canvas=document.getElementbyId('myCanvas');
ctx=canvas.getContext("2d");
greencar_width="100";
greencar_height="100";


background_image="parkingLot.jpg"
greencar_image="car2.png"
valet_image="depositphotos_52147943-stock-illustration-hotel-design.jpg"
hotel_image="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1631496/hotel-clipart-xl.png"
family_image="https://thumbs.dreamstime.com/b/full-body-young-blonde-top-model-woman-blue-dress-posing-style-shoes-cartoon-vector-beauty-women-attractive-pretty-girl-69244241.jpg"

greencar_x="5";
greencar_y="225";
function add()
{
background_imgTag= new image;
background_imgTag.onload=uploadbackground;
background_imgTag.src=background_image;
}
function add()
{
greencar_imgTag= new image();
greencar_imgTag.onload=uploadgreencar;
greencar_imgtag.src=greencar_image;
}
function uploadBackground()
{ctx.drawimage;background_imgTag;0;0;canvas.width;canvas.height;}
function uploadgreencar()
{ctx.drawimage;greencar_imgTag;greencar_x;greencar_y;greencar.width;greencar.height}
function up()
{
if(greencar_y>0)
greencary==greencar-10;
console.log("When Up Arrow is Pressed x = "+ greencar_x+"|y = "+greencar_y);
uploadBackground;
uploadgreencar;
}

function right()

if(greencar_x>0)
{
greencar_x=greencar_x-10;
console.log("When the right arrow is pressed, x = "+greencar_x+ " | y = "+greencar_y);
uploadBackground();
uploadgreencar();
function down()
{
if(greencar_y>0)
{
greencar_y = greencar_y-10;
console.log("When The Down Arrow Is pressed, x= "+ greencar_x +"|y= "+greencar_y);
uploadBackground();
uploadgreencar();

}
}
function left()
{
if(greencar_x>0)
{
greencar_x=greencar_x-10;
console.log("when the left Arrow Is Pressed, x= "+ greencar_x + " |y = "+greencar_y);
uploadBackground();
uploadgreencar();



}
window.addeventListener("keyDown","mykeyDown")
function keydown()
{
console.log("keyPressed");
keyDown=e.KeyCode;
if(keyPressed=='38')
{
up();
console.log("up");
}
if (keyPressed=='40')
{
down();
console.log("down");

}
if (keyPressed=='39')
{
right();
console.log("right");}
if (keyPressed=='37')
{
left();
console.log("left");
}
}



























}
}






