import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
export declare class ObjectIdValidator implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
