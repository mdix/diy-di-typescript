export default class MainHelper {
    constructor(private filename:String, private foo) {}
    run():void {
        this.foo.log(this.filename);
    }
}