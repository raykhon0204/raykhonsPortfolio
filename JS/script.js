
/* Resume functions*/
function exp(id) {
    const exp123 = document.getElementById(id);
    if (exp123.style.display === "none") {
           exp123.style.display = "block";
       } else {
           exp123.style.display = "none";
       }
}

/* Project functions*/
//Project1
function showMyImage(){
    let citrus = document.getElementById("imageSpace");
    citrus.style.display="block";
    let text = document.getElementById("text");
    text.style.visibility="hidden";
    }
function hideMyImage(){
    let citrus = document.getElementById("imageSpace");
    citrus.style.display="none";
    let text = document.getElementById("text");
    text.style.visibility="visible";
    }

    //Project2
function homework6() {
        const input1  = document.getElementById("n1");
        const input2  = document.getElementById("n2");
        const mesg = document.getElementById("mesg");
        const answer = document.getElementById("answer");
        const wholemesg = document.getElementById("wholemesg");
        answer.innerHTML = parseFloat(input1.value) + parseFloat(input2.value);
        answer.style.color = "red";
        mesg.innerHTML = "Thank you for using my calculator.";
        wholemesg = mesg.innerHTML + " " + answer.innerHTML;
        
        }

    //Project3

function myCalculation() {
            const rad1 = document.getElementById("rad1");
            const rad2 = document.getElementById("rad2");
            const rad3 = document.getElementById("rad3");
            const rad4 = document.getElementById("rad4");
            const n1 = document.getElementById("n1");
            const n2 = document.getElementById("n2");
            const answer1 = document.getElementById("answer1");
            const addn1 = parseFloat(n1.value) + parseFloat(n2.value);
            const subt1 = parseFloat(n1.value) - parseFloat(n2.value);
            const mult1 = parseFloat(n1.value) * parseFloat(n2.value);
            const divd1 = parseFloat(n1.value) / parseFloat(n2.value);
           
            if (rad1.checked == true) {
                answer1.value = addn1;	
                   }
           else if (rad2.checked == true) {
               answer1.value = subt1;
               }
           else if (rad3.checked == true) {
               answer1.value = mult1;
           }
           else if (rad4.checked == true) {
               answer1.value = divd1;
           }
               
      }
  function dis() {
        const answer1 = document.getElementById("answer1");
        answer1.disabled = true;
    }
        
        
    //Project 4

    function buttons(id) {
        const text123 = document.getElementById(id);
        
        if (text123.style.display === "none") {
               
               text123.style.display = "block";
           } else {
               
               text123.style.display = "none";
           }
   }

       //Project5
   function addition1() {
    const input1  = document.getElementById("inp1");
    const input2  = document.getElementById("inp2");
    const input3  = document.getElementById("inp3");
    const input4  = document.getElementById("inp4");
    const input5  = document.getElementById("inp5");
    const answer2 = document.getElementById("answer2");
    answer2.value = parseFloat(input1.value) + parseFloat(input2.value) + parseFloat(input3.value) + parseFloat(input4.value) + parseFloat(input5.value);
    
}
function disableonload() {
    const answer2 = document.getElementById("answer2");
    answer2.disabled = true;
}


//Project6

function Slide1() {
    const img1 = document.getElementById("image1");
    img1.style.display="block";
    const img2 = document.getElementById("image2");
    img2.style.display="none";
    const img3 = document.getElementById("image3");
    img3.style.display = "none";
    const img4 = document.getElementById("image4");
    img4.style.display="none";
    const img5 = document.getElementById("image5");
    img5.style.display = "none";
    const dot1 = document.getElementById("first");
    dot1.style.backgroundColor="#717171";
    const dot2 = document.getElementById("second");
    dot2.style.backgroundColor="#bbb";
    const dot3 = document.getElementById("third");
    dot3.style.backgrounColor="#bbb";
    const dot4 = document.getElementById("fourth");
    dot4.style.backgroundColor="#bbb";
    const dot5 = document.getElementById("fifth");
    dot5.style.backgrounColor="#bbb";
    }
    
function Slide2() {
    const img2 = document.getElementById("image2");
    img2.style.display="block";
    const img1 = document.getElementById("image1");
    img1.style.display="none";
    const img3 = document.getElementById("image3");
    img3.style.display = "none";
    const img4 = document.getElementById("image4");
    img4.style.display="none";
    const img5 = document.getElementById("image5");
    img5.style.display = "none";
    const dot1 = document.getElementById("first");
    dot1.style.backgroundColor="#bbb";
    const dot2 = document.getElementById("second");
    dot2.style.backgroundColor="#717171";
    const dot3 = document.getElementById("third");
    dot3.style.backgroundColor="#bbb";
    const dot4 = document.getElementById("fourth");
    dot4.style.backgroundColor="#bbb";
    const dot5 = document.getElementById("fifth");
    dot5.style.backgroundColor="#bbb";
   }

function Slide3() {
    const img3 = document.getElementById("image3");
    img3.style.display="block";
    const img2 = document.getElementById("image2");
    img2.style.display="none";
    const img1 = document.getElementById("image1");
    img1.style.display = "none";
    const img4 = document.getElementById("image4");
    img4.style.display="none";
    const img5 = document.getElementById("image5");
    img5.style.display = "none";
    const dot1 = document.getElementById("first");
    dot1.style.backgroundColor="#bbb";
    const dot2 = document.getElementById("second");
    dot2.style.backgroundColor="#bbb";
    const dot3 = document.getElementById("third");
    dot3.style.backgroundColor="#717171";
    const dot4 = document.getElementById("fourth");
    dot4.style.backgroundColor="#bbb";
    const dot5 = document.getElementById("fifth");
    dot5.style.backgroundColor="#bbb";
}
function Slide4() {
    const img3 = document.getElementById("image3");
    img3.style.display="none";
    const img2 = document.getElementById("image2");
    img2.style.display="none";
    const img1 = document.getElementById("image1");
    img1.style.display = "none";
    const img4 = document.getElementById("image4");
    img4.style.display="block";
    const img5 = document.getElementById("image5");
    img5.style.display = "none";
    const dot1 = document.getElementById("first");
    dot1.style.backgroundColor="#bbb";
    const dot2 = document.getElementById("second");
    dot2.style.backgroundColor="#bbb";
    const dot3 = document.getElementById("third");
    dot3.style.backgroundColor="#bbb";
    const dot4 = document.getElementById("fourth");
    dot4.style.backgroundColor="#717171";
    const dot5 = document.getElementById("fifth");
    dot5.style.backgroundColor="#bbb";
}
function Slide5() {
    const img3 = document.getElementById("image3");
    img3.style.display="none";
    const img2 = document.getElementById("image2");
    img2.style.display="none";
    const img1 = document.getElementById("image1");
    img1.style.display = "none";
    const img4 = document.getElementById("image4");
    img4.style.display="none";
    const img5 = document.getElementById("image5");
    img5.style.display = "block";
    const dot1 = document.getElementById("first");
    dot1.style.backgroundColor="#bbb";
    const dot2 = document.getElementById("second");
    dot2.style.backgroundColor="#bbb";
    const dot3 = document.getElementById("third");
    dot3.style.backgroundColor="#bbb";
    const dot4 = document.getElementById("fourth");
    dot4.style.backgroundColor="#bbb";
    const dot5 = document.getElementById("fifth");
    dot5.style.backgroundColor="#717171";
}

/*Home page*/
  let slideIndex = 1;
  

function showSlides() {
   
   const slides = document.getElementsByClassName("img");
   const dots = document.getElementsByClassName("dots");
   for (let i = 0; i<slides.length; i++){
       slides[i].style.display = "none";
       
   }
   
   if (slideIndex > slideIndex.length) 
   
       {slideIndex = 1}
      
  
   for(let i = 0; i<dots.length; i++) {
       dots[i].className = dots[i].className.replace( "active", "");
       
   }
   slides[slideIndex-1].style.display="block";
   dots[slideIndex-1].className += " active";
   slideIndex++;
}
   

setInterval (function() {showSlides()}, 3000);



