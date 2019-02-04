interface Object {
  getType(): Reflection.Type
}

namespace Reflection {
  if (typeof module === 'undefined') {
    Object.prototype.getType = function () {
      return new Type(this)
    }
  }
}

