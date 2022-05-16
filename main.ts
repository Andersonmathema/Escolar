input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . . .
        # . . . .
        `)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
