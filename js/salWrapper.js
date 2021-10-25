/*
* => wrapper for a scroll reveal library.
*/

const sal = require('./frameworks/sal.js/dist/sal.js');

class scrollAnimation {
	constructor(Nodes=null, Node=null, options=null, repeat=true){
		sal();
		this.repeat = repeat 
		this.Nodes = Nodes
		this.Node = Node
		this.options = options
		this.attribs = ["data-sal", "data-sal-delay", "data-sal-easing"]

		this.checkOptions = () => {
			this.options = this.options ? this.options : ["fade", "500", "ease"]
			if(this.repeat) {
				this.options.push("data-sal-repeat")
				this.attribs.push(null)

			}
		}
		this.checkOptions();
	}
	apply() {
		if(this.Nodes) {
			for(i in this.nodes) {
				for(let j=0; j < this.options;j++) {
					i.setAttribute(this.attribs[j], this.options[j]);	
					// adds all the attributes to the nodes.
				}
			}
		}
	}
}

const anim = new scrollAnimation(Nodes=[1, 2, 3], Nodes=null,null, repeat=true);

console.log(anim.Nodes);
console.log(anim.options);
console.log(anim.repeat);
console.log(anim.Node);
console.log(anim.attribs);
console.log(sal({}).init);

export {sal, scrollAnimation};