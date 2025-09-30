import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule, MatIcon],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
 
}
