function seleccionarMúsica () {
    if (musica == 1) {
        partitura = Para_Elisa
    }
    if (musica == 2) {
        partitura = Feliz_Cumpleaños
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
let Feliz_Cumpleaños: string[] = []
let Para_Elisa: string[] = []
Para_Elisa = [
"c",
"a",
"b",
"b",
"b"
]
Feliz_Cumpleaños = [
"a",
"b",
"c",
"a",
"b"
]
radio.setGroup(1)
