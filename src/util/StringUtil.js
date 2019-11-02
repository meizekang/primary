function joinStyle(originStyle, addStyle){
	let result = "";
	if(typeof(originStyle) == 'string'){
		if(originStyle.substr(originStyle.length-1,1) == ';'){
			result = originStyle;
		}else{
			result = originStyle + ";";	
		}
	}
	
	if(typeof(addStyle) == 'string'){
		if(addStyle.substr(addStyle.length-1,1) == ';'){
			result = addStyle;
		}else{
			result = addStyle + ";";
		}
	}
	
	return result;
}

export {joinStyle};