function sayhello(){
    const txtnameel = document.querySelector("#txtname")
    const welcomeel = document.querySelector("#welcome")

    welcomeel.innerHTML = ` helllo ${txtnameel.value}`
}