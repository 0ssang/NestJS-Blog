import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { BlogFileRepository, BlogMongoRepository } from './blog.repository';
import { Blog, BlogSchema } from './blog.schema';

@Module({
    imports: [
        // MongoDB 연결 설정
        MongooseModule.forRoot(
            'mongodb+srv://detective:ysh31228*@cluster0.4huxy.mongodb.net/blog',
        ),
        // 몽고디비 스키마 설정
        MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }]),
    ],
    controllers: [BlogController],
    providers: [BlogService, BlogFileRepository, BlogMongoRepository],
})
export class AppModule {}

