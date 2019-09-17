import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'background',
  templateUrl: './background.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  constructor() {
    //this.initializeMessageListener();
    this.initializeRequestListener();
   }

  ngOnInit() {
  }

  private initializeRequestListener() {
    chrome.runtime.onMessage.addListener(function(request, sender) {
      console.log(`Received ${request}`);
    });
  }

  private initializeMessageListener(): void {
    chrome.runtime.onConnect.addListener(this.onConnectHandler.bind(this));
  }

  private onConnectHandler(port: chrome.runtime.Port) {
    port.onMessage.addListener(this.onConnectMessageHandler.bind(this));
  }

  private onConnectMessageHandler(msg, port) {
    console.log('Received connection message: ' + msg);
    const response = 'Greetings!';
    port.postMessage(response);
  }
}
