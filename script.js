const loader = document.getElementById('loader');
const preview = document.getElementById('preview');
const cardType = document.getElementById('card-type');
const portrait = document.getElementById('portrait');
const nameInput = document.getElementById('input-name');
const heroName = document.getElementById('hero-name');
const unique = document.getElementById('unique');
const threatInput = document.getElementById('threat-input');
const threatCard = document.getElementById('threat-cost');
const willInput = document.getElementById('willpower');
const atkInput = document.getElementById('attack');
const defInput = document.getElementById('defense');
const willNum = document.getElementById('willCard');
const atkNum = document.getElementById('atkCard');
const defNum = document.getElementById('defCard');
const health = document.getElementById('health');
const healthInput = document.getElementById('health-input');
const typeInput = document.getElementById('inputType');
const typeCard = document.getElementById('typeCard');
const textBox = document.getElementsByName('card-text');
const abilitiesCard = document.getElementById('abilities-preview');
const abilitiesInput = document.getElementById('abilities-input');

preview.style.backgroundSize = 'cover';
portrait.style.backgroundSize = 'cover';

// Heroi neutro por definição padrão;
window.onload = function() {
  preview.style.backgroundImage = "url('img/HeroBG.png')";
}

// Mudar a esfera de influência da carta;
function changeSphere() {
  const sphere = cardType.value;
  if (sphere === 'neutral') {
    preview.style.backgroundImage = "url('img/HeroBG.png')";
  } else if (sphere === 'tactics') {
    preview.style.backgroundImage = "url('img/HeroTacticsBG.png')";
  } else if (sphere === 'lore') {
    preview.style.backgroundImage = "url('img/HeroLoreBG.png')";
  } else if (sphere === 'spirit') {
    preview.style.backgroundImage = "url('img/HeroSpiritBG.png')";
  } else {
    preview.style.backgroundImage = "url('img/HeroLeadershipBG.png')";
  }
}
cardType.addEventListener('change', changeSphere);

// Carrega imagem do respositório local para o fundo da carta;
function loadImage(event) {
    const mark = event.target;
    // Visto em https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977;
    portrait.src = window.URL.createObjectURL(mark.files[0]);
  }
loader.addEventListener('change', loadImage);

// Nome do héroi, seus tipos e texto da carta;
function nameChange() {
  heroName.innerText = nameInput.value;
}
nameInput.addEventListener('keyup', nameChange);

function heroType() {
  typeCard.innerText = typeInput.value;
 }
typeInput.addEventListener('keyup', heroType);

function cardText() {
  abilitiesCard.innerText = abilitiesInput.value;
 }
abilitiesInput.addEventListener('keyup', cardText);

// Funções que imprimem os atributos principais da carta;
function threatCost() {
threatCard.innerText = threatInput.value;
}
threatInput.addEventListener('change', threatCost);

function willPreview() {
  willNum.innerText = willInput.value;
}
willInput.addEventListener('change', willPreview);

function atkPreview() {
  atkNum.innerText = atkInput.value;
}
atkInput.addEventListener('change', atkPreview);

function defPreview() {
  defNum.innerText = defInput.value;
}
defInput.addEventListener('change', defPreview);

function healthMeter() {
health.innerText = healthInput.value;
}
healthInput.addEventListener('change', healthMeter);
