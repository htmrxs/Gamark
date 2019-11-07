var nextStep=document.getElementById("nextS");
var prevStep=document.getElementById("prevS");
prevStep.style.display="none";
var Index = 0;
var progIndex=0;
showDivs(Index);

function nStep()
{
    if(Index<6)
    {
        if(progIndex===Index)
            progIndex+=1;
        showDivs(Index += 1);
        prevStep.style.display="block";
        if(Index===6)
        {
            nextStep.style.display="none";
        }
        console.log(nextStep.toString());
    }
}

function pStep()
{
    if(Index>0)
    {
        showDivs(Index-=1)
        nextStep.style.display="block";
        if(Index===0)
        {
            prevStep.style.display="none";
        }
    }
}
function showDivs(n)
{
    var i;
    var dots = document.getElementsByClassName("dot");
    
    for (i = 0; i <= progIndex; i++)
        dots[i].setAttribute('src', "resources/img/home/dot.png");
    for(i=progIndex+1; i<dots.length;i++)
        dots[i].setAttribute('src', "resources/img/home/dotempty.png");

    dots[Index].setAttribute('src', "resources/img/home/dotcurrent.png");
}