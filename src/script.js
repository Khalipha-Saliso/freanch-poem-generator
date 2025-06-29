let apiKey = "64ff0080a418f8of319534c4b15a9b6t";
let context = "the poem should be short";
let basePrompt = "generate a French poem based on the word submitted";

function generatePoem(event) {
  event.preventDefault();

  let topic = document.querySelector("#topic-input").value.trim();
  if (!topic) return;

  let finalPrompt = `${basePrompt}: ${topic}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    finalPrompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let poemOutput = document.querySelector("#poem-output");
  poemOutput.innerHTML = "<em>Generating your beautiful French poem...</em>";


  axios
    .get(apiUrl)
    .then((response) => {
      let poem = response.data.answer;

      new Typewriter('#poem-output', {
        strings: [poem],
        autoStart: true,
        delay: 30,
        cursor: "",
      });
    })
    .catch((error) => {
      console.error("Error fetching poem:", error);
      poemOutput.innerHTML =
        "<strong>Sorry, there was an error generating your poem. Please try again.</strong>";
    });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
