const btnL = document.querySelector('.btnL');
if(btnL){btnL.addEventListener('click', function() {
   window.location.href = 'hagguha.html'; 
});}

const btnS = document.querySelector('.btnS');
if(btnS){btnS.addEventListener('click', function() {
    window.location.href = 'index.html';
});}

const btnS_foucs = document.querySelector('.btnS_foucs');
if(btnS_foucs){btnS_foucs.addEventListener('click', function() {
    window.open('https://youtu.be/aPIaUj2Bnqg?si=GTVzlFdxBH4pu9Br')
});}

const btn_RUDE = document.querySelector('.btn_RUDE');
if(btn_RUDE){btn_RUDE.addEventListener('click', function() {
    window.open('https://youtu.be/F7sGJVUrkjQ?si=yzK8GndVgw55HpdF')
});}

const characterList = [
{
    src: "../hagguuha_img/NO SOONG EE.png",
    name: "노숭이",
    body: "나는야 원숭이들 중에서 가아장 예쁜 노숭이!"
},{
    src: "../hagguuha_img/ALSSONG HAMSSONG.png",
    name: "알쏭햄쏭",
    body: "애햄 애햄, 나는 알쏭햄쏭!"
},{
    src: "../hagguuha_img/BINGPING.png",
    name: "빙핑",
    body: "난 발리에서 온 멋쟁이, 빙핑!"
},{
    src: "../hagguuha_img/JEONG DDANG KONG.png",
    name: "정땅콩",
    body: "앗! 아이쿠 아... 나는 정땅콩!"
},{
    src: "../hagguuha_img/JJUUILIEN.png",
    name: "쭈일리언",
    body: "쭈삣 쭈삣, 나는 쭈일리언"
},{
    src: "../hagguuha_img/STELLNYANG.png",
    name: "스텔냥",
    body: "그앍 그앍 그앍 나는야 락스타 스텔냥이"
},{
    src: "../hagguuha_img/JJOOJEBI.png",
    name: "쮸제비",
    body: "쭈욱 쭈욱 쭈욱 쮸제비"
},{
    src: "../hagguuha_img/TORAMUI.png",
    name: "토라뮈",
    body: "토라뮈 라뮈 삐졌어 흥"
},

];

function showRandomCharacter() {
  const randomNum = Math.floor(Math.random() * characterList.length);
  const selectedCharacter = characterList[randomNum];

  const imgElement = document.getElementById("random-img");
  const nameElement = document.getElementById("character-name");
  const bodyElement = document.getElementById("character-body");

  if (imgElement && nameElement && bodyElement) {
    imgElement.src = selectedCharacter.src;
    nameElement.textContent = selectedCharacter.name;
    bodyElement.textContent = selectedCharacter.body;
  }
}

window.onload = showRandomCharacter;