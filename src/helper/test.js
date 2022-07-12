var module = (function () {
    var moduleRoot = {}, 
        _privateVar = 1;
    function _method() {
        return _privateVar;
    }
    moduleRoot.publicVar = 2;
    moduleRoot.publicMethod = () => {
        return moduleRoot.publicVar;
    }
    return moduleRoot;
}());

// export default module;

console.log(module.publicMethod() + 1);