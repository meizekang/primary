import PNode,{createEmptyNode} from '../vo/PNode.js';
import {joinStyle} from '../util/StringUtil.js';

const ALIAS = 'p-menu';

function createComponent(originalNode, data){
	let main = new PNode("DIV",{class:'p-menu'},[]);
	
	let menu_click = originalNode.getAttribute("menu-click");
	
	let menu_choiced = originalNode.getAttribute("menu-choiced");
	
	let menu_nodes = {};
	
	let menu_data = data[originalNode.getAttribute("menu-data")];
	if(menu_data instanceof Array){
		menu_data.forEach(function(m){
			if(m['sub_menu'] instanceof Array){
				main.children.push(getMultipleMenu(m, menu_click, menu_choiced, menu_nodes));
			}else{
				main.children.push(getSingleMenu(m, menu_click, menu_choiced, menu_nodes));
			}
		});
	}
	
	return main;
}

function getSingleMenu(m, m_click, m_choiced, menu_nodes){
	let single_m = new PNode('DIV',{class:'p-menu-submenu'},[]);
	
	let m_icon = m.icon;
	if(typeof m_icon !== 'undefined'){
		let className = 'p-font p-font-left p-menu-left-icon ' + m_icon;
		single_m.children.push(new PNode('SPAN',{class:className},""))
	}
	
	let m_title = m.title;
	if(typeof m_title !== 'undefined'){
		single_m.children.push(new PNode('SPAN', {}, m_title));
	}else{
		single_m.children.push(new PNode('SPAN', {}, ""));
	}
	
	if(typeof m_choiced !== 'undefined' && m_choiced == m.name){
		single_m.props['class'] = single_m.props['class'] + " p-menu-select";
		menu_nodes['p_record_choied_menu'] = {name:m.name, node:single_m.getNodeDocument()};
	}
	
	single_m.getNodeDocument().onclick = function(){
		choiceMenu(menu_nodes, m.name)
		if(typeof m_click !== 'undefined'){
			let f = window[m_click];
			if(f instanceof Function){
				f.apply(f, [m.name]);
			}else{
				console.warn("menu can not find method " + m_click)
			}
		}
	}
	
	menu_nodes[m.name] = single_m.getNodeDocument();
	
	return single_m;
}

const NOT_EXPAND = "display: none;";
function getMultipleMenu(m, m_click, m_choiced, menu_nodes){
	let menu_node = new PNode('DIV',{},[]);
	let menu_title = new PNode('DIV',{class:'p-menu-submenu'},[]);
	
	let m_icon = m.icon;
	if(typeof m_icon !== 'undefined'){
		let className = 'p-font p-font-left p-menu-left-icon ' + m_icon;
		menu_title.children.push(new PNode('SPAN',{class:className},""))
	}
	let m_title = m.title;
	if(typeof m_title === 'undefined'){
		m_title = '';
	}
	let expand = false;
	let m_expand = m.expand;
	if(typeof m_expand === 'boolean'){
		expand = m_expand;
	}
	menu_title.children.push(new PNode('SPAN',{},m_title));
	if(expand){
		menu_title.children.push(new PNode('SPAN',{class:'p-font icon-down-arrow2 p-menu-right-icon p-menu-right-icon-rotate'},''));
	}else{
		menu_title.children.push(new PNode('SPAN',{class:'p-font icon-down-arrow2 p-menu-right-icon'},''));
	}
	
	menu_title.getNodeDocument().onclick = function(){
		let obj = this;
		let childrens = obj.parentNode.childNodes;
		if(typeof childrens !== 'undefined'){
			childrens.forEach(function(c){
				if(c.nodeName.toLowerCase() == 'div' && c !== obj){
					if(c.getAttribute("style") === NOT_EXPAND){
						c.setAttribute('style','');
						obj.childNodes[2].classList.add("p-menu-right-icon-rotate")
					}else{
						c.setAttribute('style',NOT_EXPAND);
						obj.childNodes[2].classList.remove("p-menu-right-icon-rotate")
					}
				}
			})
		}
	}
	
	menu_node.children.push(menu_title);
	
	let sub_menu_data = m.sub_menu;
	let sub_menu = new PNode('DIV',{style:'display: none;'},[]);
	if(expand){
		sub_menu.props.style = 'display: inline-block;'
	}
	if(sub_menu_data instanceof Array){
		sub_menu_data.forEach(function(s){
			let single_sub_menu = new PNode('SPAN',{class:"p-menu-submenu p-menu-pading-left"},s.title);
			if(typeof m_choiced !== 'undefined' && m_choiced == s.name){
				single_sub_menu.props['class'] = single_sub_menu.props['class'] + " p-menu-select";
				menu_nodes['p_record_choied_menu'] = {name:s.name, node:single_sub_menu.getNodeDocument()};
			}
			single_sub_menu.getNodeDocument().onclick = function(){
				choiceMenu(menu_nodes, s.name);
				if(typeof m_click !== 'undefined'){
					let f = window[m_click];
					if(f instanceof Function){
						f.apply(f, [s.name]);
					}else{
						console.warn("menu can not find method " + m_click)
					}
				}
			}
			sub_menu.children.push(single_sub_menu);
			
			menu_nodes[s.name] = single_sub_menu.getNodeDocument();
		})
	}
	menu_node.children.push(sub_menu);
	
	return menu_node;
}

function choiceMenu(menu_nodes, name){
	let choiced_menu = menu_nodes['p_record_choied_menu'];
	if(choiced_menu.name !== name){
		choiced_menu.node.classList.remove('p-menu-select');
		menu_nodes[name].classList.add('p-menu-select');
		menu_nodes['p_record_choied_menu'] = {name:name, node:menu_nodes[name]};
	}
}

var component = {
	alias:ALIAS,
	getComponent:function(node, data){
		return createComponent(node, data);
	}
}

export default component;