// Type definitions for Google Firebase Rules API v1
// Project: https://firebase.google.com/docs/storage/security
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.firebaserules {
    
    interface Release {
        // Time the release was created.
        // Output only.
        createTime?: string,
        // Time the release was updated.
        // Output only.
        updateTime?: string,
        // Name of the `Ruleset` referred to by this `Release`. The `Ruleset` must
        // exist the `Release` to be created.
        rulesetName?: string,
        // Resource name for the `Release`.
        // 
        // `Release` names may be structured `app1/prod/v2` or flat `app1_prod_v2`
        // which affords developers a great deal of flexibility in mapping the name
        // to the style that best fits their existing development practices. For
        // example, a name could refer to an environment, an app, a version, or some
        // combination of three.
        // 
        // In the table below, for the project name `projects/foo`, the following
        // relative release paths show how flat and structured names might be chosen
        // to match a desired development / deployment strategy.
        // 
        // Use Case     | Flat Name           | Structured Name
        // -------------|---------------------|----------------
        // Environments | releases/qa         | releases/qa
        // Apps         | releases/app1_qa    | releases/app1/qa
        // Versions     | releases/app1_v2_qa | releases/app1/v2/qa
        // 
        // The delimiter between the release name path elements can be almost anything
        // and it should work equally well with the release name list filter, but in
        // many ways the structured paths provide a clearer picture of the
        // relationship between `Release` instances.
        // 
        // Format: `projects/{project_id}/releases/{release_id}`
        name?: string,
    }
    
    interface TestRulesetResponse {
        // The set of test results given the test cases in the `TestSuite`.
        // The results will appear in the same order as the test cases appear in the
        // `TestSuite`.
        testResults?: TestResult[],        
        // Syntactic and semantic `Source` issues of varying severity. Issues of
        // `ERROR` severity will prevent tests from executing.
        issues?: Issue[],        
    }
    
    interface ListRulesetsResponse {
        // List of `Ruleset` instances.
        rulesets?: Ruleset[],        
        // The pagination token to retrieve the next page of results. If the value is
        // empty, no further results remain.
        nextPageToken?: string,
    }
    
    interface TestResult {
        // Position in the `Source` or `Ruleset` where the principle runtime error
        // occurs.
        // 
        // Evaluation of an expression may result in an error. Rules are deny by
        // default, so a `DENY` expectation when an error is generated is valid.
        // When there is a `DENY` with an error, the `SourcePosition` is returned.
        // 
        // E.g. `error_position { line: 19 column: 37 }`
        errorPosition?: SourcePosition,
        // The set of function calls made to service-defined methods.
        // 
        // Function calls are included in the order in which they are encountered
        // during evaluation, are provided for both mocked and unmocked functions,
        // and included on the response regardless of the test `state`.
        functionCalls?: FunctionCall[],        
        // Debug messages related to test execution issues encountered during
        // evaluation.
        // 
        // Debug messages may be related to too many or too few invocations of
        // function mocks or to runtime errors that occur during evaluation.
        // 
        // For example: ```Unable to read variable [name: "resource"]```
        debugMessages?: string[],        
        // State of the test.
        state?: string,
    }
    
    interface Arg {
        // Argument matches any value provided.
        anyValue?: Empty,
        // Argument exactly matches value provided.
        exactValue?: any,
    }
    
    interface TestSuite {
        // Collection of test cases associated with the `TestSuite`.
        testCases?: TestCase[],        
    }
    
    interface Empty {
    }
    
    interface FunctionMock {
        // The list of `Arg` values to match. The order in which the arguments are
        // provided is the order in which they must appear in the function
        // invocation.
        args?: Arg[],        
        // The name of the function.
        // 
        // The function name must match one provided by a service declaration.
        function?: string,
        // The mock result of the function call.
        result?: Result,
    }
    
    interface Source {
        // `File` set constituting the `Source` bundle.
        files?: File[],        
    }
    
    interface Result {
        // The result is undefined, meaning the result could not be computed.
        undefined?: Empty,
        // The result is an actual value. The type of the value must match that
        // of the type declared by the service.
        value?: any,
    }
    
    interface SourcePosition {
        // Line number of the source fragment. 1-based.
        line?: number,
        // First column on the source line associated with the source fragment.
        column?: number,
        // Name of the `File`.
        fileName?: string,
    }
    
    interface TestCase {
        // Optional function mocks for service-defined functions. If not set, any
        // service defined function is expected to return an error, which may or may
        // not influence the test outcome.
        functionMocks?: FunctionMock[],        
        // Optional resource value as it appears in persistent storage before the
        // request is fulfilled.
        // 
        // The resource type depends on the `request.path` value.
        resource?: any,
        // Test expectation.
        expectation?: string,
        // Request context.
        // 
        // The exact format of the request context is service-dependent. See the
        // appropriate service documentation for information about the supported
        // fields and types on the request. Minimally, all services support the
        // following fields and types:
        // 
        // Request field  | Type
        // ---------------|-----------------
        // auth.uid       | `string`
        // auth.token     | `map<string, string>`
        // headers        | `map<string, string>`
        // method         | `string`
        // params         | `map<string, string>`
        // path           | `string`
        // time           | `google.protobuf.Timestamp`
        // 
        // If the request value is not well-formed for the service, the request will
        // be rejected as an invalid argument.
        request?: any,
    }
    
    interface Issue {
        // Position of the issue in the `Source`.
        sourcePosition?: SourcePosition,
        // The severity of the issue.
        severity?: string,
        // Short error description.
        description?: string,
    }
    
    interface TestRulesetRequest {
        // Inline `TestSuite` to run.
        testSuite?: TestSuite,
        // Optional `Source` to be checked for correctness.
        // 
        // This field must not be set when the resource name refers to a `Ruleset`.
        source?: Source,
    }
    
    interface Ruleset {
        // `Source` for the `Ruleset`.
        source?: Source,
        // Time the `Ruleset` was created.
        // Output only.
        createTime?: string,
        // Name of the `Ruleset`. The ruleset_id is auto generated by the service.
        // Format: `projects/{project_id}/rulesets/{ruleset_id}`
        // Output only.
        name?: string,
    }
    
    interface File {
        // Fingerprint (e.g. github sha) associated with the `File`.
        fingerprint?: string,
        // File name.
        name?: string,
        // Textual Content.
        content?: string,
    }
    
    interface FunctionCall {
        // The arguments that were provided to the function.
        args?: any[],        
        // Name of the function invoked.
        function?: string,
    }
    
    interface ListReleasesResponse {
        // List of `Release` instances.
        releases?: Release[],        
        // The pagination token to retrieve the next page of results. If the value is
        // empty, no further results remain.
        nextPageToken?: string,
    }
    
    interface RulesetsResource {
        // Delete a `Ruleset` by resource name.
        // 
        // If the `Ruleset` is referenced by a `Release` the operation will fail.
        delete (request: {        
            // Resource name for the ruleset to delete.
            // 
            // Format: `projects/{project_id}/rulesets/{ruleset_id}`
            name: string,
        }) : gapi.client.Request<Empty>;        
        
        // List `Ruleset` metadata only and optionally filter the results by `Ruleset`
        // name.
        // 
        // The full `Source` contents of a `Ruleset` may be retrieved with
        // GetRuleset.
        list (request: {        
            // `Ruleset` filter. The list method supports filters with restrictions on
            // `Ruleset.name`.
            // 
            // Filters on `Ruleset.create_time` should use the `date` function which
            // parses strings that conform to the RFC 3339 date/time specifications.
            // 
            // Example: `create_time > date("2017-01-01") AND name=UUID-*`
            filter?: string,
            // Next page token for loading the next batch of `Ruleset` instances.
            pageToken?: string,
            // Resource name for the project.
            // 
            // Format: `projects/{project_id}`
            name: string,
            // Page size to load. Maximum of 100. Defaults to 10.
            // Note: `page_size` is just a hint and the service may choose to load less
            // than `page_size` due to the size of the output. To traverse all of the
            // releases, caller should iterate until the `page_token` is empty.
            pageSize?: number,
        }) : gapi.client.Request<ListRulesetsResponse>;        
        
        // Get a `Ruleset` by name including the full `Source` contents.
        get (request: {        
            // Resource name for the ruleset to get.
            // 
            // Format: `projects/{project_id}/rulesets/{ruleset_id}`
            name: string,
        }) : gapi.client.Request<Ruleset>;        
        
        // Create a `Ruleset` from `Source`.
        // 
        // The `Ruleset` is given a unique generated name which is returned to the
        // caller. `Source` containing syntactic or semantics errors will result in an
        // error response indicating the first error encountered. For a detailed view
        // of `Source` issues, use TestRuleset.
        create (request: {        
            // Resource name for Project which owns this `Ruleset`.
            // 
            // Format: `projects/{project_id}`
            name: string,
        }) : gapi.client.Request<Ruleset>;        
        
    }
    
    
    interface ReleasesResource {
        // Delete a `Release` by resource name.
        delete (request: {        
            // Resource name for the `Release` to delete.
            // 
            // Format: `projects/{project_id}/releases/{release_id}`
            name: string,
        }) : gapi.client.Request<Empty>;        
        
        // List the `Release` values for a project. This list may optionally be
        // filtered by `Release` name, `Ruleset` name, `TestSuite` name, or any
        // combination thereof.
        list (request: {        
            // Next page token for the next batch of `Release` instances.
            pageToken?: string,
            // Resource name for the project.
            // 
            // Format: `projects/{project_id}`
            name: string,
            // Page size to load. Maximum of 100. Defaults to 10.
            // Note: `page_size` is just a hint and the service may choose to load fewer
            // than `page_size` results due to the size of the output. To traverse all of
            // the releases, the caller should iterate until the `page_token` on the
            // response is empty.
            pageSize?: number,
            // `Release` filter. The list method supports filters with restrictions on the
            // `Release.name`, `Release.ruleset_name`, and `Release.test_suite_name`.
            // 
            // Example 1: A filter of 'name=prod*' might return `Release`s with names
            // within 'projects/foo' prefixed with 'prod':
            // 
            // Name                          | Ruleset Name
            // ------------------------------|-------------
            // projects/foo/releases/prod    | projects/foo/rulesets/uuid1234
            // projects/foo/releases/prod/v1 | projects/foo/rulesets/uuid1234
            // projects/foo/releases/prod/v2 | projects/foo/rulesets/uuid8888
            // 
            // Example 2: A filter of `name=prod* ruleset_name=uuid1234` would return only
            // `Release` instances for 'projects/foo' with names prefixed with 'prod'
            // referring to the same `Ruleset` name of 'uuid1234':
            // 
            // Name                          | Ruleset Name
            // ------------------------------|-------------
            // projects/foo/releases/prod    | projects/foo/rulesets/1234
            // projects/foo/releases/prod/v1 | projects/foo/rulesets/1234
            // 
            // In the examples, the filter parameters refer to the search filters are
            // relative to the project. Fully qualified prefixed may also be used. e.g.
            // `test_suite_name=projects/foo/testsuites/uuid1`
            filter?: string,
        }) : gapi.client.Request<ListReleasesResponse>;        
        
        // Get a `Release` by name.
        get (request: {        
            // Resource name of the `Release`.
            // 
            // Format: `projects/{project_id}/releases/{release_id}`
            name: string,
        }) : gapi.client.Request<Release>;        
        
        // Update a `Release`.
        // 
        // Only updates to the `ruleset_name` and `test_suite_name` fields will be
        // honored. `Release` rename is not supported. To create a `Release` use the
        // CreateRelease method.
        update (request: {        
            // Resource name for the `Release`.
            // 
            // `Release` names may be structured `app1/prod/v2` or flat `app1_prod_v2`
            // which affords developers a great deal of flexibility in mapping the name
            // to the style that best fits their existing development practices. For
            // example, a name could refer to an environment, an app, a version, or some
            // combination of three.
            // 
            // In the table below, for the project name `projects/foo`, the following
            // relative release paths show how flat and structured names might be chosen
            // to match a desired development / deployment strategy.
            // 
            // Use Case     | Flat Name           | Structured Name
            // -------------|---------------------|----------------
            // Environments | releases/qa         | releases/qa
            // Apps         | releases/app1_qa    | releases/app1/qa
            // Versions     | releases/app1_v2_qa | releases/app1/v2/qa
            // 
            // The delimiter between the release name path elements can be almost anything
            // and it should work equally well with the release name list filter, but in
            // many ways the structured paths provide a clearer picture of the
            // relationship between `Release` instances.
            // 
            // Format: `projects/{project_id}/releases/{release_id}`
            name: string,
        }) : gapi.client.Request<Release>;        
        
        // Create a `Release`.
        // 
        // Release names should reflect the developer's deployment practices. For
        // example, the release name may include the environment name, application
        // name, application version, or any other name meaningful to the developer.
        // Once a `Release` refers to a `Ruleset`, the rules can be enforced by
        // Firebase Rules-enabled services.
        // 
        // More than one `Release` may be 'live' concurrently. Consider the following
        // three `Release` names for `projects/foo` and the `Ruleset` to which they
        // refer.
        // 
        // Release Name                    | Ruleset Name
        // --------------------------------|-------------
        // projects/foo/releases/prod      | projects/foo/rulesets/uuid123
        // projects/foo/releases/prod/beta | projects/foo/rulesets/uuid123
        // projects/foo/releases/prod/v23  | projects/foo/rulesets/uuid456
        // 
        // The table reflects the `Ruleset` rollout in progress. The `prod` and
        // `prod/beta` releases refer to the same `Ruleset`. However, `prod/v23`
        // refers to a new `Ruleset`. The `Ruleset` reference for a `Release` may be
        // updated using the UpdateRelease method.
        create (request: {        
            // Resource name for the project which owns this `Release`.
            // 
            // Format: `projects/{project_id}`
            name: string,
        }) : gapi.client.Request<Release>;        
        
    }
    
    
    interface ProjectsResource {
        // Test `Source` for syntactic and semantic correctness. Issues present, if
        // any, will be returned to the caller with a description, severity, and
        // source location.
        // 
        // The test method may be executed with `Source` or a `Ruleset` name.
        // Passing `Source` is useful for unit testing new rules. Passing a `Ruleset`
        // name is useful for regression testing an existing rule.
        // 
        // The following is an example of `Source` that permits users to upload images
        // to a bucket bearing their user id and matching the correct metadata:
        // 
        // _*Example*_
        // 
        //     // Users are allowed to subscribe and unsubscribe to the blog.
        //     service firebase.storage {
        //       match /users/{userId}/images/{imageName} {
        //           allow write: if userId == request.auth.uid
        //               && (imageName.matches('*.png$')
        //               || imageName.matches('*.jpg$'))
        //               && resource.mimeType.matches('^image/')
        //       }
        //     }
        test (request: {        
            // Tests may either provide `source` or a `Ruleset` resource name.
            // 
            // For tests against `source`, the resource name must refer to the project:
            // Format: `projects/{project_id}`
            // 
            // For tests against a `Ruleset`, this must be the `Ruleset` resource name:
            // Format: `projects/{project_id}/rulesets/{ruleset_id}`
            name: string,
        }) : gapi.client.Request<TestRulesetResponse>;        
        
        rulesets: RulesetsResource,
        releases: ReleasesResource,
    }
    
}

declare module gapi.client.firebaserules {
    var projects: gapi.client.firebaserules.ProjectsResource; 
    
}
