webDevApp.directive("removeMe", function() {
      return {
            link:function(scope,element,attrs)
            {
                element.bind("click",function() {
                    element.remove();
                });
            }
      }

});