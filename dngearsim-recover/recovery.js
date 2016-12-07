angular.module('dnsim').controller('recoveryCtrl',

['saveHelper',
function(saveHelper) {
  'use strict';
  
  var vm = this;
    
    this.setupBuilds = function() {
      vm.savedItems = saveHelper.getSavedItems();
      vm.buildNames = Object.keys(vm.savedItems).sort();
      vm.builds = [];
      for(var i=0;i<vm.buildNames.length;++i) {
        vm.builds.push({
          name: vm.buildNames[i],
          build: vm.savedItems[vm.buildNames[i]],
        });
      }
    }
    this.setupBuilds();
  
}])
.directive('dngearsimRecovery', function() {
  return {
    scope: {},
    controller: 'recoveryCtrl',
    controllerAs: 'ctrl',
    templateUrl: '/dngearsim-recover/recovery.html'
  };
});