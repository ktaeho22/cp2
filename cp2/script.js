

document.getElementById("searchSubmit").addEventListener("click", function(event) {
  event.preventDefault();

  const value = document.getElementById("searchInput").value;
  if(value == "") {
    document.getElementById("v1-thumbnail").innerHTML = "";
    document.getElementById("v2-thumbnail").innerHTML = "";
    document.getElementById("v3-thumbnail").innerHTML = "";



    document.getElementById("v1-title").innerHTML =  "";
    document.getElementById("v2-title").innerHTML =  "";
    document.getElementById("v3-title").innerHTML =  "";
    return;
  }
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
        key: 'AIzaSyDjYp_-mmBph5YkiJz5JhbsPHeUgMtUdD4',
        q: value,
        part: 'snippet',
        maxResults: 3,
        type: 'video',
        videoEmbeddable: true,
    },
    success: function(data){
        embedVideo(data)
    },
    error: function(response){
        console.log("Request Failed");
    }
  });


});

function embedVideo(data) {
  var thumbnail1;
  var thumbnail2;
  var thumbnail3;
  thumbnail1 = "<a href=\"https://youtu.be/" + data.items[0].id.videoId + "\"/>"+
  "<img src=" + "\"" + data.items[0].snippet.thumbnails.high.url+ "\"/> </a>";
  thumbnail2 = "<a href=\"https://youtu.be/" + data.items[1].id.videoId + "\"/>"+
  "<img src=" + "\"" + data.items[1].snippet.thumbnails.high.url+ "\"/> </a>";
  thumbnail3 = "<a href=\"https://youtu.be/" + data.items[2].id.videoId + "\"/>"+
  "<img src=" + "\"" + data.items[2].snippet.thumbnails.high.url+ "\"/> </a>";
  document.getElementById("v1-thumbnail").innerHTML = thumbnail1;
  document.getElementById("v2-thumbnail").innerHTML = thumbnail2;
  document.getElementById("v3-thumbnail").innerHTML = thumbnail3;



  document.getElementById("v1-title").innerHTML =  data.items[0].snippet.title;
  document.getElementById("v2-title").innerHTML =  data.items[1].snippet.title;
  document.getElementById("v3-title").innerHTML =  data.items[2].snippet.title;

    $('.description').text(data.items[0].snippet.description)
}
