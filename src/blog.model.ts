export interface PostDto {
    id: string;
    title: string;
    content: string;
    name: string;
    createdDt: Date;
    updatedDt?: Date; // 수정 일시는 필수가 아님
}