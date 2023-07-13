input.onButtonPressed(Button.A, function () {
    valorIndice = 0
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == partitura[valorIndice]) {
        basic.showIcon(IconNames.Yes)
        while (valorIndice <= partitura.length - 1) {
            valorIndice += 1
        }
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    valorIndice += 1
})
let valorIndice = 0
let partitura: string[] = []
radio.setGroup(1)
partitura = [
"a",
"b",
"c",
"d",
"e"
]
valorIndice = 0
basic.forever(function () {
    basic.showString("" + (partitura[valorIndice]))
})
