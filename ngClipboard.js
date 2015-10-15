angular.module('ngClipboard', [])

    .factory('ngClipboard', function($compile,$rootScope) {
        return {
            toClipboard: function(element){

            var newDirective = angular.element('<span id="ngClipboardCopyId">'+element+'</span>');
            var test = $('body').append($compile(newDirective)($rootScope));
            var test2 = $('#ngClipboardCopyId');
            var range = document.createRange();

            range.selectNode(test2[0]);

            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);

            var successful = document.execCommand('copy');

            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
            window.getSelection().removeAllRanges();

            newDirective.remove();
        }
    }
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
