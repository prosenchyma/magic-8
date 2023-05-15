basic.showString("Ask a question")
basic.showNumber(8)
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    basic.clearScreen()
    let randomNumber = randint(0, 4)
    if (randomNumber == 3) {
        basic.showString("Try again")
    }
    
    if (randomNumber == 2) {
        basic.showString("Yes")
    }
    
    if (randomNumber == 1) {
        basic.showString("No")
    } else {
        basic.showString("Maybe")
    }
    
    basic.showNumber(8)
})
