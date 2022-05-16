basic.forever(function on_forever() {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showString("Vai Palmeiras")
    }
    
    if (input.buttonIsPressed(Button.A)) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Giraffe)
    }
    
})
