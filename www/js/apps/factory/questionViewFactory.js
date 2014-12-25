define (["app/views/textQuestionEditView", "app/factory/questionFactory"], 
	function (TextQuestionEditView, textQuestion) {
		//error? 
		var questionViewFactory = {};

		questionViewFactory.createQuestionEditView = function ( questionType ){
			switch ( questionType.toUpperCase().trim() ){
				case questionFactory.TEXTQUESTION:
					return new TextQuestionEditView();
				default:
					throw new Error( "Question View Factory doesn't understand a " + questionType );
			}
		}
		return questionViewFactory;
	});