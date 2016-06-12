export default class ArgumentParser {
    args:Array<String> = [];
    
    constructor(args:Array<String>) {
        this.args = args;
    }
    
    getArg(index) {
        return this.args[index];
    }
}