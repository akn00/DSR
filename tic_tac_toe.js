var inputValue="O"
bt1=document.getElementById("b1");
bt2=document.getElementById("b2");
bt3=document.getElementById("b3");
bt4=document.getElementById("b4");
bt5=document.getElementById("b5");
bt6=document.getElementById("b6");
bt7=document.getElementById("b7");
bt8=document.getElementById("b8");
bt9=document.getElementById("b9");
winner=document.getElementById("winner");
function b1(){b10();bt1.innerHTML=inputValue;bt1.disabled=true;conditionCheck()}
function b2(){b10();bt2.innerHTML=inputValue;bt2.disabled=true;conditionCheck()}
function b3(){b10();bt3.innerHTML=inputValue;bt3.disabled=true;conditionCheck()}
function b4(){b10();bt4.innerHTML=inputValue;bt4.disabled=true;conditionCheck()}
function b5(){b10();bt5.innerHTML=inputValue;bt5.disabled=true;conditionCheck()}
function b6(){b10();bt6.innerHTML=inputValue;bt6.disabled=true;conditionCheck()}
function b7(){b10();bt7.innerHTML=inputValue;bt7.disabled=true;conditionCheck()}
function b8(){b10();bt8.innerHTML=inputValue;bt8.disabled=true;conditionCheck()}
function b9(){b10();bt9.innerHTML=inputValue;bt9.disabled=true;conditionCheck()}
function b10(){
    if(inputValue==="X")
    {
        inputValue="O"
    }
    else{
        inputValue="X"
    }
}
win=bt1.innerHTML;
function conditionCheck(){

    if(bt1.disabled&&bt2.disabled&&bt3.disabled&&bt4.disabled&&bt5.disabled&&bt6.disabled&&bt7.disabled&&bt8.disabled&&bt9.disabled){
        if(bt1.innerHTML=="X"&& bt2.innerHTML=="X"&& bt3.innerHTML=="X" || bt1.innerHTML=="O"&& bt2.innerHTML=="O"&& bt3.innerHTML=="O"){
            win=bt1.innerHTML;
            winner.innerHTML=`${win} WON`
        }
        else if(bt4.innerHTML=="X"&&bt5.innerHTML=="X"&&bt6.innerHTML=="X"||bt4.innerHTML=="O"&&bt5.innerHTML=="O"&&bt6.innerHTML=="O"){
            win=bt4.innerHTML;
            winner.innerHTML=`${win} WON`
        }
        else if(bt7.innerHTML=="X"&&bt8.innerHTML=="X"&&bt9.innerHTML=="X" || bt7.innerHTML=="O"&&bt8.innerHTML=="O"&&bt9.innerHTML=="O"){
            win=bt7.innerHTML;
            winner.innerHTML=`${win} WON`
        }
        else if(bt1.innerHTML=="X"&&bt4.innerHTML=="X"&&bt7.innerHTML=="X" || bt1.innerHTML=="O"&&bt4.innerHTML=="O"&&bt7.innerHTML=="O"){
            win=bt1.innerHTML;
            winner.innerHTML=`${win} WON`
        }
        else if(bt2.innerHTML=="X"&&bt5.innerHTML=="X"&&bt8.innerHTML=="X" || bt2.innerHTML=="O"&&bt5.innerHTML=="O"&&bt8.innerHTML=="O"){
            win=bt2.innerHTML;
            winner.innerHTML=`${win} WON`
        }
        else if(bt3.innerHTML=="X"&&bt6.innerHTML=="X"&&bt9.innerHTML=="X" || bt3.innerHTML=="O"&&bt6.innerHTML=="O"&&bt9.innerHTML=="O"){
            win=bt3.innerHTML;
            winner.innerHTML=`${win} WON`
        }
        else if(bt1.innerHTML=="O"&&bt5.innerHTML=="O"&&bt9.innerHTML=="O" || bt1.innerHTML=="X"&&bt5.innerHTML=="X"&&bt9.innerHTML=="X"){
            win=bt1.innerHTML;
            winner.innerHTML=`${win} WON`
        }
        else if(bt3.innerHTML=="X"&&bt5.innerHTML=="X"&&bt7.innerHTML=="X" || bt3.innerHTML=="O"&&bt5.innerHTML=="O"&&bt7.innerHTML=="O"){
            win=bt3.innerHTML;
            winner.innerHTML=`${win} WON`
        }
        else{winner.innerHTML="Its a tie !!!"}
    }

    else{
        if(bt1.innerHTML=="X"&& bt2.innerHTML=="X"&& bt3.innerHTML=="X" || bt1.innerHTML=="O"&& bt2.innerHTML=="O"&& bt3.innerHTML=="O"){
            win=bt1.innerHTML;
            winner.innerHTML=`${win} WON`
            bt1.disabled=true;bt2.disabled=true;bt3.disabled=true;bt4.disabled=true;bt5.disabled=true;bt6.disabled=true;bt7.disabled=true;bt8.disabled=true;bt9.disabled=true;
        }
        else if(bt4.innerHTML=="X"&&bt5.innerHTML=="X"&&bt6.innerHTML=="X"||bt4.innerHTML=="O"&&bt5.innerHTML=="O"&&bt6.innerHTML=="O"){
            win=bt4.innerHTML;
            winner.innerHTML=`${win} WON`
            bt1.disabled=true;bt2.disabled=true;bt3.disabled=true;bt4.disabled=true;bt5.disabled=true;bt6.disabled=true;bt7.disabled=true;bt8.disabled=true;bt9.disabled=true;
        }
        else if(bt7.innerHTML=="X"&&bt8.innerHTML=="X"&&bt9.innerHTML=="X" || bt7.innerHTML=="O"&&bt8.innerHTML=="O"&&bt9.innerHTML=="O"){
            win=bt7.innerHTML;
            winner.innerHTML=`${win} WON`
            bt1.disabled=true;bt2.disabled=true;bt3.disabled=true;bt4.disabled=true;bt5.disabled=true;bt6.disabled=true;bt7.disabled=true;bt8.disabled=true;bt9.disabled=true;
        }
        else if(bt1.innerHTML=="X"&&bt4.innerHTML=="X"&&bt7.innerHTML=="X" || bt1.innerHTML=="O"&&bt4.innerHTML=="O"&&bt7.innerHTML=="O"){
            win=bt1.innerHTML;
            winner.innerHTML=`${win} WON`
            bt1.disabled=true;bt2.disabled=true;bt3.disabled=true;bt4.disabled=true;bt5.disabled=true;bt6.disabled=true;bt7.disabled=true;bt8.disabled=true;bt9.disabled=true;
        }
        else if(bt2.innerHTML=="X"&&bt5.innerHTML=="X"&&bt8.innerHTML=="X" || bt2.innerHTML=="O"&&bt5.innerHTML=="O"&&bt8.innerHTML=="O"){
            win=bt2.innerHTML;
            winner.innerHTML=`${win} WON`
            bt1.disabled=true;bt2.disabled=true;bt3.disabled=true;bt4.disabled=true;bt5.disabled=true;bt6.disabled=true;bt7.disabled=true;bt8.disabled=true;bt9.disabled=true;
        }
        else if(bt3.innerHTML=="X"&&bt6.innerHTML=="X"&&bt9.innerHTML=="X" || bt3.innerHTML=="O"&&bt6.innerHTML=="O"&&bt9.innerHTML=="O"){
            win=bt3.innerHTML;
            winner.innerHTML=`${win} WON`
            bt1.disabled=true;bt2.disabled=true;bt3.disabled=true;bt4.disabled=true;bt5.disabled=true;bt6.disabled=true;bt7.disabled=true;bt8.disabled=true;bt9.disabled=true;
        }
        else if(bt1.innerHTML=="O"&&bt5.innerHTML=="O"&&bt9.innerHTML=="O" || bt1.innerHTML=="X"&&bt5.innerHTML=="X"&&bt9.innerHTML=="X"){
            win=bt1.innerHTML;
            winner.innerHTML=`${win} WON`
            bt1.disabled=true;bt2.disabled=true;bt3.disabled=true;bt4.disabled=true;bt5.disabled=true;bt6.disabled=true;bt7.disabled=true;bt8.disabled=true;bt9.disabled=true;
        }   
        else if(bt3.innerHTML=="X"&&bt5.innerHTML=="X"&&bt7.innerHTML=="X" || bt3.innerHTML=="O"&&bt5.innerHTML=="O"&&bt7.innerHTML=="O"){
            win=bt3.innerHTML;
            winner.innerHTML=`${win} WON`
            bt1.disabled=true;bt2.disabled=true;bt3.disabled=true;bt4.disabled=true;bt5.disabled=true;bt6.disabled=true;bt7.disabled=true;bt8.disabled=true;bt9.disabled=true;
        }
        else{winner.innerHTML="Coninue playing"}

    }
}