angular.module('ngClipboard', [])

    .factory('ngClipboard', function($compile,$rootScope) {
        return {
            toClipboard: function(element){

            var copyElement = angular.element('<span id="ngClipboardCopyId">'+element+'</span>');
            var compiled = $('body').append($compile(copyElement)($rootScope));
            var ngClipboardElement = $('#ngClipboardCopyId');
            var range = document.createRange();

            range.selectNode(ngClipboardElement[0]);

            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);

            var successful = document.execCommand('copy');

            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
            window.getSelection().removeAllRanges();

            copyElement.remove();
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
                range.selectNode(element[0]);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
                var successful = document.execCommand('copy');

                var msg = successful ? 'successful' : 'unsuccessful';
                console.log('Copying text command was ' + msg);
                window.getSelection().removeAllRanges();
            });
        }

    });
