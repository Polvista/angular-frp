/// <reference path="../types/angular/angular.d.ts" />

import {Stream} from "./stream";

let module = angular.module('angular-frp', []);
module.service('Stream', Stream);