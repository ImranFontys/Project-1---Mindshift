(function(){
  // prototype: minimale movement
  const grid = document.querySelector('.grid');

  // 0 = empty; start solved
  let state = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];

  function isAdjacent(i, j){
    const r = Math.floor(i/4), c = i % 4;
    const er = Math.floor(j/4), ec = j % 4;
    return Math.abs(r-er) + Math.abs(c-ec) === 1;
  }

  function render(){
    const empty = state.indexOf(0);
    grid.innerHTML = '';
    state.forEach((v, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      const movable = v !== 0 && isAdjacent(i, empty);
      btn.className = 'cell' + (v === 0 ? ' empty' : '') + (movable ? ' movable' : '');
      btn.textContent = v === 0 ? '' : String(v);
      if (movable) btn.onclick = () => move(i);
      grid.appendChild(btn);
    });
  }

  function move(i){
    const empty = state.indexOf(0);
    if (isAdjacent(i, empty)){
      [state[i], state[empty]] = [state[empty], state[i]];
      render();
    }
  }

  render();
})();
