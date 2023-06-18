import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AgentDataService } from '@base/services/agent-data-service.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  readonly FROM_DATA = 'login-form-data'

  form = new FormGroup({
    'token': new FormControl('', Validators.required)
  });

  constructor(
    private agentDataService: AgentDataService,
  ) {}

  ngOnInit(): void {
    const localStorageToken = localStorage.getItem(this.FROM_DATA);
    console.log("localStorageToken: " + localStorageToken);
    if(localStorageToken?.length) {
      this.form.setValue(JSON.parse(localStorageToken));
      this.onSubmit();
    }
  }

  onSubmit() {
    if(!this.form.valid) {
      return;
    }
    const token = this.form.get('token')?.value;
    if(!token) {
      return;
    }
    console.log("token: " + token);
    this.agentDataService.setAgentToken(token);
    localStorage.setItem(this.FROM_DATA, JSON.stringify(this.form.value));
  }
}
