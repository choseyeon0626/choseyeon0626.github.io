const btnL = document.querySelector('.btnL');
if(btnL){btnL.addEventListener('click', function() {
   window.location.href = 'hagguha.html'; 
});}

const btnS = document.querySelector('.btnS');
if(btnS){btnS.addEventListener('click', function() {
    window.location.href = 'home.html';
});}

const btnS_foucs = document.querySelector('.btnS_foucs');
if(btnS_foucs){btnS_foucs.addEventListener('click', function() {
    window.open('https://youtu.be/aPIaUj2Bnqg?si=GTVzlFdxBH4pu9Br')
});}

const btn_RUDE = document.querySelector('.btn_RUDE');
if(btn_RUDE){btn_RUDE.addEventListener('click', function() {
    window.open('https://youtu.be/PArwInNjZ4A?si=tvnfgaEAbaOh5JhH')
});}

const imges = [
    "ALSSONG HAMSSONG.png",
    "BINGPING.png",
    "JEONG DDANG KONG.png",
    "JJOOJEBI.png",
    "JJUUILIEN.png",
    "NO SOONG EE.png",
    "STELLNYANG.png",
    "TORAMUI.png"
];

function showRandomImage() {
    const randomNum = Math.floor(Math.random() * imges.length);
    const imgElement = document.getElementById("random-img");

    if (imgElement) {
        imgElement.src = `../hagguuha_img/${imges[randomNum]}`;
    }
}

window.onload = showRandomImage;