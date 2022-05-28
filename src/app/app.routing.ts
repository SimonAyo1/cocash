import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { CoTokenDashComponent } from "./co-token-dash/co-token-dash.component";
import { CashTokenDashComponent } from "./cash-token-dash/cash-token-dash.component";
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "cash-dashboard", component: CashTokenDashComponent },
  { path: "co-dashboard", component: CoTokenDashComponent },
  
  { path: "", redirectTo: "home", pathMatch: "full" },
  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
