let Arr = ["cat","dog","fish", "mouse", "bird","tiger"];
let apiK = "qHjLiJyhHPvmakUjl5z3WIaHskuL9KLM";
let enteR = [];
let enterR_still = [];
Pressed = 0;



function displayImage() {
    $("img").remove();
    var animal = $(this).attr("data-name");
    console.log(animal)
    apiURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiK + "&q=" + animal + "&limit=10&offset=0&rating=G&lang=en"

    $.ajax({
      url: apiURL,
      method: "GET"
    }).then(function(response) {
      console.log(response)
    
    for(var ii=0; ii<10; ii++){
      enteR.push(response.data[ii].images.original.url)
    }
    
    
    for (var jj = 0; jj < 10; jj++) {

      var imG = $("<img>"); 
      imG.addClass("animalZ");
      imG.attr("src", enteR[jj]);

      $("#pic" + (jj+1)).prepend(imG);
      
      }
      enteR = [];
    });

  }


////makes the buttons for the first things inside the array
function renderButtons() {

    $(".input").empty();

    for (var i = 0; i < Arr.length; i++) {

      var newB = $("<button>"); 
      newB.addClass("animal");
      newB.attr("data-name", Arr[i]);
      newB.text(Arr[i]);
      $(".input").append(newB);
    }
  }
////makes the buttons for the first things inside the array

/////makes the button if new text is typed.
renderButtons();

$("#add-answer").on("click", function(event){
event.preventDefault();
   var newA =  $("#answeR").val()
   Arr.push(newA);
   console.log(newA);
renderButtons();
})
/////makes the button if new text is typed.


//function makes the GIF stop if the specific GIF is clicked
function stopGIF() {

if  (Pressed === 0 || (Pressed%2) ===0 ) {
  var urlLINK = $(this).attr("src")
  var NEW = urlLINK.replace(".gif","_s.gif")
  $(this).attr("src", NEW) 
};
if ((Pressed%2) !=0) {
  var urlLINK2 = $(this).attr("src")
  var NEW2 = urlLINK2.replace("_s.gif",".gif")
  $(this).attr("src", NEW2) 
}
Pressed++;

}


//function makes the GIF stop if the specific GIF is clicked

$(document).on("click", ".animal", displayImage)
$(document).on("click", ".animalZ", stopGIF)


