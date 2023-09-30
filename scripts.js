function increaseTextSize() {
  const body = document.body;
  const currentFontSize = window.getComputedStyle(body).fontSize;
  const currentSize = parseFloat(currentFontSize);
  const newSize = currentSize * 1.2;
  body.style.fontSize = newSize + "px";

  // Armazene o novo tamanho da fonte no localStorage
  localStorage.setItem("tamanhoFonte", newSize);
}

function decreaseTextSize() {
  const body = document.body;
  const currentFontSize = window.getComputedStyle(body).fontSize;
  const currentSize = parseFloat(currentFontSize);
  const newSize = currentSize / 1.2;
  body.style.fontSize = newSize + "px";

  // Armazene o novo tamanho da fonte no localStorage
  localStorage.setItem("tamanhoFonte", newSize);
}


// Função para alternar o contraste
function toggleContrast() {
  const body = document.body;
  body.classList.toggle("alto-contraste");
}

function toggleContrast() {
  const body = document.body;
  body.classList.toggle("alto-contraste");

  // Verifique se o modo de contraste está ativado
  const isContrastEnabled = body.classList.contains("alto-contraste");

  // Armazene a preferência do usuário no localStorage
  localStorage.setItem("contrasteAtivado", isContrastEnabled);
}

// Função para aplicar o contraste com base na preferência do usuário
function aplicarPreferenciaContraste() {
  const body = document.body;
  const isContrastEnabled = localStorage.getItem("contrasteAtivado");

  // Verifique se a preferência está definida no localStorage
  if (isContrastEnabled === "true") {
    body.classList.add("alto-contraste");
  } else {
    body.classList.remove("alto-contraste");
  }
}

function aplicarPreferenciaTamanhoFonte() {
  const body = document.body;
  const tamanhoFonte = localStorage.getItem("tamanhoFonte");

  // Verifique se a preferência está definida no localStorage
  if (tamanhoFonte) {
    body.style.fontSize = tamanhoFonte + "px";
  }
}

// Adicionar eventos aos botões de tamanho do texto e contraste
document.addEventListener("DOMContentLoaded", () => {
  
  aplicarPreferenciaContraste();
  aplicarPreferenciaTamanhoFonte();

  const increaseTextSizeButton = document.getElementById("increaseTextSize");
  const decreaseTextSizeButton = document.getElementById("decreaseTextSize");
  const toggleContrastButton = document.getElementById("botaoContraste");

  if (increaseTextSizeButton) {
    increaseTextSizeButton.addEventListener("click", increaseTextSize);
  }

  if (decreaseTextSizeButton) {
    decreaseTextSizeButton.addEventListener("click", decreaseTextSize);
  }

  if (toggleContrastButton) {
    toggleContrastButton.addEventListener("click", toggleContrast);
  }
});
