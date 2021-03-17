pins.servoWritePin(AnalogPin.P0, 0)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, 80)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P0, -90)
    basic.pause(500)
})
