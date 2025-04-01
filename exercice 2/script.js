function upsAndDown(){
  const x = document.getElementById("paragraph");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  const y =document.getElementById("phrase");
  this.style.transform = "rotate(180deg)";
};

