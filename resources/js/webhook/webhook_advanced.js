function sendMessage() {
    var request = new XMLHttpRequest();

    request.open("POST", document.querySelector("input[name='webhook_url']"));
    request.setRequestHeader('Content-type', 'application/json');

    var Embed = {
        title: document.querySelector("input[name='title']"),
        type: "rich",
        description: document.querySelector("input[name='description']"),
        url: document.querySelector("input[name='title_url']"),
        timestamp: document.querySelector("input[name='data']"),
        color: hexToDecimal(document.querySelector("input[name='color']")),
        footer: {
            text: document.querySelector("input[name='footer_text']"),
            icon_url: document.querySelector("input[name='footer_img']"),
        },
        image: {
            url:document.querySelector("input[name='image']"),
        },
        thumbnail:{
            url:document.querySelector("input[name='thumbnail']"),
        },
        author: {
            name: document.querySelector("input[name='author_name']"),
        },
        fields:[
            {
                name: 'Regular field title',
                value: 'Some value here',
                inline: false,
            },
        ],



    }

    var params = {
        username: document.querySelector("input[name='username']"),
        avatar_url: document.querySelector("input[name='avatar_url']"),
        embeds: [Embed]
    }

    request.send(JSON.stringify(params));
}

// function that converts a color HEX to a valid Discord color
function hexToDecimal(hex) {
    return parseInt(hex.replace("#", ""), 16)
}