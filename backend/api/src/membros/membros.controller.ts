import {
    Controller,
    Get,
    Delete,
    Param,
    ParseIntPipe,
    UseGuards,
} from '@nestjs/common';
import { MembrosService } from './membros.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('membros')
export class MembrosController {
    constructor(private readonly membrosService: MembrosService) { }

    @Get()
    findAll() {
        return this.membrosService.findAll();
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.membrosService.remove(id);
    }
}
