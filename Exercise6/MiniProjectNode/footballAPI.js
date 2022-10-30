fetch(
    "http://localhost:8000/apiFootball"
)
    .then((response) => response.json())
    .then((response) => {
        data = response.data.response;
        console.log(data);
        if ("content" in document.createElement("template")) {
            data.forEach((info) => {
                addCard(info);
            });
        }
    });

function addCard(card) {
    const template = document
        .getElementById("card-template")
        .content.cloneNode(true);
    template.querySelector(".card-title").innerText = card.title;
    template.querySelector(".card-text").innerText = card.competition;
    template.getElementById("thumbnail").src = card.thumbnail;
    template.getElementById("matchDetails").href = card.matchviewUrl;
    document.querySelector("#car-list").appendChild(template);
    //template.getElementById("thumbnail").src = card.videos[0].embed;
    var videoEmbed = card.videos[0].embed;
    console.log(videoEmbed);
}