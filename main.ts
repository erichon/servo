pins.servoSetPulse(AnalogPin.P0, 3000)
let speed = 5
let min_angle = 8
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
    if (angle >= 180) {
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
    if (angle <= 8) {
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
