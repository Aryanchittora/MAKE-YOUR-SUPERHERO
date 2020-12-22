canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_width = 30;
block_height = 30;

Player_object = "";

function player_update () {
    fabric.Image.fromURL("player.png", function(Img){
        Player_object = Img;
        Player_object.scaleToWidth(150);
        Player_object.scaleToHeight(150);
        Player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(Player_object);
    });
}

function new_image(get_image) {
     fabric.Image.fromURL(get_image, function(Img){
         block_object = Img;
         block_object.scaleToWidth(block_width);
         block_object.scaleToHeight(block_height);
         block_object.set({
            top:player_y,
            left:player_x
         });
         canvas.add(block_object);
     });
}