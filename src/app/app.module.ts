import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { SquareComponent } from "./square/square.component"
import { BoardComponent } from "./board/board.component"

import { NbButtonModule, NbLayoutModule, NbThemeModule } from "@nebular/theme"
import { NbEvaIconsModule } from "@nebular/eva-icons"

@NgModule({
  declarations: [AppComponent, SquareComponent, BoardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: "cosmic" }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
