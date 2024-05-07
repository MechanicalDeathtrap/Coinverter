import { ChangeDetectionStrategy, Component, inject } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
