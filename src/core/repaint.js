import Button from '../components/button.js'
import Input from '../components/input.js'

const components = [
	Button,
	Input
]

function Repaint(doc, data, watcher){
	if(doc){
		let childrenNodes = doc.childNodes;
		for(let i = 0; i < childrenNodes.length; i++){
			let node = doc.childNodes[i];
			let component = getComponent(node, data);
			if(typeof component !== 'undefined'){
				let pnode = component.getNodeDocument();
				component.watch.forEach(function(p){
					p.p_node = pnode;
				})
				watcher = watcher.concat(component.watch);
				doc.replaceChild(pnode, doc.childNodes[i]);
			}else{
				watcher = Repaint(node, data, watcher);
			}
		}
	}
	return watcher;
}

function getComponent(node, data){
	let component = undefined;
	components.forEach(function(c){
		if(node.nodeName.toLowerCase() == c.alias){
			component = c.getComponent(node, data);
		}
	})
	return component;
}

export default Repaint;