basic.forever(function () {
    serial.redirectToUSB()
    serial.writeValue("value", pins.analogReadPin(AnalogPin.P1))
    pins.analogWritePin(AnalogPin.P2, 1023)
})
