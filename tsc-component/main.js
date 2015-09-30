var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var AppComponent = (function () {
    function AppComponent() {
        this.name = "Thomas Greco";
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'user-name'
        }),
        angular2_1.View({
            template: '<h1>My name is Thomas Greco</h1>'
        })
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
