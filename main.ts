pins.servoSetPulse(AnalogPin.P0, 20000)
let speed = 1
let min_angle = 45
let max_angle = 135
let angle = min_angle
let direction = speed
basic.forever(function () {
    pins.servoSetPulse(AnalogPin.P0, 5)
    basic.pause(500)
})
