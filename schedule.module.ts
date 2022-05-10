import { NgModule } from '@angular/core';
import { ScheduleComponent } from './schedule.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { InviteComponent } from './invite/invite.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WacomModule } from 'wacom';

@NgModule({
	imports: [
		FormsModule,
		CommonModule,
		WacomModule
	],
	declarations: [
		ScheduleComponent,
		AppointmentComponent,
		InviteComponent
	],
	exports: [
		ScheduleComponent
	],
	providers: []

})

export class ScheduleModule { }
