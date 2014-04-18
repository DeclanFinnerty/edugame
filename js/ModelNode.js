/**
 * Created by Declan Finnerty on 15/04/2014.
 */

/**
 * A modelNode may represent an Area or Learning Outcome in the model
 */
function ModelNode()
{
    this.mName = null;
    this.mListOfChildren = new Array();
    this.mParent = null;
    this.mDepth = null; // this can be used to distinguish between Areas, LOs, etc ...
}


/**
 * Sets up this object for use
 * @param {String} The Name of the node
 * @param {ModelNode} The Parent node
 * @param {ModelNode} The depth the node is in the graph
 */
ModelNode.prototype.Setup = function(pName, pParent, pDepth)
{
    this.mParent = pParent;
    this.mName = pName;
    this.mDepth = pDepth;
}

/**
 * Adds a child to this node
 * @param {ModelNode} The child being added
 */
ModelNode.prototype.AddChild = function(pChild)
{
    this.mListOfChildren.push(pChild);
}

/**
 * Gets the Children of this node
 * @return {ModelNode} The Children
 */
ModelNode.prototype.GetChildren  = function()
{
    return this.mListOfChildren;
}

/**
 * Gets the parent of this node
 * @return {ModelNode} The parent
 */
ModelNode.prototype.GetParent = function()
{
    return this.mParent;
}

/**
 * Gets the name of this node
 * @return {String} The Name
 */
ModelNode.prototype.GetName = function()
{
    return this.mName;
}


/**
 * Gets the depth of this node
 * @return {String} The depth
 */
ModelNode.prototype.GetDepth = function()
{
    return this.mDepth;
}
