import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from "@nestjs/common";
import { Types } from "mongoose";

@Injectable()
export class ObjectIdValidator implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(`the object id value is ---> ${value}`);
    console.log(`metadata is ===> ${JSON.stringify(metadata)}`);

    console.log(`VALIDATION STARTS...`);

    if (!Types.ObjectId.isValid(value)) {
      throw new HttpException(
        "Pass valid mongodb objectId",
        HttpStatus.BAD_REQUEST
      );
    }

    console.log(`VALIDATION ENDS...`);

    return value;
  }
}
