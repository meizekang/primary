import PNode,{createEmptyNode} from '../vo/PNode.js';
import {joinStyle} from '../util/StringUtil.js';

const ALIAS = 'p-menu';

function createComponent(originalNode, data){
	let main = new PNode("DIV",{class:'p-menu'},[]);
	
	let menu_click = originalNode.getAttribute("menu-click");
	
	let menu_data = data[originalNode.getAttribute("menu-data")];
	if(menu_data instanceof Array){
		menu_data.forEach(function(m){
			if(m['sub_menu'] instanceof Array){
				main.children.push(getMultipleMenu(m, menu_click))
			}else{
				main.children.push(getSingleMenu(m, menu_click))
			}
		});
	}
	
	return main;
}

function getSingleMenu(m, m_click){
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
	
	single_m.getNodeDocument().onclick = function(){
		if(typeof m_click !== 'undefined'){
			let f = window[m_click];
			if(f instanceof Function){
				f.apply(f, [m.name]);
			}else{
				console.warn("menu can not find method " + m_click)
			}
		}
	}
	
	return single_m;
}

const NOT_EXPAND = "display: none;";
function getMultipleMenu(m, m_click){
	let menu_node = new PNode('DIV',{class:'p-menu-submenu'},[]);
	let menu_title = new PNode('DIV',{},[]);
	
	let m_icon = m.icon;
	if(typeof m_icon !== 'undefined'){
		let className = 'p-font p-font-left ' + m_icon;
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
			let single_sub_menu = new PNode('SPAN',{class:"p-menu-submenu"},s.title);
			single_sub_menu.getNodeDocument().onclick = function(){
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
		})
	}
	menu_node.children.push(sub_menu);
	
	return menu_node;
}

var component = {
	alias:ALIAS,
	getComponent:function(node, data){
		return createComponent(node, data);
	}
}

export default component;