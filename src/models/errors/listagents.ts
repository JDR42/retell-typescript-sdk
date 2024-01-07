/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Internal Server Error
 */
export type ListAgentsResponseResponseBodyData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    errorMessage?: string | undefined;
};

/**
 * Internal Server Error
 */
export class ListAgentsResponseResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    errorMessage?: string | undefined;

    /** The original data that was passed to this error instance. */
    data$: ListAgentsResponseResponseBodyData;

    constructor(err: ListAgentsResponseResponseBodyData, options?: ErrorOptions) {
        super("", options);
        this.data$ = err;

        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }
        if (err.errorMessage != null) {
            this.errorMessage = err.errorMessage;
        }

        const msg = "message" in err && typeof err.message === "string" ? err.message : "";
        const { rawResponse, ...data } = err;
        const content = JSON.stringify(data);
        this.message = [msg, content].filter(Boolean).join("\n");

        this.name = "ListAgentsResponseResponseBody";
    }
}

/**
 * Unauthorized
 */
export type ListAgentsResponseBodyData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    errorMessage?: string | undefined;
};

/**
 * Unauthorized
 */
export class ListAgentsResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    errorMessage?: string | undefined;

    /** The original data that was passed to this error instance. */
    data$: ListAgentsResponseBodyData;

    constructor(err: ListAgentsResponseBodyData, options?: ErrorOptions) {
        super("", options);
        this.data$ = err;

        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }
        if (err.errorMessage != null) {
            this.errorMessage = err.errorMessage;
        }

        const msg = "message" in err && typeof err.message === "string" ? err.message : "";
        const { rawResponse, ...data } = err;
        const content = JSON.stringify(data);
        this.message = [msg, content].filter(Boolean).join("\n");

        this.name = "ListAgentsResponseBody";
    }
}

/** @internal */
export namespace ListAgentsResponseResponseBody$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
        error_message?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ListAgentsResponseResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            error_message: z.string().optional(),
        })
        .transform((v) => {
            return new ListAgentsResponseResponseBody({
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
                ...(v.error_message === undefined ? null : { errorMessage: v.error_message }),
            });
        });
    export type Outbound = {
        RawResponse?: never | undefined;
        error_message?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListAgentsResponseResponseBody> =
        z
            .instanceof(ListAgentsResponseResponseBody)
            .transform((v) => v.data$)
            .pipe(
                z
                    .object({
                        rawResponse: z
                            .instanceof(Response)
                            .transform(() => {
                                throw new Error("Response cannot be serialized");
                            })
                            .optional(),
                        errorMessage: z.string().optional(),
                    })
                    .transform((v) => {
                        return {
                            ...(v.rawResponse === undefined
                                ? null
                                : { RawResponse: v.rawResponse }),
                            ...(v.errorMessage === undefined
                                ? null
                                : { error_message: v.errorMessage }),
                        };
                    })
            );
}

/** @internal */
export namespace ListAgentsResponseBody$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
        error_message?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ListAgentsResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            error_message: z.string().optional(),
        })
        .transform((v) => {
            return new ListAgentsResponseBody({
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
                ...(v.error_message === undefined ? null : { errorMessage: v.error_message }),
            });
        });
    export type Outbound = {
        RawResponse?: never | undefined;
        error_message?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListAgentsResponseBody> = z
        .instanceof(ListAgentsResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    rawResponse: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                    errorMessage: z.string().optional(),
                })
                .transform((v) => {
                    return {
                        ...(v.rawResponse === undefined ? null : { RawResponse: v.rawResponse }),
                        ...(v.errorMessage === undefined
                            ? null
                            : { error_message: v.errorMessage }),
                    };
                })
        );
}
