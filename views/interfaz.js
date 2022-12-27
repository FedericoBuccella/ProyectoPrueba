
export class Interfaz {
  constructor() {}
  
  /**
   *
   * @param {string} text
  */
 showQuestion(text) {
   const questionTitle = document.getElementById("question");
   questionTitle.innerHTML = text;
  }
  
  /**
   *
   * @param {string[]} choices
  */
 showChoices(choices, callback) {
   const choicesContainer = document.getElementById("choices");
   choicesContainer.innerHTML = "";
   
   for (let i = 0; i < choices.length; i++) {
     const button = document.createElement("button");
     button.addEventListener("click", () => callback(choices[i]));
     button.className = "button";
     button.innerText = choices[i];
     
     choicesContainer.append(button);
    }
  }
  
  showScores() {
    
    const gameOverHTML = `
    <h1>Gracias por participar de nuestra entrevista<h1>
    <h2>En caso de quedar preseleccionado, nos contactaremos con vos!<h2>
    <button class="btn btn-primary" id="btnFinalizarEncuesta" onclick="prueba()" >Finalizar encuesta</button>
    `;
    
    const element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    
  }
  
  showProgress(currentIndex, total) {
    var element = document.getElementById("progress");
    element.innerHTML = `Question ${currentIndex} of ${total}`;
  }
  }
  
  window.prueba = function () {
  
  const btnFinalizarEncuesta = document.querySelector ("#btnFinalizarEncuesta")
  const botonAparecer = document.querySelector("#btnDetenerGrabacion")

  btnFinalizarEncuesta.style.display = "none"
  botonAparecer.classList.remove("d-none")

}


