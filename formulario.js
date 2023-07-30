// 4. O usuário deve marcar ao menos um checkbox. Deve ser validado o
// preenchimento desse input.

function calcular() {
    const checkboxes = document.getElementsByName('opcoes');
    let checked = false;
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      checked = true;
    }
  });

  if (!checked) {
    alert('Por favor, marque pelo menos um checkbox.');
}
}


// botão 
document.getElementById('Enviar').addEventListener('click', calcular);

// 6. Capture os dados preenchidos no formulário utilizando os métodos
// de manipulação do DOM. Ao final, mostre no console.log os dados
// preenchidos pelo usuário.

document.getElementById("meuformulario").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const formDataObject = {};
    
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });  
    console.log(formDataObject);
  });