const executeButton = document.getElementById("module-window-execute-button")
const closeButton = document.getElementById("module-window-close-button")
const passwordHideButton = document.getElementById("password-hide")
const passwordRepeatHideButton = document.getElementById("password-repeat-hide")
const personDateButton = document.getElementById("person-date")
const regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
const windowContent = document.getElementById("module-window-content")
const moduleWindow = document.getElementById("module-window")

function save() {
    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        password: document.getElementById("password").value,
        passwordRepeat: document.getElementById("password-repeat").value,
    }

    function execute() {
        windowContent.innerHTML = `<p>Спасибо ${user.name} за ваше обращение!<p>`
        executeButton.style.display = "none"
    }

    validator(user, execute)
}

function validator(user, execute) {
    if (user.password !== user.passwordRepeat) return alert("Пароли не совпадают")
    if (user.password.length < 8) return alert("Пароль должен быть не менее 8 символов")

    if (!regex.test(user.phone)) return alert("Неверный формат телефона")

    if (!user.name) return alert("Введите имя")
    if (!user.email) return alert("Введите email")

    execute()
}

function close() {
    moduleWindow.classList.add("hidden")
}

function openWindow() {
    executeButton.style.display = "flex"
    moduleWindow.classList.remove("hidden")
}

function hidePassword() {
    const password = document.getElementById("password")
    if (password.type === "password") password.type = "text"
    else password.type = "password"
}

function hidePasswordRepeat() {
    const passwordRepeat = document.getElementById("password-repeat")
    if (passwordRepeat.type === "password") passwordRepeat.type = "text"
    else passwordRepeat.type = "password"
}

executeButton.addEventListener("click", save)
closeButton.addEventListener("click", close)
personDateButton.addEventListener("click", openWindow)
passwordHideButton.addEventListener("click", hidePassword)
passwordRepeatHideButton.addEventListener("click", hidePasswordRepeat)