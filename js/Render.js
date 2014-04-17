/**
 * Created by Declan on 17/04/2014.
 */

/**
 * Renders the visuals for the App
 */
function Render() 
{
    console.log("Call Render() Constructor");

    this.theCanvas = null;
    this.canvasContext = null;

    this.SetupCanvas();
}

/**
 * Sets up the canvas 
 */
Render.prototype.SetupCanvas = function () 
{
    console.log("Call: SetupCanvas()");

    this.theCanvas = document.getElementById("theCanvas");
    this.theCanvas.width = globalCanvasWidth;
    this.theCanvas.height = globalCanvasHeight;
    this.theCanvas.style = "border:1px solid #000000;";
    this.canvasContext = theCanvas.getContext("2d");

    // Background rectangle
    this.canvasContext.fillStyle = "#0000FF";
    this.canvasContext.fillRect(0, 0, this.theCanvas.width, this.theCanvas.height);

}

/**
* Gets the canvas 
*/
Render.prototype.getCanvas = function () 
{
    return this.theCanvas;
}

/**
* Gets the canvas's context
*/
Render.prototype.getCanvasContext = function ()
{
    return this.canvasContext;
}