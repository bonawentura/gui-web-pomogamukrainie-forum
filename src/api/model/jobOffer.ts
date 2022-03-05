/**
 * Documentation for ads portal
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { UserId } from './userId';
import { Location } from './location';

export interface JobOffer {
  id?: number;
  userId: UserId;
  title: string;
  description: string;
  mode?: JobOffer.ModeEnum;
  location?: Location;
  type?: Array<JobOffer.TypeEnum>;
  language?: Array<JobOffer.LanguageEnum>;
}
export namespace JobOffer {
  export type ModeEnum = 'REMOTE';
  export const ModeEnum = {
    Remote: 'REMOTE' as ModeEnum,
  };
  export type TypeEnum = 'TEMPORARY';
  export const TypeEnum = {
    Temporary: 'TEMPORARY' as TypeEnum,
  };
  export type LanguageEnum = 'UA' | 'PL';
  export const LanguageEnum = {
    Ua: 'UA' as LanguageEnum,
    Pl: 'PL' as LanguageEnum,
  };
}
