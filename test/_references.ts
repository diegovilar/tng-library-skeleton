/// <reference path="../typings/karma-jasmine/karma-jasmine"/>
/// <reference path="../typings/angularjs/angular" />
/// <reference path="../typings/angularjs/angular-mocks" />
/// <reference path="../typings/tng/tng" />
/// <reference path="../typings/{YOUR_LIBRARY_DEFINITION_FILE_HERE}" />

// Some NodeJS declarations used
declare var __filename: string;
declare var __dirname: string;
declare module 'fs' {    
    export function readFileSync(filename: string, encoding: string): string;    
}