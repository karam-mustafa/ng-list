import {UsedUIComponents} from "./imports/UsedUIComponents";
import {NgModule} from "@angular/core";
import {InfoDisplaying} from "./components/dialog/info-displaying";

@NgModule({
  declarations:[
    InfoDisplaying
  ],
  imports: [
    UsedUIComponents,
  ],
})
export class SharedModule { }
