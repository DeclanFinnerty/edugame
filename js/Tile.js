/**
 * Created by Declan Finnerty on 17/04/2014.
 */

/**
 * A Tile will visualy represent a node in the modelGraph
 */
function Tile() 
{
    this.mWidth = null;
    this.mHeight = null;
    this.mPosX = null;
    this.mPosY = null;
    this.mColour = null;
    this.mCanvasContext = null;
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
    this.mWidth = pWidth;
    this.mHeight = pheight;
    this.mPosX = pPosX;
    this.mPosY = pPosY;
    this.mColour = pColour;
    this.mCanvasContext = pCanvasContext
}

/**
 * Draws the tile
 */
Tile.prototype.Draw = function ()
{
    this.mCanvasContext.fillStyle = this.mColour;
    this.mCanvasContext.fillRect(this.mPosX, this.mPosY, this.mWidth, this.mHeight);
}

/**
* Deletes the tile by replacing it with the background colour
*/
Tile.prototype.Delete = function ()
{
    this.mCanvasContext.fillStyle = globalBackgroundColour;
    this.mCanvasContext.fillRect(this.mPosX, this.mPosY, this.mWidth, this.mHeight);
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
