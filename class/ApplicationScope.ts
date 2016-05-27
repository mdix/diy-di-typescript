export default class ApplicationScope {
    args:Array<any> = [];

    setArgs(args:Array<any>) {
        this.args = args;
    }
    getArgs() {
        return this.args;
    }
}