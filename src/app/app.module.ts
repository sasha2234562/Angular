import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [],
  exports: [],
  imports: [HttpClientModule,  ReactiveFormsModule],
  providers: []
})
export class AppModule{}
