Moralis.initialize("PwXfiNrld8EI4Imj7xclw6xkvgiY47GKRr5TydPC");
Moralis.serverURL = "https://3tdnuse5wb3y.usemoralis.com:2053/server"

async function init() {
    try {
        let user = Moralis.User.current();
        if(!user){
            $("#login_button").click( () => {
                user = await Moralis.Web3.authenticate();
            })
        }
        renderGame();
    } catch(error) {
        console.log(error);
    }
}

function renderGame(){
    $("#game").hide();
    $("#login_button").hide();
}

init();

document.getElementById("login_button").onclick = login;