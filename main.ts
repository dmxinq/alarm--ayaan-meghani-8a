input.onPinPressed(TouchPin.P0, function () {
    if (Password != Enter) {
        basic.showIcon(IconNames.No)
        music.playMelody("G F D E F D F E ", 127)
        basic.clearScreen()
        Enter = ""
    }
})
function Press_B () {
    basic.showString("B")
    basic.pause(100)
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    if (Enter.length != 4) {
        Enter = "" + Enter + "A"
        Press_A()
    }
})
function Press_A () {
    basic.showString("A")
    basic.pause(100)
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    if (Enter.length != 4) {
        Enter = "" + Enter + "B"
        Press_B()
    }
    if (Password == Enter) {
        basic.showIcon(IconNames.Yes)
    }
})
let Enter = ""
let Password = ""
Password = "ABAB"
