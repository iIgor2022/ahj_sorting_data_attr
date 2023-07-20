export default class App {
  constructor(data) {
    this.movies_list = data;
    this.createTable();
  }

  createTable() {
    let table = document.createElement("table");
    document.querySelector("body").appendChild(table);
    table = document.querySelector("table");
    const row = document.createElement("tr");
    table.appendChild(row);
    for (const title of ["id", "title", "year", "imdb"]) {
      const cell = document.createElement("td");
      cell.classList.add(title);
      cell.innerText = title;
      row.appendChild(cell);
    }
  }

  readingData(list) {
    for (const item of list) {
      for (const key of Object.keys(item)) {
        
      }
    }
  }
}
