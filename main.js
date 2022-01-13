// function fazGet(url) {
//   let request = new XMLHttpRequest()
//   request.open("GET", url, false)
//   request.send()
//   return request.responseText
// }

// function criaLinha(usuarios) {

// }

// function main() {
//   var users = fazGet("http://localhost:3000/user")
//   console.log(users)
// }
// main()

//******************* 
// async function getContent(){
//   try{
//     const response = await fetch(`http://localhost:3000/user/`)
//   }catch(error){
//     console.error(error)
//   }  
// }
// getContent()
//******************* 

// fetch('http://localhost:3000/user/').then(resposta => {
//   return resposta.json() 
// }).then(corpo =>{
//   console.log(corpo)
// })


fetch('http://localhost:3000/user').then(resposta => {
  return resposta.json() 
}).then(corpo =>{
  console.log(corpo)
  for(var c in corpo){
  document.getElementById('res').innerHTML += `<br>${c}- Nome: ${corpo[c].nome}  |  Idade: ${corpo[c].idade}  |  id: ${corpo[c]._id}<br>`
  }
})





//******************* 
// const fePok = () => {
//   const url = `http://localhost:3000/user/`

//   fetch(url)
//     .then(response => response.json())
//     .then(nome => {
//       console.log('teste' + nome)
//     })
// } 
// fePok()
//********************
// let url = `http://localhost:3000/user`
// let headers = new Headers({
//   'Accept' : 'application/json'
// })
// try{
//   const pegaApi = await fetch(url, headers)
//   const json = await pegaApi.json()
//   const resultado = json.results
//   return resultados ? preenche(resultados) : naoAcho(palavraChave)
// }catch{
//   console.log('Mensagemmmm')
// }