document.getElementById("showContacts").addEventListener("click", function() {
  const contacts = document.getElementById("contacts");
  contacts.classList.toggle("hidden");

  if (!contacts.classList.contains("hidden")) {
    this.textContent = "Скрыть контакты";
  } else {
    this.textContent = "Показать контакты";
  }
});
