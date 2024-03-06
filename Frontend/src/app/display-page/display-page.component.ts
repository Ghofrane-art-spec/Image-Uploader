import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.css']
})
export class DisplayPageComponent implements OnInit {

  imageURL!:String;

  ngOnInit(): void {
    this.imageURL = history.state.imageUrl;
    console.log(this.imageURL);
  }
constructor(){
}
  copy(){
    if (navigator.clipboard) {
      navigator.clipboard.writeText(this.imageURL.valueOf())
          .then(() => {
            const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
            const appendAlert = (message: string, type: string) => {
            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
            `<br><div class="alert alert-${type} alert-dismissible" role="alert" id="alert" style="margin-left: 60px;margin-right: -60px;">`,
            `   <div >Text copied to clipboard successfully</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
            ].join('')
        
            if(alertPlaceholder){
            alertPlaceholder.append(wrapper)
            }
          }
        
      const alertTrigger = document.getElementById('liveAlertBtn')
      if (alertTrigger) {
        alertTrigger.addEventListener('click', () => {
          appendAlert('Nice, you triggered this alert message!', 'success')
        })
      }})
        .catch(err => {
            console.error('Unable to copy text: ', err);
          });
    } else {
      console.error('Clipboard API not supported');
    }
  }

  

}
