// Type definitions for Google Google Cloud Speech API v1
// Project: https://cloud.google.com/speech/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.speech {
    
    interface SpeechContext {
        // *Optional* A list of strings containing words and phrases "hints" so that
        // the speech recognition is more likely to recognize them. This can be used
        // to improve the accuracy for specific words and phrases, for example, if
        // specific commands are typically spoken by the user. This can also be used
        // to add additional words to the vocabulary of the recognizer. See
        // [usage limits](https://cloud.google.com/speech/limits#content).
        phrases?: string[],        
    }
    
    interface SpeechRecognitionAlternative {
        // *Output-only* The confidence estimate between 0.0 and 1.0. A higher number
        // indicates an estimated greater likelihood that the recognized words are
        // correct. This field is typically provided only for the top hypothesis, and
        // only for `is_final=true` results. Clients should not rely on the
        // `confidence` field as it is not guaranteed to be accurate or consistent.
        // The default of 0.0 is a sentinel value indicating `confidence` was not set.
        confidence?: number,
        // *Output-only* Transcript text representing the words that the user spoke.
        transcript?: string,
    }
    
    interface ListOperationsResponse {
        // A list of operations that matches the specified filter in the request.
        operations?: Operation[],        
        // The standard List next-page token.
        nextPageToken?: string,
    }
    
    interface SpeechRecognitionResult {
        // *Output-only* May contain one or more recognition hypotheses (up to the
        // maximum specified in `max_alternatives`).
        // These alternatives are ordered in terms of accuracy, with the first/top
        // alternative being the most probable, as ranked by the recognizer.
        alternatives?: SpeechRecognitionAlternative[],        
    }
    
    interface RecognitionAudio {
        // The audio data bytes encoded as specified in
        // `RecognitionConfig`. Note: as with all bytes fields, protobuffers use a
        // pure binary representation, whereas JSON representations use base64.
        content?: string,
        // URI that points to a file that contains audio data bytes as specified in
        // `RecognitionConfig`. Currently, only Google Cloud Storage URIs are
        // supported, which must be specified in the following format:
        // `gs://bucket_name/object_name` (other URI formats return
        // google.rpc.Code.INVALID_ARGUMENT). For more information, see
        // [Request URIs](https://cloud.google.com/storage/docs/reference-uris).
        uri?: string,
    }
    
    interface LongRunningRecognizeRequest {
        // *Required* The audio data to be recognized.
        audio?: RecognitionAudio,
        // *Required* Provides information to the recognizer that specifies how to
        // process the request.
        config?: RecognitionConfig,
    }
    
    interface RecognizeResponse {
        // *Output-only* Sequential list of transcription results corresponding to
        // sequential portions of audio.
        results?: SpeechRecognitionResult[],        
    }
    
    interface CancelOperationRequest {
    }
    
    interface Operation {
        // The normal response of the operation in case of success.  If the original
        // method returns no data on success, such as `Delete`, the response is
        // `google.protobuf.Empty`.  If the original method is standard
        // `Get`/`Create`/`Update`, the response should be the resource.  For other
        // methods, the response should have the type `XxxResponse`, where `Xxx`
        // is the original method name.  For example, if the original method name
        // is `TakeSnapshot()`, the inferred response type is
        // `TakeSnapshotResponse`.
        response?: any,
        // The server-assigned name, which is only unique within the same service that
        // originally returns it. If you use the default HTTP mapping, the
        // `name` should have the format of `operations/some/unique/name`.
        name?: string,
        // The error result of the operation in case of failure or cancellation.
        error?: Status,
        // Service-specific metadata associated with the operation.  It typically
        // contains progress information and common metadata such as create time.
        // Some services might not provide such metadata.  Any method that returns a
        // long-running operation should document the metadata type, if any.
        metadata?: any,
        // If the value is `false`, it means the operation is still in progress.
        // If true, the operation is completed, and either `error` or `response` is
        // available.
        done?: boolean,
    }
    
    interface RecognitionConfig {
        // *Required* Sample rate in Hertz of the audio data sent in all
        // `RecognitionAudio` messages. Valid values are: 8000-48000.
        // 16000 is optimal. For best results, set the sampling rate of the audio
        // source to 16000 Hz. If that's not possible, use the native sample rate of
        // the audio source (instead of re-sampling).
        sampleRateHertz?: number,
        // *Optional* Maximum number of recognition hypotheses to be returned.
        // Specifically, the maximum number of `SpeechRecognitionAlternative` messages
        // within each `SpeechRecognitionResult`.
        // The server may return fewer than `max_alternatives`.
        // Valid values are `0`-`30`. A value of `0` or `1` will return a maximum of
        // one. If omitted, will return a maximum of one.
        maxAlternatives?: number,
        // *Required* The language of the supplied audio as a
        // [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag.
        // Example: "en-US".
        // See [Language Support](https://cloud.google.com/speech/docs/languages)
        // for a list of the currently supported language codes.
        languageCode?: string,
        // *Optional* A means to provide context to assist the speech recognition.
        speechContexts?: SpeechContext[],        
        // *Required* Encoding of audio data sent in all `RecognitionAudio` messages.
        encoding?: string,
        // *Optional* If set to `true`, the server will attempt to filter out
        // profanities, replacing all but the initial character in each filtered word
        // with asterisks, e.g. "f***". If set to `false` or omitted, profanities
        // won't be filtered out.
        profanityFilter?: boolean,
    }
    
    interface Status {
        // The status code, which should be an enum value of google.rpc.Code.
        code?: number,
        // A developer-facing error message, which should be in English. Any
        // user-facing error message should be localized and sent in the
        // google.rpc.Status.details field, or localized by the client.
        message?: string,
        // A list of messages that carry the error details.  There will be a
        // common set of message types for APIs to use.
        details?: any[],        
    }
    
    interface Empty {
    }
    
    interface RecognizeRequest {
        // *Required* The audio data to be recognized.
        audio?: RecognitionAudio,
        // *Required* Provides information to the recognizer that specifies how to
        // process the request.
        config?: RecognitionConfig,
    }
    
    interface OperationsResource {
        // Starts asynchronous cancellation on a long-running operation.  The server
        // makes a best effort to cancel the operation, but success is not
        // guaranteed.  If the server doesn't support this method, it returns
        // `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
        // Operations.GetOperation or
        // other methods to check whether the cancellation succeeded or whether the
        // operation completed despite cancellation. On successful cancellation,
        // the operation is not deleted; instead, it becomes an operation with
        // an Operation.error value with a google.rpc.Status.code of 1,
        // corresponding to `Code.CANCELLED`.
        cancel (request: {        
            // The name of the operation resource to be cancelled.
            name: string,
        }) : gapi.client.Request<Empty>;        
        
        // Deletes a long-running operation. This method indicates that the client is
        // no longer interested in the operation result. It does not cancel the
        // operation. If the server doesn't support this method, it returns
        // `google.rpc.Code.UNIMPLEMENTED`.
        delete (request: {        
            // The name of the operation resource to be deleted.
            name: string,
        }) : gapi.client.Request<Empty>;        
        
        // Gets the latest state of a long-running operation.  Clients can use this
        // method to poll the operation result at intervals as recommended by the API
        // service.
        get (request: {        
            // The name of the operation resource.
            name: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists operations that match the specified filter in the request. If the
        // server doesn't support this method, it returns `UNIMPLEMENTED`.
        // 
        // NOTE: the `name` binding allows API services to override the binding
        // to use different resource name schemes, such as `users/*/operations`. To
        // override the binding, API services can add a binding such as
        // `"/v1/{name=users/*}/operations"` to their service configuration.
        // For backwards compatibility, the default name includes the operations
        // collection id, however overriding users must ensure the name binding
        // is the parent resource, without the operations collection id.
        list (request: {        
            // The standard list page token.
            pageToken?: string,
            // The name of the operation's parent resource.
            name?: string,
            // The standard list page size.
            pageSize?: number,
            // The standard list filter.
            filter?: string,
        }) : gapi.client.Request<ListOperationsResponse>;        
        
    }
    
    
    interface SpeechResource {
        // Performs asynchronous speech recognition: receive results via the
        // google.longrunning.Operations interface. Returns either an
        // `Operation.error` or an `Operation.response` which contains
        // a `LongRunningRecognizeResponse` message.
        longrunningrecognize (request: {        
        }) : gapi.client.Request<Operation>;        
        
        // Performs synchronous speech recognition: receive results after all audio
        // has been sent and processed.
        recognize (request: {        
        }) : gapi.client.Request<RecognizeResponse>;        
        
    }
    
}

declare module gapi.client.speech {
    var operations: gapi.client.speech.OperationsResource; 
    
    var speech: gapi.client.speech.SpeechResource; 
    
}
