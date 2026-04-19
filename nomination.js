const yearSelect = document.querySelector("#yearSelect");
const categorySelect = document.querySelector("#categorySelect");
const tableRows = document.querySelectorAll("tbody tr");

function filterTable() {
    const selectedYear = yearSelect.value;
    const selectedCategory = categorySelect.value;

    tableRows.forEach(row => {
        const rowCategory = row.children[2].innerText;
        const rowYear = row.children[4].innerText;

        const yearMatch =
            selectedYear === "All Years" || rowYear === selectedYear;

        const categoryMatch =
            selectedCategory === "All Categories" || rowCategory === selectedCategory;

        if (yearMatch && categoryMatch) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

window.addEventListener("DOMContentLoaded", () => {
    yearSelect.value = "2025";        // default year
    categorySelect.value = "All Categories";
    filterTable();
});

yearSelect.addEventListener("change", filterTable);
categorySelect.addEventListener("change", filterTable);
