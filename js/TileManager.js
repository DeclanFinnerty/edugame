/**
* Created by Declan Finnerty on 18/04/2014.
*/

/**
* TileManager mantains and manages a list of the tiles being displayed.
* @constructor
* @param {Context} pCanvasContext
*/
function TileManager(pCanvasContext, pCurrentNode) {
    this.mCanvasContext = pCanvasContext;
    this.mTiles = new Array();
    this.mTileWidth = 10;
    this.mTileHeight = 10;
    this.mDistBetweenTiles = 5;

    this.setupTiles(pCurrentNode);
}


/**
* setupTiles
* Sets up the tiles with information from the graph 
*/
TileManager.prototype.setupTiles = function (pCurrentNode) {
    var posX;
    var posY;
    var width;
    var height;
    var colour = "#000000";
    var children = pCurrentNode.getChildren();
    var combinedWidth = 0;                          // the comdined width of the tiles including space between them

    for (var i = 0; i < children.length; i++) {
        posX = combinedWidth;
        posY = 0;
        width = this.mTileWidth * children[i].getNumberOfChildren();          //The size of the tile is proportional to the number of children
        height = this.mTileHeight * children[i].getNumberOfChildren();
        combinedWidth += (width + this.mDistBetweenTiles);

        this.mTiles.push(new Tile(posX, posY, width, height, colour, this.mCanvasContext));
    }

}

/**
* Draw
* draws all the tiles in mTiles
*/
TileManager.prototype.draw = function () {
    for (var i = 0; i < this.mTiles.length; i++) {
        this.mTiles[i].draw();
    }
}

/**
* Deletes tiles
*/
TileManager.prototype.deleteTiles = function () {
}

/**
* Update
*/
TileManager.prototype.update = function () {
}
