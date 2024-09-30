import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// 블로그이면서 도큐먼틘 타입 정의
export type BlogDocument = Blog & Document;

@Schema()
export class Blog {
    @Prop()
    id: string;

    @Prop()
    title: string;

    @Prop()
    content: string;

    @Prop()
    name: string;

    @Prop()
    createdDt: Date;

    @Prop()
    updatdeDt: Date;
}

// 스키마를 생성함 내부적으로는 mongoose의 new Schema를 사용한다.
export const BlogSchema = SchemaFactory.createForClass(Blog);
