/**
 * Created by Declan on 15/04/2014.
 */

/**
 * A modelNode may represent an Area or Learning Outcome in the model
 */
function ModelNode()
{
    this.name = null;
    this.listOfChildren = new Array();
    this.parent = null;
    this.depth = null; // this can be used to distinguish between Areas, LOs, etc ...
}


/**
 * Sets up this object for use
 * @param {String} The Name of the node
 * @param {ModelNode} The Parent node
 * @param {ModelNode} The depth the node is in the graph
 */
ModelNode.prototype.Setup = function(pName, pParent, pDepth)
{
    this.parent = pParent;
    this.name = pName;
    this.depth = pDepth;
}

/**
 * Adds a child to this node
 * @param {ModelNode} The child being added
 */
ModelNode.prototype.AddChild = function(pChild)
{
    this.listOfChildren.push(pChild);
}

/**
 * Gets the Children of this node
 * @return {ModelNode} The Children
 */
ModelNode.prototype.GetChildren  = function()
{
    return this.listOfChildren;
}

/**
 * Gets the parent of this node
 * @return {ModelNode} The parent
 */
ModelNode.prototype.GetParent = function()
{
    return this.parent;
}

/**
 * Gets the name of this node
 * @return {String} The Name
 */
ModelNode.prototype.GetName = function()
{
    return this.name;
}


/**
 * Gets the depth of this node
 * @return {String} The depth
 */
ModelNode.prototype.GetDepth = function()
{
    return this.depth;
}
