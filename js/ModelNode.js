/**
* Created by Declan Finnerty on 15/04/2014.
*/

/**
* A modelNode may represent an Area or Learning Outcome in the model
* @constructor
*/
function ModelNode(pName, pParent, pDepth) {
    this.mName = pName;
    this.mListOfChildren = [];
    this.mParent = pParent;
    this.mDepth = pDepth;                        // this can be used to distinguish between Areas, LOs, etc ...
    this.mNumberOfChildren = 0;

    if (this.mParent != null) {
        this.mParent.addChild(this);               // Attach this node to its parrent
    }
}


/**
* Adds a child to this node
* @param {ModelNode} The child being added
*/
ModelNode.prototype.addChild = function (pChild) {
    this.mListOfChildren.push(pChild);
    this.mNumberOfChildren++;
}

/**
* Gets the Children of this node
* @return {Array} The Children
*/
ModelNode.prototype.getChildren = function () {
    return this.mListOfChildren;
}

/**
* Gets the parent of this node
* @return {ModelNode} The parent
*/
ModelNode.prototype.getParent = function () {
    return this.mParent;
}

/**
* Gets the name of this node
* @return {String} The Name
*/
ModelNode.prototype.getName = function () {
    return this.mName;
}


/**
* getDepth
* Gets the depth of this node
* @return {Int} mDepth The depth
*/
ModelNode.prototype.getDepth = function () {
    return this.mDepth;
}

/**
* getNumberOfChildren
* Gets the number of children this node has
* @return {Int} mNumberOfChildren 
*/
ModelNode.prototype.getNumberOfChildren = function () {
    return this.mNumberOfChildren;
}

