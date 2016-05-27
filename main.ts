import ApplicationScope from './class/ApplicationScope';
import Injector from './class/Injector';

let applicationScope:ApplicationScope = new ApplicationScope();
applicationScope.setArgs(['someFileName.extension']);
let mainHelper = Injector.injectMainHelper(applicationScope);
mainHelper.run();