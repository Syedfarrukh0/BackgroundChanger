
//--------------Declear the variables for change the background-------------

let main = document.querySelector('main');

//---------------------Create the function for chnage the background-----------------------

function color(bg) {

 //--------------Assign the background color-------------

    main.style.background = bg;

 //-------------Declear the variable for text-------------   

    let text = document.getElementsByClassName('text');

 //-------------Apply the condition to change the text color for suitable background-------------

    if (bg == "black" || bg == "red") {

      //--------Declear "forof" loop because its arrey so to assign the classes one by one--------
      
        for (let text_color of text) {
            text_color.style.color = "white";
        }
    }else{
        for (let text_color of text) {
            text_color.style.color = "black";
        }
    }
}