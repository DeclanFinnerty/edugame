/**
 * Created by Declan Finnerty on 17/04/2014.
 */

/**
 * Renders the visuals for the App
 */
function Render() 
{
    console.log("Call Render() Constructor");

    this.mTheCanvas = null;
    this.mCanvasContext = null;

    this.SetupCanvas();
}

/**
 * Sets up the canvas 
 */
Render.prototype.SetupCanvas = function ()
{
    console.log("Call: SetupCanvas()");

    this.mTheCanvas = document.getElementById("theCanvas");
    this.mTheCanvas.width = globalCanvasWidth;
    this.mTheCanvas.height = globalCanvasHeight;
    this.mTheCanvas.style = "border:1px solid #000000;";
    this.mCanvasContext = theCanvas.getContext("2d");

    this.SetupBackground();
}

/**
 * Setup a background 
 */
Render.prototype.SetupBackground = function ()
{
    this.mCanvasContext.fillStyle = globalBackgroundColour;
    this.mCanvasContext.fillRect(0, 0, this.mTheCanvas.width, this.mTheCanvas.height);
}

/**
* Gets the canvas 
*/
Render.prototype.getCanvas = function () 
{
    return this.mTheCanvas;
}

/**
* Gets the canvas's context
*/
Render.prototype.getCanvasContext = function ()
{
    return this.mCanvasContext;
}