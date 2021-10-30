function controlHomeIcon() {
    const self = document.querySelector('.nav-bar > #home-div');
    self.children[1].style.display = 'block'
    self.style.borderRadius = '20px';
    self.style.width = '110px';
}

function controlAddIcon() {
    const self = document.querySelector('.nav-bar > #add-div');
    self.children[1].style.display = 'block'
    self.style.borderRadius = '20px';
    self.style.width = '150px';
}

function closeAll() {
    const allIconBoxes = [
        document.querySelector('.nav-bar > #home-div'),
        document.querySelector('.nav-bar > #add-div'),
    ]
    for (let i of allIconBoxes) {
        i.children[1].style.display = 'none'
        i.style.borderRadius = '50%';
        i.style.width = '45px';
    }
}

function moveToURL(screenName) {
    window.location.href = screenName;
}