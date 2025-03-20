input.onButtonPressed(Button.A, function () {
    temp = "" + user_key + "A"
    user_key = temp
    serial.writeLine(user_key)
})
input.onButtonPressed(Button.B, function () {
    temp = "" + user_key + "B"
    user_key = temp
    serial.writeLine(user_key)
})
// це місце де знаходиця парось від замка
let temp = ""
let user_key = ""
let secret = 3791
let key = "BBABA"
user_key = ""
