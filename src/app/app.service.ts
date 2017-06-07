import { Injectable } from '@angular/core';

@Injectable()
export class AppService{

    private globals;

    constructor (){
        this.globals = {
            application_title: 'Ozone',
            copyright: 'All right reserved.',
            version: '2.0'
        };
    }

    getGlobals(){
        return this.globals;
    }
}