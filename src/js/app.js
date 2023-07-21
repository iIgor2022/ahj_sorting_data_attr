export default class App {
  constructor(data) {
    this.movies_list = data;
    this.table = 0;
    this.createTable();
    this.appendRows(this.movies_list);
  }

  createTable() {
    this.table = document.createElement("table");
    this.table.innerHTML = "<thead><tr class='table-header'></tr><tbody></tbody>";
    document.querySelector("body").appendChild(this.table);
    const tableHeader = document.querySelector("tr");
    for (const title of ["id", "title", "year", "imdb"]) {
      tableHeader.innerHTML += `<th class="head-title">${title}</th>`;
    }
  }

  appendRows(list) {
    for (const item of list) {
      this.table.tBodies[0].append(this.createRow(item));
    }
  }

  createRow(item) {
    const row = document.createElement("tr");
    row.dataset.id = item.id;
    row.dataset.title = item.title;
    row.dataset.year = item.year;
    row.dataset.imdb = item.imdb;
    row.classList.add("data");
    let cell = document.createElement("td");
    cell.innerText = item.id;
    row.appendChild(cell);
    cell = document.createElement("td");
    cell.innerText = item.title;
    row.appendChild(cell);
    cell = document.createElement("td");
    cell.innerText = `(${item.year})`;
    row.appendChild(cell);
    cell = document.createElement("td");
    cell.innerText = `imdb: ${new Intl.NumberFormat("ru", {
      style: "decimal",
      minimumFractionDigits: 2,
    }).format(item.imdb)}`;
    row.appendChild(cell);
    return row;
  }

  sort() {
    setInterval(() => {
      const header = Array.from(document.querySelectorAll(".head-title"));
      const cell = document.querySelector(".sort");
      const f = header.indexOf(cell);
      if (cell == null) {
        header[0].classList.add("sort");
        header[0].dataset.sort = "ascending";
        header[0].innerText += " \u2193";
      } else {
        if (cell.dataset.sort == "ascending") {
          cell.dataset.sort = "descending";
          cell.innerText = this.replaceArrow(cell.innerText);
        }
      }
      this.sortRows(0, "ascending");
    }, 2000);
  }

  replaceArrow(text) {
    return `${text.slice(0, text.length - 6)} \u2191`;
  }

  sortRows(fieldNumber, order) {
    const table = document.querySelector("table");
    let sortedRows = Array.from(table.rows).slice(1);
    if (order == "ascending") {
      sortedRows.sort((rowA, rowB) =>
        rowA.cells[fieldNumber].innerText < rowB.cells[fieldNumber].innerText
          ? 1
          : -1
      );
    } else {
      sortedRows.sort((rowA, rowB) =>
        rowA.cells[fieldNumber].innerText > rowB.cells[fieldNumber].innerText
          ? 1
          : -1
      );
    }
    table.tBodies[0].append(...sortedRows);
  }
}
