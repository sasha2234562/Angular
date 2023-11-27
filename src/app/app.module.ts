import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
  ],
  exports: [
  ],
  imports: [HttpClientModule],
  providers: []
})
export class AppModule{}
