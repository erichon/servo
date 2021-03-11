basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P0, 120)
    basic.pause(2000)
})
