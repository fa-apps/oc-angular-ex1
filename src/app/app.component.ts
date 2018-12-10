import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  posts = [
    {
      title: "Mon premier post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fermentum id tortor vitae commodo. Morbi finibus lectus magna, non egestas nunc eleifend non. Vivamus eget massa mi. Phasellus tortor lorem, aliquam nec lorem id, tristique tristique mauris. Donec dignissim justo aliquam ex finibus dictum. Maecenas bibendum velit eu fermentum aliquet. Mauris et justo dolor. Donec id mattis nibh, sit amet mattis lorem. Integer aliquet eget tellus mattis semper. Duis velit augue, ornare sit amet neque sed, rutrum aliquet nulla.",
      loveIts: 0,
      created_at:  new Date()
    }, {
      title: "Mon deuxième post",
      content: "Aliquam tempus tristique augue sed commodo. Praesent ut interdum nulla, quis lobortis ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur libero orci, faucibus a urna at, hendrerit commodo neque. Donec commodo ipsum at ligula consectetur pretium. Integer consequat sagittis odio.",
      loveIts: 0,
      created_at:  new Date()
    }, {
      title: "Encore un Post",
      content: "In hac habitasse platea dictumst. Cras non ante iaculis, sagittis magna in, pellentesque odio. Nam nec leo dui. Sed convallis bibendum orci, ut varius turpis. Nam venenatis lacinia arcu luctus volutpat. Vivamus eu ligula maximus, finibus felis vel, iaculis ex. Maecenas eu vestibulum nulla, sit amet imperdiet massa.",
      loveIts: 0,
      created_at:  new Date()
    }
  ]





}
