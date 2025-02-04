import { Component, inject, OnInit, viewChild } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertPlaceholderComponent } from '../components';
import { Authentication } from '@liquescens/auth-angular';

@Component
({
  selector: 'app-profile-view',
  imports: [NgIf, ReactiveFormsModule, NgClass, AlertPlaceholderComponent],
  templateUrl: './profile-view.component.html',
  styleUrl: './profile-view.component.css'
})
export class ProfileViewComponent implements OnInit
{
  auth = inject(Authentication);
  route = inject(ActivatedRoute);
  state: 'load' | 'loaded' | 'save' = 'load';
  alerts = viewChild(AlertPlaceholderComponent)

  form = new FormGroup
  ({
    display_name: new FormControl('', Validators.required),
    description: new FormControl(''),
  });

  constructor()
  {
    this.auth.profile$.subscribe(data => 
    {
      if (data) this.form.setValue(data);
      if (data) this.form.enable(); else this.form.disable();
      this.state = 'loaded';
    });
  }

  async ngOnInit()
  {
    await this.auth.requestProfile();
  }

  async save()
  {
    this.state = 'save';
    this.form.disable();
    const data = this._getData();
    if (data)
    {
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.auth.updateProfile(data);
    }
    else
    {
      this.alerts()?.add('The entered data is not correct.');
      this.form.enable();
      this.state = 'loaded';
    }
  }
  
  _getData()
  {
    const display_name = this.form.value.display_name;
    if (!display_name) return;
    const description = this.form.value.description ?? '';
    return { display_name, description }
  }
}
