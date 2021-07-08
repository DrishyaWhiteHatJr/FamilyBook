var images = [
    "Mother.png",
    "BigSister.png",
    "LittleSister.png",
"Father.png"
  ];
  
  var i = 0;
  function nextslide() {
  
  if(i == 4)
    {
      i=0;
    }
  
  document.getElementById("album").src = images[i];
  i++;
  }