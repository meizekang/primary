import Component from './component.js';
import PNode,{createEmptyNode} from '../vo/PNode.js';
import {joinStyle} from '../util/StringUtil.js';

var props = {
	value:['onclick', 'style', 'id'],
	method:function(p, oldNode, btn){
		if(oldNode.getAttribute(p)){
			btn.props[p] = oldNode.getAttribute(p);
		}
	}
}

var special_props = {
	value:['disabled'],
	method:function(p, oldNode, btn){
		if(oldNode.getAttribute(p) != null){
			btn.props[p] = oldNode.getAttribute(p);
			if(p == 'disabled'){
				if(oldNode.getAttribute('disabled') == null || oldNode.getAttribute('disabled') != 'false'){
					btn.props['style'] = joinStyle(btn.props['style'],'opacity:0.8');
				}
			}
		}
	}
}

var custom_props = {
	value:['type', 'loading', 'icon'],
	method:function(p, oldNode, btn, data){
		let span = new PNode('span',{'class':'p-font icon-loading'},'');
		let icon = new PNode('span',{},'');
		if(p == 'type'){
			btn.props['class'] = 'p-button' + (oldNode.getAttribute(p)?' p-button-'+oldNode.getAttribute(p):'');
		}
		if(p == 'loading'){
			btn.record['unloading-content'] = oldNode.innerText;
			btn.record['loading-content'] = oldNode.getAttribute('loading-content') == null?oldNode.innerText:oldNode.getAttribute('loading-content');
			
			if(oldNode.getAttribute(p) !== null){
				let isloading = data[oldNode.getAttribute(p)];
				span.props['p-show'] = isloading;
				if(isloading){
					oldNode.innerText = btn.record['loading-content'];
					if(oldNode.getAttribute('disabled') == null || oldNode.getAttribute('disabled') != 'false'){
						btn.props['disabled'] = '';
						btn.props['class'] = btn.props['class'] + " p-button-loading";
						span.props['style'] = 'display:inline-block';
					}
				}
				btn.watch[oldNode.getAttribute(p)] = {
					value:isloading,
					change:function(node, value){
						loadingChange(node, value, btn);
					}
				}
				btn.children.push(span);
			}
		}
		if(p == 'icon'){
			if(oldNode.getAttribute(p) !== null){
				icon.props['class'] = 'p-font' + (oldNode.getAttribute(p)?' ' + oldNode.getAttribute(p):'');
				btn.children.push(icon);
			}
		}
	}
}
const PROPS = [props, special_props, custom_props];
const ALIAS = 'p-button';
const TAG_NAME = 'BUTTON';
const CALLBACK = function(btn, oldNode){
	let text = new PNode('span',{}, oldNode.innerText);
	btn.children.push(text);
}

function loadingChange(node, value, btn){
	let nodeClass = node.getAttribute('class').trim();
	if(value){
		node.style.disabled = true;
		node.setAttribute('class', nodeClass.concat(' p-button-loading'));
		node.childNodes[0].style.display = 'inline-block';
		node.childNodes[node.childNodes.length - 1].innerText = btn.record['loading-content'];
	}else{
		node.removeAttribute('disabled');
		node.setAttribute('class', nodeClass.replace('p-button-loading',''));
		node.childNodes[0].style.display = 'none';
		node.childNodes[node.childNodes.length - 1].innerText = btn.record['unloading-content'];
	}
}

var button = new Component(TAG_NAME, PROPS, ALIAS, CALLBACK);

export default button;