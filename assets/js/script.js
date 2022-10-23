// ALFABETO NORMAL
//     => ABCDEFGHIJKLMNOPQRSTUVWXYZ

// ALFABETO CIFRADO DE 4 SALTOS
//     => EFGHIJKLMNOPQRSTUVWXYZABCD

function cifraCesar(palavra, passo) {
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let p = palavra.split('').map((e) => (alfabeto.indexOf(e) + passo) % alfabeto.length);
    return p.map((e) => alfabeto[e]).join('');
}
