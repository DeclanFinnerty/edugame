/**
* Created by Declan Finnerty on 17/04/2014.
*/

/**
* Renders the visuals for the App
* @constructor
*/
function Visuals() {
    console.log("Call Visuals() Constructor");

    this.mTheCanvas = null;
    this.mCanvasContext = null;

    this.setupCanvas();
}

/**
* Sets up the canvas 
*/
Visuals.prototype.setupCanvas = function () {
    console.log("Call: SetupCanvas()");

    this.mTheCanvas = document.getElementById("theCanvas");
    this.mTheCanvas.width = GLOBAL_CANVAS_WIDTH;
    this.mTheCanvas.height = GLOBAL_CANVAS_HEIGHT;
    this.mTheCanvas.style = "border:1px solid #000000;";
    this.mCanvasContext = theCanvas.getContext("2d");

    this.setupBackground();
}

/**
* Setup a background 
*/
Visuals.prototype.setupBackground = function () {
    this.mCanvasContext.fillStyle = GLOBAL_CANVAS_BACKGROUND_COLOUR;
    this.mCanvasContext.fillRect(0, 0, this.mTheCanvas.width, this.mTheCanvas.height);
}

/**
* Gets the canvas 
*/
Visuals.prototype.getCanvas = function () {
    return this.mTheCanvas;
}

/**
* Gets the canvas's context
*/
Visuals.prototype.getCanvasContext = function () {
    return this.mCanvasContext;
}

/**
* Draw function; anything that needs to be drawn
* to the canvas should be called here
*/
Visuals.prototype.draw = function () {
}

