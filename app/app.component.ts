import {Component} from "@angular/core";

@Component({
	selector: 'quickstart2-app',
	templateUrl: './templates/quickstart2-app.php'
})

export class AppComponent {
	navCollapse = true;

	toggleCollapse() {
		this.navCollapse = !this.navCollapse;
	}
}