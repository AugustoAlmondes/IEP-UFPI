import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
    Request,
    ParseIntPipe
} from '@nestjs/common';
import { BoletinsService } from './boletins.service';
import { CreateBoletimDto } from './dto/create-boletim.dto';
import { UpdateBoletimDto } from './dto/update-boletim.dto';
import { AuthGuard } from '../auth/auth.guard';
import { AdminGuard } from '../auth/admin.guard';

@Controller('boletins')
export class BoletinsController {
    constructor(private readonly boletinsService: BoletinsService) { }

    @UseGuards(AuthGuard, AdminGuard)
    @Post()
    create(@Body() createBoletimDto: CreateBoletimDto, @Request() req: any) {
        return this.boletinsService.create(createBoletimDto, Number(req.user.sub));
    }

    @Get()
    findAll() {
        return this.boletinsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.boletinsService.findOne(id);
    }

    @UseGuards(AuthGuard, AdminGuard)
    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateBoletimDto: UpdateBoletimDto
    ) {
        return this.boletinsService.update(id, updateBoletimDto);
    }

    @UseGuards(AuthGuard, AdminGuard)
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.boletinsService.remove(id);
    }
}
