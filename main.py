basic.show_string("Ask a question")
basic.show_number(8)

def on_gesture_shake():
    basic.clear_screen()
    randomNumber = randint(0, 4)
    if randomNumber == 3:
        basic.show_string("Try again")
    if randomNumber == 2:
        basic.show_string("Yes")
    if randomNumber == 1:
            basic.show_string("No")
    else:
            basic.show_string("Maybe")
    basic.show_number(8)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)