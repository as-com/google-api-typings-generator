// Type definitions for Google Stackdriver Debugger API v2
// Project: http://cloud.google.com/debugger
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.clouddebugger {
    
    interface CloudRepoSourceContext {
        // The ID of the repo.
        repoId?: RepoId,
        // An alias, which may be a branch or tag.
        aliasContext?: AliasContext,
        // A revision ID.
        revisionId?: string,
        // The name of an alias (branch, tag, etc.).
        aliasName?: string,
    }
    
    interface RegisterDebuggeeResponse {
        // Debuggee resource.
        // The field `id` is guranteed to be set (in addition to the echoed fields).
        debuggee?: Debuggee,
    }
    
    interface RegisterDebuggeeRequest {
        // Debuggee information to register.
        // The fields `project`, `uniquifier`, `description` and `agent_version`
        // of the debuggee must be set.
        debuggee?: Debuggee,
    }
    
    interface GetBreakpointResponse {
        // Complete breakpoint state.
        // The fields `id` and `location` are guaranteed to be set.
        breakpoint?: Breakpoint,
    }
    
    interface StatusMessage {
        // Status message text.
        description?: FormatMessage,
        // Distinguishes errors from informational messages.
        isError?: boolean,
        // Reference to which the message applies.
        refersTo?: string,
    }
    
    interface GitSourceContext {
        // Git commit hash.
        // required.
        revisionId?: string,
        // Git repository URL.
        url?: string,
    }
    
    interface Variable {
        // Variable type (e.g. `MyClass`). If the variable is split with
        // `var_table_index`, `type` goes next to `value`. The interpretation of
        // a type is agent specific. It is recommended to include the dynamic type
        // rather than a static type of an object.
        type?: string,
        // Simple value of the variable.
        value?: string,
        // Reference to a variable in the shared variable table. More than
        // one variable can reference the same variable in the table. The
        // `var_table_index` field is an index into `variable_table` in Breakpoint.
        varTableIndex?: number,
        // Members contained or pointed to by the variable.
        members?: Variable[],        
        // Status associated with the variable. This field will usually stay
        // unset. A status of a single variable only applies to that variable or
        // expression. The rest of breakpoint data still remains valid. Variables
        // might be reported in error state even when breakpoint is not in final
        // state.
        // 
        // The message may refer to variable name with `refers_to` set to
        // `VARIABLE_NAME`. Alternatively `refers_to` will be set to `VARIABLE_VALUE`.
        // In either case variable value and members will be unset.
        // 
        // Example of error message applied to name: `Invalid expression syntax`.
        // 
        // Example of information message applied to value: `Not captured`.
        // 
        // Examples of error message applied to value:
        // 
        // *   `Malformed string`,
        // *   `Field f not found in class C`
        // *   `Null pointer dereference`
        status?: StatusMessage,
        // Name of the variable, if any.
        name?: string,
    }
    
    interface StackFrame {
        // Set of local variables at the stack frame location.
        // Note that this might not be populated for all stack frames.
        locals?: Variable[],        
        // Source location of the call site.
        location?: SourceLocation,
        // Demangled function name at the call site.
        function?: string,
        // Set of arguments passed to this function.
        // Note that this might not be populated for all stack frames.
        arguments?: Variable[],        
    }
    
    interface RepoId {
        // A server-assigned, globally unique identifier.
        uid?: string,
        // A combination of a project ID and a repo name.
        projectRepoId?: ProjectRepoId,
    }
    
    interface FormatMessage {
        // Format template for the message. The `format` uses placeholders `$0`,
        // `$1`, etc. to reference parameters. `$$` can be used to denote the `$`
        // character.
        // 
        // Examples:
        // 
        // *   `Failed to load '$0' which helps debug $1 the first time it
        //     is loaded.  Again, $0 is very important.`
        // *   `Please pay $$10 to use $0 instead of $1.`
        format?: string,
        // Optional parameters to be embedded into the message.
        parameters?: string[],        
    }
    
    interface ExtendedSourceContext {
        // Labels with user defined metadata.
        labels?: any,
        // Any source context.
        context?: SourceContext,
    }
    
    interface ListDebuggeesResponse {
        // List of debuggees accessible to the calling user.
        // Note that the `description` field is the only human readable field
        // that should be displayed to the user.
        // The fields `debuggee.id` and  `description` fields are guaranteed to be
        // set on each debuggee.
        debuggees?: Debuggee[],        
    }
    
    interface AliasContext {
        // The alias kind.
        kind?: string,
        // The alias name.
        name?: string,
    }
    
    interface Empty {
    }
    
    interface SourceLocation {
        // Path to the source file within the source context of the target binary.
        path?: string,
        // Line inside the file. The first line in the file has the value `1`.
        line?: number,
    }
    
    interface Debuggee {
        // Project the debuggee is associated with.
        // Use the project number when registering a Google Cloud Platform project.
        project?: string,
        // Unique identifier for the debuggee generated by the controller service.
        id?: string,
        // Version ID of the agent release. The version ID is structured as
        // following: `domain/type/vmajor.minor` (for example
        // `google.com/gcp-java/v1.1`).
        agentVersion?: string,
        // If set to `true`, indicates that the agent should disable itself and
        // detach from the debuggee.
        isDisabled?: boolean,
        // Debuggee uniquifier within the project.
        // Any string that identifies the application within the project can be used.
        // Including environment and version or build IDs is recommended.
        uniquifier?: string,
        // Human readable description of the debuggee.
        // Including a human-readable project name, environment name and version
        // information is recommended.
        description?: string,
        // References to the locations and revisions of the source code used in the
        // deployed application.
        // 
        // NOTE: This field is deprecated. Consumers should use
        // `ext_source_contexts` if it is not empty. Debug agents should populate
        // both this field and `ext_source_contexts`.
        sourceContexts?: SourceContext[],        
        // References to the locations and revisions of the source code used in the
        // deployed application.
        // 
        // Contexts describing a remote repo related to the source code
        // have a `category` label of `remote_repo`. Source snapshot source
        // contexts have a `category` of `snapshot`.
        extSourceContexts?: ExtendedSourceContext[],        
        // A set of custom debuggee properties, populated by the agent, to be
        // displayed to the user.
        labels?: any,
        // If set to `true`, indicates that the debuggee is considered as inactive by
        // the Controller service.
        isInactive?: boolean,
        // Human readable message to be displayed to the user about this debuggee.
        // Absence of this field indicates no status. The message can be either
        // informational or an error status.
        status?: StatusMessage,
    }
    
    interface ProjectRepoId {
        // The name of the repo. Leave empty for the default repo.
        repoName?: string,
        // The ID of the project.
        projectId?: string,
    }
    
    interface ListActiveBreakpointsResponse {
        // A wait token that can be used in the next method call to block until
        // the list of breakpoints changes.
        nextWaitToken?: string,
        // List of all active breakpoints.
        // The fields `id` and `location` are guaranteed to be set on each breakpoint.
        breakpoints?: Breakpoint[],        
        // The `wait_expired` field is set to true by the server when the
        // request times out and the field `success_on_timeout` is set to true.
        waitExpired?: boolean,
    }
    
    interface CloudWorkspaceSourceContext {
        // The ID of the workspace.
        workspaceId?: CloudWorkspaceId,
        // The ID of the snapshot.
        // An empty snapshot_id refers to the most recent snapshot.
        snapshotId?: string,
    }
    
    interface GerritSourceContext {
        // A revision (commit) ID.
        revisionId?: string,
        // The URI of a running Gerrit instance.
        hostUri?: string,
        // The name of an alias (branch, tag, etc.).
        aliasName?: string,
        // An alias, which may be a branch or tag.
        aliasContext?: AliasContext,
        // The full project name within the host. Projects may be nested, so
        // "project/subproject" is a valid project name.
        // The "repo name" is hostURI/project.
        gerritProject?: string,
    }
    
    interface UpdateActiveBreakpointResponse {
    }
    
    interface CloudWorkspaceId {
        // The ID of the repo containing the workspace.
        repoId?: RepoId,
        // The unique name of the workspace within the repo.  This is the name
        // chosen by the client in the Source API's CreateWorkspace method.
        name?: string,
    }
    
    interface ListBreakpointsResponse {
        // A wait token that can be used in the next call to `list` (REST) or
        // `ListBreakpoints` (RPC) to block until the list of breakpoints has changes.
        nextWaitToken?: string,
        // List of breakpoints matching the request.
        // The fields `id` and `location` are guaranteed to be set on each breakpoint.
        // The fields: `stack_frames`, `evaluated_expressions` and `variable_table`
        // are cleared on each breakpoint regardless of its status.
        breakpoints?: Breakpoint[],        
    }
    
    interface Breakpoint {
        // Time this breakpoint was created by the server in seconds resolution.
        createTime?: string,
        // Only relevant when action is `LOG`. Defines the message to log when
        // the breakpoint hits. The message may include parameter placeholders `$0`,
        // `$1`, etc. These placeholders are replaced with the evaluated value
        // of the appropriate expression. Expressions not referenced in
        // `log_message_format` are not logged.
        // 
        // Example: `Message received, id = $0, count = $1` with
        // `expressions` = `[ message.id, message.count ]`.
        logMessageFormat?: string,
        // A set of custom breakpoint properties, populated by the agent, to be
        // displayed to the user.
        labels?: any,
        // List of read-only expressions to evaluate at the breakpoint location.
        // The expressions are composed using expressions in the programming language
        // at the source location. If the breakpoint action is `LOG`, the evaluated
        // expressions are included in log statements.
        expressions?: string[],        
        // Values of evaluated expressions at breakpoint time.
        // The evaluated expressions appear in exactly the same order they
        // are listed in the `expressions` field.
        // The `name` field holds the original expression text, the `value` or
        // `members` field holds the result of the evaluated expression.
        // If the expression cannot be evaluated, the `status` inside the `Variable`
        // will indicate an error and contain the error text.
        evaluatedExpressions?: Variable[],        
        // When true, indicates that this is a final result and the
        // breakpoint state will not change from here on.
        isFinalState?: boolean,
        // The stack at breakpoint time.
        stackFrames?: StackFrame[],        
        // Condition that triggers the breakpoint.
        // The condition is a compound boolean expression composed using expressions
        // in a programming language at the source location.
        condition?: string,
        // Breakpoint status.
        // 
        // The status includes an error flag and a human readable message.
        // This field is usually unset. The message can be either
        // informational or an error message. Regardless, clients should always
        // display the text message back to the user.
        // 
        // Error status indicates complete failure of the breakpoint.
        // 
        // Example (non-final state): `Still loading symbols...`
        // 
        // Examples (final state):
        // 
        // *   `Invalid line number` referring to location
        // *   `Field f not found in class C` referring to condition
        status?: StatusMessage,
        // E-mail address of the user that created this breakpoint
        userEmail?: string,
        // Action that the agent should perform when the code at the
        // breakpoint location is hit.
        action?: string,
        // Indicates the severity of the log. Only relevant when action is `LOG`.
        logLevel?: string,
        // Breakpoint identifier, unique in the scope of the debuggee.
        id?: string,
        // Breakpoint source location.
        location?: SourceLocation,
        // Time this breakpoint was finalized as seen by the server in seconds
        // resolution.
        finalTime?: string,
        // The `variable_table` exists to aid with computation, memory and network
        // traffic optimization.  It enables storing a variable once and reference
        // it from multiple variables, including variables stored in the
        // `variable_table` itself.
        // For example, the same `this` object, which may appear at many levels of
        // the stack, can have all of its data stored once in this table.  The
        // stack frame variables then would hold only a reference to it.
        // 
        // The variable `var_table_index` field is an index into this repeated field.
        // The stored objects are nameless and get their name from the referencing
        // variable. The effective variable is a merge of the referencing variable
        // and the referenced variable.
        variableTable?: Variable[],        
    }
    
    interface SetBreakpointResponse {
        // Breakpoint resource.
        // The field `id` is guaranteed to be set (in addition to the echoed fileds).
        breakpoint?: Breakpoint,
    }
    
    interface UpdateActiveBreakpointRequest {
        // Updated breakpoint information.
        // The field `id` must be set.
        breakpoint?: Breakpoint,
    }
    
    interface SourceContext {
        // A SourceContext referring to any third party Git repo (e.g. GitHub).
        git?: GitSourceContext,
        // A SourceContext referring to a Gerrit project.
        gerrit?: GerritSourceContext,
        // A SourceContext referring to a snapshot in a cloud workspace.
        cloudWorkspace?: CloudWorkspaceSourceContext,
        // A SourceContext referring to a revision in a cloud repo.
        cloudRepo?: CloudRepoSourceContext,
    }
    
    interface BreakpointsResource {
        // Lists all breakpoints for the debuggee.
        list (request: {        
            // ID of the debuggee whose breakpoints to list.
            debuggeeId: string,
            // A wait token that, if specified, blocks the call until the breakpoints
            // list has changed, or a server selected timeout has expired.  The value
            // should be set from the last response. The error code
            // `google.rpc.Code.ABORTED` (RPC) is returned on wait timeout, which
            // should be called again with the same `wait_token`.
            waitToken?: string,
            // The client version making the call.
            // Following: `domain/type/version` (e.g., `google.com/intellij/v1`).
            clientVersion?: string,
            // Only breakpoints with the specified action will pass the filter.
            action.value?: string,
            // When set to `true`, the response includes active and inactive
            // breakpoints. Otherwise, it includes only active breakpoints.
            includeInactive?: boolean,
            // When set to `true`, the response includes the list of breakpoints set by
            // any user. Otherwise, it includes only breakpoints set by the caller.
            includeAllUsers?: boolean,
            // This field is deprecated. The following fields are always stripped out of
            // the result: `stack_frames`, `evaluated_expressions` and `variable_table`.
            stripResults?: boolean,
        }) : gapi.client.Request<ListBreakpointsResponse>;        
        
        // Gets breakpoint information.
        get (request: {        
            // The client version making the call.
            // Following: `domain/type/version` (e.g., `google.com/intellij/v1`).
            clientVersion?: string,
            // ID of the breakpoint to get.
            breakpointId: string,
            // ID of the debuggee whose breakpoint to get.
            debuggeeId: string,
        }) : gapi.client.Request<GetBreakpointResponse>;        
        
        // Deletes the breakpoint from the debuggee.
        delete (request: {        
            // ID of the debuggee whose breakpoint to delete.
            debuggeeId: string,
            // The client version making the call.
            // Following: `domain/type/version` (e.g., `google.com/intellij/v1`).
            clientVersion?: string,
            // ID of the breakpoint to delete.
            breakpointId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Sets the breakpoint to the debuggee.
        set (request: {        
            // ID of the debuggee where the breakpoint is to be set.
            debuggeeId: string,
            // The client version making the call.
            // Following: `domain/type/version` (e.g., `google.com/intellij/v1`).
            clientVersion?: string,
        }) : gapi.client.Request<SetBreakpointResponse>;        
        
    }
    
    
    interface DebuggeesResource {
        // Lists all the debuggees that the user can set breakpoints to.
        list (request: {        
            // The client version making the call.
            // Following: `domain/type/version` (e.g., `google.com/intellij/v1`).
            clientVersion?: string,
            // When set to `true`, the result includes all debuggees. Otherwise, the
            // result includes only debuggees that are active.
            includeInactive?: boolean,
            // Project number of a Google Cloud project whose debuggees to list.
            project?: string,
        }) : gapi.client.Request<ListDebuggeesResponse>;        
        
        breakpoints: BreakpointsResource,
    }
    
    
    interface DebuggerResource {
        debuggees: DebuggeesResource,
    }
    
    
    interface BreakpointsResource {
        // Returns the list of all active breakpoints for the debuggee.
        // 
        // The breakpoint specification (`location`, `condition`, and `expressions`
        // fields) is semantically immutable, although the field values may
        // change. For example, an agent may update the location line number
        // to reflect the actual line where the breakpoint was set, but this
        // doesn't change the breakpoint semantics.
        // 
        // This means that an agent does not need to check if a breakpoint has changed
        // when it encounters the same breakpoint on a successive call.
        // Moreover, an agent should remember the breakpoints that are completed
        // until the controller removes them from the active list to avoid
        // setting those breakpoints again.
        list (request: {        
            // If set to `true`, returns `google.rpc.Code.OK` status and sets the
            // `wait_expired` response field to `true` when the server-selected timeout
            // has expired (recommended).
            // 
            // If set to `false`, returns `google.rpc.Code.ABORTED` status when the
            // server-selected timeout has expired (deprecated).
            successOnTimeout?: boolean,
            // Identifies the debuggee.
            debuggeeId: string,
            // A wait token that, if specified, blocks the method call until the list
            // of active breakpoints has changed, or a server selected timeout has
            // expired.  The value should be set from the last returned response.
            waitToken?: string,
        }) : gapi.client.Request<ListActiveBreakpointsResponse>;        
        
        // Updates the breakpoint state or mutable fields.
        // The entire Breakpoint message must be sent back to the controller
        // service.
        // 
        // Updates to active breakpoint fields are only allowed if the new value
        // does not change the breakpoint specification. Updates to the `location`,
        // `condition` and `expressions` fields should not alter the breakpoint
        // semantics. These may only make changes such as canonicalizing a value
        // or snapping the location to the correct line of code.
        update (request: {        
            // Identifies the debuggee being debugged.
            debuggeeId: string,
            // Breakpoint identifier, unique in the scope of the debuggee.
            id: string,
        }) : gapi.client.Request<UpdateActiveBreakpointResponse>;        
        
    }
    
    
    interface DebuggeesResource {
        // Registers the debuggee with the controller service.
        // 
        // All agents attached to the same application should call this method with
        // the same request content to get back the same stable `debuggee_id`. Agents
        // should call this method again whenever `google.rpc.Code.NOT_FOUND` is
        // returned from any controller method.
        // 
        // This allows the controller service to disable the agent or recover from any
        // data loss. If the debuggee is disabled by the server, the response will
        // have `is_disabled` set to `true`.
        register (request: {        
        }) : gapi.client.Request<RegisterDebuggeeResponse>;        
        
        breakpoints: BreakpointsResource,
    }
    
    
    interface ControllerResource {
        debuggees: DebuggeesResource,
    }
    
}

declare module gapi.client.clouddebugger {
    var debugger: gapi.client.clouddebugger.DebuggerResource; 
    
    var controller: gapi.client.clouddebugger.ControllerResource; 
    
}
