function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session= hh >= 12 ? 'PM' : 'AM';
  
    if(hh === 0){
        hh = 12;
      
    }
    if(hh > 12){
        hh = hh - 12;
        
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let timeH = hh ;
     let timeM =  mm ;
     let timeS = ss;
     let timeA =  session;
  
    document.getElementById("clockH").innerText = timeH; 
    document.getElementById("clockM").innerText = timeM; 
    document.getElementById("clockS").innerText = timeS; 
    document.getElementById("clockA").innerText = timeA; 
    let t = setTimeout(function(){ currentTime() }, 1000);




}   
  
  currentTime();



  function dynamicTimeSet() {
    let newDate = new Date();
    let hour = newDate.getHours();
    // let minute = newDate.getMinutes();

    const dropDown1 = document.getElementById("wakeUpTime");
    const dropDown2 = document.getElementById("lunchTime");
    const dropDown3 = document.getElementById("napTime");
    const image = document.getElementById("myImageId");

    const value1 = dropDown1.options[dropDown1.selectedIndex].value;
    const value2 = dropDown2.options[dropDown2.selectedIndex].value;
    const value3 = dropDown3.options[dropDown3.selectedIndex].value;

    if (value1 != hour && value2 != hour && value3 != hour) {
        image.setAttribute("src", "image/d.jpg");
    }
        if (value1 >= hour && value1 < hour + 1) { 
            image.setAttribute("src", "./image/wakeup.png");
        }
        if (value2 >= hour && value2 < hour + 1) { 
             image.setAttribute("src", "./image/lunch.jpg");
        }
        if (value3 >= hour && value3 < hour + 1) { 
             image.setAttribute("src", "./image/gn.jpg");
        }

  }
  dynamicTimeSet()