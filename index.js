let vitorias = 248
let derrotas = 167

saldoVitorias = vitorias - derrotas


function vitoriasDerotas(vitorias) {
    if (vitorias - derrotas < 10) {
        return "Ferro"
    }else if (vitorias - derrotas >= 11 && vitorias - derrotas <= 20) {
        return "Bronze"
    }else if (vitorias - derrotas >= 21 && vitorias - derrotas <= 50) {
        return "Prata"
    }else if (vitorias - derrotas >= 51 && vitorias - derrotas <= 80) {
        return "Ouro"
    }else if (vitorias - derrotas >= 81 && vitorias - derrotas <= 90) {
        return "Diamante"
    }else if (vitorias - derrotas >= 91 && vitorias - derrotas <= 100) {
        return "Lendário"
    }else if (vitorias - derrotas >= 101) {
        return "Imortal"
    }

}

    let nivel = vitoriasDerotas(248)
console.log("O herói tem o saldo de vitórias " + saldoVitorias + " e está no nível " + nivel)

