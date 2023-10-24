const grid = document.getElementById('game-grid');

let evenOdd = 2;

for(i = 1; i < 65; i++) {
    const temp = document.createElement('div');

    if (evenOdd == 2) {
        if (i % 2 == 0) {
            temp.classList.add('white');
        }
    } else if (evenOdd == 1) {
        if ((i-1)% 2 == 0) {
            temp.classList.add('white');
        }
    }

    if (i % 8 === 0 && evenOdd === 1) {
        evenOdd++;
    } else if (i % 8 === 0 && evenOdd === 2) {
        evenOdd--;
    }

    
    grid.appendChild(temp);
}