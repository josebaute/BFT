const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');
const submitText = document.getElementById('submit-text');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Evita que la página se recargue
  
  // Cambiamos el estado del botón
  submitText.innerText = "Enviando...";
  submitBtn.disabled = true;

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.reset(); // Limpia los campos
      successMessage.classList.remove('hidden'); // Muestra mensaje de éxito
      submitBtn.classList.add('hidden'); // Oculta el botón
    } else {
      alert("Hubo un error al enviar. Por favor intenta de nuevo.");
    }
  } catch (error) {
    alert("Error de conexión. Inténtalo más tarde.");
  } finally {
    submitText.innerText = "Enviar Mensaje";
    submitBtn.disabled = false;
  }
});