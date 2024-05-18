let vitorias = 248
let derrotas = 167


function vitoriasDerotas(vitorias) {
    let saldoVitorias = vitorias - derrotas
    
    
    if (vitorias - derrotas < 10) {
        return "Ferro"
    } else if (vitorias - derrotas >= 11 && vitorias - derrotas <= 20) {
        return "Bronze"
    } else if (vitorias - derrotas >= 21 && vitorias - derrotas <= 50) {
        return "Prata"
    } else if (vitorias - derrotas >= 51 && vitorias - derrotas <= 80) {
        return "Ouro"
    } else if (vitorias - derrotas >= 81 && vitorias - derrotas <= 90) {
        return "Diamante"
    } else if (vitorias - derrotas >= 91 && vitorias - derrotas <= 100) {
        return "Lendário"
    } else {
        return "Imortal"
    }

}

    let nivel = vitoriasDerotas(vitorias)
console.log("O herói tem o saldo de vitórias " + (vitorias - derrotas) + " e está no nível " + nivel)

