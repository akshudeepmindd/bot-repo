const steamUser = require('steam-user');
const Client = new steamUser()
const Config = require("./config.json")


const logOptions = {
    accountName: Config.username,
    password: Config.password
}

Client.logOn(logOptions)


Client.on('loggedOn',() => {
    console.log("logged In Successfully")
    Client.setPersona(steamUser.EClientUIMode.Mobile)

})