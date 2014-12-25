define(["yasmf"], function (_y) {
	/**
	 * Model for question
	 */

	var _className = "textQuestion";
	var TextQuestion = function(){
		var self = new _y.BaseObject();
		self.subclass(_className);

		/**
		 * register notification
		 */
		self.registerNotification("qidChanged");
		self.registerNotification("dateChanged");
		self.registerNotification("questionContentsChanged");
		self.registerNotification("yesCountChanged");
		self.registerNotification("noCountChagned");

		/**
		 * Questions Unique id 
		 */ 
		self._qid = undefined;
		self.getQID = function(){
			return self._qid
		};
		self.setQID = function( theQID ){
			self._qid = theQID;
			self.notify("qidChanged");
		};
		Object.defineProperty(self, "QID"), {
			get: self.getQID,
			set: self.setQID,
			configurable: true
		};
		Object.defineProperty(self, "qid"), {
			get: self.getQID,
			set: self.setQID,
			configurable: true
		};

		/**
		 * the date the question was created
		 */
		self._createDate = undefined;
		self.getCreatedDate = function() {
      		return self._createdDate;
    	};
    	Object.defineProperty( self, "createdDate", {
      		get: self.getCreatedDate,
      		configurable: true
    	});
    	// set date changed.

    	/**
    	 * the Question content
    	 */
    	self._questionContent = undefined;
    	self.setQuestionContent = function( theQuestion ){
    		if (theQuestion.length() <= 170){
    			self._questionContent = theQuestion;
    			notify("questionContentsChanged");
    		} else {
    			error("Error: Question Length too short");
    			console.log("Error: Question Length too short");
    			alert("Error: Question Length too short");
    		}
    		
    	};
    	self.getQuestionContent = function(){
    		return self._questionContent;
    	};

    	/**
    	 * yesCount
    	 */
    	self._yesCount = [];
    	self.addYesCount = function(uid){
    		self._yesCount.push(uid);
    		notify("yesCountChanged");
    	};
    	self.getYesCount = function(){
    		return self._yesCount.length();
    	};
    	self.removeYesCount = function(uid){
    		var i = self._noCount.indexOf(uid);
    		if(i != -1) {
				self._noCount.splice(i, 1);
				notify("yesCountChanged");
			}
    	};
    	// how to defineProperty for array?

    	/**
    	 * noCount
    	 */
    	self._noCount = []
    	self.addNoCount = function(uid){
    		self._yesCount.push(uid);
    		notify("yesCountChanged");
    	};
    	self.getNoCount = function(){
    		return self._noCount.length();
    	};
    	self.removeNoCount = function(uid){
    		var i = self._noCount.indexOf(uid);
    		if(i != -1) {
				self._yesCount.splice(i, 1);
				notify("yesCountChanged");
			}
    	};
    	// how to defineProperty for array?

    	 /**
    	 * All notes have a representation icon (a page of text, a sound wave, etc)
     	*/
	    self._representation = "page-text-new";
	    self.getRepresentation = function() {
	      return self._representation;
	    };
	    Object.defineProperty( self, "representation", {
	      get: self.getRepresentation,
	      configurable: true
	    } );

	    /**
	     * Serializes the object into a JSON string ready
	     * for saving in storage.
	     */
	    self._serialize = function() {
	      return JSON.stringify({
	        "qid": self.qid,
	        "createdDate": self.createdDate,
	        "questionContents": self.questionContents,
	        "yesCount": self.yesCount,
	        "noCount": self.noCount,
	        "representation": self.representation
	      });
	    };
	    Object.defineProperty( self, "JSON", {
	      get: self._serialize,
	      configurable: true
    	});

	    /**
    	 * Deserializes the JSON String passed in, and returns true if
   	 	 * successful, or false if there was an error.
    	 */
    	self._deserialize = function( theSerializedObject ) {
      		try {
        		var aQuestion = JSON.parse( theSerializedObject );
        		// once we have the JSON parsed, assign our values.
        		self.qid = aQuestion.uid;
        		self._createdDate = new Date( aNote.createdDate );
        		self.questionContents = aQuestion.questionContents;
       			self.yesCount = aQuestion.yesCount;
       			self.noCount = aQuestion.noCount;
        		return true;
      		} catch ( e ) {
        		return false;
      		}
    	};

    	/**
	     * Initializes the note with the specified JSON; akin to initWithOptions.
	     */
	    self.initWithJSON = function( theJSON ) {
	      	self.init();
	      	if ( typeof theJSON !== "undefined" ) {
	        	return self._deserialize( theJSON );
	      	} else {
	        	return false; // no JSON to init with.
	      	}
	    };

	}
});