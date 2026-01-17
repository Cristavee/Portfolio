const langBtn = document.getElementById('lang-switch')
const elements = document.querySelectorAll('[data-en]')
const toast = document.getElementById('custom-toast')
const toastMsg = document.getElementById('toast-message')

let bhsSekarang = localStorage.getItem('preferredLang') || 'en'

function showToast(message) {
    toastMsg.textContent = message
    toast.classList.add('show')
    setTimeout(() => {
        toast.classList.remove('show')
    }, 3000)
}

function ubahBhs(lang) {
    elements.forEach(el => {
        el.style.opacity = '0'
        setTimeout(() => {
            el.textContent = el.getAttribute(`data-${lang}`)
            el.style.opacity = '1'
        }, 250)
    })
    langBtn.textContent = lang.toUpperCase()
    localStorage.setItem('preferredLang', lang)
}

ubahBhs(bhsSekarang)

langBtn.addEventListener('click', () => {
    bhsSekarang = bhsSekarang === 'en' ? 'id' : 'en'
    ubahBhs(bhsSekarang)
})

const cvBtn = document.getElementById('cv')
if (cvBtn) {
    cvBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const msg = bhsSekarang === 'en' ? 'Coming Soon...' : 'Segera Hadir...'
        showToast(msg)
    })
}
