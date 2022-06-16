const container = document.querySelector('.container');
const button = document.querySelector('.num-button');

const rows = [];
const columns = [];
input = 0;

button.addEventListener('click', () => {
    input = parseInt(prompt('Enter the number of cells per side: (max 100)', 16));
    if (input > 100) {
        input = 100;
    }
    
    for (i = 0; i < input; i++) {
        rows[i] = document.createElement('div');
        container.appendChild(rows[i]);
        rows[i].classList.add('table-row');
    
        for (j = 0; j < input; j++) {
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
})

