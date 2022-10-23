// ALFABETO NORMAL
//     => ABCDEFGHIJKLMNOPQRSTUVWXYZ

// ALFABETO CIFRADO DE 4 SALTOS
//     => EFGHIJKLMNOPQRSTUVWXYZABCD

function cifraCesar(palavra, passo) {
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let p = palavra.split('').map((e) => (alfabeto.indexOf(e) + passo) % alfabeto.length);
    return p.map((e) => alfabeto[e]).join('');
}

// SETANDO OS ELEMENTOS

const msga = document.querySelector('[data-msg-a]');
const msgb = document.querySelector('[data-msg-b]');
const btn = document.querySelector('button');
const select = document.querySelector('#select');
