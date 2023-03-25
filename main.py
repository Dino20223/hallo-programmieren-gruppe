def on_button_a():
    basic.set_led_color(0xffff00)
    basic.show_string("Hallo Programmieren-Gruppe")
    basic.set_led_color(0xff0000)
    for index in range(2):
        music.play_melody("- B G F C - C C5 ", 500)
        basic.set_led_color(0x7f00ff)
        music.rest(music.beat(BeatFraction.WHOLE))
        basic.set_led_color(0x000000)
        music.play_melody("- B G F C - C C5 ", 500)
        basic.set_led_color(0xffffff)
        music.rest(music.beat(BeatFraction.WHOLE))
input.on_button_event(Button.A, input.button_event_click(), on_button_a)
