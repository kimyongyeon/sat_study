import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'hello-world',
    template: '<h1>Hello {{name}}! </h1>'
})
class HelloworldComponent {
    constructor() {
        this.name = 'Angular';
    }
}

@NgModule({
    imports: [BrowserModule],
    declarations: [HelloworldComponent],
    bootstrap: [HelloworldComponent]
})
export class AppModule {}

// 부트스트랩
platformBrowserDynamic().bootstrapModule(AppModule);