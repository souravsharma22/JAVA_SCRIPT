// function handleClick(){
//     alert("I got clicked");
// }
var sounds = {'w':'crash.mp3',
    'a':'kick-bass.mp3',
    's':'snare.mp3',
    'd':'tom-1.mp3',
    'j':'tom-2.mp3',
    'k':'tom-3.mp3'
    ,'l':'tom-4.mp3'
}


function playAudio (ch)
{
    switch (ch) {
        case 'w':
            var aud = new Audio(`./sounds/${sounds.w}`);
            aud.play();
            break;
        case 'a':
            var aud = new Audio(`./sounds/${sounds.a}`);
            aud.play();
            break;
        case 's':
            var aud = new Audio(`./sounds/${sounds.s}`);
            aud.play();
            break;
        case 'd':
            var aud = new Audio(`./sounds/${sounds.d}`);
            aud.play();
            break;
        case 'j':
            var aud = new Audio(`./sounds/${sounds.j}`);
            aud.play();
            break;
        case 'k':
            var aud = new Audio(`./sounds/${sounds.k}`);
            aud.play();
            break;
        case 'l':
            var aud = new Audio(`./sounds/${sounds.l}`);
            aud.play();
            break;
        default:
            console.log(ch)
    }
}

function buttonAnimation(btn){
    let element = document.querySelector("."+btn)
    element.classList.add('pressed')
    setTimeout(() => {
        element.classList.remove('pressed')
    }, 200);
}


let ele = document.querySelectorAll('.drum');
let i =0;
for(let key in sounds){
    ele[i].addEventListener('click',function(){
        // this.innerHTML.style.color = 'blue'
        // this.style.color = 'blue';
        playAudio(key);
        buttonAnimation(key)
})
i++;
}

document.addEventListener('keydown',function(event){
    var key = event.key.toLowerCase();
    playAudio(key);
    buttonAnimation(key)
})
