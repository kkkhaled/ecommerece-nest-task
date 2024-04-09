import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateCategoryCommand {
    @IsString()
    @MaxLength(32)
    @IsNotEmpty()
    public readonly title: string

    constructor(
        title:string
    ) {
        this.title = title;
    }
}