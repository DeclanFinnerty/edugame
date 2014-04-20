/**
* Created by Declan Finnerty on 17/04/2014.
*/

/**
* A Button
* @constructor
*/
function Button(pName, pClickAction) {
    console.log("Call: Button() constructor");

    this.mName = pName;
    this.htmlButton = null;

    this.setup(function () { pClickAction(); });
}


/**
* setup
* @parama {Function} pClickAction 
*/
Button.prototype.setup = function (pClickAction) {

    this.htmlButton = document.createElement('button');
    document.body.appendChild(this.htmlButton);
    this.htmlButton.innerHTML = this.mName;                 //Set the text displayed on the button

    //Clicking
    var thisButton = this;                                  //You cannot use 'this.onClick' in the next line because it is ou of scope 
    this.htmlButton.addEventListener("click", function () { pClickAction(); });

    
};

