radio.onReceivedString(function (receivedString) {
    if (receivedString == partitura[indicePartitura]) {
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
})
let indicePartitura = 0
let partitura: string[] = []
radio.setGroup(1)
partitura = [
"a",
"b",
"c",
"a",
"b"
]
indicePartitura = 0
basic.showString("" + (partitura[indicePartitura]))
