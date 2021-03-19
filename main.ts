pins.servoSetPulse(AnalogPin.P0, 20000)
let speed = 1
let min_angle = 45
let max_angle = 135
let angle = min_angle
let direction = speed
basic.forever(function () {
    pins.analogSetPeriod(AnalogPin.P0, 20000)
    pins.servoSetPulse(AnalogPin.P0, 1300)
    basic.pause(2000)
    pins.analogSetPeriod(AnalogPin.P0, 20000)
    pins.servoSetPulse(AnalogPin.P0, 1500)
    basic.pause(2000)
    pins.analogSetPeriod(AnalogPin.P0, 20000)
    pins.servoSetPulse(AnalogPin.P0, 1700)
    basic.pause(2000)
    pins.analogSetPeriod(AnalogPin.P0, 20000)
    pins.servoSetPulse(AnalogPin.P0, 1500)
    basic.pause(2000)
})
