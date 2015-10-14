angular.module('ngClipboard', [])

    .factory('copy', function($compile) {
        return function(element, scope){

            var newDirective = angular.element('<span id="ngCopyId">'+element+'</span>');
            var test = $('body').append($compile(newDirective)(scope));
            var test2 = $('#ngCopyId');
            var range = document.createRange();
            range.selectNode(test2[0]);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            var successful = document.execCommand('copy');

            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
            window.getSelection().removeAllRanges();

            newDirective.remove();

        };
    })

    .directive('ngCopyable', function() {
        return {
            restrict: 'A',
            link:link
        };
        function link(scope, element, attrs) {
            element.bind('click',function(){

                var range = document.createRange();
                var other = element[0];
                var asd = $('#ngCopyId');
                range.selectNode(asd[0]);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
                var successful = document.execCommand('copy');

                var msg = successful ? 'successful' : 'unsuccessful';
                console.log('Copying text command was ' + msg);
                window.getSelection().removeAllRanges();
            });
        }

    });

