/**
* Created by Declan Finnerty on 17/04/2014.
*/

/**
* A Tile will visualy represent a node in the modelGraph
* @constructor
* @param {Integer} pPosX
* @param {Integer} pPosY
* @param {Integer} pWidth
* @param {Integer} pheight
* @param {String}  pColour
* @param {Context} pCanvasContext
*/
function Tile(pPosX, pPosY, pWidth, pHeight, pColour, pCanvasContext) {
    this.mWidth = pWidth;
    this.mHeight = pHeight;
    this.mPosX = pPosX;
    this.mPosY = pPosY;
    this.mColour = pColour;
    this.mCanvasContext = pCanvasContext;

}


/**
* Sets up this object for use
*/
Tile.prototype.setup = function () {

}

/**
* Draws the tile
*/
Tile.prototype.draw = function () {
    console.log("Call: Tile.draw()");
    
    this.mCanvasContext.fillStyle = this.mColour;
    this.mCanvasContext.fillRect(this.mPosX, this.mPosY, this.mWidth, this.mHeight);
}

/**
* Deletes the tile by replacing it with the background colour
*/
Tile.prototype.deleteTile = function () {
    this.mCanvasContext.fillStyle = GLOBAL_CANVAS_BACKGROUND_COLOUR;
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
Tile.prototype.update = function (pPosX, pPosY, pWidth, pheight, pColour) {
}
