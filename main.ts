/// <reference path="./interfaces.d.ts" />
import ApplicationScope from './class/ApplicationScope';
import Injector from './class/Injector';

let applicationScope:ApplicationScope = new ApplicationScope(['someFileName.extension']);
let mainHelper:IHelper = Injector.injectMainHelper(applicationScope);
mainHelper.run();