import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-select-service-user",
  templateUrl: "./select-service-user.component.html",
  styleUrls: ["./select-service-user.component.scss"]
})
export class SelectServiceUserComponent implements OnInit {
  client: number = 1;
  constructor() {}

  ngOnInit() {}

  setClient(number) {
    this.client = number;
  }
}
