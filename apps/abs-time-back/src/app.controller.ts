import { Controller, Get } from '@nestjs/common'
import { User } from 'db'

import { AppService } from './app.service'
@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello() {
		return this.appService.getAllUser()
	}
}
