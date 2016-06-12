export default class ApplicationScope {
    args:Array<String> = [];
    
    constructor(args) {
        this.args = args;
    }

    getArgs() {
        return this.args;
    }
}