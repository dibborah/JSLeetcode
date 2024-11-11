// args = [{}, null, "3"];
args = [5];

var argumentsLength = function(...args) {
    return args.length;
};

console.log(argumentsLength(1,2,3));