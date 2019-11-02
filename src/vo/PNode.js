export default class PNode{
	constructor(tag,props,children) {
	    this.tag = tag;
		this.props = props;
		this.children = children;
		this.watch = [];
		this.record = {};
	}
	
	getNodeDocument(){
		if(typeof(this.node) == 'undefined'){
			this.node = document.createElement(this.tag);

			for(let pro in this.props){
				if(pro == 'p-show'){
					this.node.setAttribute('style', this.props[pro]?'':'display:none');
				}else{
					this.node.setAttribute(pro, this.props[pro]);
				}
			}

			if(typeof this.children === 'string' || typeof this.children === 'number'){
				this.node.innerHTML = this.children;
			}else if(this.children instanceof Array){
				if(this.children.length > 0){
					for(let i = 0; i < this.children.length; i++){
						if(this.children[i] instanceof PNode){
							this.node.appendChild(this.children[i].getNodeDocument());
						}
					}
				}
			}
		}
		
		return this.node;
	}
}

export function createEmptyNode(){
	return new PNode(undefined, {}, []);
}