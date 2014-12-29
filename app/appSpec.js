
beforeEach(module("calendarDemoApp"));

describe('myCalendar', function() {
	
	var scope,
		element,
		compiled,
		html,
		mp4Src,
		oggSrc,
		videoPlayer,
		transcludedText,
		ctrl;

	
	beforeEach(inject(function($rootScope, $compile) {

		transcludedText = 'transclude me!';

		html = "";
		html += '<body ng-controller="AppCtrl">';
		html += "</body>";

		scope = $rootScope.$new();
		compiled = $compile(html)
		element = compiled(scope);
		scope.$digest();

	}));
	it('should expose a controller for the calendar', function(){
		ctrl = element.data('$AppCtrl');
		console.log(ctrl);
		
	});
});