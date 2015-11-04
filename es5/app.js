var UserComponent = ng.Component({
  selector: 'user-name'
})
.View({
  template: '<h1>My name is {{ name }}</h1>'
})
.Class({
  constructor: function(){
    this.name="Tom Greco";
  }
});
