import MainHelper from './MainHelper';
import ApplicationScope from './ApplicationScope';
import Foo from './Foo';
import Bar from './Bar';

export default class Injector {
    public static injectMainHelper(applicationScope: ApplicationScope):MainHelper {
        return new MainHelper(this.getFilename(applicationScope), this.injectFoo());
    }
    public static injectBar():Bar {
        return new Bar();
    }
    public static injectFoo():Foo {
        return new Foo(this.injectBar());
    }
    public static getFilename(applicationScope: ApplicationScope):String {
        return applicationScope.getArgs()[0];
    }
}