async function chat() {
    let elm = document.getElementById("chatInput")
    let chat = document.getElementById("chatBox")
    if(!elm.value) return
    chat.innerHTML += `<p class="message">${elm.value}</p><br><br>`
    elm.value = ""
}