/**
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { UserDTO } from './userDTO';

export interface TeachClassDTO {
    classroom?: string;
    userDTOS?: Array<UserDTO>;
}

export class TeachClass implements TeachClassDTO{
  classroom?: string;
  userDTOS?: Array<UserDTO>;
  constructor(classroom: string) {
    this.classroom  = classroom;
  }
}
