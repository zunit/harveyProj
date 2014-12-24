define (["yasmf"], function(_y)){
	var _className = "User";
	var User = function(){

	/**
	 * MODEL ATTRIBUTES
	 * ID: unique identifier?
	 * Name: First/ Last name? 
	 * Email: email for account
	 * Password: password for account
	 * QuestionsID: ID that points to a collection of question
	 */

	self.subclass(_className);

	// these are the notificaiton that models can send
	self.registerNotification("uidChanged");
	self.registerNotification("nameChanged");
	self.registerNotification("emailChanged");
	// self.registerNotification("questionPosted");
	// self.registerNotification("questionAnswered");

	// this users unique id
	self._uid = undefined;
	
	self.getUID = function(){
		return self._uid;
	}
	self.setUID = function( UID ){
		self._uid = theUID;
		self.notify("uidChanged");
	}
	Object.defineProperty(self, "UID", {
		get: self.getUID,
		set: self.setUID,
		configurable: true;
	});

	//user's name property 
	self._name = "";
	self.getName = function(){
		return self._name;
	};
	self.setName = function (name){
		self._name = name;
		self.notify("nameChanged");
	};
	Object.defineProperty( self, "name", {
		get: self.getName, 
		set: self.setName,
		configurable: true
	});

	// Users Email
	self.setEmail = function(email){
		self._email = email;
		notify("emailChanged");
	}
	self.getEmail = function(){
		return self._email;
	}

	// property that returns ID of list of question 
	self._questionCollection = undefined;
	// TODO: this is an int ID, refer to questionClecction Class!
	// do we need date?


	
	}
}