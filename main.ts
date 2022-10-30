let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
        basic.pause(1000)
        strip.rotate(1)
        basic.pause(1000)
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Purple))
        basic.pause(1000)
        strip.rotate(1)
    }
})
