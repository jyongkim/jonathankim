const menuBtn = document.querySelector('nav button');
const menuLst = document.querySelector('nav ul');

menuBtn.onclick = () => {
    menuLst.classList.toggle('active') ?
        menuBtn.innerHTML = "&times;" : menuBtn.innerHTML = "&equiv;"
}