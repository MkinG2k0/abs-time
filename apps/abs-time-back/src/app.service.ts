import { Injectable } from '@nestjs/common'

import { PrismaService } from './prisma.service'

@Injectable()
export class AppService {
	constructor(private prisma: PrismaService) {}

	getAllUser() {
		return this.prisma.user.findMany()
	}
}
