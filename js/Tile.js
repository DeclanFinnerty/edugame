/**
 * Created by Declan on 17/04/2014.
 */

/**
 * A Tile will visualy represent a node in the modelGraph
 */
function Tile() 
{
    this.width = null;
    this.height = null;
    this.posX = null;
    this.posY = null;
    this.colour = null;
    this.canvasContext = null;
}


/**
 * Sets up this object for use
 * @param {Integer} Width
 * @param {Integer} Height
 * @param {Integer} Position on the x-axis
 * @param {Integer} Position on the y-axis
 * @param {String}  Colour
 */
Tile.prototype.Setup = function ( pPosX, pPosY, pWidth, pheight, pColour, pCanvasContext ) 
{
    this.width = pWidth;
    this.height = pheight;
    this.posX = pPosX;
    this.posY = pPosY;
    this.colour = pColour;
    this.canvasContext = pCanvasContext
}

/**
 * Draws the tile
 * @param {Context} CanvasContext
 */
Tile.prototype.Draw = function ()
{
    this.canvasContext.fillStyle = this.colour;
    this.canvasContext.fillRect(this.posX, this.posY, this.width, this.height);
}

/**
* Deletes the tile by replacing it with the background colour
* @param {Context} CanvasContext
*/
Tile.prototype.Delete = function ()
{
    this.canvasContext.fillStyle = globalBackgroundColour;
    this.canvasContext.fillRect(this.posX, this.posY, this.width, this.height);
}

/**
 * Updates the tiles size, colour etc..
 * @param {Integer} Width
 * @param {Integer} Height
 * @param {Integer} Position on the x-axis
 * @param {Integer} Position on the y-axis
 * @param {String}  Colour
 */
Tile.prototype.Update = function (pPosX, pPosY, pWidth, pheight, pColour)
{
}
