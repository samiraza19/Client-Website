var menuHolder = document.getElementById('menuHolder')
    var siteBrand = document.getElementById('siteBrand')
    function menuToggle(){
      if(menuHolder.className === "drawMenu") menuHolder.className = ""
      else menuHolder.className = "drawMenu"
    }
    if(window.innerWidth < 426) siteBrand.innerHTML = "MAS"
    window.onresize = function(){
      if(window.innerWidth < 420) siteBrand.innerHTML = "MAS"
      else siteBrand.innerHTML = "MY AWESOME WEBSITE"
    }



    function home(){
      window.open("index.html")  
    }

    
    function lecture(){
        window.open("index2.html")  
      }

      
    function aboutUs(){
        window.open("index3.html")  
      }