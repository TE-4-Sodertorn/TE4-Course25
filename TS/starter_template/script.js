console.log("Hello, World!");
var a = 5;
var b = 10;
console.log("Fifteen is ".concat(a + b, " and\nnot ").concat(2 * a + b, "."));
function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet("Alice"));
var primaryColor = [255, 0, 128];
// primaryColor = [255, 0]; // ❌ ERROR: Must have 3 elements.
// primaryColor.push("blue"); // ❌ ERROR: Push method is often restricted on tuples.
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var playerDirection = Direction.Right;
if (playerDirection === Direction.Right) {
    console.log("Moving right (value: " + playerDirection + ")"); // Output: 3
}
