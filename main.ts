function seleccionarMúsica () {
    if (musica == 0) {
        partitura = [
        "c",
        "a",
        "b",
        "b",
        "b"
        ]
    }
    if (musica == 1) {
        partitura = [
        "a",
        "b",
        "c",
        "a",
        "b"
        ]
    }
    indicePartitura = 0
    basic.showString("" + (partitura[indicePartitura]))
}
radio.onReceivedNumber(function (receivedNumber) {
    musica = receivedNumber
    seleccionarMúsica()
})
function evaluarNota () {
    if (notaRecibida == partitura[indicePartitura]) {
        basic.showIcon(IconNames.Yes)
        indicePartitura += 1
        if (indicePartitura == partitura.length) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showString("" + (partitura[indicePartitura]))
        }
    } else {
        basic.showIcon(IconNames.No)
        basic.showString("" + (partitura[indicePartitura]))
    }
}
radio.onReceivedString(function (receivedString) {
    notaRecibida = receivedString
    evaluarNota()
})
let notaRecibida = ""
let indicePartitura = 0
let partitura: string[] = []
let musica = 0
radio.setGroup(3)
