export function namedImport() {}

function helper(){
    
}

let niza = []  

function myFunction() {}
function Component() {}

export default { myFunction, Component };
export default Component;
export default { Component: ComponentName, Component: SecondName };









// All flavors of import and export are allowed only at toplevel in a module. There are no conditional imports or exports, and you can’t use import in function scope.

// All exported identifiers must be explicitly exported by name in the source code. You can’t programmatically loop through an array and export a bunch of names in a data-driven way.

// Module objects are frozen. There is no way to hack a new feature into a module object, polyfill style.

// All of a module’s dependencies must be loaded, parsed, and linked eagerly, before any module code runs. There’s no syntax for an import that can be loaded lazily, on demand.

// There is no error recovery for import errors. An app may have hundreds of modules in it, and if anything fails to load or link, nothing runs. You can’t import in a try/catch block. (The upside here is that because the system is so static, webpack can detect those errors for you at compile time.)
