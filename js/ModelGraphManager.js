/**
* Created by Declan Finnerty on 19/04/2014.
*/

/**
* @constructor
*/
function ModelGraphManager() {
    this.mModelRoot = null;            // ModelNode, The root node for the model graph
    this.mCurrentNode = null;          // ModelNode, The node that is being displayed
}


/**
* Setup
*/
ModelGraphManager.prototype.setup = function () {
}


/**
* Update
*/
ModelGraphManager.prototype.update = function () {
}

/**
* setCurrentNode
* @param {ModelNode} pCurrentNode The current node
*/
ModelGraphManager.prototype.setCurrentNode = function (pCurrentNode) {
    this.mCurrentNode = pCurrentNode;
}

/**
* getCurrentNode
* @return {ModelNode} mCurrentNode The current node
*/
ModelGraphManager.prototype.getCurrentNode = function () {
    return this.mCurrentNode;
}

/**
* getCurrentChildren
* @return {Array} currentChildren The children of the current node
*/
ModelGraphManager.prototype.getCurrentChildren = function () {
    var currentChildren = this.mCurrentNode.getChildren();
    return currentChildren;
}

/**
* Sets up a graph for testing
* gives the root 3 children
*/
ModelGraphManager.prototype.setupTestGraph = function () {
    this.mModelRoot = new ModelNode();

    //Test children to be added to the root
    var child0 = new ModelNode("child0", this.mModelRoot, 1);
    var child1 = new ModelNode("child1", this.mModelRoot, 1);
    var child2 = new ModelNode("child2", this.mModelRoot, 1);

    this.mModelRoot.addChild(child0);
    this.mModelRoot.addChild(child1);
    this.mModelRoot.addChild(child2);

    //Test grandchildren to be added to the root
    var grandchild0 = new ModelNode("grandchild0", this.mModelRoot, 1);
    var grandchild1 = new ModelNode("grandchild1", this.mModelRoot, 1);
    var grandchild2 = new ModelNode("grandchild2", this.mModelRoot, 1);
    var grandchild3 = new ModelNode("grandchild3", this.mModelRoot, 1);
    var grandchild4 = new ModelNode("grandchild4", this.mModelRoot, 1);
    var grandchild5 = new ModelNode("grandchild5", this.mModelRoot, 1);

    child0.addChild(grandchild0);       //child0 has 3 childran
    child0.addChild(grandchild1);
    child0.addChild(grandchild2);
    child1.addChild(grandchild3);       //child1 has 1 childran
    child2.addChild(grandchild4);       //child2 has 2 childran
    child2.addChild(grandchild5);


    this.mCurrentNode = this.mModelRoot;
}