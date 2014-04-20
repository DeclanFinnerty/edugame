/**
* Created by Declan Finnerty on 17/04/2014.
*/



/**
* First function called
*/
function main() {
    console.log("Call: main()");


    //TESTING //////////////////////////////////////////////////////

    //Test ModelGraphManager
    var testModelGraphManager = new ModelGraphManager();
    testModelGraphManager.setupTestGraph();
    var currentNode = testModelGraphManager.getCurrentNode();
       
    //Test TileManager
    var testVisuals = new Visuals();
    var ctx = testVisuals.getCanvasContext();
    var testTileManager = new TileManager(ctx, currentNode);
    testTileManager.draw();

    //Test ButtonManager
    var testButtonManager = new ButtonManager(currentNode);
    testButtonManager.setupForTesting();

    /////////////////////////////////////////////////////////////////
}

/**
* Update function; anything that needs 
* to be updated should be called here
*/
function update() {
}

/**
* Draw function; anything that needs to be drawn
* to the canvas should be called here
*/
function draw() {
}
