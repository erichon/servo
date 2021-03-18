pins.servoSetPulse(AnalogPin.P0, 3000)
let speed = 1
let min_angle = 45
let max_angle = 135
let angle = min_angle
let direction = speed
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, angle)
    if (angle >= max_angle) {
        direction = speed * -1
        angle += direction
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (angle <= min_angle) {
        direction = speed
        angle += direction
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    angle += direction
})
