pins.servoSetPulse(AnalogPin.P0, 3000)
let angle = 3
let direction = 1
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
        direction = -1
        angle += direction
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (angle <= 3) {
        direction = 1
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
    basic.pause(100)
})
