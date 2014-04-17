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
}


/**
 * Sets up this object for use
 * @param {Integer} Width
 * @param {Integer} Height
 * @param {Integer} Position on the x-axis
 * @param {Integer} Position on the y-axis
 * @param {String}  Colour
 */
ModelNode.prototype.Setup = function (pWidth, pheight, pPosX, pPosY, pColour) 
{
    this.width = pWidth;
    this.height = pheight;
    this.posX = pPosX;
    this.posY = pPosY;
    this.colour = pColour;
}

/**
 * Draws the tile
 */
ModelNode.prototype.Draw = function (pCanvasContext) 
{
    pCanvasContext.fillStyle = "#FF0000";
    pCanvasContext.fillRectangle(0, 0, 150, 75);

}

/**
 * Updates the tiles size, colour etc..
 */
ModelNode.prototype.Update  = function()
{
}
