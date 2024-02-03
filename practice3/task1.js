const addProduct = document.querySelector('.addProduct');
const addRewiew = document.querySelector('.addRewiew');
const submit = document.querySelector('.submit');
const msgError = document.querySelector('.msgError');

submit.addEventListener('click', () => {
    const product = addProduct.value;
    const rewiew = addRewiew.value;
    if (product !== "" && rewiew !== "") {
        let store = JSON.parse(localStorage.getItem(product));
        if (store === null) {
            store = [];
        }
    } else {
        msgError.textContent = "не все поля заполненны";
    }
});