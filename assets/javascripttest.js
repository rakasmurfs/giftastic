//Begins function on click
$("#createButton").on("click", function(){
    $("#buttons").append("<button id=" + ($("#newButtonText").val()) + 
">"+($("#newButtonText").val()) + "</button>")
})
// I was trying to get it to pull the ID of the button that is clicked to search for the gifs but for some reason its not working with the buttons that I create on the webpage. I know there was a way we got it working in class but I forgot how and could not find the assignment that we did it with. Only thing I had a issue with on this homework.
$("button").on("click", function() {
    if($(this).text() != "Add Button"){
   // console.log($(this).id());
    for(var i = 0; i<11; i++){
        var queryURL = queryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=" + $(this.id) + "-spongebob";    
        $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    var results = response.data;
    console.log(response)

            var newGifDiv = $("<div>");
            //var p = $("<p>").text("Rating: " + results[i].rating);
            var newGif = $("<img>");
            newGif.attr("src", results.images.fixed_height.url);
            newGifDiv.append(newGif);
            //newGifDiv.append(p);
            $("#gifs").prepend(newGifDiv);
            
        
        });
    }}});

    //standard ajax snippet to query a API
    
  