//Accessing first box 'O' div.
let firstBoxO= document.getElementById("d1_o_b");

//Accessing first box 'X' div.
let firstBoxX= document.getElementById("d1_x_b");

//Accessing second box 'O' div.
let secondBoxO= document.getElementById("d2_o_b");

//Accessing second box 'X' div.
let secondBoxX= document.getElementById("d2_x_b");

//Accessing third box 'O' div.
let thirdBoxO= document.getElementById("d3_o_b");

//Accessing third box 'X' div.
let thirdBoxX= document.getElementById("d3_x_b");

//Accessing forth box 'O' div.
let forthBoxO= document.getElementById("d4_o_b");

//Accessing forth box 'X' div.
let forthBoxX= document.getElementById("d4_x_b");

//Accessing fifth box 'O' div.
let fifthBoxO= document.getElementById("d5_o_b");

//Accessing fifth box 'X' div.
let fifthBoxX= document.getElementById("d5_x_b");

//Accessing sixth box 'O' div.
let sixthBoxO= document.getElementById("d6_o_b");

//Accessing sixth box 'X' div.
let sixthBoxX= document.getElementById("d6_x_b");

//Accessing seventh box 'O' div.
let seventhBoxO= document.getElementById("d7_o_b");

//Accessing seventh box 'X' div.
let seventhBoxX= document.getElementById("d7_x_b");

//Accessing eight box 'O' div.
let eightBoxO= document.getElementById("d8_o_b");

//Accessing second box 'X' div.
let eightBoxX= document.getElementById("d8_x_b");

//Accessing ninth box 'O' div.
let ninthBoxO= document.getElementById("d9_o_b");

//Accessing ninth box 'X' div.
let ninthBoxX= document.getElementById("d9_x_b");



//Accessing div 1
let div1 = document.getElementById("div_1");

//Accessing div 2
let div2 = document.getElementById("div_2");

//Accessing div 3
let div3 = document.getElementById("div_3");

//Accessing div 4
let div4 = document.getElementById("div_4");

//Accessing div 5
let div5 = document.getElementById("div_5");

//Accessing div 6
let div6 = document.getElementById("div_6");

//Accessing div 7
let div7 = document.getElementById("div_7");

//Accessing div 8
let div8 = document.getElementById("div_8");

//Accessing div 9
let div9 = document.getElementById("div_9");

//Accessing reset button
let restButton = document.getElementById("reset_btn");

let number = 0;

//First box logic
div1.onclick = ()=>
{
    number++;

    if (firstBoxO.style.visibility == "visible" || firstBoxX.style.visibility == "visible")
    {
        return;
    }

    if (number%2 == 0) 
    {
        firstBoxO.style.visibility = "visible";
        firstBoxO.style.color = "brown";
    }
    else 
    {
        firstBoxX.style.visibility = "visible";
        firstBoxX.style.color = "green";
    }

    if ( div1.firstChild.style.visibility == "visible"
        && div2.firstChild.style.visibility == "visible" 
        && div3.firstChild.style.visibility == "visible" || 
        div1.firstChild.style.visibility == "visible"
        && div4.firstChild.style.visibility == "visible" 
        && div7.firstChild.style.visibility == "visible" ||
        div1.firstChild.style.visibility == "visible"
        && div5.firstChild.style.visibility == "visible" 
        && div9.firstChild.style.visibility == "visible" 
    )
   {
       alert("Congratulation! Player O Is Winner");
       confetti();
   }
   else if ( div1.lastChild.style.visibility == "visible"
    && div2.lastChild.style.visibility == "visible" 
    && div3.lastChild.style.visibility == "visible" || 
    div1.lastChild.style.visibility == "visible"
    && div4.lastChild.style.visibility == "visible" 
    && div7.lastChild.style.visibility == "visible" ||
    div1.lastChild.style.visibility == "visible"
    && div5.lastChild.style.visibility == "visible" 
    && div9.lastChild.style.visibility == "visible" 
)
    {
        alert("Congratulation! Player X Is Winner");
        confetti();
   }
   else if (number == 9) 
    {
      alert("Game Is Draw!")
   }
}

//Second box logic
div2.onclick = ()=>
    {
        number++;
    
        if (secondBoxO.style.visibility == "visible" || secondBoxX.style.visibility == "visible")
        {
            return;
        }
    
        if (number%2 == 0) 
        {
            secondBoxO.style.visibility = "visible";
            secondBoxO.style.color = "brown";
        }
        else 
        {
            secondBoxX.style.visibility = "visible";
            secondBoxX.style.color = "green";
        }
    
        if ( div1.firstChild.style.visibility == "visible"
            && div2.firstChild.style.visibility == "visible" 
            && div3.firstChild.style.visibility == "visible" || 
            div2.firstChild.style.visibility == "visible"
            && div5.firstChild.style.visibility == "visible" 
            && div8.firstChild.style.visibility == "visible"
        )
       {
           alert("Congratulation! Player O Is Winner");
           confetti();
       }
       else if ( div1.lastChild.style.visibility == "visible"
        && div2.lastChild.style.visibility == "visible" 
        && div3.lastChild.style.visibility == "visible" || 
        div2.lastChild.style.visibility == "visible"
        && div5.lastChild.style.visibility == "visible" 
        && div8.lastChild.style.visibility == "visible"
    )
        {
            alert("Congratulation! Player X Is Winner");
            confetti();
       }
       else if (number == 9) 
        {
          alert("Game Is Draw!");
       }
    }

    //Third box logic
div3.onclick = ()=>
    {
        number++;
    
        if (thirdBoxO.style.visibility == "visible" || thirdBoxX.style.visibility == "visible")
        {
            return;
        }
    
        if (number%2 == 0) 
        {
            thirdBoxO.style.visibility = "visible";
            thirdBoxO.style.color = "brown";
        }
        else 
        {
            thirdBoxX.style.visibility = "visible";
            thirdBoxX.style.color = "green";
        }
    
        if ( div1.firstChild.style.visibility == "visible"
            && div2.firstChild.style.visibility == "visible" 
            && div3.firstChild.style.visibility == "visible" || 
            div3.firstChild.style.visibility == "visible"
            && div5.firstChild.style.visibility == "visible" 
            && div7.firstChild.style.visibility == "visible" ||
            div3.firstChild.style.visibility == "visible"
            && div6.firstChild.style.visibility == "visible" 
            && div9.firstChild.style.visibility == "visible"

        )
       {
           alert("Congratulation! Player O Is Winner");
         
           confetti();
       }
       else if ( div1.lastChild.style.visibility == "visible"
        && div2.lastChild.style.visibility == "visible" 
        && div3.lastChild.style.visibility == "visible" || 
        div3.lastChild.style.visibility == "visible"
        && div5.lastChild.style.visibility == "visible" 
        && div7.lastChild.style.visibility == "visible" ||
        div3.lastChild.style.visibility == "visible"
        && div6.lastChild.style.visibility == "visible" 
        && div9.lastChild.style.visibility == "visible"

    )
        {
            alert("Congratulation! Player X Is Winner");
            confetti();
       }
       else if (number == 9) 
        {
          alert("Game Is Draw!");
       }
    }

    //Forth box logic
div4.onclick = ()=>
    {
        number++;
    
        if (forthBoxO.style.visibility == "visible" || forthBoxX.style.visibility == "visible")
        {
            return;
        }
    
        if (number%2 == 0) 
        {
            forthBoxO.style.visibility = "visible";
            forthBoxO.style.color = "brown";
        }
        else 
        {
            forthBoxX.style.visibility = "visible";
            forthBoxX.style.color = "green";
        }
    
        if ( div1.firstChild.style.visibility == "visible"
            && div4.firstChild.style.visibility == "visible" 
            && div7.firstChild.style.visibility == "visible" || 
            div4.firstChild.style.visibility == "visible"
            && div5.firstChild.style.visibility == "visible" 
            && div6.firstChild.style.visibility == "visible" 
        )
       {
           alert("Congratulation! Player O Is Winner");
           confetti();
       }
       else if ( div1.lastChild.style.visibility == "visible"
        && div4.lastChild.style.visibility == "visible" 
        && div7.lastChild.style.visibility == "visible" || 
        div4.lastChild.style.visibility == "visible"
        && div5.lastChild.style.visibility == "visible" 
        && div6.lastChild.style.visibility == "visible" 
    )
        {
            alert("Congratulation! Player X Is Winner");
            confetti();
       }
       else if (number == 9) 
        {
          alert("Game Is Draw!");
       }
    }

    //Fifth box logic
div5.onclick = ()=>
    {
        number++;
    
        if (fifthBoxO.style.visibility == "visible" || fifthBoxX.style.visibility == "visible")
        {
            return;
        }
    
        if (number%2 == 0) 
        {
            fifthBoxO.style.visibility = "visible";
            fifthBoxO.style.color = "brown";
        }
        else 
        {
            fifthBoxX.style.visibility = "visible";
            fifthBoxX.style.color = "green";
        }
    
        if ( div2.firstChild.style.visibility == "visible"
            && div5.firstChild.style.visibility == "visible" 
            && div8.firstChild.style.visibility == "visible" || 
            div4.firstChild.style.visibility == "visible"
            && div5.firstChild.style.visibility == "visible" 
            && div6.firstChild.style.visibility == "visible" || 
            div1.firstChild.style.visibility == "visible"
            && div5.firstChild.style.visibility == "visible" 
            && div9.firstChild.style.visibility == "visible" || 
            div3.firstChild.style.visibility == "visible"
            && div5.firstChild.style.visibility == "visible" 
            && div7.firstChild.style.visibility == "visible" 
        )
       {
           alert("Congratulation! Player O Is Winner");
           confetti();
       }
       else if ( div2.lastChild.style.visibility == "visible"
        && div5.lastChild.style.visibility == "visible" 
        && div8.lastChild.style.visibility == "visible" || 
        div4.lastChild.style.visibility == "visible"
        && div5.lastChild.style.visibility == "visible" 
        && div6.lastChild.style.visibility == "visible" || 
        div1.lastChild.style.visibility == "visible"
        && div5.lastChild.style.visibility == "visible" 
        && div9.lastChild.style.visibility == "visible" || 
        div3.lastChild.style.visibility == "visible"
        && div5.lastChild.style.visibility == "visible" 
        && div7.lastChild.style.visibility == "visible" 
    )
        {
            alert("Congratulation! Player X Is Winner");
            confetti();
       }
       else if (number == 9) 
        {
          alert("Game Is Draw!")
       }
    }

    //Sixth box logic
div6.onclick = ()=>
    {
        number++;
    
        if (sixthBoxO.style.visibility == "visible" || sixthBoxX.style.visibility == "visible")
        {
            return;
        }
    
        if (number%2 == 0) 
        {
            sixthBoxO.style.visibility = "visible";
            sixthBoxO.style.color = "brown";
        }
        else 
        {
            sixthBoxX.style.visibility = "visible";
            sixthBoxX.style.color = "green";
        }
    
        if ( div3.firstChild.style.visibility == "visible"
            && div6.firstChild.style.visibility == "visible" 
            && div9.firstChild.style.visibility == "visible" || 
            div4.firstChild.style.visibility == "visible"
            && div5.firstChild.style.visibility == "visible" 
            && div6.firstChild.style.visibility == "visible"
        )
       {
           alert("Congratulation! Player O Is Winner");
           confetti();
       }
       else if( div3.lastChild.style.visibility == "visible"
        && div6.lastChild.style.visibility == "visible" 
        && div9.lastChild.style.visibility == "visible" || 
        div4.lastChild.style.visibility == "visible"
        && div5.lastChild.style.visibility == "visible" 
        && div6.lastChild.style.visibility == "visible"
    )
        {
            alert("Congratulation! Player X Is Winner");
            confetti();
       }
       else if (number == 9) 
        {
          alert("Game Is Draw!")
       }
    }

    //Seventh box logic
div7.onclick = ()=>
    {
        number++;
    
        if (seventhBoxO.style.visibility == "visible" || seventhBoxX.style.visibility == "visible")
        {
            return;
        }
    
        if (number%2 == 0) 
        {
            seventhBoxO.style.visibility = "visible";
            seventhBoxO.style.color = "brown";
        }
        else 
        {
            seventhBoxX.style.visibility = "visible";
             seventhBoxX.style.color = "green";
        }
    
        if ( div1.firstChild.style.visibility == "visible"
            && div4.firstChild.style.visibility == "visible" 
            && div7.firstChild.style.visibility == "visible" || 
            div3.firstChild.style.visibility == "visible"
            && div5.firstChild.style.visibility == "visible" 
            && div7.firstChild.style.visibility == "visible"|| 
            div7.firstChild.style.visibility == "visible"
            && div8.firstChild.style.visibility == "visible" 
            && div9.firstChild.style.visibility == "visible"
        )
       {
           alert("Congratulation! Player O Is Winner");
           confetti();
       }
       else if ( div1.lastChild.style.visibility == "visible"
        && div4.lastChild.style.visibility == "visible" 
        && div7.lastChild.style.visibility == "visible" || 
        div3.lastChild.style.visibility == "visible"
        && div5.lastChild.style.visibility == "visible" 
        && div7.lastChild.style.visibility == "visible"|| 
        div7.lastChild.style.visibility == "visible"
        && div8.lastChild.style.visibility == "visible" 
        && div9.lastChild.style.visibility == "visible"
    )
        {
            alert("Congratulation! Player X Is Winner");
            confetti();
       }
       else if (number == 9) 
        {
          alert("Game Is Draw!")
       }
    }

    //Eight box logic
div8.onclick = ()=>
    {
        number++;
    
        if (eightBoxO.style.visibility == "visible" || eightBoxX.style.visibility == "visible")
        {
            return;
        }
    
        if (number%2 == 0) 
        {
            eightBoxO.style.visibility = "visible";
            eightBoxO.style.color = "brown";
        }
        else 
        {
            eightBoxX.style.visibility = "visible";
            eightBoxX.style.color = "green";
        }
    
        if ( div2.firstChild.style.visibility == "visible"
            && div5.firstChild.style.visibility == "visible" 
            && div8.firstChild.style.visibility == "visible" || 
            div7.firstChild.style.visibility == "visible"
            && div8.firstChild.style.visibility == "visible" 
            && div9.firstChild.style.visibility == "visible"
        )
       {
           alert("Congratulation! Player O Is Winner");
           confetti();
       }
       else if ( div2.lastChild.style.visibility == "visible"
        && div5.lastChild.style.visibility == "visible" 
        && div8.lastChild.style.visibility == "visible" || 
        div7.lastChild.style.visibility == "visible"
        && div8.lastChild.style.visibility == "visible" 
        && div9.lastChild.style.visibility == "visible"
    )
        {
            alert("Congratulation! Player X Is Winner");
            confetti();
       }
       else if (number == 9) 
        {
          alert("Game Is Draw!")
       }
    }

    //Nine box logic
div9.onclick = ()=>
    {
        number++;
    
        if (ninthBoxO.style.visibility == "visible" || ninthBoxX.style.visibility == "visible")
        {
            return;
        }
    
        if (number%2 == 0) 
        {
            ninthBoxO.style.visibility = "visible";
            ninthBoxO.style.color = "brown";
        }
        else 
        {
            ninthBoxX.style.visibility = "visible";
            ninthBoxX.style.color = "green";
        }
    
        if ( div3.firstChild.style.visibility == "visible"
            && div6.firstChild.style.visibility == "visible" 
            && div9.firstChild.style.visibility == "visible"
             || 
            div1.firstChild.style.visibility == "visible"
            && div5.firstChild.style.visibility == "visible" 
            && div9.firstChild.style.visibility == "visible"
            || 
            div7.firstChild.style.visibility == "visible"
            && div8.firstChild.style.visibility == "visible" 
            && div9.firstChild.style.visibility == "visible"
        )
       {
           alert("Congratulation! Player O Is Winner");
           confetti();
       }
       else if ( div3.lastChild.style.visibility == "visible"
        && div6.lastChild.style.visibility == "visible" 
        && div9.lastChild.style.visibility == "visible"
         || 
        div1.lastChild.style.visibility == "visible"
        && div5.lastChild.style.visibility == "visible" 
        && div9.lastChild.style.visibility == "visible"
        || 
        div7.lastChild.style.visibility == "visible"
        && div8.lastChild.style.visibility == "visible" 
        && div9.lastChild.style.visibility == "visible"
    )
        {
            alert("Congratulation! Player X Is Winner");
            confetti();
       }
       else if (number == 9) 
        {
          alert("Game Is Draw!")
       }
    }

restButton.onclick = ()=>
    {
        location.reload();
    }