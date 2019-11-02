import PNode,{createEmptyNode} from '../vo/PNode.js';
import {joinStyle} from '../util/StringUtil.js';

const ALIAS = 'p-button';

function createComponent(originalNode, data){
	let main = new PNode("BUTTON",{class:'p-button'},[]);
	var loading_position = 0;
	var text_position = 0;
	
	let icon = originalNode.getAttribute("icon");
	if(icon != null && typeof icon != 'undefined' && icon != ''){
		loading_position += 1;
		text_position += 1;
		let iconSpan = iconNode();
		iconSpan.props['class'] = 'p-font p-font-left ' + (icon?' ' + icon:'');
		main.children.push(iconSpan);
	}
	
	let type = originalNode.getAttribute("type");
	if(type != null && typeof type != 'undefined' && type != ''){
		main.props['class'] = main.props['class'] + " p-button-" + type;
	}
	
	let id = originalNode.getAttribute("id");
	if(id != null && typeof id != 'undefined' && id != ''){
		main.props['id'] = id;
	}
	
	let style = originalNode.getAttribute("style");
	if(style != null && typeof style != 'undefined' && style != ''){
		main.props['style'] = style;
	}
	
	let disabled = originalNode.getAttribute("disabled");
	if(disabled != null){
		main.props['disabled'] = '';
		main.props['style'] = joinStyle(main.props['style'],'opacity:0.8');
	}
	
	let loading_content = originalNode.getAttribute("loading-content");
	let unloading_content = originalNode.innerText;
	if(loading_content == null){
		loading_content = '';
	}
	main.record['loading-content'] = loading_content;
	main.record['unloading-content'] = unloading_content;
	
	let loading = originalNode.getAttribute("loading");
	if(loading != null && typeof loading != 'undefined' && loading != ''){
		main.record['loading-position'] = loading_position;
		text_position += 1;
		let loadingValue = data[loading];
		let loadingSpan = loadingNode();
		loadingSpan.props['p-show'] = loadingValue;
		if(loadingValue){
			originalNode.innerText = main.record['loading-content'];
			loadingSpan.props['style'] = 'display:inline-block';
			if(originalNode.getAttribute('disabled') == null){
				main.props['disabled'] = '';
				main.props['class'] = main.props['class'] + " p-button-loading";
			}
		}
		main.children.push(loadingSpan);
		
		let watcher = {};
		watcher[loading] = {
			value:loadingValue,
			change:function(node, value){
				loadingChange(node, value, main);
			}
		}
		main.watch.push(watcher);
	}
	
	let onclick = originalNode.getAttribute("onclick");
	if(onclick != null && typeof onclick != 'undefined' && onclick != ''){
		main.props['onclick'] = onclick;
	}
	
	let className = originalNode.getAttribute("class");
	if(className != null && typeof className != 'undefined' && className != ''){
		main.props['class'] = main.props['class'] + " " + className;
	}
	
	let text = new PNode('span',{}, originalNode.innerText);
	main.record['text-position'] = text_position;
	main.children.push(text);
	
	let icon_right = originalNode.getAttribute("icon-right");
	if(icon_right != null && typeof icon_right != 'undefined' && icon_right != ''){
		let iconRightSpan = iconNode();
		iconRightSpan.props['class'] = 'p-font p-font-right' + (icon_right?' ' + icon_right:'');
		main.children.push(iconRightSpan);
	}
	
	return main;
}

function loadingNode(){
	let loadingNode = new PNode("SPAN",{class:'p-font icon-loading p-font-left'},"");
	return loadingNode;
}

function iconNode(){
	let iconNode = new PNode('span',{},'');
	return iconNode;
}

function loadingChange(node, value, btn){
	let nodeClass = node.getAttribute('class').trim();
	if(value){
		node.setAttribute('disabled','');
		node.setAttribute('class', nodeClass.concat(' p-button-loading'));
		node.childNodes[btn.record['loading-position']].style.display = 'inline-block';
		node.childNodes[btn.record['text-position']].innerText = btn.record['loading-content'];
	}else{
		node.removeAttribute('disabled');
		node.setAttribute('class', nodeClass.replace('p-button-loading',''));
		node.childNodes[btn.record['loading-position']].style.display = 'none';
		node.childNodes[btn.record['text-position']].innerText = btn.record['unloading-content'];
	}
}

var component = {
	alias:ALIAS,
	getComponent:function(node, data){
		return createComponent(node, data);
	}
}

export default component;