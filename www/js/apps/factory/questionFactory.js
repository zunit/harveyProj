define (["yasmf", "app/models/textQuestion"], function(_y, TextQuestion){
	var questionFactory = {};

	questionFactory.TEXTQUESTION = "TEXTQUESTION";
    questionFactory.AUDIOQUESTION = "AUDIOQUESTION";
    questionFactory.VIDEOQUESTION = "VIDEOQUESTION";
    questionFactory.IMAGEQUESTION = "IMAGEQUESTION";

    questionFactory.createQuestion = function ( questionType ){
    	switch ( questionType.toUpperCase().trim()){
    		case questionFactory.TEXTQUESTION:
    			return new textQuestion();
    	default:
    		throw new Error( "Question Factory doesn't understand a " + questionType );
    	}
    }
});