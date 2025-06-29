let p1 = Math.floor(Math.random() * 6) +1;
let p2 = Math.floor(Math.random() * 6) +1;

let comp = document.getElementById('t1')
if(p1>p2)
{
    comp.innerHTML = "Hurrey the Player 1 has won!"
    comp.style.color = "red"
    comp.style.fontSize = "50px"
    document.getElementById('l1').innerHTML = p1
    document.getElementById('r1').innerHTML = p2

}
else if (p2>p1)
{
    comp.innerHTML = "Hurrey the Player 2 has won!"
    comp.style.color = "blue"
    comp.style.fontSize = "50px"
    document.getElementById('l1').innerHTML = p1
    document.getElementById('r1').innerHTML = p2
}
else{
    comp.innerHTML = "Amazing It's a Tie!!!!"
    comp.style.color = "white"
    comp.style.fontSize = "50px"
    document.getElementById('l1').innerHTML = p1
    document.getElementById('r1').innerHTML = p2
}