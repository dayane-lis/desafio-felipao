let nomeHeroi = "Percival";
let XP = 10500;
let nivel = 0;

do {
    if (XP < 0) {
        console.log("Valor inválido! Digite um valor válido para o XP!");
        break;
    }

    if (XP <= 1000) {
        nivel = "Ferro";
    } else if (XP >= 1001 && XP <= 2000) {
        nivel = "Bronze";
    } else if (XP >= 2001 && XP <= 3000) {
        nivel = "Prata";
    } else if (XP >= 5001 && XP <= 7000) {
        nivel = "Ouro";
    } else if (XP >= 7001 && XP <= 8000) {
        nivel = "Platina";
    } else if (XP >= 8001 && XP <= 9000) {
        nivel = "Ascendente";
    } else if (XP >= 9001 && XP <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log ("O Herói " + nomeHeroi + " está no nível " + nivel);
    break;

} while (XP >= 0);