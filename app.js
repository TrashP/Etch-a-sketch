const container = document.querySelector('.container');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';

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
   
        columns[j].style.border = '1px solid';
        columns[j].style.borderColor = 'black';
        columns[j].style.margin = 0;
        columns[j].style.padding = 0;
        columns[j].style.width = '48px';
        columns[j].style.height = '48px';
    }
}
