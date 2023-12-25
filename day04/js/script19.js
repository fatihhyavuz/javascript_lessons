function setmode(){
    const isdark = document.body.classList.contains("dark")
    const btntoggle = document.querySelector(".toggle-btn")
   if(isdark){

    document.body.classList.remove("dark")
    btntoggle.innerHTML = '<i class="fas fa-moon"></i>'
   }
   else{
    document.body.classList.add("dark")
    btntoggle.innerHTML = '<i class="fas fa-sun"></i>'
   }
}