/// <reference path="../interfaces.d.ts" />
export default class MainHelper implements IHelper {
    constructor(private filename:String, private foo) {}
    run():void {
        this.foo.log(this.filename);
    }
}