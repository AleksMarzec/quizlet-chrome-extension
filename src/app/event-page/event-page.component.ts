import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {

  constructor() {
    //this.initializeMessageListener();
    this.initializeRequestListener();
   }

  ngOnInit() {
  }

  private initializeRequestListener() {
    chrome.runtime.onMessage.addListener(function(request, sender) {
      alert(`Received ${request}`);
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
