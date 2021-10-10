const ft = new Fetch();
const ui = new WindowUI();

const search = document.getElementById("searchCity");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
  const currentVal = search.value;

  ft.getCurrent(currentVal).then((data) => {
    ui.window(data);
    ui.saveToLS(data);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const dataSaved = ui.getFromLS();
  ui.window(dataSaved);
});
