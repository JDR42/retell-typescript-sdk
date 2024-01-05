/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import * as components from "../components";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class CreatePhoneNumberRequestBody extends SpeakeasyBase {
  /**
   * Unique agent id to associate with this phone number. Can be updated with [Update Phone Agent](/api/update-phone-agent).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "agent_id" })
  agentId: string;

  /**
   * The desired area code of the number. Must be valid US area code, which is a 3 digit integer.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "area_code" })
  areaCode?: number;
}

export class CreatePhoneNumberResponse extends SpeakeasyBase {
  /**
   * HTTP response content type for this operation
   */
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Successfully created a new phone number.
   */
  @SpeakeasyMetadata()
  phoneNumber?: components.PhoneNumber;

  /**
   * HTTP response status code for this operation
   */
  @SpeakeasyMetadata()
  statusCode: number;

  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  @SpeakeasyMetadata()
  rawResponse: AxiosResponse;
}
