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

window.addEventListener("keydown", My_keydown);
function My_keydown(e) {
    key_pressed = e.keyCode;
    console.log(key_pressed);

    // Resizing image
    if (e.shiftKey == true && key_pressed == '80') {
        console.log("P & Shift-Key is Pressed Together");
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
     }
 
     if (e.shiftKey == true && key_pressed == '77') {
         console.log("M & Shift-Key is Pressed Together");
         block_width = block_width - 10;
         block_height = block_height - 10;
         document.getElementById("width").innerHTML = block_width;
         document.getElementById("height").innerHTML = block_height;
      }

      // Inserting Images
      if (key_pressed == '70') {
          new_image('Iron-spider-Armor-head.jpg');
          console.log("F");
      }
      
      if (key_pressed == '66') {
          new_image('ironman_body.png');
          console.log("B");
      }

      if (key_pressed == '76') {
          new_image('captain_america_left_hand.png');
          console.log("L")
      }

      if (key_pressed == '82') {
          new_image('spiderman_right_hand.png');
          console.log("R")
      }

      if (key_pressed == '67') {
          new_image('Miles_Morales_2099_Suit_legs.png');
          console.log("C")
      }

      // Moving Our Player 
      if (key_pressed == '38') {
          up();
          console.log("UP");
      }

      if (key_pressed == '40') {
          down();
          console.log("DOWN");
      }

      if (key_pressed == '37') {
          left();
          console.log("LEFT");
      }

      if (key_pressed == '39') {
          right();
          console.log("RIGHT");
      }
}