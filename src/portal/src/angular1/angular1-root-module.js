(function () {

  angular.module('angular1', [
    'angular1.export-service'
  ]);

  angular.module('angular1.export-service', []);

  angular.module('angular1.export-service').factory('Angular1ExportService', Angular1ExportService);

  Angular1ExportService.$inject = [];

  function Angular1ExportService() {
    function outPutString() {
      return 'I from Angular1 export service string';
    }
    return {
      outPutAngular1String: outPutString,
    };
  }
})();
