import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  create(createProjectDto: CreateProjectDto) {
    return this.prisma.project.create({
      data: createProjectDto,
    });
  }

  findAll() {
    return this.prisma.project.findMany({
      include: {
        user: true, // Inclui os detalhes do usuário no retorno
      },
    });
  }

  findOne(id: number) {
    return this.prisma.project.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return this.prisma.project.update({
      where: { id },
      data: updateProjectDto,
    });
  }

  remove(id: number) {
    return this.prisma.project.delete({
      where: { id },
    });
  }
}
