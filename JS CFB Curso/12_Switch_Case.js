// condição for vdd
// caso seja isso faz isso
// caso seja isso faz isso
// caso seja isso faz isso
// se não for nenhuma cai aqui 

let colocacao = 5;

switch (colocacao) {
    case 1:     // caso colocação for 1
        console.log("Primeiro Lugar")
        break   // Sempre coloca break
    case 2:     // caso colocação for 2
        console.log("Segundo Lugar")
        break   // Sempre coloca break
    case 3:     // caso colocação for 1
        console.log("Terceiro Lugar")
        break   // Sempre coloca break 
    case 4: case 5: case 6:
        console.log("Premio de Participação")
        break
    default:    // caso não for nenhuma dessas 
        console.log("Não Subiu ao podio")
        break   // Sempre coloca break
}