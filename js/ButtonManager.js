/**
* Created by Declan Finnerty on 20/04/2014.
*/

/**
* ButtonManager manages all the buttons
* @constructor
* @param {ModelNode} pCurrentModelNode
*/
function ButtonManager(pCurrentModelNode) {
    this.modelButtonList = [];
    this.CreateModelBtn = null;
    this.mCurrentModelNode = pCurrentModelNode;
}


/**
* setupForTesting
*/
ButtonManager.prototype.setupForTesting = function () {
    var thisButtouManager = this;

    // Setup a 'Cerate Model' button
    this.CreateModelBtn = new Button("Create Model", function () { thisButtouManager.createNewModel(); });
}

/**
* createNewModel
*/
ButtonManager.prototype.createNewModel = function () {
    var nemeOfNewModel = prompt("Enter the name of your new model");

    if (nemeOfNewModel != null) {
        if (this.mCurrentModelNode.getDepth() == 1) {        //checking if this is a node associated with a user

            this.mCurrentModelNode.addChild(new ModelNode(nemeOfNewModel, this.mCurrentModelNode, 2));              // Add a new model
            this.modelButtonList.push(new Button(nemeOfNewModel, function () { }));                                 // Add a btn for the new model
        }

    }
}
