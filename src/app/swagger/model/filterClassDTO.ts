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

export interface FilterClassDTO {
    pageNum?: number;
    pageSize?: number;
    id?: number;
    describes?: string;
    idCity?: number;
    idDistrict?: number;
    requestLevel?: string;
    requestSex?: string;
    idLevelSchool?: number;
    subject?: string;
    classRoom?: number;
}
export class FilterClass implements FilterClassDTO{


  pageNum?: number;
  pageSize?: number;
  id?: number;
  describes?: string;
  idCity?: number;
  idDistrict?: number;
  requestLevel?: string;
  requestSex?: string;
  idLevelSchool?: number;
  subject?: string;
  classRoom?: number;
  constructor(pageNum?: number,
              pageSize?: number,
              id?: number,
              describes?: string,
              idCity?: number,
              idDistrict?: number,
              requestLevel?: string,
              idLevelSchool?: number,
              subject?: string,
              classRoom?: number
  ){
    this.pageNum = pageNum;
    this.pageSize = pageSize;
    this.id = id;
    this.describes = describes;
    this.idCity = idCity;
    this.idDistrict = idDistrict;
    this.requestLevel = requestLevel;
    this.idLevelSchool = idLevelSchool;
    this.subject = subject;
    this.classRoom = classRoom
  }
}
