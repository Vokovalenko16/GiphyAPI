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
  let reg = /.*[^_s]\.gif$/g
  
  var urlLINK = $(this).attr("src")

  if (reg.test(urlLINK) === true){
    var NEW = urlLINK.replace(".gif","_s.gif")
    $(this).attr("src", NEW) 
  }

  else if (reg.test(urlLINK) === false) {
  var NEW = urlLINK.replace("_s.gif",".gif")
  $(this).attr("src", NEW) 
  }
};


//function makes the GIF stop if the specific GIF is clicked

$(document).on("click", ".animal", displayImage)
$(document).on("click", ".animalZ", stopGIF)


