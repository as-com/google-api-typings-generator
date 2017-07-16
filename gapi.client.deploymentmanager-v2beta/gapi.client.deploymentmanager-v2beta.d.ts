// Type definitions for Google Google Cloud Deployment Manager API V2Beta Methods v2beta
// Project: https://developers.google.com/deployment-manager/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.deploymentmanager {
    
    interface AuditConfig {
        // The configuration for logging of each type of permission.
        auditLogConfigs?: AuditLogConfig[],        
        // 
        exemptedMembers?: string[],        
        // Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
        service?: string,
    }
    
    interface AuditLogConfig {
        // Specifies the identities that do not cause logging for this type of permission. Follows the same format of [Binding.members][].
        exemptedMembers?: string[],        
        // The log type that this config enables.
        logType?: string,
    }
    
    interface BaseType {
        // Allows resource handling overrides for specific collections
        collectionOverrides?: CollectionOverride[],        
        // Credential used when interacting with this type.
        credential?: Credential,
        // Descriptor Url for the this type.
        descriptorUrl?: string,
        // Options to apply when handling any resources in this service.
        options?: Options,
    }
    
    interface BasicAuth {
        // 
        password?: string,
        // 
        user?: string,
    }
    
    interface Binding {
        // The condition that is associated with this binding. NOTE: an unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently. This field is GOOGLE_INTERNAL.
        condition?: Expr,
        // Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:
        // 
        // * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account.
        // 
        // * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account.
        // 
        // * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@gmail.com` or `joe@example.com`.
        // 
        // 
        // 
        // * `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`.
        // 
        // * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`.
        // 
        // 
        // 
        // * `domain:{domain}`: A Google Apps domain name that represents all the users of that domain. For example, `google.com` or `example.com`.
        members?: string[],        
        // Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
        role?: string,
    }
    
    interface CollectionOverride {
        // The collection that identifies this resource within its service.
        collection?: string,
        // The options to apply to this resource-level override
        options?: Options,
    }
    
    interface CompositeType {
        // An optional textual description of the resource; provided by the client when the resource is created.
        description?: string,
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // [Output Only] Timestamp when the composite type was created, in RFC3339 text format.
        insertTime?: string,
        // Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])? Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)?
        labels?: CompositeTypeLabelEntry[],        
        // Name of the composite type.
        name?: string,
        // [Output Only] The Operation that most recently ran, or is currently running, on this composite type.
        operation?: Operation,
        // [Output Only] Self link for the type provider.
        selfLink?: string,
        // 
        status?: string,
        // Files for the template type.
        templateContents?: TemplateContents,
    }
    
    interface CompositeTypeLabelEntry {
        // 
        key?: string,
        // 
        value?: string,
    }
    
    interface CompositeTypesListResponse {
        // [Output Only] A list of resource composite types supported by Deployment Manager.
        compositeTypes?: CompositeType[],        
        // A token used to continue a truncated list request.
        nextPageToken?: string,
    }
    
    interface Condition {
        // Trusted attributes supplied by the IAM system.
        iam?: string,
        // An operator to apply the subject with.
        op?: string,
        // Trusted attributes discharged by the service.
        svc?: string,
        // Trusted attributes supplied by any service that owns resources and uses the IAM system for access control.
        sys?: string,
        // DEPRECATED. Use 'values' instead.
        value?: string,
        // The objects of the condition. This is mutually exclusive with 'value'.
        values?: string[],        
    }
    
    interface ConfigFile {
        // The contents of the file.
        content?: string,
    }
    
    interface Credential {
        // Basic Auth Credentials for this Type.
        basicAuth?: BasicAuth,
    }
    
    interface Deployment {
        // An optional user-provided description of the deployment.
        description?: string,
        // Provides a fingerprint to use in requests to modify a deployment, such as update(), stop(), and cancelPreview() requests. A fingerprint is a randomly generated value that must be provided with update(), stop(), and cancelPreview() requests to perform optimistic locking. This ensures optimistic concurrency so that only one request happens at a time.
        // 
        // The fingerprint is initially generated by Deployment Manager and changes after every request to modify data. To get the latest fingerprint value, perform a get() request to a deployment.
        fingerprint?: string,
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // [Output Only] Timestamp when the deployment was created, in RFC3339 text format .
        insertTime?: string,
        // Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])? Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)?
        labels?: DeploymentLabelEntry[],        
        // [Output Only] URL of the manifest representing the last manifest that was successfully deployed.
        manifest?: string,
        // Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // [Output Only] The Operation that most recently ran, or is currently running, on this deployment.
        operation?: Operation,
        // [Output Only] Self link for the deployment.
        selfLink?: string,
        // [Input Only] The parameters that define your deployment, including the deployment configuration and relevant templates.
        target?: TargetConfiguration,
        // [Output Only] If Deployment Manager is currently updating or previewing an update to this deployment, the updated configuration appears here.
        update?: DeploymentUpdate,
    }
    
    interface DeploymentLabelEntry {
        // 
        key?: string,
        // 
        value?: string,
    }
    
    interface DeploymentUpdate {
        // [Output Only] An optional user-provided description of the deployment after the current update has been applied.
        description?: string,
        // [Output Only] Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])? Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)?
        labels?: DeploymentUpdateLabelEntry[],        
        // [Output Only] URL of the manifest representing the update configuration of this deployment.
        manifest?: string,
    }
    
    interface DeploymentUpdateLabelEntry {
        // 
        key?: string,
        // 
        value?: string,
    }
    
    interface DeploymentsCancelPreviewRequest {
        // Specifies a fingerprint for cancelPreview() requests. A fingerprint is a randomly generated value that must be provided in cancelPreview() requests to perform optimistic locking. This ensures optimistic concurrency so that the deployment does not have conflicting requests (e.g. if someone attempts to make a new update request while another user attempts to cancel a preview, this would prevent one of the requests).
        // 
        // The fingerprint is initially generated by Deployment Manager and changes after every request to modify a deployment. To get the latest fingerprint value, perform a get() request on the deployment.
        fingerprint?: string,
    }
    
    interface DeploymentsListResponse {
        // [Output Only] The deployments contained in this response.
        deployments?: Deployment[],        
        // [Output Only] A token used to continue a truncated list request.
        nextPageToken?: string,
    }
    
    interface DeploymentsStopRequest {
        // Specifies a fingerprint for stop() requests. A fingerprint is a randomly generated value that must be provided in stop() requests to perform optimistic locking. This ensures optimistic concurrency so that the deployment does not have conflicting requests (e.g. if someone attempts to make a new update request while another user attempts to stop an ongoing update request, this would prevent a collision).
        // 
        // The fingerprint is initially generated by Deployment Manager and changes after every request to modify a deployment. To get the latest fingerprint value, perform a get() request on the deployment.
        fingerprint?: string,
    }
    
    interface Expr {
        // An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
        description?: string,
        // Textual representation of an expression in Common Expression Language syntax.
        // 
        // The application context of the containing message determines which well-known feature set of CEL is supported.
        expression?: string,
        // An optional string indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
        location?: string,
        // An optional title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
        title?: string,
    }
    
    interface ImportFile {
        // The contents of the file.
        content?: string,
        // The name of the file.
        name?: string,
    }
    
    interface InputMapping {
        // The name of the field that is going to be injected.
        fieldName?: string,
        // The location where this mapping applies.
        location?: string,
        // Regex to evaluate on method to decide if input applies.
        methodMatch?: string,
        // A jsonPath expression to select an element.
        value?: string,
    }
    
    interface LogConfig {
        // Cloud audit options.
        cloudAudit?: LogConfigCloudAuditOptions,
        // Counter options.
        counter?: LogConfigCounterOptions,
    }
    
    interface LogConfigCloudAuditOptions {
        // The log_name to populate in the Cloud Audit Record.
        logName?: string,
    }
    
    interface LogConfigCounterOptions {
        // The field value to attribute.
        field?: string,
        // The metric to update.
        metric?: string,
    }
    
    interface Manifest {
        // [Output Only] The YAML configuration for this manifest.
        config?: ConfigFile,
        // [Output Only] The fully-expanded configuration file, including any templates and references.
        expandedConfig?: string,
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // [Output Only] The imported files for this manifest.
        imports?: ImportFile[],        
        // [Output Only] Timestamp when the manifest was created, in RFC3339 text format.
        insertTime?: string,
        // [Output Only] The YAML layout for this manifest.
        layout?: string,
        // [Output Only] The name of the manifest.
        name?: string,
        // [Output Only] Self link for the manifest.
        selfLink?: string,
    }
    
    interface ManifestsListResponse {
        // [Output Only] Manifests contained in this list response.
        manifests?: Manifest[],        
        // [Output Only] A token used to continue a truncated list request.
        nextPageToken?: string,
    }
    
    interface Operation {
        // [Output Only] Reserved for future use.
        clientOperationId?: string,
        // [Deprecated] This field is deprecated.
        creationTimestamp?: string,
        // [Output Only] A textual description of the operation, which is set when the operation is created.
        description?: string,
        // [Output Only] The time that this operation was completed. This value is in RFC3339 text format.
        endTime?: string,
        // [Output Only] If errors are generated during processing of the operation, this field will be populated.
        error?: {        
            // [Output Only] The array of errors encountered while processing this operation.
            errors?: {            
                // [Output Only] The error type identifier for this error.
                code?: string,
                // [Output Only] Indicates the field in the request that caused the error. This property is optional.
                location?: string,
                // [Output Only] An optional, human-readable error message.
                message?: string,
            }[],            
        },        
        // [Output Only] If the operation fails, this field contains the HTTP error message that was returned, such as NOT FOUND.
        httpErrorMessage?: string,
        // [Output Only] If the operation fails, this field contains the HTTP error status code that was returned. For example, a 404 means the resource was not found.
        httpErrorStatusCode?: number,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] The time that this operation was requested. This value is in RFC3339 text format.
        insertTime?: string,
        // [Output Only] Type of the resource. Always compute#operation for Operation resources.
        kind?: string,
        // [Output Only] Name of the resource.
        name?: string,
        // [Output Only] The type of operation, such as insert, update, or delete, and so on.
        operationType?: string,
        // [Output Only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess when the operation will be complete. This number should monotonically increase as the operation progresses.
        progress?: number,
        // [Output Only] The URL of the region where the operation resides. Only available when performing regional operations.
        region?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // [Output Only] The time that this operation was started by the server. This value is in RFC3339 text format.
        startTime?: string,
        // [Output Only] The status of the operation, which can be one of the following: PENDING, RUNNING, or DONE.
        status?: string,
        // [Output Only] An optional textual description of the current status of the operation.
        statusMessage?: string,
        // [Output Only] The unique target ID, which identifies a specific incarnation of the target resource.
        targetId?: string,
        // [Output Only] The URL of the resource that the operation modifies. For operations related to creating a snapshot, this points to the persistent disk that the snapshot was created from.
        targetLink?: string,
        // [Output Only] User who requested the operation, for example: user@example.com.
        user?: string,
        // [Output Only] If warning messages are generated during processing of the operation, this field will be populated.
        warnings?: {        
            // [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
            code?: string,
            // [Output Only] Metadata about this warning in key: value format. For example:
            // "data": [ { "key": "scope", "value": "zones/us-east1-d" }
            data?: {            
                // [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
                key?: string,
                // [Output Only] A warning data value corresponding to the key.
                value?: string,
            }[],            
            // [Output Only] A human-readable description of the warning code.
            message?: string,
        }[],        
        // [Output Only] The URL of the zone where the operation resides. Only available when performing per-zone operations.
        zone?: string,
    }
    
    interface OperationsListResponse {
        // [Output Only] A token used to continue a truncated list request.
        nextPageToken?: string,
        // [Output Only] Operations contained in this list response.
        operations?: Operation[],        
    }
    
    interface Options {
        // The mappings that apply for requests.
        inputMappings?: InputMapping[],        
        // Options for how to validate and process properties on a resource.
        validationOptions?: ValidationOptions,
        // Additional properties block described as a jsonSchema, these properties will never be part of the json payload, but they can be consumed by InputMappings, this must be a valid json schema draft-04. The properties specified here will be decouple in a different section. This schema will be merged to the schema validation, and properties here will be extracted From the payload and consumed explicitly by InputMappings. ex: field1: type: string field2: type: number
        virtualProperties?: string,
    }
    
    interface Policy {
        // Specifies cloud audit logging configuration for this policy.
        auditConfigs?: AuditConfig[],        
        // Associates a list of `members` to a `role`. `bindings` with no members will result in an error.
        bindings?: Binding[],        
        // `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.
        // 
        // If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten blindly.
        etag?: string,
        // 
        iamOwned?: boolean,
        // If more than one rule is specified, the rules are applied in the following manner: - All matching LOG rules are always applied. - If any DENY/DENY_WITH_LOG rule matches, permission is denied. Logging will be applied if one or more matching rule requires logging. - Otherwise, if any ALLOW/ALLOW_WITH_LOG rule matches, permission is granted. Logging will be applied if one or more matching rule requires logging. - Otherwise, if no rule applies, permission is denied.
        rules?: Rule[],        
        // Version of the `Policy`. The default version is 0.
        version?: number,
    }
    
    interface Resource {
        // The Access Control Policy set on this resource.
        accessControl?: ResourceAccessControl,
        // [Output Only] The evaluated properties of the resource with references expanded. Returned as serialized YAML.
        finalProperties?: string,
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // [Output Only] Timestamp when the resource was created or acquired, in RFC3339 text format .
        insertTime?: string,
        // [Output Only] URL of the manifest representing the current configuration of this resource.
        manifest?: string,
        // [Output Only] The name of the resource as it appears in the YAML config.
        name?: string,
        // [Output Only] The current properties of the resource before any references have been filled in. Returned as serialized YAML.
        properties?: string,
        // [Output Only] The type of the resource, for example compute.v1.instance, or cloudfunctions.v1beta1.function.
        type?: string,
        // [Output Only] If Deployment Manager is currently updating or previewing an update to this resource, the updated configuration appears here.
        update?: ResourceUpdate,
        // [Output Only] Timestamp when the resource was updated, in RFC3339 text format .
        updateTime?: string,
        // [Output Only] The URL of the actual resource.
        url?: string,
        // [Output Only] If warning messages are generated during processing of this resource, this field will be populated.
        warnings?: {        
            // [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
            code?: string,
            // [Output Only] Metadata about this warning in key: value format. For example:
            // "data": [ { "key": "scope", "value": "zones/us-east1-d" }
            data?: {            
                // [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
                key?: string,
                // [Output Only] A warning data value corresponding to the key.
                value?: string,
            }[],            
            // [Output Only] A human-readable description of the warning code.
            message?: string,
        }[],        
    }
    
    interface ResourceAccessControl {
        // The GCP IAM Policy to set on the resource.
        gcpIamPolicy?: string,
    }
    
    interface ResourceUpdate {
        // The Access Control Policy to set on this resource after updating the resource itself.
        accessControl?: ResourceAccessControl,
        // [Output Only] If errors are generated during update of the resource, this field will be populated.
        error?: {        
            // [Output Only] The array of errors encountered while processing this operation.
            errors?: {            
                // [Output Only] The error type identifier for this error.
                code?: string,
                // [Output Only] Indicates the field in the request that caused the error. This property is optional.
                location?: string,
                // [Output Only] An optional, human-readable error message.
                message?: string,
            }[],            
        },        
        // [Output Only] The expanded properties of the resource with reference values expanded. Returned as serialized YAML.
        finalProperties?: string,
        // [Output Only] The intent of the resource: PREVIEW, UPDATE, or CANCEL.
        intent?: string,
        // [Output Only] URL of the manifest representing the update configuration of this resource.
        manifest?: string,
        // [Output Only] The set of updated properties for this resource, before references are expanded. Returned as serialized YAML.
        properties?: string,
        // [Output Only] The state of the resource.
        state?: string,
        // [Output Only] If warning messages are generated during processing of this resource, this field will be populated.
        warnings?: {        
            // [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
            code?: string,
            // [Output Only] Metadata about this warning in key: value format. For example:
            // "data": [ { "key": "scope", "value": "zones/us-east1-d" }
            data?: {            
                // [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
                key?: string,
                // [Output Only] A warning data value corresponding to the key.
                value?: string,
            }[],            
            // [Output Only] A human-readable description of the warning code.
            message?: string,
        }[],        
    }
    
    interface ResourcesListResponse {
        // A token used to continue a truncated list request.
        nextPageToken?: string,
        // Resources contained in this list response.
        resources?: Resource[],        
    }
    
    interface Rule {
        // Required
        action?: string,
        // Additional restrictions that must be met
        conditions?: Condition[],        
        // Human-readable description of the rule.
        description?: string,
        // If one or more 'in' clauses are specified, the rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is in at least one of these entries.
        ins?: string[],        
        // The config returned to callers of tech.iam.IAM.CheckPolicy for any entries that match the LOG action.
        logConfigs?: LogConfig[],        
        // If one or more 'not_in' clauses are specified, the rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is in none of the entries.
        notIns?: string[],        
        // A permission is a string of form '..' (e.g., 'storage.buckets.list'). A value of '*' matches all permissions, and a verb part of '*' (e.g., 'storage.buckets.*') matches all verbs.
        permissions?: string[],        
    }
    
    interface TargetConfiguration {
        // The configuration to use for this deployment.
        config?: ConfigFile,
        // Specifies any files to import for this configuration. This can be used to import templates or other files. For example, you might import a text file in order to use the file in a template.
        imports?: ImportFile[],        
    }
    
    interface TemplateContents {
        // Import files referenced by the main template.
        imports?: ImportFile[],        
        // Which interpreter (python or jinja) should be used during expansion.
        interpreter?: string,
        // The contents of the template schema.
        schema?: string,
        // The contents of the main template file.
        template?: string,
    }
    
    interface TestPermissionsRequest {
        // The set of permissions to check for the 'resource'. Permissions with wildcards (such as '*' or 'storage.*') are not allowed.
        permissions?: string[],        
    }
    
    interface TestPermissionsResponse {
        // A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
        permissions?: string[],        
    }
    
    interface Type {
        // Base Type (configurable service) that backs this Type.
        base?: BaseType,
        // An optional textual description of the resource; provided by the client when the resource is created.
        description?: string,
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // [Output Only] Timestamp when the type was created, in RFC3339 text format.
        insertTime?: string,
        // Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])? Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)?
        labels?: TypeLabelEntry[],        
        // Name of the type.
        name?: string,
        // [Output Only] The Operation that most recently ran, or is currently running, on this type.
        operation?: Operation,
        // [Output Only] Self link for the type.
        selfLink?: string,
    }
    
    interface TypeInfo {
        // The description of the type.
        description?: string,
        // For swagger 2.0 externalDocs field will be used. For swagger 1.2 this field will be empty.
        documentationLink?: string,
        // [Output Only] Type of the output. Always deploymentManager#TypeInfo for TypeInfo.
        kind?: string,
        // The base type or composite type name.
        name?: string,
        // For base types with a collection, we return a schema and documentation link For template types, we return only a schema
        schema?: TypeInfoSchemaInfo,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // The title on the API descriptor URL provided.
        title?: string,
    }
    
    interface TypeInfoSchemaInfo {
        // The properties that this composite type or base type collection accept as input, represented as a json blob, format is: JSON Schema Draft V4
        input?: string,
        // The properties that this composite type or base type collection exposes as output, these properties can be used for references, represented as json blob, format is: JSON Schema Draft V4
        output?: string,
    }
    
    interface TypeLabelEntry {
        // 
        key?: string,
        // 
        value?: string,
    }
    
    interface TypeProvider {
        // Allows resource handling overrides for specific collections
        collectionOverrides?: CollectionOverride[],        
        // Credential used when interacting with this type.
        credential?: Credential,
        // An optional textual description of the resource; provided by the client when the resource is created.
        description?: string,
        // Descriptor Url for the this type provider.
        descriptorUrl?: string,
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // [Output Only] Timestamp when the type provider was created, in RFC3339 text format.
        insertTime?: string,
        // Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])? Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)?
        labels?: TypeProviderLabelEntry[],        
        // Name of the type provider.
        name?: string,
        // [Output Only] The Operation that most recently ran, or is currently running, on this type provider.
        operation?: Operation,
        // Options to apply when handling any resources in this service.
        options?: Options,
        // [Output Only] Self link for the type provider.
        selfLink?: string,
    }
    
    interface TypeProviderLabelEntry {
        // 
        key?: string,
        // 
        value?: string,
    }
    
    interface TypeProvidersListResponse {
        // A token used to continue a truncated list request.
        nextPageToken?: string,
        // [Output Only] A list of resource type providers supported by Deployment Manager.
        typeProviders?: TypeProvider[],        
    }
    
    interface TypeProvidersListTypesResponse {
        // A token used to continue a truncated list request.
        nextPageToken?: string,
        // [Output Only] A list of resource type info.
        types?: TypeInfo[],        
    }
    
    interface TypesListResponse {
        // A token used to continue a truncated list request.
        nextPageToken?: string,
        // [Output Only] A list of resource types supported by Deployment Manager.
        types?: Type[],        
    }
    
    interface ValidationOptions {
        // Customize how deployment manager will validate the resource against schema errors.
        schemaValidation?: string,
        // Specify what to do with extra properties when executing a request.
        undeclaredProperties?: string,
    }
    
    interface CompositeTypesResource {
        // Deletes a composite type.
        delete (request: {        
            // The name of the type for this request.
            compositeType: string,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Gets information about a specific composite type.
        get (request: {        
            // The name of the composite type for this request.
            compositeType: string,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<CompositeType>;        
        
        // Creates a composite type.
        insert (request: {        
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists all composite types for Deployment Manager.
        list (request: {        
            // Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
            // 
            // You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.
            // 
            // To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<CompositeTypesListResponse>;        
        
        // Updates a composite type. This method supports patch semantics.
        patch (request: {        
            // The name of the composite type for this request.
            compositeType: string,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Updates a composite type.
        update (request: {        
            // The name of the composite type for this request.
            compositeType: string,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface DeploymentsResource {
        // Cancels and removes the preview currently associated with the deployment.
        cancelPreview (request: {        
            // The name of the deployment for this request.
            deployment: string,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Deletes a deployment and all of the resources in the deployment.
        delete (request: {        
            // Sets the policy to use for deleting resources.
            deletePolicy?: string,
            // The name of the deployment for this request.
            deployment: string,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Gets information about a specific deployment.
        get (request: {        
            // The name of the deployment for this request.
            deployment: string,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<Deployment>;        
        
        // Gets the access control policy for a resource. May be empty if no such policy or resource exists.
        getIamPolicy (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Creates a deployment and all of the resources described by the deployment manifest.
        insert (request: {        
            // If set to true, creates a deployment and creates "shell" resources but does not actually instantiate these resources. This allows you to preview what your deployment looks like. After previewing a deployment, you can deploy your resources by making a request with the update() method or you can use the cancelPreview() method to cancel the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
            preview?: boolean,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists all deployments for a given project.
        list (request: {        
            // Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
            // 
            // You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.
            // 
            // To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<DeploymentsListResponse>;        
        
        // Updates a deployment and all of the resources described by the deployment manifest. This method supports patch semantics.
        patch (request: {        
            // Sets the policy to use for creating new resources.
            createPolicy?: string,
            // Sets the policy to use for deleting resources.
            deletePolicy?: string,
            // The name of the deployment for this request.
            deployment: string,
            // If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a target.config with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the update() or you can cancelPreview() to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
            preview?: boolean,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets the access control policy on the specified resource. Replaces any existing policy.
        setIamPolicy (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.
        stop (request: {        
            // The name of the deployment for this request.
            deployment: string,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
        // Updates a deployment and all of the resources described by the deployment manifest.
        update (request: {        
            // Sets the policy to use for creating new resources.
            createPolicy?: string,
            // Sets the policy to use for deleting resources.
            deletePolicy?: string,
            // The name of the deployment for this request.
            deployment: string,
            // If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a target.config with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the update() or you can cancelPreview() to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
            preview?: boolean,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface ManifestsResource {
        // Gets information about a specific manifest.
        get (request: {        
            // The name of the deployment for this request.
            deployment: string,
            // The name of the manifest for this request.
            manifest: string,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<Manifest>;        
        
        // Lists all manifests for a given deployment.
        list (request: {        
            // The name of the deployment for this request.
            deployment: string,
            // Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
            // 
            // You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.
            // 
            // To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<ManifestsListResponse>;        
        
    }
    
    
    interface OperationsResource {
        // Gets information about a specific operation.
        get (request: {        
            // The name of the operation for this request.
            operation: string,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists all operations for a project.
        list (request: {        
            // Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
            // 
            // You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.
            // 
            // To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<OperationsListResponse>;        
        
    }
    
    
    interface ResourcesResource {
        // Gets information about a single resource.
        get (request: {        
            // The name of the deployment for this request.
            deployment: string,
            // The project ID for this request.
            project: string,
            // The name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<Resource>;        
        
        // Lists all resources in a given deployment.
        list (request: {        
            // The name of the deployment for this request.
            deployment: string,
            // Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
            // 
            // You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.
            // 
            // To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<ResourcesListResponse>;        
        
    }
    
    
    interface TypeProvidersResource {
        // Deletes a type provider.
        delete (request: {        
            // The project ID for this request.
            project: string,
            // The name of the type provider for this request.
            typeProvider: string,
        }) : gapi.client.Request<Operation>;        
        
        // Gets information about a specific type provider.
        get (request: {        
            // The project ID for this request.
            project: string,
            // The name of the type provider for this request.
            typeProvider: string,
        }) : gapi.client.Request<TypeProvider>;        
        
        // Gets a type info for a type provided by a TypeProvider.
        getType (request: {        
            // The project ID for this request.
            project: string,
            // The name of the type provider for this request.
            type: string,
            // The name of the type provider for this request.
            typeProvider: string,
        }) : gapi.client.Request<TypeInfo>;        
        
        // Creates a type provider.
        insert (request: {        
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists all resource type providers for Deployment Manager.
        list (request: {        
            // Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
            // 
            // You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.
            // 
            // To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<TypeProvidersListResponse>;        
        
        // Lists all the type info for a TypeProvider.
        listTypes (request: {        
            // Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
            // 
            // You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.
            // 
            // To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // The project ID for this request.
            project: string,
            // The name of the type provider for this request.
            typeProvider: string,
        }) : gapi.client.Request<TypeProvidersListTypesResponse>;        
        
        // Updates a type provider. This method supports patch semantics.
        patch (request: {        
            // The project ID for this request.
            project: string,
            // The name of the type provider for this request.
            typeProvider: string,
        }) : gapi.client.Request<Operation>;        
        
        // Updates a type provider.
        update (request: {        
            // The project ID for this request.
            project: string,
            // The name of the type provider for this request.
            typeProvider: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface TypesResource {
        // Lists all resource types for Deployment Manager.
        list (request: {        
            // Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
            // 
            // You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.
            // 
            // To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<TypesListResponse>;        
        
    }
    
}

declare module gapi.client.deploymentmanager {
    var compositeTypes: gapi.client.deploymentmanager.CompositeTypesResource; 
    
    var deployments: gapi.client.deploymentmanager.DeploymentsResource; 
    
    var manifests: gapi.client.deploymentmanager.ManifestsResource; 
    
    var operations: gapi.client.deploymentmanager.OperationsResource; 
    
    var resources: gapi.client.deploymentmanager.ResourcesResource; 
    
    var typeProviders: gapi.client.deploymentmanager.TypeProvidersResource; 
    
    var types: gapi.client.deploymentmanager.TypesResource; 
    
}
