document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("user-menu-button").addEventListener('click', () => {
        const profileOption = document.getElementById("profile-option")
        profileOption.classList.toggle("hidden")
    })

    document.getElementById("toggle-modal").addEventListener('click', () => {
        const defaultModal = document.getElementById("default-modal")
        defaultModal.classList.toggle("hidden")
    })

    document.getElementById("toggle-modal-close").addEventListener("click", () => {
        const defaultModal = document.getElementById("default-modal")
        defaultModal.classList.toggle("hidden")
    })
})