exports.Exception = function Exception (GameboyJS) {
  "use strict";

  // This exception should be thrown whenever a critical feature that
  // has not been implemented is requested
  function UnimplementedException(message, fatal) {
      this.message = message;
      this.name = UnimplementedException;
      if (fatal === undefined) {
          fatal = true;
      }
      this.fatal = fatal;
  }
  
  return UnimplementedException;
}
