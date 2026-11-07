document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');
  const submitText = document.getElementById('submit-text');
  const submitBtn = document.getElementById('submit-btn');

  if (!form) return; // Salir si el formulario no existe

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

  const planDialog = document.getElementById('subscription-dialog');
  const planForm = document.getElementById('subscription-form');

  if (!planDialog || !planForm) return;

  const planInput = document.getElementById('subscription-plan');
  const planPriceInput = document.getElementById('subscription-price');
  const planSummary = planDialog.querySelector('[data-plan-summary]');
  const planStatus = planDialog.querySelector('.subscription-form-status');
  const planSubmit = planForm.querySelector('button[type="submit"]');
  const planSubmitText = planForm.querySelector('[data-subscription-submit-text]');

  document.querySelectorAll('.subscription-button[data-plan]').forEach((button) => {
    button.addEventListener('click', () => {
      const { plan, price } = button.dataset;
      if (!plan || !price) return;

      planForm.reset();
      planStatus.hidden = true;
      planStatus.textContent = '';
      planSubmit.disabled = false;
      planSubmitText.textContent = 'Enviar solicitud';
      planInput.value = plan;
      planPriceInput.value = price;
      planSummary.textContent = `Plan seleccionado: ${plan} — ${price}/mes`;
      planDialog.showModal();
      document.getElementById('subscription-name').focus();
    });
  });

  planDialog.querySelectorAll('[data-close-subscription-dialog]').forEach((button) => {
    button.addEventListener('click', () => planDialog.close());
  });

  planDialog.addEventListener('close', () => {
    planForm.reset();
    planStatus.hidden = true;
    planStatus.textContent = '';
    planSubmit.disabled = false;
    planSubmitText.textContent = 'Enviar solicitud';
  });

  planForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    planStatus.hidden = true;
    planSubmit.disabled = true;
    planSubmitText.textContent = 'Enviando...';

    try {
      const response = await fetch(planForm.action, {
        method: 'POST',
        body: new FormData(planForm),
        headers: { Accept: 'application/json' }
      });

      if (!response.ok) {
        planStatus.textContent = 'No se pudo enviar la solicitud. Inténtalo de nuevo.';
        planStatus.classList.add('is-error');
        planStatus.hidden = false;
        planSubmit.disabled = false;
        planSubmitText.textContent = 'Enviar solicitud';
        return;
      }

      planStatus.textContent = '¡Gracias! Hemos recibido tu solicitud y nos pondremos en contacto contigo.';
      planStatus.classList.remove('is-error');
      planStatus.hidden = false;
      planSubmitText.textContent = 'Solicitud enviada';
    } catch (error) {
      planStatus.textContent = 'Error de conexión. Comprueba tu conexión e inténtalo de nuevo.';
      planStatus.classList.add('is-error');
      planStatus.hidden = false;
      planSubmit.disabled = false;
      planSubmitText.textContent = 'Enviar solicitud';
    }
  });
});