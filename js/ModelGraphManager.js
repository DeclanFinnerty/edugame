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
    this.mModelRoot = new ModelNode("root", null, 0);
    
    //Test User Accounts to be added to the root
    var userAccount0 = new ModelNode("userAccount0", this.mModelRoot, 1);
    var userAccount1 = new ModelNode("userAccount1", this.mModelRoot, 1);
    var userAccount2 = new ModelNode("userAccount2", this.mModelRoot, 1);
    
    //Test Models to be added to the user acounts
    var model0 = new ModelNode("model0", userAccount0, 2);
    var model1 = new ModelNode("model1", userAccount0, 2);
    var model2 = new ModelNode("model2", userAccount0, 2);
    var model3 = new ModelNode("model3", userAccount1, 2);
    var model4 = new ModelNode("model4", userAccount2, 2);
    var model5 = new ModelNode("model5", userAccount2, 2);


    //Test Areas to be added to the models
    var area0 = new ModelNode("area0", model0, 3);
    var area1 = new ModelNode("area1", model0, 3);
    var area2 = new ModelNode("area2", model0, 3);
    var area3 = new ModelNode("area3", model1, 3);
    var area4 = new ModelNode("area4", model2, 3);
    var area5 = new ModelNode("area5", model2, 3);

    this.mCurrentNode = userAccount0;
}