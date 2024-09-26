import { PostDto } from './blog.model';
import { BlogFileRepository, BlogRepository } from './blog.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogService {
    // 생성자를 통한 의존성 주입
    // 인터페이스는 의존성 주입이 되지 않으므로 구현한 클래스를 사용한다
    constructor(private blogRepository: BlogFileRepository){}

    async getAllPosts() {
        return await this.blogRepository.getAllPost();
    }

    createPost(postDto: PostDto) {
        this.blogRepository.createPost(postDto);
    }

    async getPost(id): Promise<PostDto> {
        return await this.blogRepository.getPost(id);
    }

    delete(id) {
        this.blogRepository.deletePost(id);
    }

    updatePost(id, postDto: PostDto) {
        this.blogRepository.updatePost(id, postDto);
    }
}
