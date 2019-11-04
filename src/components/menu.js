import PNode,{createEmptyNode} from '../vo/PNode.js';
import {joinStyle} from '../util/StringUtil.js';

const ALIAS = 'p-menu';

function createComponent(originalNode, data){
	let main = new PNode("DIV",{class:'p-menu'},[]);
	
	let menu_data = data[originalNode.getAttribute("menu-data")];
	if(menu_data instanceof Array){
		menu_data.forEach(function(m){
			if(m['sub_menu'] instanceof Array){
				
			}else{
				main.children.push(getSingleMenu(m))
			}
		});
	}
	
	return main;
}

function getSingleMenu(m){
	let single_m = new PNode('DIV',{class:'p-menu-submenu'},[]);
	
	let m_icon = m.icon;
	if(typeof m_icon !== 'undefined'){
		let className = 'p-font p-font-left ' + m_icon;
		single_m.children.push(new PNode('SPAN',{class:className},""))
	}
	
	let m_title = m.title;
	if(typeof m_title !== 'undefined'){
		single_m.children.push(new PNode('SPAN', {}, m_title));
	}else{
		single_m.children.push(new PNode('SPAN', {}, ""));
	}
	
	return single_m;
}

var component = {
	alias:ALIAS,
	getComponent:function(node, data){
		return createComponent(node, data);
	}
}

export default component;