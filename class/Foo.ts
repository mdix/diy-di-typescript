export default class Foo {
    constructor(private bar) {}
    log(filename:String) {
        this.bar.logViaBar(filename);
    }
}