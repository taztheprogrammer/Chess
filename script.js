const grid = document.getElementById('game-grid');

for(i = 0; i < 81; i++) {
    const temp = document.createElement('div');
    grid.appendChild(temp);
}