const text = "Hy Everyone! I am a Frontend Developer. 🙂";
const heading = document.querySelector('h2');

let index = 0;


function writeText(){
     heading.innerText = text.slice(0, index);

    index++;
    if(index > text.length)
    {
        index = 0;
    }
}

setInterval(writeText, 100)