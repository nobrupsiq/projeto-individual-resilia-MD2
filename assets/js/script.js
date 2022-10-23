// ALFABETO NORMAL
//     => ABCDEFGHIJKLMNOPQRSTUVWXYZ

// ALFABETO CIFRADO DE 4 SALTOS
//     => EFGHIJKLMNOPQRSTUVWXYZABCD

function cifraCesar(palavra, passo) {
    palavra = palavra.toLowerCase();
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let p = palavra.split('').map((e) => (alfabeto.indexOf(e) + passo) % alfabeto.length);
    return p.map((e) => alfabeto[e]).join('');
}

// SETANDO OS ELEMENTOS

const msga = document.querySelector('[data-msg-a]');
const msgb = document.querySelector('[data-msg-b]');
const btn = document.querySelector('button');
const select = document.querySelector('#select');

// LOGICA DE SALTOS CIFRA DE CESAR

let encodeCifra = () => (msgb.value = cifraCesar(msga.value, parseInt(inp_saltos.value)));
let decodeCifra = () => (msgb.value = cifraCesar(msga.value, parseInt(inp_saltos.value) * -1));
let encodeBase64 = () => (msgb.value = btoa(msga.value)); //btoa() funcao para codificar em base64
let decodeBase64 = () => (msgb.value = atob(msga.value)); //atob() funcao para decodificar base64

// FUNÇÃO DE CALLBACK DO EVENTO DE CLICK
handleClick = () => {
    if (select.value == 1 && checkencode.checked) encodeBase64();
    if (select.value == 1 && checkdecode.checked) decodeBase64();
    if (select.value == 2 && checkencode.checked) encodeCifra();
    if (select.value == 2 && checkdecode.checked) decodeCifra();
};

// EVENTOS DE CLICK DO BOTÃO
btn.addEventListener('click', handleClick);
checkencode.addEventListener('click', () => {
    msgb.value = '';
    btn.innerText = 'Codificar';
});
checkdecode.addEventListener('click', () => {
    msgb.value = '';
    btn.innerText = 'Decodificar';
});

// VERIFICANDO SE O VALOR É '2' QUE CORRESPONDE A CIFRA DE CÉSAR, SE FOR 2 DISPLAY BLOCK É ATIVADO. NO CSS O ELEMENTO ESTÁ COMO DISPLAY:NONE.
select.onchange = () => (saltos.style.display = select.value == 2 ? 'block' : 'none');
