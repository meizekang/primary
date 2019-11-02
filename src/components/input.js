import PNode,{createEmptyNode} from '../vo/PNode.js';

const ALIAS = 'p-input';

function createComponent(originalNode, data){
	let main = new PNode("DIV",{class:'p-input-position'},[]);
	let input = c_input(originalNode, data);
	
	let pre_icon = preIcon(originalNode);
	if(typeof pre_icon != 'undefined'){
		main.children.push(pre_icon);
		input.props['class'] = (typeof input.props['class'] == "undefined")?"p-input-pre-icon":(input.props['class'] + " p-input-pre-icon");
	}
	
	let post_icon = postIcon(originalNode);
	if(typeof post_icon != 'undefined'){
		main.children.push(post_icon);
		input.props['class'] = (typeof input.props['class'] == "undefined")?"p-input-post-icon":(input.props['class'] + " p-input-post-icon");
	}
	
	main.children.unshift(input);
	main.watch = main.watch.concat(input.watch);
	
	bindInput(originalNode, data, input);
	
	return main;
}

function c_input(originalNode, data){
	let input = new PNode("INPUT",{class:'p-input'},"");
	
	let placeholder = originalNode.getAttribute('placeholder');
	if(typeof placeholder === "string"){
		input.props['placeholder'] = placeholder;
	}
	
	let id = originalNode.getAttribute("id");
	if(id != null && typeof id != 'undefined' && id != ''){
		input.props['id'] = id;
	}
	
	let inputValue = originalNode.getAttribute('value');
	if(typeof inputValue === "string"){
		let inputValueBind = data[inputValue];
		if(typeof inputValueBind === 'undefined'){
			input.props['value'] = inputValue;
		}else{
			input.props['value'] = inputValueBind;
			let watcher = {};
			watcher[inputValue] = {
				value:inputValueBind,
				change:function(node, value){
					inputValueChange(node, value)
				}
			}
			input.watch.push(watcher);
		}
	}
	
	let type = originalNode.getAttribute('type');
	if(typeof type === 'string'){
		input.props['type'] = type;
	}else{
		input.props['type'] = 'text';
	}
	
	let disabled = originalNode.getAttribute("disabled");
	if(disabled != null){
		input.props['disabled'] = '';
	}
	
	let readonly = originalNode.getAttribute("readonly");
	if(readonly != null){
		input.props['readonly'] = '';
	}
	
	return input;
}

function inputValueChange(node, value){
	node.childNodes[0].value = value;
}

function preIcon(originalNode){
	let preIcon = undefined;
	if(typeof originalNode.getAttribute('pre-icon') === "string"){
		let className = "pre-icon p-font " + originalNode.getAttribute('pre-icon');
		preIcon = new PNode("SPAN",{class:className},"");
		
		let pre_click = originalNode.getAttribute('pre-click');
		let disabled = originalNode.getAttribute("disabled");
		if(disabled != null){
			preIcon.props['disabled'] = '';
		}else{
			if(typeof pre_click === "string"){
				preIcon.props['onclick'] = pre_click;
			}
		}
	}
	
	return preIcon;
}

function postIcon(originalNode){
	let postIcon = undefined;
	if(typeof originalNode.getAttribute('post-icon') === "string"){
		let className = "post-icon p-font " + originalNode.getAttribute('post-icon');
		postIcon = new PNode("SPAN",{class:className},"");
		
		let post_click = originalNode.getAttribute('post-click');
		let disabled = originalNode.getAttribute("disabled");
		if(disabled != null){
			postIcon.props['disabled'] = '';
		}else{
			if(typeof post_click === "string"){
				postIcon.props['onclick'] = post_click;
			}
		}
	}
	return postIcon;
}

function bindInput(originalNode, data, input){
	let inputValue = originalNode.getAttribute('value');
	if(typeof inputValue === "string"){
		let inputValueBind = data[inputValue];
		if(typeof inputValueBind !== 'undefined'){
			input.getNodeDocument().oninput = function(){
				data[inputValue] = this.value;
			}
		}
	}
}

var component = {
	alias:ALIAS,
	getComponent:function(node, data){
		return createComponent(node, data);
	}
}

export default component;