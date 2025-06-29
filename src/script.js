function generatePoem(event){
    event.preventDefault()

    new Typewriter('#poem-output', {
      strings: ['Poem Lines', 'Poem Lines'],
      autoStart: true,
    });
    poemElement.innerHTML = "Poem Lines";
}

let poemFromElement = document.querySelector('#poem-form');
poemFromElement.addEventListener("submit", generatePoem);
