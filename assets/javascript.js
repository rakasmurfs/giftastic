//Begins function on click
$("document").on("click", function() {
    console.log($(this).text());
    //sets a var equal to our api key/url this one searching api for "cats"
    //var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=" + $(this).text() + "-spongebob";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        $(this).text() + "-spongebob" + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    //standard ajax snippet to query a API
    $.ajax({
      url: queryURL,
      method: "GET"
    })

      //Turns your result into an object named response after beginning the query and runs function that can reference it
      .then(function(response) {
          console.log(response);
        var results = response.data;
        for(var i = 0; i < results.length; i++)
            {
                var newGifDiv = $("<div>");
                var p = $("<p>").text("Rating: " + results[i].rating);
                var newGif = $("<img>");
                newGif.attr("src", results[i].images.fixed_height.url);
                newGifDiv.append(newGif);
                newGifDiv.append(p);
                $("#gifs").prepend(newGifDiv);
            }
        
      });
  });