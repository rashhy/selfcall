// 2.10 Dentro do arquivo index.js você irá escrever(ou colar) o código abaixo que basicamente servirá para deixar o bot online e funcionando:
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

var ip = require('ip');
const {Client} = require("discord.js-self")
const cor = require("chalk")
const config = require("./config.json")

const client1 = new Client()
const client2 = new Client()
const client3 = new Client()
const client4 = new Client()
const client5 = new Client()
const client6 = new Client()
const client7 = new Client()
const client8 = new Client()
const client9 = new Client()
const client10 = new Client()
const client11 = new Client()
const client12 = new Client()
const client13 = new Client()
const client14 = new Client()
const client15 = new Client()
console.clear()
console.log(cor.cyan("[Sistema] acessando contas..."))
console.log(ip.address())
client1.on('ready',()=>{
  if(!config.token1 || !config.call1) return
  client1.channels.cache.get(config.call1).join()
  let nome = cor.cyan.bgBlack.bold(client1.user.username)
  console.log(cor.green(`[Sistema] Conta: ${nome} conectada com sucesso ao canal` +cor.blue.bgBlack.bold(client1.channels.cache.get(config.call1).name)))
  console.log(cor.blue(`━━━━━━━━━━━━━━━━━logs━━━━━━━━━━━━━━━━━"`))
})
client2.on('ready',()=>{
  if(!config.token2 || !config.call2) return
  client2.channels.cache.get(config.call2).join()
  let nome = cor.cyan.bgBlack.bold(client2.user.username)
  console.log(cor.green(`[Sistema] Conta: ${nome} conectada com sucesso ao canal` +cor.blue.bgBlack.bold(client2.channels.cache.get(config.call2).name)))
    console.log(cor.blue(`━━━━━━━━━━━━━━━━━logs━━━━━━━━━━━━━━━━━"`))
})
client3.on('ready',()=>{
  if(!config.token3 || !config.call3) return
  client3.channels.cache.get(config.call3).join()
  let nome = cor.cyan.bgBlack.bold(client3.user.username)
  console.log(cor.green(`[Sistema] Conta: ${nome} conectada com sucesso ao canal` +cor.blue.bgBlack.bold(client3.channels.cache.get(config.call3).name)))
    console.log(cor.blue(`━━━━━━━━━━━━━━━━━logs━━━━━━━━━━━━━━━━━"`))
  
})
client4.on('ready',()=>{
  if(!config.token4 || !config.call4) return
  client4.channels.cache.get(config.call4).join()
  let nome = cor.cyan.bgBlack.bold(client4.user.username)
  console.log(cor.green(`[Sistema] Conta: ${nome} conectada com sucesso ao canal` +cor.blue.bgBlack.bold(client4.channels.cache.get(config.call4).name)))
    console.log(cor.blue(`━━━━━━━━━━━━━━━━━logs━━━━━━━━━━━━━━━━━"`))
})
client5.on('ready',()=>{
  if(!config.token5 || !config.call5) return
  client5.channels.cache.get(config.call5).join()
  let nome = cor.cyan.bgBlack.bold(client5.user.username)
  console.log(cor.green(`[Sistema] Conta: ${nome} conectada com sucesso ao canal` +cor.blue.bgBlack.bold(client5.channels.cache.get(config.call5).name)))
    console.log(cor.blue(`━━━━━━━━━━━━━━━━━logs━━━━━━━━━━━━━━━━━"`))
})
client6.on('ready',()=>{
  if(!config.token6 || !config.call6) return
  client6.channels.cache.get(config.call6).join()
  let nome = cor.cyan.bgBlack.bold(client6.user.username)
  console.log(cor.green(`[Sistema] Conta: ${nome} conectada com sucesso ao canal` +cor.blue.bgBlack.bold(client6.channels.cache.get(config.call6).name)))
    console.log(cor.blue(`━━━━━━━━━━━━━━━━━logs━━━━━━━━━━━━━━━━━"`))
})
client7.on('ready',()=>{
  if(!config.token7 || !config.call7) return
  client7.channels.cache.get(config.call7).join()
  let nome = cor.cyan.bgBlack.bold(client7.user.username)
  console.log(cor.green(`[Sistema] Conta: ${nome} conectada com sucesso ao canal` +cor.blue.bgBlack.bold(client7.channels.cache.get(config.call7).name)))
    console.log(cor.blue(`━━━━━━━━━━━━━━━━━logs━━━━━━━━━━━━━━━━━"`))
})
client8.on('ready',()=>{
  if(!config.token8 || !config.call8) return
  client8.channels.cache.get(config.call8).join()
  let nome = cor.cyan.bgBlack.bold(client8.user.username)
  console.log(cor.green(`[Sistema] Conta: ${nome} conectada com sucesso ao canal` +cor.blue.bgBlack.bold(client8.channels.cache.get(config.call8).name)))
    console.log(cor.blue(`━━━━━━━━━━━━━━━━━logs━━━━━━━━━━━━━━━━━"`))
})
client9.on('ready',()=>{
  if(!config.token9 || !config.call9) return
  client9.channels.cache.get(config.call9).join()
  let nome = cor.cyan.bgBlack.bold(client9.user.username)
  console.log(cor.green(`[Sistema] Conta: ${nome} conectada com sucesso ao canal` +cor.blue.bgBlack.bold(client9.channels.cache.get(config.call9).name)))
    console.log(cor.blue(`━━━━━━━━━━━━━━━━━logs━━━━━━━━━━━━━━━━━"`))
  
})
client10.on('ready',()=>{
  if(!config.token10 || !config.call10) return
  client10.channels.cache.get(config.call10).join()
  let nome = cor.cyan.bgBlack.bold(client10.user.username)
  console.log(cor.green(`[Sistema] Conta: ${nome} conectada com sucesso ao canal` +cor.blue.bgBlack.bold(client10.channels.cache.get(config.call10).name)))
    console.log(cor.blue(`━━━━━━━━━━━━━━━━━logs━━━━━━━━━━━━━━━━━"`))
  
})
client11.on('ready',()=>{
  if(!config.token11 || !config.call11) return
  client11.channels.cache.get(config.call11).join()
  let nome = cor.cyan.bgBlack.bold(client11.user.username)
  console.log(cor.green(`[Sistema] Conta: ${nome} conectada com sucesso ao canal` +cor.blue.bgBlack.bold(client11.channels.cache.get(config.call11).name)))
    console.log(cor.blue(`━━━━━━━━━━━━━━━━━logs━━━━━━━━━━━━━━━━━"`))
  
})
client12.on('ready',()=>{
  if(!config.token12 || !config.call12) return
  client12.channels.cache.get(config.call12).join()
  let nome = cor.cyan.bgBlack.bold(client12.user.username)
  console.log(cor.green(`[Sistema] Conta: ${nome} conectada com sucesso ao canal` +cor.blue.bgBlack.bold(client12.channels.cache.get(config.call12).name)))
    console.log(cor.blue(`━━━━━━━━━━━━━━━━━logs━━━━━━━━━━━━━━━━━"`))
  
})
client13.on('ready',()=>{
  if(!config.token13 || !config.call13) return
  client13.channels.cache.get(config.call13).join()
  let nome = cor.cyan.bgBlack.bold(client13.user.username)
  console.log(cor.green(`[Sistema] Conta: ${nome} conectada com sucesso ao canal` +cor.blue.bgBlack.bold(client13.channels.cache.get(config.call13).name)))
    console.log(cor.blue(`━━━━━━━━━━━━━━━━━logs━━━━━━━━━━━━━━━━━"`))
  
})
client14.on('ready',()=>{
  if(!config.token14 || !config.call14) return
  client14.channels.cache.get(config.call14).join()
  let nome = cor.cyan.bgBlack.bold(client14.user.username)
  console.log(cor.green(`[Sistema] Conta: ${nome} conectada com sucesso ao canal` +cor.blue.bgBlack.bold(client14.channels.cache.get(config.call14).name)))
    console.log(cor.blue(`━━━━━━━━━━━━━━━━━logs━━━━━━━━━━━━━━━━━"`))
  
})
client15.on('ready',()=>{
  if(!config.token15 || !config.call15) return
  client15.channels.cache.get(config.call15).join()
  let nome = cor.cyan.bgBlack.bold(client15.user.username)
  console.log(cor.green(`[Sistema] Conta: ${nome} conectada com sucesso ao canal` +cor.blue.bgBlack.bold(client15.channels.cache.get(config.call15).name)))
    console.log(cor.blue(`━━━━━━━━━━━━━━━━━logs━━━━━━━━━━━━━━━━━"`))
  
})

if(config.token1){
  client1.login(config.token1).catch(()=>{console.log(cor.red("foi detectado token1 inválido"))})
}
if(config.token2){
  client2.login(config.token2).catch(()=>{console.log(cor.red("foi detectado token2 inválido"))})
}
if(config.token3){
  client3.login(config.token3).catch(()=>{console.log(cor.red("foi detectado token3 inválido"))})
}
if(config.token4){
  client4.login(config.token4).catch(()=>{console.log(cor.red("foi detectado token4 inválido"))})
}
if(config.token5){
  client5.login(config.token5).catch(()=>{console.log(cor.red("foi detectado token5 inválido"))})
}
if(config.token6){
  client6.login(config.token6).catch(()=>{console.log(cor.red("foi detectado token6 inválido"))})
}
if(config.token7){
  client7.login(config.token7).catch(()=>{console.log(cor.red("foi detectado token7 inválido"))}) 
}
if(config.token8){
  client8.login(config.token8).catch(()=>{console.log(cor.red("foi detectado token8 inválido"))}) 
}
if(config.token9){
  client9.login(config.token9).catch(()=>{console.log(cor.red("foi detectado token9 inválido"))}) 
}
if(config.token10){
  client10.login(config.token10).catch(()=>{console.log(cor.red("foi detectado token10 inválido"))}) 
}
if(config.token11){
  client11.login(config.token11).catch(()=>{console.log(cor.red("foi detectado token11 inválido"))}) 
}
if(config.token12){
  client12.login(config.token12).catch(()=>{console.log(cor.red("foi detectado token12 inválido"))}) 
}
if(config.token13){
  client13.login(config.token13).catch(()=>{console.log(cor.red("foi detectado token13 inválido"))}) 
}
if(config.token14){
  client14.login(config.token14).catch(()=>{console.log(cor.red("foi detectado token14 inválido"))}) 
}
if(config.token15){
  client15.login(config.token15).catch(()=>{console.log(cor.red("foi detectado token15 inválido"))}) 
}
