import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { PostModel } from './posts.model';

class CreatePostDto {
    @ApiProperty({ description: '帖子标题' })
    title: string
    @ApiProperty({ description: '帖子内容' })
    content: string
}

@Controller('posts')
@ApiTags('贴子')
export class PostsController {
    @Get()
    @ApiOperation({ summary: '获取帖子列表' })
    async index() {
        return await PostModel.find()
    }

    @Post()
    @ApiOperation({ summary: '创建帖子' })
    creat(@Body() body: CreatePostDto, @Query() query, @Param() params) {
        console.log(body, query,
            params);

        return body
    }

    @Get(':id')
    @ApiOperation({ summary: '帖子详情' })
    detail(@Param('id') id:string) {
        return {
          success:true
        }
    }

    @Put(':id')
    @ApiOperation({ summary: '更新帖子' })
    update(@Param('id') id: string, @Body() body: CreatePostDto) {
        return body
    }

    @Delete(':id')
    @ApiOperation({ summary: '删除帖子' })
    remove(@Param('id') id: string) {
        return {
            success: true
        }
    }

}
