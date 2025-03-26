input.onButtonPressed(Button.A, function () {
    temp = "" + user_key + "A"
    check_key()
})
function check_key () {
    user_key = temp
    serial.writeLine(user_key)
    if (user_key == key) {
        servos.P0.setAngle(45)
    } else if (user_key.length > key.length) {
        basic.showIcon(IconNames.No)
        control.reset()
    }
}
input.onButtonPressed(Button.AB, function () {
    servos.P0.setAngle(0)
})
input.onButtonPressed(Button.B, function () {
    temp = "" + user_key + "B"
    check_key()
})
let temp = ""
let user_key = ""
let key = ""
let secret = 3791
key = "BBABA"
user_key = ""
servos.P0.setAngle(0)
