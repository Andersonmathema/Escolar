def on_forever():
    if input.button_is_pressed(Button.AB):
        basic.show_string("Vai Palmeiras")
    if input.button_is_pressed(Button.A):
        music.start_melody(music.built_in_melody(Melodies.DADADADUM),
            MelodyOptions.ONCE)
    elif input.button_is_pressed(Button.B):
        basic.show_icon(IconNames.GIRAFFE)
basic.forever(on_forever)
