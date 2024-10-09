const birthdayButton = document.getElementById('birthdayButton');
const birthdayMessage = document.getElementById('birthdayMessage');

birthdayButton.addEventListener('click', () => {
    birthdayMessage.classList.toggle('hidden');
});
