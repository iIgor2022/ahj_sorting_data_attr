export default class App {
  constructor(data) {
    this.movies_list = data;
    this.table = 0;
    this.createTable();
    this.readData(data);
  }

  createTable() {
    this.table = document.createElement("table");
    document.querySelector("body").appendChild(this.table);
    const row = document.createElement("tr");
    row.classList.add("table-header");
    this.table.appendChild(row);
    for (const title of ["id", "title", "year", "imdb"]) {
      const cell = document.createElement("td");
      cell.classList.add(title);
      cell.innerText = title;
      row.appendChild(cell);
    }
  }

  readData(list) {
    for (const item of list) {
      const row = document.createElement("tr");
      row.dataset.id = item.id;
      row.dataset.title = item.title;
      row.dataset.year = item.year;
      row.dataset.imdb = item.imdb;
      let cell = document.createElement("td");
      cell.innerText = `${item.id}\u2193`;
      row.appendChild(cell);
      cell = document.createElement("td");
      cell.innerText = `${item.title}\u2191`;
      row.appendChild(cell);
      cell = document.createElement("td");
      cell.innerText = `(${item.year})`;
      row.appendChild(cell);
      cell = document.createElement("td");
      cell.innerText = `imdb: ${new Intl.NumberFormat("ru", {
        style: "decimal",
        minimumFractionDigits: 2
      }).format(item.imdb)}`;
      row.appendChild(cell);
      this.table.appendChild(row);
    }
  }

  sort() {
    setInterval(() => {

    }, 2000);
  }
}
