let apiKey = "YXnFGxw1T8W3jiURIY0j87wYT0VImnsz";
// console.log(userText.value)



const getGIF = async() => {
    let userText = document.getElementById("fakesearch");
    const URL = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=schwarzenegger%20${userText.value}&rating=pg-13`;

    let res = await fetch(URL);
    console.log(res)

    let json = await res.json();
    console.log(json)
    console.log(json.data.embed_url)

    var arnoldURL = json.data.images.downsized.url;
    console.log(arnoldURL)

    displayGIF(arnoldURL)
}

function displayText() {
    document.getElementById("surprise").innerHTML = "Surprise! You get Arnold Schwarzenegger instead!";
}

function displayGIF(GIF) {
   let arnold = document.getElementById("arnoldGIF")
   arnold.src = GIF
}