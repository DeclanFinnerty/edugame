/**
 * Created by Declan Finnerty on 17/04/2014.
 */



/**
 * First function called
 */
function Main() 
{
    console.log("Call: Main");

    //Initialize the Globals
    globalRender = new Render();

    //Testing
    testTile = new Tile();
    testTile.Setup(100, 100, 100, 100, "#FFFF00", globalRender.getCanvasContext());
    testTile.Draw();
    testTile.Delete();
}

/**
* Update function; anything that needs 
* to be updated should be called here
*/
function Update() 
{
}

/**
* Draw function; anything that needs to be drawn
* to the canvas should be called here
*/
function Draw()
{
}
