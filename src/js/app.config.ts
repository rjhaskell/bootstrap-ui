namespace Lesson06 {
    Configuration.$inject = [
        '$locationProvider',
        '$urlRouterProvider'
    ];
    
    export function Configuration(
        $locationProvider: ng.ILocationProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider
    ) {
        
        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
    }
}