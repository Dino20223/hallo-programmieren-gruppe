input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.setLedColor(0xffff00)
    basic.showString("Hallo Programmieren-Gruppe, ich bin Calliope.")
    basic.setLedColor(0xff0000)
    for (let index = 0; index < 2; index++) {
        music.playMelody("- B G F C - C C5 ", 500)
        basic.setLedColor(0x7f00ff)
        music.rest(music.beat(BeatFraction.Whole))
        basic.setLedColor(0x000000)
        music.playMelody("- B G F C - C C5 ", 500)
        basic.setLedColor(0xffffff)
        music.rest(music.beat(BeatFraction.Whole))
    }
    led.plotBarGraph(
    16,
    12
    )
})
