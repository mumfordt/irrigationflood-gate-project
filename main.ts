fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.leftServo.fwdSetAngle(fwdMotors.leftServo.fwdGetAngle() - 5)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.leftServo.fwdSetAngle(fwdMotors.leftServo.fwdGetAngle() + 5)
})
input.onButtonPressed(Button.A, function () {
    fwdMotors.leftServo.fwdSetAngle(0)
})
input.onButtonPressed(Button.AB, function () {
    if (fwdMotors.pump.fwdIsActive()) {
        fwdMotors.pump.fwdSetActive(false)
    } else {
        fwdMotors.pump.fwdSetActive(true)
    }
})
input.onButtonPressed(Button.B, function () {
    fwdMotors.leftServo.fwdSetAngle(75)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    fwdMotors.leftServo.fwdSetAngle(35)
})
fwdMotors.leftServo.fwdSetAngle(35)
basic.forever(function () {
    basic.showNumber(fwdMotors.leftServo.fwdGetAngle())
})
