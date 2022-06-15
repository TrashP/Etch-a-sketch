const container = document.querySelector('.container');

const rows = [];
const columns = [];

for (i = 0; i < 16; i++) {
    rows[i] = document.createElement('div');
    container.appendChild(rows[i]);
    rows[i].style.display = 'flex';

    rows[i].style.margin = 0;
    rows[i].style.padding = 0;
    for (j = 0; j < 16; j++) {
        columns[j] = document.createElement('div');
        rows[i].appendChild(columns[j]);
        columns[j].classList.add('table-cell');
    }
}

container.addEventListener('mouseover', e => {
    if (e.target.matches('.table-cell')) {
        e.target.classList.add('hover-mouse');
    }
})