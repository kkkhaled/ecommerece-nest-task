import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class UpdateCategoryCommand {
    @IsString()
    @IsNotEmpty()
    public readonly id: string;

    @IsString()
    @MaxLength(32)
    @IsNotEmpty()
    public readonly title: string

    constructor(
        id:string,
        title:string
    ) {
        this.id = id;
        this.title = title;
    }
}