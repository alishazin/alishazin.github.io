
function controlSubNavName() {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const parent = document.querySelector('.rank-parent-box');
            parent.innerHTML = '';
            count = 1
            for (let x of JSON.parse(this.responseText)) {
                const rankContainer = document.createElement('div');
                rankContainer.className = 'rank-container';
                const rankCount = document.createElement('div');
                rankCount.className = 'rank-count';
                rankCount.innerHTML = count;
                const rankName = document.createElement('div');
                rankName.className = 'rank-name';
                rankName.title = x;
                rankName.innerHTML = x;
                rankContainer.appendChild(rankCount);
                rankContainer.appendChild(rankName);
                parent.appendChild(rankContainer);
                count++;
            }
        }
        subNavNameAnimation();
    }
    req.open('GET', 'sortname/'); 
    req.send();
}

function subNavNameAnimation() {
    document.getElementById('item-email').style.backgroundColor = 'white';
    document.getElementById('item-email').style.color = 'var(--secondary-color)';
    document.getElementById('item-name').style.backgroundColor = 'var(--secondary-color)';
    document.getElementById('item-name').style.color = 'white';
}

function controlSubNavEmail() {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const parent = document.querySelector('.rank-parent-box');
            parent.innerHTML = '';
            count = 1
            for (let x of JSON.parse(this.responseText)) {
                const rankContainer = document.createElement('div');
                rankContainer.className = 'rank-container';
                const rankCount = document.createElement('div');
                rankCount.className = 'rank-count';
                rankCount.innerHTML = count;
                const rankName = document.createElement('div');
                rankName.className = 'rank-name';
                rankName.title = x;
                rankName.innerHTML = x;
                rankContainer.appendChild(rankCount);
                rankContainer.appendChild(rankName);
                parent.appendChild(rankContainer);
                count++;
            }
        }
        subNavEmailAnimation();
    }
    req.open('GET', 'sortemail/'); 
    req.send(); 
}

function subNavEmailAnimation() {
    document.getElementById('item-name').style.backgroundColor = 'white';
    document.getElementById('item-name').style.color = 'var(--secondary-color)';
    document.getElementById('item-email').style.backgroundColor = 'var(--secondary-color)';
    document.getElementById('item-email').style.color = 'white';
}