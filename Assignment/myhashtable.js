function MyHashTable(obj)
{
	var length=0;
	var items={};

	for(var pair in obj)
	{
		if(this.hasElement(pair))
		{
			this.items[pair]=obj[pair];
			this.length++;
		}
	}

	//It is method to check whether element is available in object or not.
	this.hashElement = function(pair)
	{
		return this.hasOwnProperty(pair);
	}
	//To insert or update the key , value in hash table;
	this.setElement = function(key,value)
	{
		var previous = undefined;
		if(this.hasElement(key))
		{
		previous=this.items[key];
		}else
		{
		this.length++;
		}
		this.items[key]=value;
		return previous;
	}
	//To access the key value from the hash table 
	this.getElement = function(key){
		if(this.hasElement(key))
		{
			return this.itmes[key];
		}
		return undefined;
	}

	this.removeElement = function(key){
	var previous = undefined;
	if(this.hasElement(key))
	{
		previous = items[key];
		this.length--;
		delete this.items[key];
		return previous;
	}
	return previous;
	}
	
	this.clearHashTable = function(){
	this.items={};
		
	}

}
