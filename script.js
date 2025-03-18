// Recupera il nome salvato da localStorage o sessionStorage e lo mostra nella pagina
const savedName =
  localStorage.getItem("userName") || sessionStorage.getItem("userName")
if (savedName) {
  document.getElementById("savedName").innerText = `Nome salvato: ${savedName}`
}

// Funzione per salvare il nome nei localStorage e sessionStorage
const saveName = function () {
  const name = document.getElementById("nameInput").value
  if (name) {
    localStorage.setItem("userName", name)
    sessionStorage.setItem("userName", name)
    document.getElementById("savedName").innerText = `Nome salvato: ${name}`
    nameInput.value = "" // Pulisce l'input dopo il salvataggio
  }
}

// Funzione per rimuovere il nome dai localStorage e sessionStorage
const removeName = function () {
  localStorage.removeItem("userName")
  sessionStorage.removeItem("userName")
  document.getElementById("savedName").innerText = ""
}

// Contatore
let counter = sessionStorage.getItem("counter")
  ? parseInt(sessionStorage.getItem("counter"))
  : 0
document.getElementById("counter").innerText = counter

setInterval(function () {
  counter++
  sessionStorage.setItem("counter", counter)
  document.getElementById("counter").innerText = counter
}, 1000)
