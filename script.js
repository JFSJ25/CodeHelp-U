// Número de WhatsApp (formato internacional sin + ni espacios)
const WHATSAPP_NUMBER = '593990134695' // Número con código de país

// Mensaje predefinido
const WHATSAPP_MESSAGE = 'Hola, necesito ayuda con un proyecto'

/**
 * Construye la URL de WhatsApp Web
 * @returns {String} URL codificada para WhatsApp
 */
function getWhatsAppURL() {
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
}

/**
 * Inicializa todos los botones de WhatsApp
 */
function initializeWhatsAppButtons() {
  const whatsappBtn = document.getElementById('whatsapp-button')
  const heroCTA = document.getElementById('hero-cta')
  const finalCTA = document.getElementById('final-cta')

  const whatsappURL = getWhatsAppURL()

  if (whatsappBtn) {
    whatsappBtn.href = whatsappURL
  }

  if (heroCTA) {
    heroCTA.addEventListener('click', function () {
      window.open(whatsappURL, '_blank')
    })
  }

  if (finalCTA) {
    finalCTA.addEventListener('click', function () {
      window.open(whatsappURL, '_blank')
    })
  }
}

document.addEventListener('DOMContentLoaded', initializeWhatsAppButtons)
