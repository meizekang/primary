import repaint from './repaint.js'

export default class Primary{
	constructor(every) {
	    this.id = every.id;
		this.data = every.data;
		let watcher = [];
		let gloabData = {};
		var doc = document.getElementById(this.id);
		
		watcher = repaint(doc, this.data, watcher);
		
		for(let key in this.data){
			if(key != 'p_node'){
				gloabData[key] = this.data[key];
				Object.defineProperty(this.data, key, {
					get:function(){
						return gloabData[key];
					},
					set:function(value){
						gloabData[key] = value;
						dataChange(watcher, key, value);
					},
					enumerable : true,
					configurable : true
				})
			}
		}
	}
}

function dataChange(watcher, key, value){
	watcher.forEach(function(w){
		if(typeof w[key] !== 'undefined' && typeof w[key].value !== 'undefined' && w[key].value != value){
			w[key].value = value;
			w[key].change(w.p_node, value, w.p);
		}
	})
}