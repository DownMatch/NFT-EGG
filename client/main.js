const appId = "PwXfiNrld8EI4Imj7xclw6xkvgiY47GKRr5TydPC";
const serverUrl = "https://3tdnuse5wb3y.usemoralis.com:2053/server";
Moralis.start({ serverUrl, appId });

async function login() {
    let user = Moralis.User.current();
    if (!user) {
        try {
            user = await Moralis.authenticate({ signingMessage: "Machote put the contract description here (the message u get when u connect metamask)" })
            console.log(user)
            console.log(user.get('ethAddress'))
        } catch (error) {
            console.log(error)
        }
        renderGame();
    } else if (ethereum.isConnected()) {
        renderGame();
    }
}

async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
    logOutFromGame();
}

async function renderGame(){
    $("#btn-logout").show();
    $("#btn-login").hide();
    $("#game").show();
}

async function logOutFromGame(){
    $("#game").hide();
    $("#btn-logout").hide();
    $("#btn-login").show();
}

document.getElementById("btn-logout").onclick = logOut;
document.getElementById("btn-login").onclick = login;