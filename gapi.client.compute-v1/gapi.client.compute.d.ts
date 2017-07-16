// Type definitions for Google Compute Engine API v1
// Project: https://developers.google.com/compute/docs/reference/latest/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.compute {
    
    interface AcceleratorConfig {
        // The number of the guest accelerator cards exposed to this instance.
        acceleratorCount?: number,
        // Full or partial URL of the accelerator type resource to expose to this instance.
        acceleratorType?: string,
    }
    
    interface AcceleratorType {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // [Output Only] The deprecation status associated with this accelerator type.
        deprecated?: DeprecationStatus,
        // [Output Only] An optional textual description of the resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] The type of the resource. Always compute#acceleratorType for accelerator types.
        kind?: string,
        // [Output Only] Maximum accelerator cards allowed per instance.
        maximumCardsPerInstance?: number,
        // [Output Only] Name of the resource.
        name?: string,
        // [Output Only] Server-defined fully-qualified URL for this resource.
        selfLink?: string,
        // [Output Only] The name of the zone where the accelerator type resides, such as us-central1-a.
        zone?: string,
    }
    
    interface AcceleratorTypeAggregatedList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A map of scoped accelerator type lists.
        items?: any,
        // [Output Only] Type of resource. Always compute#acceleratorTypeAggregatedList for aggregated lists of accelerator types.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface AcceleratorTypeList {
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // A list of AcceleratorType resources.
        items?: AcceleratorType[],        
        // [Output Only] Type of resource. Always compute#acceleratorTypeList for lists of accelerator types.
        kind?: string,
        // [Output Only] A token used to continue a truncated list request.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface AcceleratorTypesScopedList {
        // [Output Only] List of accelerator types contained in this scope.
        acceleratorTypes?: AcceleratorType[],        
        // [Output Only] An informational warning that appears when the accelerator types list is empty.
        warning?: {        
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
        },        
    }
    
    interface AccessConfig {
        // [Output Only] Type of the resource. Always compute#accessConfig for access configs.
        kind?: string,
        // The name of this access configuration. The default and recommended name is External NAT but you can use any arbitrary string you would like. For example, My external IP or Network Access.
        name?: string,
        // An external IP address associated with this instance. Specify an unused static external IP address available to the project or leave this field undefined to use an IP from a shared ephemeral IP address pool. If you specify a static external IP address, it must live in the same region as the zone of the instance.
        natIP?: string,
        // The type of configuration. The default and only option is ONE_TO_ONE_NAT.
        type?: string,
    }
    
    interface Address {
        // The static external IP address represented by this resource.
        address?: string,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // The IP Version that will be used by this address. Valid options are IPV4 or IPV6. This can only be specified for a global address.
        ipVersion?: string,
        // [Output Only] Type of the resource. Always compute#address for addresses.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // [Output Only] URL of the region where the regional address resides. This field is not applicable to global addresses.
        region?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // [Output Only] The status of the address, which can be either IN_USE or RESERVED. An address that is RESERVED is currently reserved and available to use. An IN_USE address is currently being used by another resource and is not available.
        status?: string,
        // [Output Only] The URLs of the resources that are using this address.
        users?: string[],        
    }
    
    interface AddressAggregatedList {
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // [Output Only] A map of scoped address lists.
        items?: any,
        // [Output Only] Type of resource. Always compute#addressAggregatedList for aggregated lists of addresses.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface AddressList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of addresses.
        items?: Address[],        
        // [Output Only] Type of resource. Always compute#addressList for lists of addresses.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
    }
    
    interface AddressesScopedList {
        // [Output Only] List of addresses contained in this scope.
        addresses?: Address[],        
        // [Output Only] Informational warning which replaces the list of addresses when the list is empty.
        warning?: {        
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
        },        
    }
    
    interface AttachedDisk {
        // Specifies whether the disk will be auto-deleted when the instance is deleted (but not when the disk is detached from the instance).
        autoDelete?: boolean,
        // Indicates that this is a boot disk. The virtual machine will use the first partition of the disk for its root filesystem.
        boot?: boolean,
        // Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance. This name can be used to reference the device for mounting, resizing, and so on, from within the instance.
        // 
        // If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disks-x, where x is a number assigned by Google Compute Engine. This field is only applicable for persistent disks.
        deviceName?: string,
        // Encrypts or decrypts a disk using a customer-supplied encryption key.
        // 
        // If you are creating a new disk, this field encrypts the new disk using an encryption key that you provide. If you are attaching an existing disk that is already encrypted, this field decrypts the disk using the customer-supplied encryption key.
        // 
        // If you encrypt a disk using a customer-supplied key, you must provide the same key again when you attempt to use this resource at a later time. For example, you must provide the key when you create a snapshot or an image from the disk or when you attach the disk to a virtual machine instance.
        // 
        // If you do not provide an encryption key, then the disk will be encrypted using an automatically generated key and you do not need to provide a key to use the disk later.
        // 
        // Instance templates do not store customer-supplied encryption keys, so you cannot use your own keys to encrypt disks in a managed instance group.
        diskEncryptionKey?: CustomerEncryptionKey,
        // Assigns a zero-based index to this disk, where 0 is reserved for the boot disk. For example, if you have many disks attached to an instance, each disk would have a unique index number. If not specified, the server will choose an appropriate value.
        index?: number,
        // [Input Only] Specifies the parameters for a new disk that will be created alongside the new instance. Use initialization parameters to create boot disks or local SSDs attached to the new instance.
        // 
        // This property is mutually exclusive with the source property; you can only define one or the other, but not both.
        initializeParams?: AttachedDiskInitializeParams,
        // Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI and the request will fail if you attempt to attach a persistent disk in any other format than SCSI. Local SSDs can use either NVME or SCSI. For performance characteristics of SCSI over NVMe, see Local SSD performance.
        interface?: string,
        // [Output Only] Type of the resource. Always compute#attachedDisk for attached disks.
        kind?: string,
        // [Output Only] Any valid publicly visible licenses.
        licenses?: string[],        
        // The mode in which to attach this disk, either READ_WRITE or READ_ONLY. If not specified, the default is to attach the disk in READ_WRITE mode.
        mode?: string,
        // Specifies a valid partial or full URL to an existing Persistent Disk resource. When creating a new instance, one of initializeParams.sourceImage or disks.source is required.
        // 
        // If desired, you can also attach existing non-root persistent disks using this property. This field is only applicable for persistent disks.
        // 
        // Note that for InstanceTemplate, specify the disk name, not the URL for the disk.
        source?: string,
        // Specifies the type of the disk, either SCRATCH or PERSISTENT. If not specified, the default is PERSISTENT.
        type?: string,
    }
    
    interface AttachedDiskInitializeParams {
        // Specifies the disk name. If not specified, the default is to use the name of the instance.
        diskName?: string,
        // Specifies the size of the disk in base-2 GB.
        diskSizeGb?: string,
        // Specifies the disk type to use to create the instance. If not specified, the default is pd-standard, specified using the full URL. For example:
        // 
        // https://www.googleapis.com/compute/v1/projects/project/zones/zone/diskTypes/pd-standard 
        // 
        // Other values include pd-ssd and local-ssd. If you define this field, you can provide either the full or partial URL. For example, the following are valid values:  
        // - https://www.googleapis.com/compute/v1/projects/project/zones/zone/diskTypes/diskType 
        // - projects/project/zones/zone/diskTypes/diskType 
        // - zones/zone/diskTypes/diskType  Note that for InstanceTemplate, this is the name of the disk type, not URL.
        diskType?: string,
        // The source image to create this disk. When creating a new instance, one of initializeParams.sourceImage or disks.source is required.
        // 
        // To create a disk with one of the public operating system images, specify the image by its family name. For example, specify family/debian-8 to use the latest Debian 8 image:
        // 
        // projects/debian-cloud/global/images/family/debian-8 
        // 
        // Alternatively, use a specific version of a public operating system image:
        // 
        // projects/debian-cloud/global/images/debian-8-jessie-vYYYYMMDD 
        // 
        // To create a disk with a private image that you created, specify the image name in the following format:
        // 
        // global/images/my-private-image 
        // 
        // You can also specify a private image by its image family, which returns the latest version of the image in that family. Replace the image name with family/family-name:
        // 
        // global/images/family/my-private-family 
        // 
        // If the source image is deleted later, this field will not be set.
        sourceImage?: string,
        // The customer-supplied encryption key of the source image. Required if the source image is protected by a customer-supplied encryption key.
        // 
        // Instance templates do not store customer-supplied encryption keys, so you cannot create disks for instances in a managed instance group if the source images are encrypted with your own keys.
        sourceImageEncryptionKey?: CustomerEncryptionKey,
    }
    
    interface Autoscaler {
        // The configuration parameters for the autoscaling algorithm. You can define one or more of the policies for an autoscaler: cpuUtilization, customMetricUtilizations, and loadBalancingUtilization.
        // 
        // If none of these are specified, the default will be to autoscale based on cpuUtilization to 0.6 or 60%.
        autoscalingPolicy?: AutoscalingPolicy,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#autoscaler for autoscalers.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // [Output Only] URL of the region where the instance group resides (for autoscalers living in regional scope).
        region?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // [Output Only] The status of the autoscaler configuration.
        status?: string,
        // [Output Only] Human-readable details about the current state of the autoscaler. Read the documentation for Commonly returned status messages for examples of status messages you might encounter.
        statusDetails?: AutoscalerStatusDetails[],        
        // URL of the managed instance group that this autoscaler will scale.
        target?: string,
        // [Output Only] URL of the zone where the instance group resides (for autoscalers living in zonal scope).
        zone?: string,
    }
    
    interface AutoscalerAggregatedList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A map of scoped autoscaler lists.
        items?: any,
        // [Output Only] Type of resource. Always compute#autoscalerAggregatedList for aggregated lists of autoscalers.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface AutoscalerList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A list of Autoscaler resources.
        items?: Autoscaler[],        
        // [Output Only] Type of resource. Always compute#autoscalerList for lists of autoscalers.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface AutoscalerStatusDetails {
        // The status message.
        message?: string,
        // The type of error returned.
        type?: string,
    }
    
    interface AutoscalersScopedList {
        // [Output Only] List of autoscalers contained in this scope.
        autoscalers?: Autoscaler[],        
        // [Output Only] Informational warning which replaces the list of autoscalers when the list is empty.
        warning?: {        
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
        },        
    }
    
    interface AutoscalingPolicy {
        // The number of seconds that the autoscaler should wait before it starts collecting information from a new instance. This prevents the autoscaler from collecting information when the instance is initializing, during which the collected usage would not be reliable. The default time autoscaler waits is 60 seconds.
        // 
        // Virtual machine initialization times might vary because of numerous factors. We recommend that you test how long an instance may take to initialize. To do this, create an instance and time the startup process.
        coolDownPeriodSec?: number,
        // Defines the CPU utilization policy that allows the autoscaler to scale based on the average CPU utilization of a managed instance group.
        cpuUtilization?: AutoscalingPolicyCpuUtilization,
        // Configuration parameters of autoscaling based on a custom metric.
        customMetricUtilizations?: AutoscalingPolicyCustomMetricUtilization[],        
        // Configuration parameters of autoscaling based on load balancer.
        loadBalancingUtilization?: AutoscalingPolicyLoadBalancingUtilization,
        // The maximum number of instances that the autoscaler can scale up to. This is required when creating or updating an autoscaler. The maximum number of replicas should not be lower than minimal number of replicas.
        maxNumReplicas?: number,
        // The minimum number of replicas that the autoscaler can scale down to. This cannot be less than 0. If not provided, autoscaler will choose a default value depending on maximum number of instances allowed.
        minNumReplicas?: number,
    }
    
    interface AutoscalingPolicyCpuUtilization {
        // The target CPU utilization that the autoscaler should maintain. Must be a float value in the range (0, 1]. If not specified, the default is 0.6.
        // 
        // If the CPU level is below the target utilization, the autoscaler scales down the number of instances until it reaches the minimum number of instances you specified or until the average CPU of your instances reaches the target utilization.
        // 
        // If the average CPU is above the target utilization, the autoscaler scales up until it reaches the maximum number of instances you specified or until the average utilization reaches the target utilization.
        utilizationTarget?: number,
    }
    
    interface AutoscalingPolicyCustomMetricUtilization {
        // The identifier (type) of the Stackdriver Monitoring metric. The metric cannot have negative values and should be a utilization metric, which means that the number of virtual machines handling requests should increase or decrease proportionally to the metric.
        // 
        // The metric must have a value type of INT64 or DOUBLE.
        metric?: string,
        // The target value of the metric that autoscaler should maintain. This must be a positive value.
        // 
        // For example, a good metric to use as a utilization_target is compute.googleapis.com/instance/network/received_bytes_count. The autoscaler will work to keep this value constant for each of the instances.
        utilizationTarget?: number,
        // Defines how target utilization value is expressed for a Stackdriver Monitoring metric. Either GAUGE, DELTA_PER_SECOND, or DELTA_PER_MINUTE. If not specified, the default is GAUGE.
        utilizationTargetType?: string,
    }
    
    interface AutoscalingPolicyLoadBalancingUtilization {
        // Fraction of backend capacity utilization (set in HTTP(s) load balancing configuration) that autoscaler should maintain. Must be a positive float value. If not defined, the default is 0.8.
        utilizationTarget?: number,
    }
    
    interface Backend {
        // Specifies the balancing mode for this backend. For global HTTP(S) or TCP/SSL load balancing, the default is UTILIZATION. Valid values are UTILIZATION, RATE (for HTTP(S)) and CONNECTION (for TCP/SSL).
        // 
        // This cannot be used for internal load balancing.
        balancingMode?: string,
        // A multiplier applied to the group's maximum servicing capacity (based on UTILIZATION, RATE or CONNECTION). Default value is 1, which means the group will serve up to 100% of its configured capacity (depending on balancingMode). A setting of 0 means the group is completely drained, offering 0% of its available Capacity. Valid range is [0.0,1.0].
        // 
        // This cannot be used for internal load balancing.
        capacityScaler?: number,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // The fully-qualified URL of a zonal Instance Group resource. This instance group defines the list of instances that serve traffic. Member virtual machine instances from each instance group must live in the same zone as the instance group itself. No two backends in a backend service are allowed to use same Instance Group resource.
        // 
        // Note that you must specify an Instance Group resource using the fully-qualified URL, rather than a partial URL.
        // 
        // When the BackendService has load balancing scheme INTERNAL, the instance group must be in a zone within the same region as the BackendService.
        group?: string,
        // The max number of simultaneous connections for the group. Can be used with either CONNECTION or UTILIZATION balancing modes. For CONNECTION mode, either maxConnections or maxConnectionsPerInstance must be set.
        // 
        // This cannot be used for internal load balancing.
        maxConnections?: number,
        // The max number of simultaneous connections that a single backend instance can handle. This is used to calculate the capacity of the group. Can be used in either CONNECTION or UTILIZATION balancing modes. For CONNECTION mode, either maxConnections or maxConnectionsPerInstance must be set.
        // 
        // This cannot be used for internal load balancing.
        maxConnectionsPerInstance?: number,
        // The max requests per second (RPS) of the group. Can be used with either RATE or UTILIZATION balancing modes, but required if RATE mode. For RATE mode, either maxRate or maxRatePerInstance must be set.
        // 
        // This cannot be used for internal load balancing.
        maxRate?: number,
        // The max requests per second (RPS) that a single backend instance can handle. This is used to calculate the capacity of the group. Can be used in either balancing mode. For RATE mode, either maxRate or maxRatePerInstance must be set.
        // 
        // This cannot be used for internal load balancing.
        maxRatePerInstance?: number,
        // Used when balancingMode is UTILIZATION. This ratio defines the CPU utilization target for the group. The default is 0.8. Valid range is [0.0, 1.0].
        // 
        // This cannot be used for internal load balancing.
        maxUtilization?: number,
    }
    
    interface BackendBucket {
        // Cloud Storage bucket name.
        bucketName?: string,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional textual description of the resource; provided by the client when the resource is created.
        description?: string,
        // If true, enable Cloud CDN for this BackendBucket.
        enableCdn?: boolean,
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // Type of the resource.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
    }
    
    interface BackendBucketList {
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // A list of BackendBucket resources.
        items?: BackendBucket[],        
        // Type of resource.
        kind?: string,
        // [Output Only] A token used to continue a truncated list request.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface BackendService {
        // Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE. If set to 0, the cookie is non-persistent and lasts only until the end of the browser session (or equivalent). The maximum allowed value for TTL is one day.
        // 
        // When the load balancing scheme is INTERNAL, this field is not used.
        affinityCookieTtlSec?: number,
        // The list of backends that serve this BackendService.
        backends?: Backend[],        
        // Cloud CDN configuration for this BackendService.
        cdnPolicy?: BackendServiceCdnPolicy,
        // 
        connectionDraining?: ConnectionDraining,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // If true, enable Cloud CDN for this BackendService.
        // 
        // When the load balancing scheme is INTERNAL, this field is not used.
        enableCDN?: boolean,
        // Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a BackendService. An up-to-date fingerprint must be provided in order to update the BackendService.
        fingerprint?: string,
        // The list of URLs to the HttpHealthCheck or HttpsHealthCheck resource for health checking this BackendService. Currently at most one health check can be specified, and a health check is required for GCE backend services. A health check must not be specified for GAE app backend and Cloud Function backend.
        // 
        // For internal load balancing, a URL to a HealthCheck resource must be specified instead.
        healthChecks?: string[],        
        // 
        iap?: BackendServiceIAP,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of resource. Always compute#backendService for backend services.
        kind?: string,
        // 
        loadBalancingScheme?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // Deprecated in favor of portName. The TCP port to connect on the backend. The default value is 80.
        // 
        // This cannot be used for internal load balancing.
        port?: number,
        // Name of backend port. The same name should appear in the instance groups referenced by this service. Required when the load balancing scheme is EXTERNAL.
        // 
        // When the load balancing scheme is INTERNAL, this field is not used.
        portName?: string,
        // The protocol this BackendService uses to communicate with backends.
        // 
        // Possible values are HTTP, HTTPS, TCP, and SSL. The default is HTTP.
        // 
        // For internal load balancing, the possible values are TCP and UDP, and the default is TCP.
        protocol?: string,
        // [Output Only] URL of the region where the regional backend service resides. This field is not applicable to global backend services.
        region?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // Type of session affinity to use. The default is NONE.
        // 
        // When the load balancing scheme is EXTERNAL, can be NONE, CLIENT_IP, or GENERATED_COOKIE.
        // 
        // When the load balancing scheme is INTERNAL, can be NONE, CLIENT_IP, CLIENT_IP_PROTO, or CLIENT_IP_PORT_PROTO.
        // 
        // When the protocol is UDP, this field is not used.
        sessionAffinity?: string,
        // How many seconds to wait for the backend before considering it a failed request. Default is 30 seconds.
        timeoutSec?: number,
    }
    
    interface BackendServiceAggregatedList {
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // A map of scoped BackendService lists.
        items?: any,
        // Type of resource.
        kind?: string,
        // [Output Only] A token used to continue a truncated list request.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface BackendServiceCdnPolicy {
        // The CacheKeyPolicy for this CdnPolicy.
        cacheKeyPolicy?: CacheKeyPolicy,
    }
    
    interface BackendServiceGroupHealth {
        // 
        healthStatus?: HealthStatus[],        
        // [Output Only] Type of resource. Always compute#backendServiceGroupHealth for the health of backend services.
        kind?: string,
    }
    
    interface BackendServiceIAP {
        // 
        enabled?: boolean,
        // 
        oauth2ClientId?: string,
        // 
        oauth2ClientSecret?: string,
        // [Output Only] SHA256 hash value for the field oauth2_client_secret above.
        oauth2ClientSecretSha256?: string,
    }
    
    interface BackendServiceList {
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // A list of BackendService resources.
        items?: BackendService[],        
        // [Output Only] Type of resource. Always compute#backendServiceList for lists of backend services.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface BackendServicesScopedList {
        // List of BackendServices contained in this scope.
        backendServices?: BackendService[],        
        // Informational warning which replaces the list of backend services when the list is empty.
        warning?: {        
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
        },        
    }
    
    interface CacheInvalidationRule {
        // If set, this invalidation rule will only apply to requests with a Host header matching host.
        host?: string,
        // 
        path?: string,
    }
    
    interface CacheKeyPolicy {
        // If true, requests to different hosts will be cached separately.
        includeHost?: boolean,
        // If true, http and https requests will be cached separately.
        includeProtocol?: boolean,
        // If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist. If neither is set, the entire query string will be included. If false, the query string will be excluded from the cache key entirely.
        includeQueryString?: boolean,
        // Names of query string parameters to exclude in cache keys. All other parameters will be included. Either specify query_string_whitelist or query_string_blacklist, not both. '&' and '=' will be percent encoded and not treated as delimiters.
        queryStringBlacklist?: string[],        
        // Names of query string parameters to include in cache keys. All other parameters will be excluded. Either specify query_string_whitelist or query_string_blacklist, not both. '&' and '=' will be percent encoded and not treated as delimiters.
        queryStringWhitelist?: string[],        
    }
    
    interface Commitment {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] Commitment end time in RFC3339 text format.
        endTimestamp?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#commitment for commitments.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // The plan for this commitment, which determines duration and discount rate. The currently supported plans are TWELVE_MONTH (1 year), and THIRTY_SIX_MONTH (3 years).
        plan?: string,
        // [Output Only] URL of the region where this commitment may be used.
        region?: string,
        // List of commitment amounts for particular resources. Note that VCPU and MEMORY resource commitments must occur together.
        resources?: ResourceCommitment[],        
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // [Output Only] Commitment start time in RFC3339 text format.
        startTimestamp?: string,
        // [Output Only] Status of the commitment with regards to eventual expiration (each commitment has an end date defined). One of the following values: NOT_YET_ACTIVE, ACTIVE, EXPIRED.
        status?: string,
        // [Output Only] An optional, human-readable explanation of the status.
        statusMessage?: string,
    }
    
    interface CommitmentAggregatedList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // Commitments by scope.
        items?: any,
        // [Output Only] Type of resource. Always compute#commitmentAggregatedList for aggregated lists of commitments.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface CommitmentList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A list of Commitment resources.
        items?: Commitment[],        
        // [Output Only] Type of resource. Always compute#commitmentList for lists of commitments.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface CommitmentsScopedList {
        // [Output Only] List of commitments contained in this scope.
        commitments?: Commitment[],        
        // [Output Only] Informational warning which replaces the list of commitments when the list is empty.
        warning?: {        
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
        },        
    }
    
    interface ConnectionDraining {
        // Time for which instance will be drained (not accept new connections, but still work to finish started).
        drainingTimeoutSec?: number,
    }
    
    interface CustomerEncryptionKey {
        // Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.
        rawKey?: string,
        // [Output only] The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource.
        sha256?: string,
    }
    
    interface CustomerEncryptionKeyProtectedDisk {
        // Decrypts data associated with the disk with a customer-supplied encryption key.
        diskEncryptionKey?: CustomerEncryptionKey,
        // Specifies a valid partial or full URL to an existing Persistent Disk resource. This field is only applicable for persistent disks.
        source?: string,
    }
    
    interface DeprecationStatus {
        // An optional RFC3339 timestamp on or after which the state of this resource is intended to change to DELETED. This is only informational and the status will not change unless the client explicitly changes it.
        deleted?: string,
        // An optional RFC3339 timestamp on or after which the state of this resource is intended to change to DEPRECATED. This is only informational and the status will not change unless the client explicitly changes it.
        deprecated?: string,
        // An optional RFC3339 timestamp on or after which the state of this resource is intended to change to OBSOLETE. This is only informational and the status will not change unless the client explicitly changes it.
        obsolete?: string,
        // The URL of the suggested replacement for a deprecated resource. The suggested replacement resource must be the same kind of resource as the deprecated resource.
        replacement?: string,
        // The deprecation state of this resource. This can be DEPRECATED, OBSOLETE, or DELETED. Operations which create a new resource using a DEPRECATED resource will return successfully, but with a warning indicating the deprecated resource and recommending its replacement. Operations which use OBSOLETE or DELETED resources will be rejected and result in an error.
        state?: string,
    }
    
    interface Disk {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // Encrypts the disk using a customer-supplied encryption key.
        // 
        // After you encrypt a disk with a customer-supplied key, you must provide the same key if you use the disk later (e.g. to create a disk snapshot or an image, or to attach the disk to a virtual machine).
        // 
        // Customer-supplied encryption keys do not protect access to metadata of the disk.
        // 
        // If you do not provide an encryption key when creating the disk, then the disk will be encrypted using an automatically generated key and you do not need to provide a key to use the disk later.
        diskEncryptionKey?: CustomerEncryptionKey,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#disk for disks.
        kind?: string,
        // A fingerprint for the labels being applied to this disk, which is essentially a hash of the labels set used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels.
        // 
        // To see the latest fingerprint, make a get() request to retrieve a disk.
        labelFingerprint?: string,
        // Labels to apply to this disk. These can be later modified by the setLabels method.
        labels?: any,
        // [Output Only] Last attach timestamp in RFC3339 text format.
        lastAttachTimestamp?: string,
        // [Output Only] Last detach timestamp in RFC3339 text format.
        lastDetachTimestamp?: string,
        // Any applicable publicly visible licenses.
        licenses?: string[],        
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // Internal use only.
        options?: string,
        // [Output Only] Server-defined fully-qualified URL for this resource.
        selfLink?: string,
        // Size of the persistent disk, specified in GB. You can specify this field when creating a persistent disk using the sourceImage or sourceSnapshot parameter, or specify it alone to create an empty persistent disk.
        // 
        // If you specify this field along with sourceImage or sourceSnapshot, the value of sizeGb must not be less than the size of the sourceImage or the size of the snapshot.
        sizeGb?: string,
        // The source image used to create this disk. If the source image is deleted, this field will not be set.
        // 
        // To create a disk with one of the public operating system images, specify the image by its family name. For example, specify family/debian-8 to use the latest Debian 8 image:
        // 
        // projects/debian-cloud/global/images/family/debian-8 
        // 
        // Alternatively, use a specific version of a public operating system image:
        // 
        // projects/debian-cloud/global/images/debian-8-jessie-vYYYYMMDD 
        // 
        // To create a disk with a private image that you created, specify the image name in the following format:
        // 
        // global/images/my-private-image 
        // 
        // You can also specify a private image by its image family, which returns the latest version of the image in that family. Replace the image name with family/family-name:
        // 
        // global/images/family/my-private-family
        sourceImage?: string,
        // The customer-supplied encryption key of the source image. Required if the source image is protected by a customer-supplied encryption key.
        sourceImageEncryptionKey?: CustomerEncryptionKey,
        // [Output Only] The ID value of the image used to create this disk. This value identifies the exact image that was used to create this persistent disk. For example, if you created the persistent disk from an image that was later deleted and recreated under the same name, the source image ID would identify the exact version of the image that was used.
        sourceImageId?: string,
        // The source snapshot used to create this disk. You can provide this as a partial or full URL to the resource. For example, the following are valid values:  
        // - https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot 
        // - projects/project/global/snapshots/snapshot 
        // - global/snapshots/snapshot
        sourceSnapshot?: string,
        // The customer-supplied encryption key of the source snapshot. Required if the source snapshot is protected by a customer-supplied encryption key.
        sourceSnapshotEncryptionKey?: CustomerEncryptionKey,
        // [Output Only] The unique ID of the snapshot used to create this disk. This value identifies the exact snapshot that was used to create this persistent disk. For example, if you created the persistent disk from a snapshot that was later deleted and recreated under the same name, the source snapshot ID would identify the exact version of the snapshot that was used.
        sourceSnapshotId?: string,
        // [Output Only] The status of disk creation.
        status?: string,
        // URL of the disk type resource describing which disk type to use to create the disk. Provide this when creating the disk.
        type?: string,
        // [Output Only] Links to the users of the disk (attached instances) in form: project/zones/zone/instances/instance
        users?: string[],        
        // [Output Only] URL of the zone where the disk resides.
        zone?: string,
    }
    
    interface DiskAggregatedList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A map of scoped disk lists.
        items?: any,
        // [Output Only] Type of resource. Always compute#diskAggregatedList for aggregated lists of persistent disks.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results. Acceptable values are 0 to 500, inclusive. (Default: 500)
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface DiskList {
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // A list of Disk resources.
        items?: Disk[],        
        // [Output Only] Type of resource. Always compute#diskList for lists of disks.
        kind?: string,
        // This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface DiskMoveRequest {
        // The URL of the destination zone to move the disk. This can be a full or partial URL. For example, the following are all valid URLs to a zone:  
        // - https://www.googleapis.com/compute/v1/projects/project/zones/zone 
        // - projects/project/zones/zone 
        // - zones/zone
        destinationZone?: string,
        // The URL of the target disk to move. This can be a full or partial URL. For example, the following are all valid URLs to a disk:  
        // - https://www.googleapis.com/compute/v1/projects/project/zones/zone/disks/disk 
        // - projects/project/zones/zone/disks/disk 
        // - zones/zone/disks/disk
        targetDisk?: string,
    }
    
    interface DiskType {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // [Output Only] Server-defined default disk size in GB.
        defaultDiskSizeGb?: string,
        // [Output Only] The deprecation status associated with this disk type.
        deprecated?: DeprecationStatus,
        // [Output Only] An optional description of this resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#diskType for disk types.
        kind?: string,
        // [Output Only] Name of the resource.
        name?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // [Output Only] An optional textual description of the valid disk size, such as "10GB-10TB".
        validDiskSize?: string,
        // [Output Only] URL of the zone where the disk type resides.
        zone?: string,
    }
    
    interface DiskTypeAggregatedList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A map of scoped disk type lists.
        items?: any,
        // [Output Only] Type of resource. Always compute#diskTypeAggregatedList.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface DiskTypeList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of Disk Type resources.
        items?: DiskType[],        
        // [Output Only] Type of resource. Always compute#diskTypeList for disk types.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface DiskTypesScopedList {
        // [Output Only] List of disk types contained in this scope.
        diskTypes?: DiskType[],        
        // [Output Only] Informational warning which replaces the list of disk types when the list is empty.
        warning?: {        
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
        },        
    }
    
    interface DisksResizeRequest {
        // The new size of the persistent disk, which is specified in GB.
        sizeGb?: string,
    }
    
    interface DisksScopedList {
        // [Output Only] List of disks contained in this scope.
        disks?: Disk[],        
        // [Output Only] Informational warning which replaces the list of disks when the list is empty.
        warning?: {        
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
        },        
    }
    
    interface Firewall {
        // The list of ALLOW rules specified by this firewall. Each rule specifies a protocol and port-range tuple that describes a permitted connection.
        allowed?: {        
            // The IP protocol to which this rule applies. The protocol type is required when creating a firewall rule. This value can either be one of the following well known protocol strings (tcp, udp, icmp, esp, ah, sctp), or the IP protocol number.
            IPProtocol?: string,
            // An optional list of ports to which this rule applies. This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port.
            // 
            // Example inputs include: ["22"], ["80","443"], and ["12345-12349"].
            ports?: string[],            
        }[],        
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#firewall for firewall rules.
        kind?: string,
        // Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // URL of the network resource for this firewall rule. If not specified when creating a firewall rule, the default network is used:
        // global/networks/default
        // If you choose to specify this property, you can specify the network as a full or partial URL. For example, the following are all valid URLs:  
        // - https://www.googleapis.com/compute/v1/projects/myproject/global/networks/my-network 
        // - projects/myproject/global/networks/my-network 
        // - global/networks/default
        network?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // If source ranges are specified, the firewall will apply only to traffic that has source IP address in these ranges. These ranges must be expressed in CIDR format. One or both of sourceRanges and sourceTags may be set. If both properties are set, the firewall will apply to traffic that has source IP address within sourceRanges OR the source IP that belongs to a tag listed in the sourceTags property. The connection does not need to match both properties for the firewall to apply. Only IPv4 is supported.
        sourceRanges?: string[],        
        // If source tags are specified, the firewall will apply only to traffic with source IP that belongs to a tag listed in source tags. Source tags cannot be used to control traffic to an instance's external IP address. Because tags are associated with an instance, not an IP address. One or both of sourceRanges and sourceTags may be set. If both properties are set, the firewall will apply to traffic that has source IP address within sourceRanges OR the source IP that belongs to a tag listed in the sourceTags property. The connection does not need to match both properties for the firewall to apply.
        sourceTags?: string[],        
        // A list of instance tags indicating sets of instances located in the network that may make network connections as specified in allowed[]. If no targetTags are specified, the firewall rule applies to all instances on the specified network.
        targetTags?: string[],        
    }
    
    interface FirewallList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of Firewall resources.
        items?: Firewall[],        
        // [Output Only] Type of resource. Always compute#firewallList for lists of firewalls.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface ForwardingRule {
        // The IP address that this forwarding rule is serving on behalf of.
        // 
        // For global forwarding rules, the address must be a global IP. For regional forwarding rules, the address must live in the same region as the forwarding rule. By default, this field is empty and an ephemeral IPv4 address from the same scope (global or regional) will be assigned. A regional forwarding rule supports IPv4 only. A global forwarding rule supports either IPv4 or IPv6.
        // 
        // When the load balancing scheme is INTERNAL, this can only be an RFC 1918 IP address belonging to the network/subnetwork configured for the forwarding rule. A reserved address cannot be used. If the field is empty, the IP address will be automatically allocated from the internal IP range of the subnetwork or network configured for this forwarding rule.
        IPAddress?: string,
        // The IP protocol to which this rule applies. Valid options are TCP, UDP, ESP, AH, SCTP or ICMP.
        // 
        // When the load balancing scheme is INTERNAL, only TCP and UDP are valid.
        IPProtocol?: string,
        // This field is not used for external load balancing.
        // 
        // For internal load balancing, this field identifies the BackendService resource to receive the matched traffic.
        backendService?: string,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // The IP Version that will be used by this forwarding rule. Valid options are IPV4 or IPV6. This can only be specified for a global forwarding rule.
        ipVersion?: string,
        // [Output Only] Type of the resource. Always compute#forwardingRule for Forwarding Rule resources.
        kind?: string,
        // This signifies what the ForwardingRule will be used for and can only take the following values: INTERNAL, EXTERNAL The value of INTERNAL means that this will be used for Internal Network Load Balancing (TCP, UDP). The value of EXTERNAL means that this will be used for External Load Balancing (HTTP(S) LB, External TCP/UDP LB, SSL Proxy)
        loadBalancingScheme?: string,
        // Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // This field is not used for external load balancing.
        // 
        // For internal load balancing, this field identifies the network that the load balanced IP should belong to for this Forwarding Rule. If this field is not specified, the default network will be used.
        network?: string,
        // This field is used along with the target field for TargetHttpProxy, TargetHttpsProxy, TargetSslProxy, TargetTcpProxy, TargetVpnGateway, TargetPool, TargetInstance.
        // 
        // Applicable only when IPProtocol is TCP, UDP, or SCTP, only packets addressed to ports in the specified range will be forwarded to target. Forwarding rules with the same [IPAddress, IPProtocol] pair must have disjoint port ranges.
        // 
        // Some types of forwarding target have constraints on the acceptable ports:  
        // - TargetHttpProxy: 80, 8080 
        // - TargetHttpsProxy: 443 
        // - TargetTcpProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700, 993, 995 
        // - TargetSslProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700, 993, 995 
        // - TargetVpnGateway: 500, 4500
        // -
        portRange?: string,
        // This field is used along with the backend_service field for internal load balancing.
        // 
        // When the load balancing scheme is INTERNAL, a single port or a comma separated list of ports can be configured. Only packets addressed to these ports will be forwarded to the backends configured with this forwarding rule.
        // 
        // You may specify a maximum of up to 5 ports.
        ports?: string[],        
        // [Output Only] URL of the region where the regional forwarding rule resides. This field is not applicable to global forwarding rules.
        region?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // This field is not used for external load balancing.
        // 
        // For internal load balancing, this field identifies the subnetwork that the load balanced IP should belong to for this Forwarding Rule.
        // 
        // If the network specified is in auto subnet mode, this field is optional. However, if the network is in custom subnet mode, a subnetwork must be specified.
        subnetwork?: string,
        // The URL of the target resource to receive the matched traffic. For regional forwarding rules, this target must live in the same region as the forwarding rule. For global forwarding rules, this target must be a global load balancing resource. The forwarded traffic must be of a type appropriate to the target object.
        // 
        // This field is not used for internal load balancing.
        target?: string,
    }
    
    interface ForwardingRuleAggregatedList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A map of scoped forwarding rule lists.
        items?: any,
        // [Output Only] Type of resource. Always compute#forwardingRuleAggregatedList for lists of forwarding rules.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface ForwardingRuleList {
        // [Output Only] Unique identifier for the resource. Set by the server.
        id?: string,
        // A list of ForwardingRule resources.
        items?: ForwardingRule[],        
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface ForwardingRulesScopedList {
        // List of forwarding rules contained in this scope.
        forwardingRules?: ForwardingRule[],        
        // Informational warning which replaces the list of forwarding rules when the list is empty.
        warning?: {        
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
        },        
    }
    
    interface GlobalSetLabelsRequest {
        // The fingerprint of the previous set of labels for this resource, used to detect conflicts. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash when updating or changing labels. Make a get() request to the resource to get the latest fingerprint.
        labelFingerprint?: string,
        // A list of labels to apply for this resource. Each label key & value must comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. For example, "webserver-frontend": "images". A label value can also be empty (e.g. "my-label": "").
        labels?: any,
    }
    
    interface GuestOsFeature {
        // The type of supported feature. Currently only VIRTIO_SCSI_MULTIQUEUE is supported. For newer Windows images, the server might also populate this property with the value WINDOWS to indicate that this is a Windows image. This value is purely informational and does not enable or disable any features.
        type?: string,
    }
    
    interface HTTPHealthCheck {
        // The value of the host header in the HTTP health check request. If left empty (default value), the IP on behalf of which this health check is performed will be used.
        host?: string,
        // The TCP port number for the health check request. The default value is 80. Valid values are 1 through 65535.
        port?: number,
        // Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.
        portName?: string,
        // Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. The default is NONE.
        proxyHeader?: string,
        // The request path of the HTTP health check request. The default value is /.
        requestPath?: string,
    }
    
    interface HTTPSHealthCheck {
        // The value of the host header in the HTTPS health check request. If left empty (default value), the IP on behalf of which this health check is performed will be used.
        host?: string,
        // The TCP port number for the health check request. The default value is 443. Valid values are 1 through 65535.
        port?: number,
        // Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.
        portName?: string,
        // Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. The default is NONE.
        proxyHeader?: string,
        // The request path of the HTTPS health check request. The default value is /.
        requestPath?: string,
    }
    
    interface HealthCheck {
        // How often (in seconds) to send a health check. The default value is 5 seconds.
        checkIntervalSec?: number,
        // [Output Only] Creation timestamp in 3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.
        healthyThreshold?: number,
        // 
        httpHealthCheck?: HTTPHealthCheck,
        // 
        httpsHealthCheck?: HTTPSHealthCheck,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // Type of the resource.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // 
        sslHealthCheck?: SSLHealthCheck,
        // 
        tcpHealthCheck?: TCPHealthCheck,
        // How long (in seconds) to wait before claiming failure. The default value is 5 seconds. It is invalid for timeoutSec to have greater value than checkIntervalSec.
        timeoutSec?: number,
        // Specifies the type of the healthCheck, either TCP, SSL, HTTP or HTTPS. If not specified, the default is TCP. Exactly one of the protocol-specific health check field must be specified, which must match type field.
        type?: string,
        // A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.
        unhealthyThreshold?: number,
    }
    
    interface HealthCheckList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A list of HealthCheck resources.
        items?: HealthCheck[],        
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface HealthCheckReference {
        // 
        healthCheck?: string,
    }
    
    interface HealthStatus {
        // Health state of the instance.
        healthState?: string,
        // URL of the instance resource.
        instance?: string,
        // The IP address represented by this resource.
        ipAddress?: string,
        // The port on the instance.
        port?: number,
    }
    
    interface HostRule {
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // The list of host patterns to match. They must be valid hostnames, except * will match any string of ([a-z0-9-.]*). In that case, * must be the first character and must be followed in the pattern by either - or ..
        hosts?: string[],        
        // The name of the PathMatcher to use to match the path portion of the URL if the hostRule matches the URL's host portion.
        pathMatcher?: string,
    }
    
    interface HttpHealthCheck {
        // How often (in seconds) to send a health check. The default value is 5 seconds.
        checkIntervalSec?: number,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.
        healthyThreshold?: number,
        // The value of the host header in the HTTP health check request. If left empty (default value), the public IP on behalf of which this health check is performed will be used.
        host?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#httpHealthCheck for HTTP health checks.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // The TCP port number for the HTTP health check request. The default value is 80.
        port?: number,
        // The request path of the HTTP health check request. The default value is /.
        requestPath?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // How long (in seconds) to wait before claiming failure. The default value is 5 seconds. It is invalid for timeoutSec to have greater value than checkIntervalSec.
        timeoutSec?: number,
        // A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.
        unhealthyThreshold?: number,
    }
    
    interface HttpHealthCheckList {
        // [Output Only] Unique identifier for the resource. Defined by the server.
        id?: string,
        // A list of HttpHealthCheck resources.
        items?: HttpHealthCheck[],        
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface HttpsHealthCheck {
        // How often (in seconds) to send a health check. The default value is 5 seconds.
        checkIntervalSec?: number,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.
        healthyThreshold?: number,
        // The value of the host header in the HTTPS health check request. If left empty (default value), the public IP on behalf of which this health check is performed will be used.
        host?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // Type of the resource.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // The TCP port number for the HTTPS health check request. The default value is 443.
        port?: number,
        // The request path of the HTTPS health check request. The default value is "/".
        requestPath?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // How long (in seconds) to wait before claiming failure. The default value is 5 seconds. It is invalid for timeoutSec to have a greater value than checkIntervalSec.
        timeoutSec?: number,
        // A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.
        unhealthyThreshold?: number,
    }
    
    interface HttpsHealthCheckList {
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // A list of HttpsHealthCheck resources.
        items?: HttpsHealthCheck[],        
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface Image {
        // Size of the image tar.gz archive stored in Google Cloud Storage (in bytes).
        archiveSizeBytes?: string,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // The deprecation status associated with this image.
        deprecated?: DeprecationStatus,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // Size of the image when restored onto a persistent disk (in GB).
        diskSizeGb?: string,
        // The name of the image family to which this image belongs. You can create disks by specifying an image family instead of a specific image name. The image family always returns its latest image that is not deprecated. The name of the image family must comply with RFC1035.
        family?: string,
        // A list of features to enable on the guest OS. Applicable for bootable images only. Currently, only one feature can be enabled, VIRTIO_SCSI_MULTIQUEUE, which allows each virtual CPU to have its own queue. For Windows images, you can only enable VIRTIO_SCSI_MULTIQUEUE on images with driver version 1.2.0.1621 or higher. Linux images with kernel versions 3.17 and higher will support VIRTIO_SCSI_MULTIQUEUE.
        // 
        // For new Windows images, the server might also populate this field with the value WINDOWS, to indicate that this is a Windows image. This value is purely informational and does not enable or disable any features.
        guestOsFeatures?: GuestOsFeature[],        
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // Encrypts the image using a customer-supplied encryption key.
        // 
        // After you encrypt an image with a customer-supplied key, you must provide the same key if you use the image later (e.g. to create a disk from the image).
        // 
        // Customer-supplied encryption keys do not protect access to metadata of the disk.
        // 
        // If you do not provide an encryption key when creating the image, then the disk will be encrypted using an automatically generated key and you do not need to provide a key to use the image later.
        imageEncryptionKey?: CustomerEncryptionKey,
        // [Output Only] Type of the resource. Always compute#image for images.
        kind?: string,
        // A fingerprint for the labels being applied to this image, which is essentially a hash of the labels used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels.
        // 
        // To see the latest fingerprint, make a get() request to retrieve an image.
        labelFingerprint?: string,
        // Labels to apply to this image. These can be later modified by the setLabels method.
        labels?: any,
        // Any applicable license URI.
        licenses?: string[],        
        // Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // The parameters of the raw disk image.
        rawDisk?: {        
            // The format used to encode and transmit the block device, which should be TAR. This is just a container and transmission format and not a runtime format. Provided by the client when the disk image is created.
            containerType?: string,
            // An optional SHA1 checksum of the disk image before unpackaging; provided by the client when the disk image is created.
            sha1Checksum?: string,
            // The full Google Cloud Storage URL where the disk image is stored. You must provide either this property or the sourceDisk property but not both.
            source?: string,
        },        
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // URL of the source disk used to create this image. This can be a full or valid partial URL. You must provide either this property or the rawDisk.source property but not both to create an image. For example, the following are valid values:  
        // - https://www.googleapis.com/compute/v1/projects/project/zones/zone/disks/disk 
        // - projects/project/zones/zone/disks/disk 
        // - zones/zone/disks/disk
        sourceDisk?: string,
        // The customer-supplied encryption key of the source disk. Required if the source disk is protected by a customer-supplied encryption key.
        sourceDiskEncryptionKey?: CustomerEncryptionKey,
        // The ID value of the disk used to create this image. This value may be used to determine whether the image was taken from the current or a previous instance of a given disk name.
        sourceDiskId?: string,
        // The type of the image used to create this disk. The default and only value is RAW
        sourceType?: string,
        // [Output Only] The status of the image. An image can be used to create other resources, such as instances, only after the image has been successfully created and the status is set to READY. Possible values are FAILED, PENDING, or READY.
        status?: string,
    }
    
    interface ImageList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of Image resources.
        items?: Image[],        
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface Instance {
        // Allows this instance to send and receive packets with non-matching destination or source IPs. This is required if you plan to use this instance to forward routes. For more information, see Enabling IP Forwarding.
        canIpForward?: boolean,
        // [Output Only] The CPU platform used by this instance.
        cpuPlatform?: string,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // Array of disks associated with this instance. Persistent disks must be created before you can assign them.
        disks?: AttachedDisk[],        
        // List of the type and count of accelerator cards attached to the instance.
        guestAccelerators?: AcceleratorConfig[],        
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#instance for instances.
        kind?: string,
        // A fingerprint for this request, which is essentially a hash of the metadata's contents and used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update metadata. You must always provide an up-to-date fingerprint hash in order to update or change metadata.
        // 
        // To see the latest fingerprint, make get() request to the instance.
        labelFingerprint?: string,
        // Labels to apply to this instance. These can be later modified by the setLabels method.
        labels?: any,
        // Full or partial URL of the machine type resource to use for this instance, in the format: zones/zone/machineTypes/machine-type. This is provided by the client when the instance is created. For example, the following is a valid partial url to a predefined machine type:
        // 
        // zones/us-central1-f/machineTypes/n1-standard-1 
        // 
        // To create a custom machine type, provide a URL to a machine type in the following format, where CPUS is 1 or an even number up to 32 (2, 4, 6, ... 24, etc), and MEMORY is the total memory for this instance. Memory must be a multiple of 256 MB and must be supplied in MB (e.g. 5 GB of memory is 5120 MB):
        // 
        // zones/zone/machineTypes/custom-CPUS-MEMORY 
        // 
        // For example: zones/us-central1-f/machineTypes/custom-4-5120 
        // 
        // For a full list of restrictions, read the Specifications for custom machine types.
        machineType?: string,
        // The metadata key/value pairs assigned to this instance. This includes custom metadata and predefined keys.
        metadata?: Metadata,
        // The name of the resource, provided by the client when initially creating the resource. The resource name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // An array of configurations for this interface. This specifies how this interface is configured to interact with other network services, such as connecting to the internet. Only one interface is supported per instance.
        networkInterfaces?: NetworkInterface[],        
        // Sets the scheduling options for this instance.
        scheduling?: Scheduling,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
        // A list of service accounts, with their specified scopes, authorized for this instance. Only one service account per VM instance is supported.
        // 
        // Service accounts generate access tokens that can be accessed through the metadata server and used to authenticate applications on the instance. See Service Accounts for more information.
        serviceAccounts?: ServiceAccount[],        
        // [Output Only] Whether a VM has been restricted for start because Compute Engine has detected suspicious activity.
        startRestricted?: boolean,
        // [Output Only] The status of the instance. One of the following values: PROVISIONING, STAGING, RUNNING, STOPPING, SUSPENDING, SUSPENDED, and TERMINATED.
        status?: string,
        // [Output Only] An optional, human-readable explanation of the status.
        statusMessage?: string,
        // A list of tags to apply to this instance. Tags are used to identify valid sources or targets for network firewalls and are specified by the client during instance creation. The tags can be later modified by the setTags method. Each tag within the list must comply with RFC1035.
        tags?: Tags,
        // [Output Only] URL of the zone where the instance resides.
        zone?: string,
    }
    
    interface InstanceAggregatedList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A map of scoped instance lists.
        items?: any,
        // [Output Only] Type of resource. Always compute#instanceAggregatedList for aggregated lists of Instance resources.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface InstanceGroup {
        // [Output Only] The creation timestamp for this instance group in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] The fingerprint of the named ports. The system uses this fingerprint to detect conflicts when multiple users change the named ports concurrently.
        fingerprint?: string,
        // [Output Only] A unique identifier for this instance group, generated by the server.
        id?: string,
        // [Output Only] The resource type, which is always compute#instanceGroup for instance groups.
        kind?: string,
        // The name of the instance group. The name must be 1-63 characters long, and comply with RFC1035.
        name?: string,
        // Assigns a name to a port number. For example: {name: "http", port: 80}
        // 
        // This allows the system to reference ports by the assigned name instead of a port number. Named ports can also contain multiple ports. For example: [{name: "http", port: 80},{name: "http", port: 8080}] 
        // 
        // Named ports apply to all instances in this instance group.
        namedPorts?: NamedPort[],        
        // The URL of the network to which all instances in the instance group belong.
        network?: string,
        // The URL of the region where the instance group is located (for regional resources).
        region?: string,
        // [Output Only] The URL for this instance group. The server generates this URL.
        selfLink?: string,
        // [Output Only] The total number of instances in the instance group.
        size?: number,
        // The URL of the subnetwork to which all instances in the instance group belong.
        subnetwork?: string,
        // [Output Only] The URL of the zone where the instance group is located (for zonal resources).
        zone?: string,
    }
    
    interface InstanceGroupAggregatedList {
        // [Output Only] A unique identifier for this aggregated list of instance groups. The server generates this identifier.
        id?: string,
        // A map of scoped instance group lists.
        items?: any,
        // [Output Only] The resource type, which is always compute#instanceGroupAggregatedList for aggregated lists of instance groups.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] The URL for this resource type. The server generates this URL.
        selfLink?: string,
    }
    
    interface InstanceGroupList {
        // [Output Only] A unique identifier for this list of instance groups. The server generates this identifier.
        id?: string,
        // A list of instance groups.
        items?: InstanceGroup[],        
        // [Output Only] The resource type, which is always compute#instanceGroupList for instance group lists.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] The URL for this resource type. The server generates this URL.
        selfLink?: string,
    }
    
    interface InstanceGroupManager {
        // The base instance name to use for instances in this group. The value must be 1-58 characters long. Instances are named by appending a hyphen and a random four-character string to the base instance name. The base instance name must comply with RFC1035.
        baseInstanceName?: string,
        // [Output Only] The creation timestamp for this managed instance group in RFC3339 text format.
        creationTimestamp?: string,
        // [Output Only] The list of instance actions and the number of instances in this managed instance group that are scheduled for each of those actions.
        currentActions?: InstanceGroupManagerActionsSummary,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] The fingerprint of the resource data. You can use this optional field for optimistic locking when you update the resource.
        fingerprint?: string,
        // [Output Only] A unique identifier for this resource type. The server generates this identifier.
        id?: string,
        // [Output Only] The URL of the Instance Group resource.
        instanceGroup?: string,
        // The URL of the instance template that is specified for this managed instance group. The group uses this template to create all new instances in the managed instance group.
        instanceTemplate?: string,
        // [Output Only] The resource type, which is always compute#instanceGroupManager for managed instance groups.
        kind?: string,
        // The name of the managed instance group. The name must be 1-63 characters long, and comply with RFC1035.
        name?: string,
        // Named ports configured for the Instance Groups complementary to this Instance Group Manager.
        namedPorts?: NamedPort[],        
        // [Output Only] The URL of the region where the managed instance group resides (for regional resources).
        region?: string,
        // [Output Only] The URL for this managed instance group. The server defines this URL.
        selfLink?: string,
        // The URLs for all TargetPool resources to which instances in the instanceGroup field are added. The target pools automatically apply to all of the instances in the managed instance group.
        targetPools?: string[],        
        // The target number of running instances for this managed instance group. Deleting or abandoning instances reduces this number. Resizing the group changes this number.
        targetSize?: number,
        // [Output Only] The URL of the zone where the managed instance group is located (for zonal resources).
        zone?: string,
    }
    
    interface InstanceGroupManagerActionsSummary {
        // [Output Only] The total number of instances in the managed instance group that are scheduled to be abandoned. Abandoning an instance removes it from the managed instance group without deleting it.
        abandoning?: number,
        // [Output Only] The number of instances in the managed instance group that are scheduled to be created or are currently being created. If the group fails to create any of these instances, it tries again until it creates the instance successfully.
        // 
        // If you have disabled creation retries, this field will not be populated; instead, the creatingWithoutRetries field will be populated.
        creating?: number,
        // [Output Only] The number of instances that the managed instance group will attempt to create. The group attempts to create each instance only once. If the group fails to create any of these instances, it decreases the group's targetSize value accordingly.
        creatingWithoutRetries?: number,
        // [Output Only] The number of instances in the managed instance group that are scheduled to be deleted or are currently being deleted.
        deleting?: number,
        // [Output Only] The number of instances in the managed instance group that are running and have no scheduled actions.
        none?: number,
        // [Output Only] The number of instances in the managed instance group that are scheduled to be recreated or are currently being being recreated. Recreating an instance deletes the existing root persistent disk and creates a new disk from the image that is defined in the instance template.
        recreating?: number,
        // [Output Only] The number of instances in the managed instance group that are being reconfigured with properties that do not require a restart or a recreate action. For example, setting or removing target pools for the instance.
        refreshing?: number,
        // [Output Only] The number of instances in the managed instance group that are scheduled to be restarted or are currently being restarted.
        restarting?: number,
    }
    
    interface InstanceGroupManagerAggregatedList {
        // [Output Only] A unique identifier for this aggregated list of managed instance groups. The server generates this identifier.
        id?: string,
        // [Output Only] A map of filtered managed instance group lists.
        items?: any,
        // [Output Only] The resource type, which is always compute#instanceGroupManagerAggregatedList for an aggregated list of managed instance groups.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] The URL for this resource type. The server generates this URL.
        selfLink?: string,
    }
    
    interface InstanceGroupManagerList {
        // [Output Only] A unique identifier for this resource type. The server generates this identifier.
        id?: string,
        // [Output Only] A list of managed instance groups.
        items?: InstanceGroupManager[],        
        // [Output Only] The resource type, which is always compute#instanceGroupManagerList for a list of managed instance groups.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface InstanceGroupManagersAbandonInstancesRequest {
        // The URLs of one or more instances to abandon. This can be a full URL or a partial URL, such as zones/[ZONE]/instances/[INSTANCE_NAME].
        instances?: string[],        
    }
    
    interface InstanceGroupManagersDeleteInstancesRequest {
        // The URLs of one or more instances to delete. This can be a full URL or a partial URL, such as zones/[ZONE]/instances/[INSTANCE_NAME].
        instances?: string[],        
    }
    
    interface InstanceGroupManagersListManagedInstancesResponse {
        // [Output Only] The list of instances in the managed instance group.
        managedInstances?: ManagedInstance[],        
    }
    
    interface InstanceGroupManagersRecreateInstancesRequest {
        // The URLs of one or more instances to recreate. This can be a full URL or a partial URL, such as zones/[ZONE]/instances/[INSTANCE_NAME].
        instances?: string[],        
    }
    
    interface InstanceGroupManagersScopedList {
        // [Output Only] The list of managed instance groups that are contained in the specified project and zone.
        instanceGroupManagers?: InstanceGroupManager[],        
        // [Output Only] The warning that replaces the list of managed instance groups when the list is empty.
        warning?: {        
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
        },        
    }
    
    interface InstanceGroupManagersSetInstanceTemplateRequest {
        // The URL of the instance template that is specified for this managed instance group. The group uses this template to create all new instances in the managed instance group.
        instanceTemplate?: string,
    }
    
    interface InstanceGroupManagersSetTargetPoolsRequest {
        // The fingerprint of the target pools information. Use this optional property to prevent conflicts when multiple users change the target pools settings concurrently. Obtain the fingerprint with the instanceGroupManagers.get method. Then, include the fingerprint in your request to ensure that you do not overwrite changes that were applied from another concurrent request.
        fingerprint?: string,
        // The list of target pool URLs that instances in this managed instance group belong to. The managed instance group applies these target pools to all of the instances in the group. Existing instances and new instances in the group all receive these target pool settings.
        targetPools?: string[],        
    }
    
    interface InstanceGroupsAddInstancesRequest {
        // The list of instances to add to the instance group.
        instances?: InstanceReference[],        
    }
    
    interface InstanceGroupsListInstances {
        // [Output Only] A unique identifier for this list of instances in the specified instance group. The server generates this identifier.
        id?: string,
        // [Output Only] A list of instances and any named ports that are assigned to those instances.
        items?: InstanceWithNamedPorts[],        
        // [Output Only] The resource type, which is always compute#instanceGroupsListInstances for the list of instances in the specified instance group.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] The URL for this list of instances in the specified instance groups. The server generates this URL.
        selfLink?: string,
    }
    
    interface InstanceGroupsListInstancesRequest {
        // A filter for the state of the instances in the instance group. Valid options are ALL or RUNNING. If you do not specify this parameter the list includes all instances regardless of their state.
        instanceState?: string,
    }
    
    interface InstanceGroupsRemoveInstancesRequest {
        // The list of instances to remove from the instance group.
        instances?: InstanceReference[],        
    }
    
    interface InstanceGroupsScopedList {
        // [Output Only] The list of instance groups that are contained in this scope.
        instanceGroups?: InstanceGroup[],        
        // [Output Only] An informational warning that replaces the list of instance groups when the list is empty.
        warning?: {        
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
        },        
    }
    
    interface InstanceGroupsSetNamedPortsRequest {
        // The fingerprint of the named ports information for this instance group. Use this optional property to prevent conflicts when multiple users change the named ports settings concurrently. Obtain the fingerprint with the instanceGroups.get method. Then, include the fingerprint in your request to ensure that you do not overwrite changes that were applied from another concurrent request.
        fingerprint?: string,
        // The list of named ports to set for this instance group.
        namedPorts?: NamedPort[],        
    }
    
    interface InstanceList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of instances.
        items?: Instance[],        
        // [Output Only] Type of resource. Always compute#instanceList for lists of Instance resources.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface InstanceMoveRequest {
        // The URL of the destination zone to move the instance. This can be a full or partial URL. For example, the following are all valid URLs to a zone:  
        // - https://www.googleapis.com/compute/v1/projects/project/zones/zone 
        // - projects/project/zones/zone 
        // - zones/zone
        destinationZone?: string,
        // The URL of the target instance to move. This can be a full or partial URL. For example, the following are all valid URLs to an instance:  
        // - https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance 
        // - projects/project/zones/zone/instances/instance 
        // - zones/zone/instances/instance
        targetInstance?: string,
    }
    
    interface InstanceProperties {
        // Enables instances created based on this template to send packets with source IP addresses other than their own and receive packets with destination IP addresses other than their own. If these instances will be used as an IP gateway or it will be set as the next-hop in a Route resource, specify true. If unsure, leave this set to false. See the Enable IP forwarding documentation for more information.
        canIpForward?: boolean,
        // An optional text description for the instances that are created from this instance template.
        description?: string,
        // An array of disks that are associated with the instances that are created from this template.
        disks?: AttachedDisk[],        
        // A list of guest accelerator cards' type and count to use for instances created from the instance template.
        guestAccelerators?: AcceleratorConfig[],        
        // Labels to apply to instances that are created from this template.
        labels?: any,
        // The machine type to use for instances that are created from this template.
        machineType?: string,
        // The metadata key/value pairs to assign to instances that are created from this template. These pairs can consist of custom metadata or predefined keys. See Project and instance metadata for more information.
        metadata?: Metadata,
        // An array of network access configurations for this interface.
        networkInterfaces?: NetworkInterface[],        
        // Specifies the scheduling options for the instances that are created from this template.
        scheduling?: Scheduling,
        // A list of service accounts with specified scopes. Access tokens for these service accounts are available to the instances that are created from this template. Use metadata queries to obtain the access tokens for these instances.
        serviceAccounts?: ServiceAccount[],        
        // A list of tags to apply to the instances that are created from this template. The tags identify valid sources or targets for network firewalls. The setTags method can modify this list of tags. Each tag within the list must comply with RFC1035.
        tags?: Tags,
    }
    
    interface InstanceReference {
        // The URL for a specific instance.
        instance?: string,
    }
    
    interface InstanceTemplate {
        // [Output Only] The creation timestamp for this instance template in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] A unique identifier for this instance template. The server defines this identifier.
        id?: string,
        // [Output Only] The resource type, which is always compute#instanceTemplate for instance templates.
        kind?: string,
        // Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // The instance properties for this instance template.
        properties?: InstanceProperties,
        // [Output Only] The URL for this instance template. The server defines this URL.
        selfLink?: string,
    }
    
    interface InstanceTemplateList {
        // [Output Only] A unique identifier for this instance template. The server defines this identifier.
        id?: string,
        // [Output Only] list of InstanceTemplate resources.
        items?: InstanceTemplate[],        
        // [Output Only] The resource type, which is always compute#instanceTemplatesListResponse for instance template lists.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] The URL for this instance template list. The server defines this URL.
        selfLink?: string,
    }
    
    interface InstanceWithNamedPorts {
        // [Output Only] The URL of the instance.
        instance?: string,
        // [Output Only] The named ports that belong to this instance group.
        namedPorts?: NamedPort[],        
        // [Output Only] The status of the instance.
        status?: string,
    }
    
    interface InstancesScopedList {
        // [Output Only] List of instances contained in this scope.
        instances?: Instance[],        
        // [Output Only] Informational warning which replaces the list of instances when the list is empty.
        warning?: {        
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
        },        
    }
    
    interface InstancesSetLabelsRequest {
        // Fingerprint of the previous set of labels for this resource, used to prevent conflicts. Provide the latest fingerprint value when making a request to add or change labels.
        labelFingerprint?: string,
        // 
        labels?: any,
    }
    
    interface InstancesSetMachineResourcesRequest {
        // List of the type and count of accelerator cards attached to the instance.
        guestAccelerators?: AcceleratorConfig[],        
    }
    
    interface InstancesSetMachineTypeRequest {
        // Full or partial URL of the machine type resource. See Machine Types for a full list of machine types. For example: zones/us-central1-f/machineTypes/n1-standard-1
        machineType?: string,
    }
    
    interface InstancesSetServiceAccountRequest {
        // Email address of the service account.
        email?: string,
        // The list of scopes to be made available for this service account.
        scopes?: string[],        
    }
    
    interface InstancesStartWithEncryptionKeyRequest {
        // Array of disks associated with this instance that are protected with a customer-supplied encryption key.
        // 
        // In order to start the instance, the disk url and its corresponding key must be provided.
        // 
        // If the disk is not protected with a customer-supplied encryption key it should not be specified.
        disks?: CustomerEncryptionKeyProtectedDisk[],        
    }
    
    interface License {
        // [Output Only] Deprecated. This field no longer reflects whether a license charges a usage fee.
        chargesUseFee?: boolean,
        // [Output Only] Type of resource. Always compute#license for licenses.
        kind?: string,
        // [Output Only] Name of the resource. The name is 1-63 characters long and complies with RFC1035.
        name?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
    }
    
    interface MachineType {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // [Output Only] The deprecation status associated with this machine type.
        deprecated?: DeprecationStatus,
        // [Output Only] An optional textual description of the resource.
        description?: string,
        // [Output Only] The number of virtual CPUs that are available to the instance.
        guestCpus?: number,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Deprecated] This property is deprecated and will never be populated with any relevant values.
        imageSpaceGb?: number,
        // [Output Only] Whether this machine type has a shared CPU. See Shared-core machine types for more information.
        isSharedCpu?: boolean,
        // [Output Only] The type of the resource. Always compute#machineType for machine types.
        kind?: string,
        // [Output Only] Maximum persistent disks allowed.
        maximumPersistentDisks?: number,
        // [Output Only] Maximum total persistent disks size (GB) allowed.
        maximumPersistentDisksSizeGb?: string,
        // [Output Only] The amount of physical memory available to the instance, defined in MB.
        memoryMb?: number,
        // [Output Only] Name of the resource.
        name?: string,
        // [Output Only] List of extended scratch disks assigned to the instance.
        scratchDisks?: {        
            // Size of the scratch disk, defined in GB.
            diskGb?: number,
        }[],        
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // [Output Only] The name of the zone where the machine type resides, such as us-central1-a.
        zone?: string,
    }
    
    interface MachineTypeAggregatedList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A map of scoped machine type lists.
        items?: any,
        // [Output Only] Type of resource. Always compute#machineTypeAggregatedList for aggregated lists of machine types.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface MachineTypeList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of Machine Type resources.
        items?: MachineType[],        
        // [Output Only] Type of resource. Always compute#machineTypeList for lists of machine types.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface MachineTypesScopedList {
        // [Output Only] List of machine types contained in this scope.
        machineTypes?: MachineType[],        
        // [Output Only] An informational warning that appears when the machine types list is empty.
        warning?: {        
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
        },        
    }
    
    interface ManagedInstance {
        // [Output Only] The current action that the managed instance group has scheduled for the instance. Possible values: 
        // - NONE The instance is running, and the managed instance group does not have any scheduled actions for this instance. 
        // - CREATING The managed instance group is creating this instance. If the group fails to create this instance, it will try again until it is successful. 
        // - CREATING_WITHOUT_RETRIES The managed instance group is attempting to create this instance only once. If the group fails to create this instance, it does not try again and the group's targetSize value is decreased instead. 
        // - RECREATING The managed instance group is recreating this instance. 
        // - DELETING The managed instance group is permanently deleting this instance. 
        // - ABANDONING The managed instance group is abandoning this instance. The instance will be removed from the instance group and from any target pools that are associated with this group. 
        // - RESTARTING The managed instance group is restarting the instance. 
        // - REFRESHING The managed instance group is applying configuration changes to the instance without stopping it. For example, the group can update the target pool list for an instance without stopping that instance.
        currentAction?: string,
        // [Output only] The unique identifier for this resource. This field is empty when instance does not exist.
        id?: string,
        // [Output Only] The URL of the instance. The URL can exist even if the instance has not yet been created.
        instance?: string,
        // [Output Only] The status of the instance. This field is empty when the instance does not exist.
        instanceStatus?: string,
        // [Output Only] Information about the last attempt to create or delete the instance.
        lastAttempt?: ManagedInstanceLastAttempt,
    }
    
    interface ManagedInstanceLastAttempt {
        // [Output Only] Encountered errors during the last attempt to create or delete the instance.
        errors?: {        
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
    }
    
    interface Metadata {
        // Specifies a fingerprint for this request, which is essentially a hash of the metadata's contents and used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update metadata. You must always provide an up-to-date fingerprint hash in order to update or change metadata.
        fingerprint?: string,
        // Array of key/value pairs. The total size of all keys and values must be less than 512 KB.
        items?: {        
            // Key for the metadata entry. Keys must conform to the following regexp: [a-zA-Z0-9-_]+, and be less than 128 bytes in length. This is reflected as part of a URL in the metadata server. Additionally, to avoid ambiguity, keys must not conflict with any other metadata keys for the project.
            key?: string,
            // Value for the metadata entry. These are free-form strings, and only have meaning as interpreted by the image running in the instance. The only restriction placed on values is that their size must be less than or equal to 32768 bytes.
            value?: string,
        }[],        
        // [Output Only] Type of the resource. Always compute#metadata for metadata.
        kind?: string,
    }
    
    interface NamedPort {
        // The name for this named port. The name must be 1-63 characters long, and comply with RFC1035.
        name?: string,
        // The port number, which can be a value between 1 and 65535.
        port?: number,
    }
    
    interface Network {
        // The range of internal addresses that are legal on this network. This range is a CIDR specification, for example: 192.168.0.0/16. Provided by the client when the network is created.
        IPv4Range?: string,
        // When set to true, the network is created in "auto subnet mode". When set to false, the network is in "custom subnet mode".
        // 
        // In "auto subnet mode", a newly created network is assigned the default CIDR of 10.128.0.0/9 and it automatically creates one subnetwork per region.
        autoCreateSubnetworks?: boolean,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // A gateway address for default routing to other networks. This value is read only and is selected by the Google Compute Engine, typically as the first usable address in the IPv4Range.
        gatewayIPv4?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#network for networks.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // [Output Only] List of network peerings for the resource.
        peerings?: NetworkPeering[],        
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // [Output Only] Server-defined fully-qualified URLs for all subnetworks in this network.
        subnetworks?: string[],        
    }
    
    interface NetworkInterface {
        // An array of configurations for this interface. Currently, only one access config, ONE_TO_ONE_NAT, is supported. If there are no accessConfigs specified, then this instance will have no external internet access.
        accessConfigs?: AccessConfig[],        
        // [Output Only] Type of the resource. Always compute#networkInterface for network interfaces.
        kind?: string,
        // [Output Only] The name of the network interface, generated by the server. For network devices, these are eth0, eth1, etc.
        name?: string,
        // URL of the network resource for this instance. When creating an instance, if neither the network nor the subnetwork is specified, the default network global/networks/default is used; if the network is not specified but the subnetwork is specified, the network is inferred.
        // 
        // This field is optional when creating a firewall rule. If not specified when creating a firewall rule, the default network global/networks/default is used.
        // 
        // If you specify this property, you can specify the network as a full or partial URL. For example, the following are all valid URLs:  
        // - https://www.googleapis.com/compute/v1/projects/project/global/networks/network 
        // - projects/project/global/networks/network 
        // - global/networks/default
        network?: string,
        // An IPv4 internal network address to assign to the instance for this network interface. If not specified by the user, an unused internal IP is assigned by the system.
        networkIP?: string,
        // The URL of the Subnetwork resource for this instance. If the network resource is in legacy mode, do not provide this property. If the network is in auto subnet mode, providing the subnetwork is optional. If the network is in custom subnet mode, then this field should be specified. If you specify this property, you can specify the subnetwork as a full or partial URL. For example, the following are all valid URLs:  
        // - https://www.googleapis.com/compute/v1/projects/project/regions/region/subnetworks/subnetwork 
        // - regions/region/subnetworks/subnetwork
        subnetwork?: string,
    }
    
    interface NetworkList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of Network resources.
        items?: Network[],        
        // [Output Only] Type of resource. Always compute#networkList for lists of networks.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface NetworkPeering {
        // Whether full mesh connectivity is created and managed automatically. When it is set to true, Google Compute Engine will automatically create and manage the routes between two networks when the state is ACTIVE. Otherwise, user needs to create routes manually to route packets to peer network.
        autoCreateRoutes?: boolean,
        // Name of this peering. Provided by the client when the peering is created. The name must comply with RFC1035. Specifically, the name must be 1-63 characters long and match regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all the following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // The URL of the peer network. It can be either full URL or partial URL. The peer network may belong to a different project. If the partial URL does not contain project, it is assumed that the peer network is in the same project as the current network.
        network?: string,
        // [Output Only] State for the peering.
        state?: string,
        // [Output Only] Details about the current state of the peering.
        stateDetails?: string,
    }
    
    interface NetworksAddPeeringRequest {
        // Whether Google Compute Engine manages the routes automatically.
        autoCreateRoutes?: boolean,
        // Name of the peering, which should conform to RFC1035.
        name?: string,
        // URL of the peer network. It can be either full URL or partial URL. The peer network may belong to a different project. If the partial URL does not contain project, it is assumed that the peer network is in the same project as the current network.
        peerNetwork?: string,
    }
    
    interface NetworksRemovePeeringRequest {
        // Name of the peering, which should conform to RFC1035.
        name?: string,
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
    
    interface OperationAggregatedList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A map of scoped operation lists.
        items?: any,
        // [Output Only] Type of resource. Always compute#operationAggregatedList for aggregated lists of operations.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface OperationList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of Operation resources.
        items?: Operation[],        
        // [Output Only] Type of resource. Always compute#operations for Operations resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface OperationsScopedList {
        // [Output Only] List of operations contained in this scope.
        operations?: Operation[],        
        // [Output Only] Informational warning which replaces the list of operations when the list is empty.
        warning?: {        
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
        },        
    }
    
    interface PathMatcher {
        // The full or partial URL to the BackendService resource. This will be used if none of the pathRules defined by this PathMatcher is matched by the URL's path portion. For example, the following are all valid URLs to a BackendService resource:  
        // - https://www.googleapis.com/compute/v1/projects/project/global/backendServices/backendService 
        // - compute/v1/projects/project/global/backendServices/backendService 
        // - global/backendServices/backendService
        defaultService?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // The name to which this PathMatcher is referred by the HostRule.
        name?: string,
        // The list of path rules.
        pathRules?: PathRule[],        
    }
    
    interface PathRule {
        // The list of path patterns to match. Each must start with / and the only place a * is allowed is at the end following a /. The string fed to the path matcher does not include any text after the first ? or #, and those chars are not allowed here.
        paths?: string[],        
        // The URL of the BackendService resource if this rule is matched.
        service?: string,
    }
    
    interface Project {
        // Metadata key/value pairs available to all instances contained in this project. See Custom metadata for more information.
        commonInstanceMetadata?: Metadata,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // [Output Only] Default service account used by VMs running in this project.
        defaultServiceAccount?: string,
        // An optional textual description of the resource.
        description?: string,
        // Restricted features enabled for use on this project.
        enabledFeatures?: string[],        
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server. This is not the project ID, and is just a unique ID used by Compute Engine to identify resources.
        id?: string,
        // [Output Only] Type of the resource. Always compute#project for projects.
        kind?: string,
        // The project ID. For example: my-example-project. Use the project ID to make requests to Compute Engine.
        name?: string,
        // [Output Only] Quotas assigned to this project.
        quotas?: Quota[],        
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // The naming prefix for daily usage reports and the Google Cloud Storage bucket where they are stored.
        usageExportLocation?: UsageExportLocation,
        // [Output Only] The role this project has in a Cross Project Network (XPN) configuration. Currently only HOST projects are differentiated.
        xpnProjectStatus?: string,
    }
    
    interface ProjectsDisableXpnResourceRequest {
        // XPN resource ID.
        xpnResource?: XpnResourceId,
    }
    
    interface ProjectsEnableXpnResourceRequest {
        // XPN resource ID.
        xpnResource?: XpnResourceId,
    }
    
    interface ProjectsGetXpnResources {
        // [Output Only] Type of resource. Always compute#projectsGetXpnResources for lists of XPN resources.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // XPN resources attached to this project as their XPN host.
        resources?: XpnResourceId[],        
    }
    
    interface ProjectsListXpnHostsRequest {
        // Optional organization ID managed by Cloud Resource Manager, for which to list XPN host projects. If not specified, the organization will be inferred from the project.
        organization?: string,
    }
    
    interface Quota {
        // [Output Only] Quota limit for this metric.
        limit?: number,
        // [Output Only] Name of the quota metric.
        metric?: string,
        // [Output Only] Current usage of this metric.
        usage?: number,
    }
    
    interface Region {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // [Output Only] The deprecation status associated with this region.
        deprecated?: DeprecationStatus,
        // [Output Only] Textual description of the resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#region for regions.
        kind?: string,
        // [Output Only] Name of the resource.
        name?: string,
        // [Output Only] Quotas assigned to this region.
        quotas?: Quota[],        
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // [Output Only] Status of the region, either UP or DOWN.
        status?: string,
        // [Output Only] A list of zones available in this region, in the form of resource URLs.
        zones?: string[],        
    }
    
    interface RegionAutoscalerList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A list of autoscalers.
        items?: Autoscaler[],        
        // Type of resource.
        kind?: string,
        // [Output Only] A token used to continue a truncated list request.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface RegionInstanceGroupList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A list of InstanceGroup resources.
        items?: InstanceGroup[],        
        // The resource type.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] The URL for this resource type. The server generates this URL.
        selfLink?: string,
    }
    
    interface RegionInstanceGroupManagerList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A list of managed instance groups.
        items?: InstanceGroupManager[],        
        // [Output Only] The resource type, which is always compute#instanceGroupManagerList for a list of managed instance groups that exist in th regional scope.
        kind?: string,
        // [Output only] A token used to continue a truncated list request.
        nextPageToken?: string,
        // [Output only] The URL for this resource type. The server generates this URL.
        selfLink?: string,
    }
    
    interface RegionInstanceGroupManagersAbandonInstancesRequest {
        // The URLs of one or more instances to abandon. This can be a full URL or a partial URL, such as zones/[ZONE]/instances/[INSTANCE_NAME].
        instances?: string[],        
    }
    
    interface RegionInstanceGroupManagersDeleteInstancesRequest {
        // The URLs of one or more instances to delete. This can be a full URL or a partial URL, such as zones/[ZONE]/instances/[INSTANCE_NAME].
        instances?: string[],        
    }
    
    interface RegionInstanceGroupManagersListInstancesResponse {
        // List of managed instances.
        managedInstances?: ManagedInstance[],        
    }
    
    interface RegionInstanceGroupManagersRecreateRequest {
        // The URLs of one or more instances to recreate. This can be a full URL or a partial URL, such as zones/[ZONE]/instances/[INSTANCE_NAME].
        instances?: string[],        
    }
    
    interface RegionInstanceGroupManagersSetTargetPoolsRequest {
        // Fingerprint of the target pools information, which is a hash of the contents. This field is used for optimistic locking when you update the target pool entries. This field is optional.
        fingerprint?: string,
        // The URL of all TargetPool resources to which instances in the instanceGroup field are added. The target pools automatically apply to all of the instances in the managed instance group.
        targetPools?: string[],        
    }
    
    interface RegionInstanceGroupManagersSetTemplateRequest {
        // URL of the InstanceTemplate resource from which all new instances will be created.
        instanceTemplate?: string,
    }
    
    interface RegionInstanceGroupsListInstances {
        // [Output Only] Unique identifier for the resource. Defined by the server.
        id?: string,
        // A list of instances and any named ports that are assigned to those instances.
        items?: InstanceWithNamedPorts[],        
        // The resource type.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
    }
    
    interface RegionInstanceGroupsListInstancesRequest {
        // Instances in which state should be returned. Valid options are: 'ALL', 'RUNNING'. By default, it lists all instances.
        instanceState?: string,
        // Name of port user is interested in. It is optional. If it is set, only information about this ports will be returned. If it is not set, all the named ports will be returned. Always lists all instances.
        portName?: string,
    }
    
    interface RegionInstanceGroupsSetNamedPortsRequest {
        // The fingerprint of the named ports information for this instance group. Use this optional property to prevent conflicts when multiple users change the named ports settings concurrently. Obtain the fingerprint with the instanceGroups.get method. Then, include the fingerprint in your request to ensure that you do not overwrite changes that were applied from another concurrent request.
        fingerprint?: string,
        // The list of named ports to set for this instance group.
        namedPorts?: NamedPort[],        
    }
    
    interface RegionList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of Region resources.
        items?: Region[],        
        // [Output Only] Type of resource. Always compute#regionList for lists of regions.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface ResourceCommitment {
        // The amount of the resource purchased (in a type-dependent unit, such as bytes). For vCPUs, this can just be an integer. For memory, this must be provided in MB. Memory must be a multiple of 256 MB, with up to 6.5GB of memory per every vCPU.
        amount?: string,
        // Type of resource for which this commitment applies. Possible values are VCPU and MEMORY
        type?: string,
    }
    
    interface ResourceGroupReference {
        // A URI referencing one of the instance groups listed in the backend service.
        group?: string,
    }
    
    interface Route {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // The destination range of outgoing packets that this route applies to. Only IPv4 is supported.
        destRange?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of this resource. Always compute#routes for Route resources.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // Fully-qualified URL of the network that this route applies to.
        network?: string,
        // The URL to a gateway that should handle matching packets. You can only specify the internet gateway using a full or partial valid URL:  projects/<project-id>/global/gateways/default-internet-gateway
        nextHopGateway?: string,
        // The URL to an instance that should handle matching packets. You can specify this as a full or partial URL. For example:
        // https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/
        nextHopInstance?: string,
        // The network IP address of an instance that should handle matching packets. Only IPv4 is supported.
        nextHopIp?: string,
        // The URL of the local network if it should handle matching packets.
        nextHopNetwork?: string,
        // [Output Only] The network peering name that should handle matching packets, which should conform to RFC1035.
        nextHopPeering?: string,
        // The URL to a VpnTunnel that should handle matching packets.
        nextHopVpnTunnel?: string,
        // The priority of this route. Priority is used to break ties in cases where there is more than one matching route of equal prefix length. In the case of two routes with equal prefix length, the one with the lowest-numbered priority value wins. Default value is 1000. Valid range is 0 through 65535.
        priority?: number,
        // [Output Only] Server-defined fully-qualified URL for this resource.
        selfLink?: string,
        // A list of instance tags to which this route applies.
        tags?: string[],        
        // [Output Only] If potential misconfigurations are detected for this route, this field will be populated with warning messages.
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
    
    interface RouteList {
        // [Output Only] Unique identifier for the resource. Defined by the server.
        id?: string,
        // [Output Only] A list of Route resources.
        items?: Route[],        
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface Router {
        // BGP information specific to this router.
        bgp?: RouterBgp,
        // BGP information that needs to be configured into the routing stack to establish the BGP peering. It must specify peer ASN and either interface name, IP, or peer IP. Please refer to RFC4273.
        bgpPeers?: RouterBgpPeer[],        
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // Router interfaces. Each interface requires either one linked resource (e.g. linkedVpnTunnel), or IP address and IP address range (e.g. ipRange), or both.
        interfaces?: RouterInterface[],        
        // [Output Only] Type of resource. Always compute#router for routers.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // URI of the network to which this router belongs.
        network?: string,
        // [Output Only] URI of the region where the router resides.
        region?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
    }
    
    interface RouterAggregatedList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A map of scoped router lists.
        items?: any,
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface RouterBgp {
        // Local BGP Autonomous System Number (ASN). Must be an RFC6996 private ASN, either 16-bit or 32-bit. The value will be fixed for this router resource. All VPN tunnels that link to this router will have the same local ASN.
        asn?: number,
    }
    
    interface RouterBgpPeer {
        // The priority of routes advertised to this BGP peer. In the case where there is more than one matching route of maximum length, the routes with lowest priority value win.
        advertisedRoutePriority?: number,
        // Name of the interface the BGP peer is associated with.
        interfaceName?: string,
        // IP address of the interface inside Google Cloud Platform. Only IPv4 is supported.
        ipAddress?: string,
        // Name of this BGP peer. The name must be 1-63 characters long and comply with RFC1035.
        name?: string,
        // Peer BGP Autonomous System Number (ASN). For VPN use case, this value can be different for every tunnel.
        peerAsn?: number,
        // IP address of the BGP interface outside Google cloud. Only IPv4 is supported.
        peerIpAddress?: string,
    }
    
    interface RouterInterface {
        // IP address and range of the interface. The IP range must be in the RFC3927 link-local IP space. The value must be a CIDR-formatted string, for example: 169.254.0.1/30. NOTE: Do not truncate the address as it represents the IP address of the interface.
        ipRange?: string,
        // URI of the linked VPN tunnel. It must be in the same region as the router. Each interface can have at most one linked resource and it could either be a VPN Tunnel or an interconnect attachment.
        linkedVpnTunnel?: string,
        // Name of this interface entry. The name must be 1-63 characters long and comply with RFC1035.
        name?: string,
    }
    
    interface RouterList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A list of Router resources.
        items?: Router[],        
        // [Output Only] Type of resource. Always compute#router for routers.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface RouterStatus {
        // Best routes for this router's network.
        bestRoutes?: Route[],        
        // Best routes learned by this router.
        bestRoutesForRouter?: Route[],        
        // 
        bgpPeerStatus?: RouterStatusBgpPeerStatus[],        
        // URI of the network to which this router belongs.
        network?: string,
    }
    
    interface RouterStatusBgpPeerStatus {
        // Routes that were advertised to the remote BGP peer
        advertisedRoutes?: Route[],        
        // IP address of the local BGP interface.
        ipAddress?: string,
        // URL of the VPN tunnel that this BGP peer controls.
        linkedVpnTunnel?: string,
        // Name of this BGP peer. Unique within the Routers resource.
        name?: string,
        // Number of routes learned from the remote BGP Peer.
        numLearnedRoutes?: number,
        // IP address of the remote BGP interface.
        peerIpAddress?: string,
        // BGP state as specified in RFC1771.
        state?: string,
        // Status of the BGP peer: {UP, DOWN}
        status?: string,
        // Time this session has been up. Format: 14 years, 51 weeks, 6 days, 23 hours, 59 minutes, 59 seconds
        uptime?: string,
        // Time this session has been up, in seconds. Format: 145
        uptimeSeconds?: string,
    }
    
    interface RouterStatusResponse {
        // Type of resource.
        kind?: string,
        // 
        result?: RouterStatus,
    }
    
    interface RoutersPreviewResponse {
        // Preview of given router.
        resource?: Router,
    }
    
    interface RoutersScopedList {
        // List of routers contained in this scope.
        routers?: Router[],        
        // Informational warning which replaces the list of routers when the list is empty.
        warning?: {        
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
        },        
    }
    
    interface SSLHealthCheck {
        // The TCP port number for the health check request. The default value is 443. Valid values are 1 through 65535.
        port?: number,
        // Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.
        portName?: string,
        // Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. The default is NONE.
        proxyHeader?: string,
        // The application data to send once the SSL connection has been established (default value is empty). If both request and response are empty, the connection establishment alone will indicate health. The request data can only be ASCII.
        request?: string,
        // The bytes to match against the beginning of the response data. If left empty (the default value), any response will indicate health. The response data can only be ASCII.
        response?: string,
    }
    
    interface Scheduling {
        // Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user). You can only set the automatic restart option for standard instances. Preemptible instances cannot be automatically restarted.
        // 
        // By default, this is set to true so an instance is automatically restarted if it is terminated by Compute Engine.
        automaticRestart?: boolean,
        // Defines the maintenance behavior for this instance. For standard instances, the default behavior is MIGRATE. For preemptible instances, the default and only possible behavior is TERMINATE. For more information, see Setting Instance Scheduling Options.
        onHostMaintenance?: string,
        // Defines whether the instance is preemptible. This can only be set during instance creation, it cannot be set or changed after the instance has been created.
        preemptible?: boolean,
    }
    
    interface SerialPortOutput {
        // [Output Only] The contents of the console output.
        contents?: string,
        // [Output Only] Type of the resource. Always compute#serialPortOutput for serial port output.
        kind?: string,
        // [Output Only] The position of the next byte of content from the serial console output. Use this value in the next request as the start parameter.
        next?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
        // The starting byte position of the output that was returned. This should match the start parameter sent with the request. If the serial console output exceeds the size of the buffer, older output will be overwritten by newer content and the start values will be mismatched.
        start?: string,
    }
    
    interface ServiceAccount {
        // Email address of the service account.
        email?: string,
        // The list of scopes to be made available for this service account.
        scopes?: string[],        
    }
    
    interface Snapshot {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] Size of the snapshot, specified in GB.
        diskSizeGb?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#snapshot for Snapshot resources.
        kind?: string,
        // A fingerprint for the labels being applied to this snapshot, which is essentially a hash of the labels set used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels.
        // 
        // To see the latest fingerprint, make a get() request to retrieve a snapshot.
        labelFingerprint?: string,
        // Labels to apply to this snapshot. These can be later modified by the setLabels method. Label values may be empty.
        labels?: any,
        // [Output Only] A list of public visible licenses that apply to this snapshot. This can be because the original image had licenses attached (such as a Windows image).
        licenses?: string[],        
        // Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // Encrypts the snapshot using a customer-supplied encryption key.
        // 
        // After you encrypt a snapshot using a customer-supplied key, you must provide the same key if you use the image later For example, you must provide the encryption key when you create a disk from the encrypted snapshot in a future request.
        // 
        // Customer-supplied encryption keys do not protect access to metadata of the disk.
        // 
        // If you do not provide an encryption key when creating the snapshot, then the snapshot will be encrypted using an automatically generated key and you do not need to provide a key to use the snapshot later.
        snapshotEncryptionKey?: CustomerEncryptionKey,
        // [Output Only] The source disk used to create this snapshot.
        sourceDisk?: string,
        // The customer-supplied encryption key of the source disk. Required if the source disk is protected by a customer-supplied encryption key.
        sourceDiskEncryptionKey?: CustomerEncryptionKey,
        // [Output Only] The ID value of the disk used to create this snapshot. This value may be used to determine whether the snapshot was taken from the current or a previous instance of a given disk name.
        sourceDiskId?: string,
        // [Output Only] The status of the snapshot. This can be CREATING, DELETING, FAILED, READY, or UPLOADING.
        status?: string,
        // [Output Only] A size of the the storage used by the snapshot. As snapshots share storage, this number is expected to change with snapshot creation/deletion.
        storageBytes?: string,
        // [Output Only] An indicator whether storageBytes is in a stable state or it is being adjusted as a result of shared storage reallocation. This status can either be UPDATING, meaning the size of the snapshot is being updated, or UP_TO_DATE, meaning the size of the snapshot is up-to-date.
        storageBytesStatus?: string,
    }
    
    interface SnapshotList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of Snapshot resources.
        items?: Snapshot[],        
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface SslCertificate {
        // A local certificate file. The certificate must be in PEM format. The certificate chain must be no greater than 5 certs long. The chain must include at least one intermediate cert.
        certificate?: string,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#sslCertificate for SSL certificates.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // A write-only private key in PEM format. Only insert requests will include this field.
        privateKey?: string,
        // [Output only] Server-defined URL for the resource.
        selfLink?: string,
    }
    
    interface SslCertificateList {
        // [Output Only] Unique identifier for the resource. Defined by the server.
        id?: string,
        // A list of SslCertificate resources.
        items?: SslCertificate[],        
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface Subnetwork {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource. This field can be set only at resource creation time.
        description?: string,
        // [Output Only] The gateway address for default routes to reach destination addresses outside this subnetwork. This field can be set only at resource creation time.
        gatewayAddress?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // The range of internal addresses that are owned by this subnetwork. Provide this property when you create the subnetwork. For example, 10.0.0.0/8 or 192.168.0.0/16. Ranges must be unique and non-overlapping within a network. Only IPv4 is supported. This field can be set only at resource creation time.
        ipCidrRange?: string,
        // [Output Only] Type of the resource. Always compute#subnetwork for Subnetwork resources.
        kind?: string,
        // The name of the resource, provided by the client when initially creating the resource. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // The URL of the network to which this subnetwork belongs, provided by the client when initially creating the subnetwork. Only networks that are in the distributed mode can have subnetworks. This field can be set only at resource creation time.
        network?: string,
        // Whether the VMs in this subnet can access Google services without assigned external IP addresses. This field can be both set at resource creation time and updated using setPrivateIpGoogleAccess.
        privateIpGoogleAccess?: boolean,
        // URL of the region where the Subnetwork resides. This field can be set only at resource creation time.
        region?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
    }
    
    interface SubnetworkAggregatedList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output] A map of scoped Subnetwork lists.
        items?: any,
        // [Output Only] Type of resource. Always compute#subnetworkAggregatedList for aggregated lists of subnetworks.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface SubnetworkList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // The Subnetwork resources.
        items?: Subnetwork[],        
        // [Output Only] Type of resource. Always compute#subnetworkList for lists of subnetworks.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface SubnetworksExpandIpCidrRangeRequest {
        // The IP (in CIDR format or netmask) of internal addresses that are legal on this Subnetwork. This range should be disjoint from other subnetworks within this network. This range can only be larger than (i.e. a superset of) the range previously defined before the update.
        ipCidrRange?: string,
    }
    
    interface SubnetworksScopedList {
        // List of subnetworks contained in this scope.
        subnetworks?: Subnetwork[],        
        // An informational warning that appears when the list of addresses is empty.
        warning?: {        
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
        },        
    }
    
    interface SubnetworksSetPrivateIpGoogleAccessRequest {
        // 
        privateIpGoogleAccess?: boolean,
    }
    
    interface TCPHealthCheck {
        // The TCP port number for the health check request. The default value is 80. Valid values are 1 through 65535.
        port?: number,
        // Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.
        portName?: string,
        // Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. The default is NONE.
        proxyHeader?: string,
        // The application data to send once the TCP connection has been established (default value is empty). If both request and response are empty, the connection establishment alone will indicate health. The request data can only be ASCII.
        request?: string,
        // The bytes to match against the beginning of the response data. If left empty (the default value), any response will indicate health. The response data can only be ASCII.
        response?: string,
    }
    
    interface Tags {
        // Specifies a fingerprint for this request, which is essentially a hash of the metadata's contents and used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update metadata. You must always provide an up-to-date fingerprint hash in order to update or change metadata.
        // 
        // To see the latest fingerprint, make get() request to the instance.
        fingerprint?: string,
        // An array of tags. Each tag must be 1-63 characters long, and comply with RFC1035.
        items?: string[],        
    }
    
    interface TargetHttpProxy {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of resource. Always compute#targetHttpProxy for target HTTP proxies.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // URL to the UrlMap resource that defines the mapping from URL to the BackendService.
        urlMap?: string,
    }
    
    interface TargetHttpProxyList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A list of TargetHttpProxy resources.
        items?: TargetHttpProxy[],        
        // Type of resource. Always compute#targetHttpProxyList for lists of target HTTP proxies.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface TargetHttpsProxiesSetSslCertificatesRequest {
        // New set of SslCertificate resources to associate with this TargetHttpsProxy resource. Currently exactly one SslCertificate resource must be specified.
        sslCertificates?: string[],        
    }
    
    interface TargetHttpsProxy {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of resource. Always compute#targetHttpsProxy for target HTTPS proxies.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer. Currently, exactly one SSL certificate must be specified.
        sslCertificates?: string[],        
        // A fully-qualified or valid partial URL to the UrlMap resource that defines the mapping from URL to the BackendService. For example, the following are all valid URLs for specifying a URL map:  
        // - https://www.googleapis.compute/v1/projects/project/global/urlMaps/url-map 
        // - projects/project/global/urlMaps/url-map 
        // - global/urlMaps/url-map
        urlMap?: string,
    }
    
    interface TargetHttpsProxyList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A list of TargetHttpsProxy resources.
        items?: TargetHttpsProxy[],        
        // Type of resource. Always compute#targetHttpsProxyList for lists of target HTTPS proxies.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface TargetInstance {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A URL to the virtual machine instance that handles traffic for this target instance. When creating a target instance, you can provide the fully-qualified URL or a valid partial URL to the desired virtual machine. For example, the following are all valid URLs: 
        // - https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance 
        // - projects/project/zones/zone/instances/instance 
        // - zones/zone/instances/instance
        instance?: string,
        // [Output Only] The type of the resource. Always compute#targetInstance for target instances.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // NAT option controlling how IPs are NAT'ed to the instance. Currently only NO_NAT (default value) is supported.
        natPolicy?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // [Output Only] URL of the zone where the target instance resides.
        zone?: string,
    }
    
    interface TargetInstanceAggregatedList {
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // A map of scoped target instance lists.
        items?: any,
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface TargetInstanceList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A list of TargetInstance resources.
        items?: TargetInstance[],        
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface TargetInstancesScopedList {
        // List of target instances contained in this scope.
        targetInstances?: TargetInstance[],        
        // Informational warning which replaces the list of addresses when the list is empty.
        warning?: {        
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
        },        
    }
    
    interface TargetPool {
        // This field is applicable only when the containing target pool is serving a forwarding rule as the primary pool, and its failoverRatio field is properly set to a value between [0, 1].
        // 
        // backupPool and failoverRatio together define the fallback behavior of the primary target pool: if the ratio of the healthy instances in the primary pool is at or below failoverRatio, traffic arriving at the load-balanced IP will be directed to the backup pool.
        // 
        // In case where failoverRatio and backupPool are not set, or all the instances in the backup pool are unhealthy, the traffic will be directed back to the primary pool in the "force" mode, where traffic will be spread to the healthy instances with the best effort, or to all instances when no instance is healthy.
        backupPool?: string,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // This field is applicable only when the containing target pool is serving a forwarding rule as the primary pool (i.e., not as a backup pool to some other target pool). The value of the field must be in [0, 1].
        // 
        // If set, backupPool must also be set. They together define the fallback behavior of the primary target pool: if the ratio of the healthy instances in the primary pool is at or below this number, traffic arriving at the load-balanced IP will be directed to the backup pool.
        // 
        // In case where failoverRatio is not set or all the instances in the backup pool are unhealthy, the traffic will be directed back to the primary pool in the "force" mode, where traffic will be spread to the healthy instances with the best effort, or to all instances when no instance is healthy.
        failoverRatio?: number,
        // The URL of the HttpHealthCheck resource. A member instance in this pool is considered healthy if and only if the health checks pass. An empty list means all member instances will be considered healthy at all times. Only HttpHealthChecks are supported. Only one health check may be specified.
        healthChecks?: string[],        
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A list of resource URLs to the virtual machine instances serving this pool. They must live in zones contained in the same region as this pool.
        instances?: string[],        
        // [Output Only] Type of the resource. Always compute#targetPool for target pools.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // [Output Only] URL of the region where the target pool resides.
        region?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // Sesssion affinity option, must be one of the following values:
        // NONE: Connections from the same client IP may go to any instance in the pool.
        // CLIENT_IP: Connections from the same client IP will go to the same instance in the pool while that instance remains healthy.
        // CLIENT_IP_PROTO: Connections from the same client IP with the same IP protocol will go to the same instance in the pool while that instance remains healthy.
        sessionAffinity?: string,
    }
    
    interface TargetPoolAggregatedList {
        // [Output Only] Unique identifier for the resource. Defined by the server.
        id?: string,
        // [Output Only] A map of scoped target pool lists.
        items?: any,
        // [Output Only] Type of resource. Always compute#targetPoolAggregatedList for aggregated lists of target pools.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface TargetPoolInstanceHealth {
        // 
        healthStatus?: HealthStatus[],        
        // [Output Only] Type of resource. Always compute#targetPoolInstanceHealth when checking the health of an instance.
        kind?: string,
    }
    
    interface TargetPoolList {
        // [Output Only] Unique identifier for the resource. Defined by the server.
        id?: string,
        // A list of TargetPool resources.
        items?: TargetPool[],        
        // [Output Only] Type of resource. Always compute#targetPoolList for lists of target pools.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface TargetPoolsAddHealthCheckRequest {
        // The HttpHealthCheck to add to the target pool.
        healthChecks?: HealthCheckReference[],        
    }
    
    interface TargetPoolsAddInstanceRequest {
        // A full or partial URL to an instance to add to this target pool. This can be a full or partial URL. For example, the following are valid URLs:  
        // - https://www.googleapis.com/compute/v1/projects/project-id/zones/zone/instances/instance-name 
        // - projects/project-id/zones/zone/instances/instance-name 
        // - zones/zone/instances/instance-name
        instances?: InstanceReference[],        
    }
    
    interface TargetPoolsRemoveHealthCheckRequest {
        // Health check URL to be removed. This can be a full or valid partial URL. For example, the following are valid URLs:  
        // - https://www.googleapis.com/compute/beta/projects/project/global/httpHealthChecks/health-check 
        // - projects/project/global/httpHealthChecks/health-check 
        // - global/httpHealthChecks/health-check
        healthChecks?: HealthCheckReference[],        
    }
    
    interface TargetPoolsRemoveInstanceRequest {
        // URLs of the instances to be removed from target pool.
        instances?: InstanceReference[],        
    }
    
    interface TargetPoolsScopedList {
        // List of target pools contained in this scope.
        targetPools?: TargetPool[],        
        // Informational warning which replaces the list of addresses when the list is empty.
        warning?: {        
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
        },        
    }
    
    interface TargetReference {
        // 
        target?: string,
    }
    
    interface TargetSslProxiesSetBackendServiceRequest {
        // The URL of the new BackendService resource for the targetSslProxy.
        service?: string,
    }
    
    interface TargetSslProxiesSetProxyHeaderRequest {
        // The new type of proxy header to append before sending data to the backend. NONE or PROXY_V1 are allowed.
        proxyHeader?: string,
    }
    
    interface TargetSslProxiesSetSslCertificatesRequest {
        // New set of URLs to SslCertificate resources to associate with this TargetSslProxy. Currently exactly one ssl certificate must be specified.
        sslCertificates?: string[],        
    }
    
    interface TargetSslProxy {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#targetSslProxy for target SSL proxies.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. The default is NONE.
        proxyHeader?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // URL to the BackendService resource.
        service?: string,
        // URLs to SslCertificate resources that are used to authenticate connections to Backends. Currently exactly one SSL certificate must be specified.
        sslCertificates?: string[],        
    }
    
    interface TargetSslProxyList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A list of TargetSslProxy resources.
        items?: TargetSslProxy[],        
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface TargetTcpProxiesSetBackendServiceRequest {
        // The URL of the new BackendService resource for the targetTcpProxy.
        service?: string,
    }
    
    interface TargetTcpProxiesSetProxyHeaderRequest {
        // The new type of proxy header to append before sending data to the backend. NONE or PROXY_V1 are allowed.
        proxyHeader?: string,
    }
    
    interface TargetTcpProxy {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#targetTcpProxy for target TCP proxies.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. The default is NONE.
        proxyHeader?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // URL to the BackendService resource.
        service?: string,
    }
    
    interface TargetTcpProxyList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A list of TargetTcpProxy resources.
        items?: TargetTcpProxy[],        
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface TargetVpnGateway {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] A list of URLs to the ForwardingRule resources. ForwardingRules are created using compute.forwardingRules.insert and associated to a VPN gateway.
        forwardingRules?: string[],        
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of resource. Always compute#targetVpnGateway for target VPN gateways.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // URL of the network to which this VPN gateway is attached. Provided by the client when the VPN gateway is created.
        network?: string,
        // [Output Only] URL of the region where the target VPN gateway resides.
        region?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // [Output Only] The status of the VPN gateway.
        status?: string,
        // [Output Only] A list of URLs to VpnTunnel resources. VpnTunnels are created using compute.vpntunnels.insert method and associated to a VPN gateway.
        tunnels?: string[],        
    }
    
    interface TargetVpnGatewayAggregatedList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // A map of scoped target vpn gateway lists.
        items?: any,
        // [Output Only] Type of resource. Always compute#targetVpnGateway for target VPN gateways.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface TargetVpnGatewayList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of TargetVpnGateway resources.
        items?: TargetVpnGateway[],        
        // [Output Only] Type of resource. Always compute#targetVpnGateway for target VPN gateways.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface TargetVpnGatewaysScopedList {
        // [Output Only] List of target vpn gateways contained in this scope.
        targetVpnGateways?: TargetVpnGateway[],        
        // [Output Only] Informational warning which replaces the list of addresses when the list is empty.
        warning?: {        
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
        },        
    }
    
    interface TestFailure {
        // 
        actualService?: string,
        // 
        expectedService?: string,
        // 
        host?: string,
        // 
        path?: string,
    }
    
    interface UrlMap {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // The URL of the BackendService resource if none of the hostRules match.
        defaultService?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a UrlMap. An up-to-date fingerprint must be provided in order to update the UrlMap.
        fingerprint?: string,
        // The list of HostRules to use against the URL.
        hostRules?: HostRule[],        
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#urlMaps for url maps.
        kind?: string,
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // The list of named PathMatchers to use against the URL.
        pathMatchers?: PathMatcher[],        
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // The list of expected URL mappings. Request to update this UrlMap will succeed only if all of the test cases pass.
        tests?: UrlMapTest[],        
    }
    
    interface UrlMapList {
        // [Output Only] Unique identifier for the resource. Set by the server.
        id?: string,
        // A list of UrlMap resources.
        items?: UrlMap[],        
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface UrlMapReference {
        // 
        urlMap?: string,
    }
    
    interface UrlMapTest {
        // Description of this test case.
        description?: string,
        // Host portion of the URL.
        host?: string,
        // Path portion of the URL.
        path?: string,
        // Expected BackendService resource the given URL should be mapped to.
        service?: string,
    }
    
    interface UrlMapValidationResult {
        // 
        loadErrors?: string[],        
        // Whether the given UrlMap can be successfully loaded. If false, 'loadErrors' indicates the reasons.
        loadSucceeded?: boolean,
        // 
        testFailures?: TestFailure[],        
        // If successfully loaded, this field indicates whether the test passed. If false, 'testFailures's indicate the reason of failure.
        testPassed?: boolean,
    }
    
    interface UrlMapsValidateRequest {
        // Content of the UrlMap to be validated.
        resource?: UrlMap,
    }
    
    interface UrlMapsValidateResponse {
        // 
        result?: UrlMapValidationResult,
    }
    
    interface UsageExportLocation {
        // The name of an existing bucket in Cloud Storage where the usage report object is stored. The Google Service Account is granted write access to this bucket. This can either be the bucket name by itself, such as example-bucket, or the bucket name with gs:// or https://storage.googleapis.com/ in front of it, such as gs://example-bucket.
        bucketName?: string,
        // An optional prefix for the name of the usage report object stored in bucketName. If not supplied, defaults to usage. The report is stored as a CSV file named report_name_prefix_gce_YYYYMMDD.csv where YYYYMMDD is the day of the usage according to Pacific Time. If you supply a prefix, it should conform to Cloud Storage object naming conventions.
        reportNamePrefix?: string,
    }
    
    interface VpnTunnel {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional description of this resource. Provide this property when you create the resource.
        description?: string,
        // [Output Only] Detailed status message for the VPN tunnel.
        detailedStatus?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway. Acceptable IKE versions are 1 or 2. Default version is 2.
        ikeVersion?: number,
        // [Output Only] Type of resource. Always compute#vpnTunnel for VPN tunnels.
        kind?: string,
        // Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway. The value should be a CIDR formatted string, for example: 192.168.0.0/16. The ranges should be disjoint. Only IPv4 is supported.
        localTrafficSelector?: string[],        
        // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // IP address of the peer VPN gateway. Only IPv4 is supported.
        peerIp?: string,
        // [Output Only] URL of the region where the VPN tunnel resides.
        region?: string,
        // Remote traffic selectors to use when establishing the VPN tunnel with peer VPN gateway. The value should be a CIDR formatted string, for example: 192.168.0.0/16. The ranges should be disjoint. Only IPv4 is supported.
        remoteTrafficSelector?: string[],        
        // URL of router resource to be used for dynamic routing.
        router?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway.
        sharedSecret?: string,
        // Hash of the shared secret.
        sharedSecretHash?: string,
        // [Output Only] The status of the VPN tunnel.
        status?: string,
        // URL of the VPN gateway with which this VPN tunnel is associated. Provided by the client when the VPN tunnel is created.
        targetVpnGateway?: string,
    }
    
    interface VpnTunnelAggregatedList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A map of scoped vpn tunnel lists.
        items?: any,
        // [Output Only] Type of resource. Always compute#vpnTunnel for VPN tunnels.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface VpnTunnelList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of VpnTunnel resources.
        items?: VpnTunnel[],        
        // [Output Only] Type of resource. Always compute#vpnTunnel for VPN tunnels.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface VpnTunnelsScopedList {
        // List of vpn tunnels contained in this scope.
        vpnTunnels?: VpnTunnel[],        
        // Informational warning which replaces the list of addresses when the list is empty.
        warning?: {        
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
        },        
    }
    
    interface XpnHostList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of XPN host project URLs.
        items?: Project[],        
        // [Output Only] Type of resource. Always compute#xpnHostList for lists of XPN hosts.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface XpnResourceId {
        // The ID of the XPN resource. In the case of projects, this field matches the project's name, not the canonical ID.
        id?: string,
        // The type of the XPN resource.
        type?: string,
    }
    
    interface Zone {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // [Output Only] The deprecation status associated with this zone.
        deprecated?: DeprecationStatus,
        // [Output Only] Textual description of the resource.
        description?: string,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always compute#zone for zones.
        kind?: string,
        // [Output Only] Name of the resource.
        name?: string,
        // [Output Only] Full URL reference to the region which hosts the zone.
        region?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // [Output Only] Status of the zone, either UP or DOWN.
        status?: string,
    }
    
    interface ZoneList {
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // [Output Only] A list of Zone resources.
        items?: Zone[],        
        // Type of resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface ZoneSetLabelsRequest {
        // The fingerprint of the previous set of labels for this resource, used to detect conflicts. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels. Make a get() request to the resource to get the latest fingerprint.
        labelFingerprint?: string,
        // The labels to set for this resource.
        labels?: any,
    }
    
    interface AcceleratorTypesResource {
        // Retrieves an aggregated list of accelerator types.
        aggregatedList (request: {        
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<AcceleratorTypeAggregatedList>;        
        
        // Returns the specified accelerator type. Get a list of available accelerator types by making a list() request.
        get (request: {        
            // Name of the accelerator type to return.
            acceleratorType: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<AcceleratorType>;        
        
        // Retrieves a list of accelerator types available to the specified project.
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
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<AcceleratorTypeList>;        
        
    }
    
    
    interface AddressesResource {
        // Retrieves an aggregated list of addresses.
        aggregatedList (request: {        
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<AddressAggregatedList>;        
        
        // Deletes the specified address resource.
        delete (request: {        
            // Name of the address resource to delete.
            address: string,
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified address resource.
        get (request: {        
            // Name of the address resource to return.
            address: string,
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<Address>;        
        
        // Creates an address resource in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of addresses contained within the specified region.
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
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<AddressList>;        
        
    }
    
    
    interface AutoscalersResource {
        // Retrieves an aggregated list of autoscalers.
        aggregatedList (request: {        
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<AutoscalerAggregatedList>;        
        
        // Deletes the specified autoscaler.
        delete (request: {        
            // Name of the autoscaler to delete.
            autoscaler: string,
            // Project ID for this request.
            project: string,
            // Name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified autoscaler resource. Get a list of available autoscalers by making a list() request.
        get (request: {        
            // Name of the autoscaler to return.
            autoscaler: string,
            // Project ID for this request.
            project: string,
            // Name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Autoscaler>;        
        
        // Creates an autoscaler in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // Name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of autoscalers contained within the specified zone.
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
            // Project ID for this request.
            project: string,
            // Name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<AutoscalerList>;        
        
        // Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
        patch (request: {        
            // Name of the autoscaler to patch.
            autoscaler?: string,
            // Project ID for this request.
            project: string,
            // Name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Updates an autoscaler in the specified project using the data included in the request.
        update (request: {        
            // Name of the autoscaler to update.
            autoscaler?: string,
            // Project ID for this request.
            project: string,
            // Name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface BackendBucketsResource {
        // Deletes the specified BackendBucket resource.
        delete (request: {        
            // Name of the BackendBucket resource to delete.
            backendBucket: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified BackendBucket resource. Get a list of available backend buckets by making a list() request.
        get (request: {        
            // Name of the BackendBucket resource to return.
            backendBucket: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<BackendBucket>;        
        
        // Creates a BackendBucket resource in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of BackendBucket resources available to the specified project.
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<BackendBucketList>;        
        
        // Updates the specified BackendBucket resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
        patch (request: {        
            // Name of the BackendBucket resource to patch.
            backendBucket: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Updates the specified BackendBucket resource with the data included in the request.
        update (request: {        
            // Name of the BackendBucket resource to update.
            backendBucket: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface BackendServicesResource {
        // Retrieves the list of all BackendService resources, regional and global, available to the specified project.
        aggregatedList (request: {        
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
            // Name of the project scoping this request.
            project: string,
        }) : gapi.client.Request<BackendServiceAggregatedList>;        
        
        // Deletes the specified BackendService resource.
        delete (request: {        
            // Name of the BackendService resource to delete.
            backendService: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified BackendService resource. Get a list of available backend services by making a list() request.
        get (request: {        
            // Name of the BackendService resource to return.
            backendService: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<BackendService>;        
        
        // Gets the most recent health check results for this BackendService.
        getHealth (request: {        
            // Name of the BackendService resource to which the queried instance belongs.
            backendService: string,
            // 
            project: string,
        }) : gapi.client.Request<BackendServiceGroupHealth>;        
        
        // Creates a BackendService resource in the specified project using the data included in the request. There are several restrictions and guidelines to keep in mind when creating a backend service. Read  Restrictions and Guidelines for more information.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of BackendService resources available to the specified project.
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<BackendServiceList>;        
        
        // Patches the specified BackendService resource with the data included in the request. There are several restrictions and guidelines to keep in mind when updating a backend service. Read  Restrictions and Guidelines for more information. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
        patch (request: {        
            // Name of the BackendService resource to patch.
            backendService: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Updates the specified BackendService resource with the data included in the request. There are several restrictions and guidelines to keep in mind when updating a backend service. Read  Restrictions and Guidelines for more information.
        update (request: {        
            // Name of the BackendService resource to update.
            backendService: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface DiskTypesResource {
        // Retrieves an aggregated list of disk types.
        aggregatedList (request: {        
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<DiskTypeAggregatedList>;        
        
        // Returns the specified disk type. Get a list of available disk types by making a list() request.
        get (request: {        
            // Name of the disk type to return.
            diskType: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<DiskType>;        
        
        // Retrieves a list of disk types available to the specified project.
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
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<DiskTypeList>;        
        
    }
    
    
    interface DisksResource {
        // Retrieves an aggregated list of persistent disks.
        aggregatedList (request: {        
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<DiskAggregatedList>;        
        
        // Creates a snapshot of a specified persistent disk.
        createSnapshot (request: {        
            // Name of the persistent disk to snapshot.
            disk: string,
            // 
            guestFlush?: boolean,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Deletes the specified persistent disk. Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.
        delete (request: {        
            // Name of the persistent disk to delete.
            disk: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns a specified persistent disk. Get a list of available persistent disks by making a list() request.
        get (request: {        
            // Name of the persistent disk to return.
            disk: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Disk>;        
        
        // Creates a persistent disk in the specified project using the data in the request. You can create a disk with a sourceImage, a sourceSnapshot, or create an empty 500 GB data disk by omitting all properties. You can also create a disk that is larger than the default size by specifying the sizeGb property.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // Optional. Source image to restore onto a disk.
            sourceImage?: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of persistent disks contained within the specified zone.
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
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<DiskList>;        
        
        // Resizes the specified persistent disk.
        resize (request: {        
            // The name of the persistent disk.
            disk: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets the labels on a disk. To learn more about labels, read the Labeling Resources documentation.
        setLabels (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface FirewallsResource {
        // Deletes the specified firewall.
        delete (request: {        
            // Name of the firewall rule to delete.
            firewall: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified firewall.
        get (request: {        
            // Name of the firewall rule to return.
            firewall: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Firewall>;        
        
        // Creates a firewall rule in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of firewall rules available to the specified project.
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<FirewallList>;        
        
        // Updates the specified firewall rule with the data included in the request. Using PUT method, can only update following fields of firewall rule: allowed, description, sourceRanges, sourceTags, targetTags. This method supports patch semantics.
        patch (request: {        
            // Name of the firewall rule to update.
            firewall: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Updates the specified firewall rule with the data included in the request. Using PUT method, can only update following fields of firewall rule: allowed, description, sourceRanges, sourceTags, targetTags.
        update (request: {        
            // Name of the firewall rule to update.
            firewall: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface ForwardingRulesResource {
        // Retrieves an aggregated list of forwarding rules.
        aggregatedList (request: {        
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<ForwardingRuleAggregatedList>;        
        
        // Deletes the specified ForwardingRule resource.
        delete (request: {        
            // Name of the ForwardingRule resource to delete.
            forwardingRule: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified ForwardingRule resource.
        get (request: {        
            // Name of the ForwardingRule resource to return.
            forwardingRule: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<ForwardingRule>;        
        
        // Creates a ForwardingRule resource in the specified project and region using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of ForwardingRule resources available to the specified project and region.
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
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<ForwardingRuleList>;        
        
        // Changes target URL for forwarding rule. The new target should be of the same type as the old target.
        setTarget (request: {        
            // Name of the ForwardingRule resource in which target is to be set.
            forwardingRule: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface GlobalAddressesResource {
        // Deletes the specified address resource.
        delete (request: {        
            // Name of the address resource to delete.
            address: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified address resource. Get a list of available addresses by making a list() request.
        get (request: {        
            // Name of the address resource to return.
            address: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Address>;        
        
        // Creates an address resource in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of global addresses.
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<AddressList>;        
        
    }
    
    
    interface GlobalForwardingRulesResource {
        // Deletes the specified GlobalForwardingRule resource.
        delete (request: {        
            // Name of the ForwardingRule resource to delete.
            forwardingRule: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified GlobalForwardingRule resource. Get a list of available forwarding rules by making a list() request.
        get (request: {        
            // Name of the ForwardingRule resource to return.
            forwardingRule: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<ForwardingRule>;        
        
        // Creates a GlobalForwardingRule resource in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of GlobalForwardingRule resources available to the specified project.
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<ForwardingRuleList>;        
        
        // Changes target URL for the GlobalForwardingRule resource. The new target should be of the same type as the old target.
        setTarget (request: {        
            // Name of the ForwardingRule resource in which target is to be set.
            forwardingRule: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface GlobalOperationsResource {
        // Retrieves an aggregated list of all operations.
        aggregatedList (request: {        
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<OperationAggregatedList>;        
        
        // Deletes the specified Operations resource.
        delete (request: {        
            // Name of the Operations resource to delete.
            operation: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves the specified Operations resource. Get a list of operations by making a list() request.
        get (request: {        
            // Name of the Operations resource to return.
            operation: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of Operation resources contained within the specified project.
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<OperationList>;        
        
    }
    
    
    interface HealthChecksResource {
        // Deletes the specified HealthCheck resource.
        delete (request: {        
            // Name of the HealthCheck resource to delete.
            healthCheck: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified HealthCheck resource. Get a list of available health checks by making a list() request.
        get (request: {        
            // Name of the HealthCheck resource to return.
            healthCheck: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<HealthCheck>;        
        
        // Creates a HealthCheck resource in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of HealthCheck resources available to the specified project.
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<HealthCheckList>;        
        
        // Updates a HealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
        patch (request: {        
            // Name of the HealthCheck resource to patch.
            healthCheck: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Updates a HealthCheck resource in the specified project using the data included in the request.
        update (request: {        
            // Name of the HealthCheck resource to update.
            healthCheck: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface HttpHealthChecksResource {
        // Deletes the specified HttpHealthCheck resource.
        delete (request: {        
            // Name of the HttpHealthCheck resource to delete.
            httpHealthCheck: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified HttpHealthCheck resource. Get a list of available HTTP health checks by making a list() request.
        get (request: {        
            // Name of the HttpHealthCheck resource to return.
            httpHealthCheck: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<HttpHealthCheck>;        
        
        // Creates a HttpHealthCheck resource in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of HttpHealthCheck resources available to the specified project.
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<HttpHealthCheckList>;        
        
        // Updates a HttpHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
        patch (request: {        
            // Name of the HttpHealthCheck resource to patch.
            httpHealthCheck: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Updates a HttpHealthCheck resource in the specified project using the data included in the request.
        update (request: {        
            // Name of the HttpHealthCheck resource to update.
            httpHealthCheck: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface HttpsHealthChecksResource {
        // Deletes the specified HttpsHealthCheck resource.
        delete (request: {        
            // Name of the HttpsHealthCheck resource to delete.
            httpsHealthCheck: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified HttpsHealthCheck resource. Get a list of available HTTPS health checks by making a list() request.
        get (request: {        
            // Name of the HttpsHealthCheck resource to return.
            httpsHealthCheck: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<HttpsHealthCheck>;        
        
        // Creates a HttpsHealthCheck resource in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of HttpsHealthCheck resources available to the specified project.
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<HttpsHealthCheckList>;        
        
        // Updates a HttpsHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
        patch (request: {        
            // Name of the HttpsHealthCheck resource to patch.
            httpsHealthCheck: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Updates a HttpsHealthCheck resource in the specified project using the data included in the request.
        update (request: {        
            // Name of the HttpsHealthCheck resource to update.
            httpsHealthCheck: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface ImagesResource {
        // Deletes the specified image.
        delete (request: {        
            // Name of the image resource to delete.
            image: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets the deprecation status of an image.
        // 
        // If an empty request body is given, clears the deprecation status instead.
        deprecate (request: {        
            // Image name.
            image: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified image. Get a list of available images by making a list() request.
        get (request: {        
            // Name of the image resource to return.
            image: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Image>;        
        
        // Returns the latest image that is part of an image family and is not deprecated.
        getFromFamily (request: {        
            // Name of the image family to search for.
            family: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Image>;        
        
        // Creates an image in the specified project using the data included in the request.
        insert (request: {        
            // Force image creation if true.
            forceCreate?: boolean,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of private images available to the specified project. Private images are images you create that belong to your project. This method does not get any images that belong to other projects, including publicly-available images, like Debian 8. If you want to get a list of publicly-available images, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud.
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<ImageList>;        
        
        // Sets the labels on an image. To learn more about labels, read the Labeling Resources documentation.
        setLabels (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface InstanceGroupManagersResource {
        // Schedules a group action to remove the specified instances from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method.
        // 
        // If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
        // 
        // You can specify a maximum of 1000 instances with this method per request.
        abandonInstances (request: {        
            // The name of the managed instance group.
            instanceGroupManager: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the managed instance group is located.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of managed instance groups and groups them by zone.
        aggregatedList (request: {        
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<InstanceGroupManagerAggregatedList>;        
        
        // Deletes the specified managed instance group and all of the instances in that group. Note that the instance group must not belong to a backend service. Read  Deleting an instance group for more information.
        delete (request: {        
            // The name of the managed instance group to delete.
            instanceGroupManager: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the managed instance group is located.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Schedules a group action to delete the specified instances in the managed instance group. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. This operation is marked as DONE when the action is scheduled even if the instances are still being deleted. You must separately verify the status of the deleting action with the listmanagedinstances method.
        // 
        // If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
        // 
        // You can specify a maximum of 1000 instances with this method per request.
        deleteInstances (request: {        
            // The name of the managed instance group.
            instanceGroupManager: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the managed instance group is located.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns all of the details about the specified managed instance group. Get a list of available managed instance groups by making a list() request.
        get (request: {        
            // The name of the managed instance group.
            instanceGroupManager: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the managed instance group is located.
            zone: string,
        }) : gapi.client.Request<InstanceGroupManager>;        
        
        // Creates a managed instance group using the information that you specify in the request. After the group is created, it schedules an action to create instances in the group using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method.
        // 
        // A managed instance group can have up to 1000 VM instances per group. Please contact Cloud Support if you need an increase in this limit.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // The name of the zone where you want to create the managed instance group.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of managed instance groups that are contained within the specified project and zone.
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
            // Project ID for this request.
            project: string,
            // The name of the zone where the managed instance group is located.
            zone: string,
        }) : gapi.client.Request<InstanceGroupManagerList>;        
        
        // Lists all of the instances in the managed instance group. Each instance in the list has a currentAction, which indicates the action that the managed instance group is performing on the instance. For example, if the group is still creating an instance, the currentAction is CREATING. If a previous action failed, the list displays the errors for that failed action.
        listManagedInstances (request: {        
            // 
            filter?: string,
            // The name of the managed instance group.
            instanceGroupManager: string,
            // 
            maxResults?: number,
            // 
            order_by?: string,
            // 
            pageToken?: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the managed instance group is located.
            zone: string,
        }) : gapi.client.Request<InstanceGroupManagersListManagedInstancesResponse>;        
        
        // Schedules a group action to recreate the specified instances in the managed instance group. The instances are deleted and recreated using the current instance template for the managed instance group. This operation is marked as DONE when the action is scheduled even if the instances have not yet been recreated. You must separately verify the status of the recreating action with the listmanagedinstances method.
        // 
        // If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
        // 
        // You can specify a maximum of 1000 instances with this method per request.
        recreateInstances (request: {        
            // The name of the managed instance group.
            instanceGroupManager: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the managed instance group is located.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Resizes the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method.
        // 
        // If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
        resize (request: {        
            // The name of the managed instance group.
            instanceGroupManager: string,
            // Project ID for this request.
            project: string,
            // The number of running instances that the managed instance group should maintain at any given time. The group automatically adds or removes instances to maintain the number of instances specified by this parameter.
            size: number,
            // The name of the zone where the managed instance group is located.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Specifies the instance template to use when creating new instances in this group. The templates for existing instances in the group do not change unless you recreate them.
        setInstanceTemplate (request: {        
            // The name of the managed instance group.
            instanceGroupManager: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the managed instance group is located.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Modifies the target pools to which all instances in this managed instance group are assigned. The target pools automatically apply to all of the instances in the managed instance group. This operation is marked DONE when you make the request even if the instances have not yet been added to their target pools. The change might take some time to apply to all of the instances in the group depending on the size of the group.
        setTargetPools (request: {        
            // The name of the managed instance group.
            instanceGroupManager: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the managed instance group is located.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface InstanceGroupsResource {
        // Adds a list of instances to the specified instance group. All of the instances in the instance group must be in the same network/subnetwork. Read  Adding instances for more information.
        addInstances (request: {        
            // The name of the instance group where you are adding instances.
            instanceGroup: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the instance group is located.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of instance groups and sorts them by zone.
        aggregatedList (request: {        
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<InstanceGroupAggregatedList>;        
        
        // Deletes the specified instance group. The instances in the group are not deleted. Note that instance group must not belong to a backend service. Read  Deleting an instance group for more information.
        delete (request: {        
            // The name of the instance group to delete.
            instanceGroup: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the instance group is located.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified instance group. Get a list of available instance groups by making a list() request.
        get (request: {        
            // The name of the instance group.
            instanceGroup: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the instance group is located.
            zone: string,
        }) : gapi.client.Request<InstanceGroup>;        
        
        // Creates an instance group in the specified project using the parameters that are included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // The name of the zone where you want to create the instance group.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of instance groups that are located in the specified project and zone.
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
            // Project ID for this request.
            project: string,
            // The name of the zone where the instance group is located.
            zone: string,
        }) : gapi.client.Request<InstanceGroupList>;        
        
        // Lists the instances in the specified instance group.
        listInstances (request: {        
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
            // The name of the instance group from which you want to generate a list of included instances.
            instanceGroup: string,
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
            // Project ID for this request.
            project: string,
            // The name of the zone where the instance group is located.
            zone: string,
        }) : gapi.client.Request<InstanceGroupsListInstances>;        
        
        // Removes one or more instances from the specified instance group, but does not delete those instances.
        // 
        // If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration before the VM instance is removed or deleted.
        removeInstances (request: {        
            // The name of the instance group where the specified instances will be removed.
            instanceGroup: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the instance group is located.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets the named ports for the specified instance group.
        setNamedPorts (request: {        
            // The name of the instance group where the named ports are updated.
            instanceGroup: string,
            // Project ID for this request.
            project: string,
            // The name of the zone where the instance group is located.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface InstanceTemplatesResource {
        // Deletes the specified instance template. If you delete an instance template that is being referenced from another instance group, the instance group will not be able to create or recreate virtual machine instances. Deleting an instance template is permanent and cannot be undone.
        delete (request: {        
            // The name of the instance template to delete.
            instanceTemplate: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified instance template. Get a list of available instance templates by making a list() request.
        get (request: {        
            // The name of the instance template.
            instanceTemplate: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<InstanceTemplate>;        
        
        // Creates an instance template in the specified project using the data that is included in the request. If you are creating a new template to update an existing instance group, your new instance template must use the same network or, if applicable, the same subnetwork as the original template.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of instance templates that are contained within the specified project and zone.
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<InstanceTemplateList>;        
        
    }
    
    
    interface InstancesResource {
        // Adds an access config to an instance's network interface.
        addAccessConfig (request: {        
            // The instance name for this request.
            instance: string,
            // The name of the network interface to add to this instance.
            networkInterface: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves aggregated list of instances.
        aggregatedList (request: {        
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<InstanceAggregatedList>;        
        
        // Attaches an existing Disk resource to an instance. You must first create the disk before you can attach it. It is not possible to create and attach a disk at the same time. For more information, read Adding a persistent disk to your instance.
        attachDisk (request: {        
            // The instance name for this request.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Deletes the specified Instance resource. For more information, see Stopping or Deleting an Instance.
        delete (request: {        
            // Name of the instance resource to delete.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Deletes an access config from an instance's network interface.
        deleteAccessConfig (request: {        
            // The name of the access config to delete.
            accessConfig: string,
            // The instance name for this request.
            instance: string,
            // The name of the network interface.
            networkInterface: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Detaches a disk from an instance.
        detachDisk (request: {        
            // Disk device name to detach.
            deviceName: string,
            // Instance name.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified Instance resource. Get a list of available instances by making a list() request.
        get (request: {        
            // Name of the instance resource to return.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Instance>;        
        
        // Returns the specified instance's serial port output.
        getSerialPortOutput (request: {        
            // Name of the instance scoping this request.
            instance: string,
            // Specifies which COM or serial port to retrieve data from.
            port?: number,
            // Project ID for this request.
            project: string,
            // Returns output starting from a specific byte position. Use this to page through output when the output is too large to return in a single request. For the initial request, leave this field unspecified. For subsequent calls, this field should be set to the next value returned in the previous call.
            start?: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<SerialPortOutput>;        
        
        // Creates an instance resource in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of instances contained within the specified zone.
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
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<InstanceList>;        
        
        // Performs a reset on the instance. For more information, see Resetting an instance.
        reset (request: {        
            // Name of the instance scoping this request.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets the auto-delete flag for a disk attached to an instance.
        setDiskAutoDelete (request: {        
            // Whether to auto-delete the disk when the instance is deleted.
            autoDelete: boolean,
            // The device name of the disk to modify.
            deviceName: string,
            // The instance name.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets labels on an instance. To learn more about labels, read the Labeling Resources documentation.
        setLabels (request: {        
            // Name of the instance scoping this request.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Changes the number and/or type of accelerator for a stopped instance to the values specified in the request.
        setMachineResources (request: {        
            // Name of the instance scoping this request.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Changes the machine type for a stopped instance to the machine type specified in the request.
        setMachineType (request: {        
            // Name of the instance scoping this request.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets metadata for the specified instance to the data included in the request.
        setMetadata (request: {        
            // Name of the instance scoping this request.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets an instance's scheduling options.
        setScheduling (request: {        
            // Instance name.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets the service account on the instance. For more information, read Changing the service account and access scopes for an instance.
        setServiceAccount (request: {        
            // Name of the instance resource to start.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets tags for the specified instance to the data included in the request.
        setTags (request: {        
            // Name of the instance scoping this request.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Starts an instance that was stopped using the using the instances().stop method. For more information, see Restart an instance.
        start (request: {        
            // Name of the instance resource to start.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Starts an instance that was stopped using the using the instances().stop method. For more information, see Restart an instance.
        startWithEncryptionKey (request: {        
            // Name of the instance resource to start.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Stops a running instance, shutting it down cleanly, and allows you to restart the instance at a later time. Stopped instances do not incur per-minute, virtual machine usage charges while they are stopped, but any resources that the virtual machine is using, such as persistent disks and static IP addresses, will continue to be charged until they are deleted. For more information, see Stopping an instance.
        stop (request: {        
            // Name of the instance resource to stop.
            instance: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface LicensesResource {
        // Returns the specified License resource.
        get (request: {        
            // Name of the License resource to return.
            license: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<License>;        
        
    }
    
    
    interface MachineTypesResource {
        // Retrieves an aggregated list of machine types.
        aggregatedList (request: {        
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<MachineTypeAggregatedList>;        
        
        // Returns the specified machine type. Get a list of available machine types by making a list() request.
        get (request: {        
            // Name of the machine type to return.
            machineType: string,
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<MachineType>;        
        
        // Retrieves a list of machine types available to the specified project.
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
            // Project ID for this request.
            project: string,
            // The name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<MachineTypeList>;        
        
    }
    
    
    interface NetworksResource {
        // Adds a peering to the specified network.
        addPeering (request: {        
            // Name of the network resource to add peering to.
            network: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Deletes the specified network.
        delete (request: {        
            // Name of the network to delete.
            network: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified network. Get a list of available networks by making a list() request.
        get (request: {        
            // Name of the network to return.
            network: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Network>;        
        
        // Creates a network in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of networks available to the specified project.
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<NetworkList>;        
        
        // Removes a peering from the specified network.
        removePeering (request: {        
            // Name of the network resource to remove peering from.
            network: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Switches the network mode from auto subnet mode to custom subnet mode.
        switchToCustomMode (request: {        
            // Name of the network to be updated.
            network: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface ProjectsResource {
        // Disable this project as an XPN host project.
        disableXpnHost (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Disable an XPN resource associated with this host project.
        disableXpnResource (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Enable this project as an XPN host project.
        enableXpnHost (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Enable XPN resource (a.k.a service project or service folder in the future) for a host project, so that subnetworks in the host project can be used by instances in the service project or folder.
        enableXpnResource (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified Project resource.
        get (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Project>;        
        
        // Get the XPN host project that this project links to. May be empty if no link exists.
        getXpnHost (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Project>;        
        
        // Get XPN resources associated with this host project.
        getXpnResources (request: {        
            // 
            filter?: string,
            // 
            maxResults?: number,
            // 
            order_by?: string,
            // 
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<ProjectsGetXpnResources>;        
        
        // List all XPN host projects visible to the user in an organization.
        listXpnHosts (request: {        
            // 
            filter?: string,
            // 
            maxResults?: number,
            // 
            order_by?: string,
            // 
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<XpnHostList>;        
        
        // Moves a persistent disk from one zone to another.
        moveDisk (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Moves an instance and its attached persistent disks from one zone to another.
        moveInstance (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets metadata common to all instances within the specified project using the data included in the request.
        setCommonInstanceMetadata (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Enables the usage export feature and sets the usage export bucket where reports are stored. If you provide an empty request body using this method, the usage export feature will be disabled.
        setUsageExportBucket (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface RegionAutoscalersResource {
        // Deletes the specified autoscaler.
        delete (request: {        
            // Name of the autoscaler to delete.
            autoscaler: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified autoscaler.
        get (request: {        
            // Name of the autoscaler to return.
            autoscaler: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Autoscaler>;        
        
        // Creates an autoscaler in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of autoscalers contained within the specified region.
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
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<RegionAutoscalerList>;        
        
        // Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
        patch (request: {        
            // Name of the autoscaler to patch.
            autoscaler?: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Updates an autoscaler in the specified project using the data included in the request.
        update (request: {        
            // Name of the autoscaler to update.
            autoscaler?: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface RegionBackendServicesResource {
        // Deletes the specified regional BackendService resource.
        delete (request: {        
            // Name of the BackendService resource to delete.
            backendService: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified regional BackendService resource.
        get (request: {        
            // Name of the BackendService resource to return.
            backendService: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<BackendService>;        
        
        // Gets the most recent health check results for this regional BackendService.
        getHealth (request: {        
            // Name of the BackendService resource to which the queried instance belongs.
            backendService: string,
            // 
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<BackendServiceGroupHealth>;        
        
        // Creates a regional BackendService resource in the specified project using the data included in the request. There are several restrictions and guidelines to keep in mind when creating a regional backend service. Read  Restrictions and Guidelines for more information.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of regional BackendService resources available to the specified project in the given region.
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
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<BackendServiceList>;        
        
        // Updates the specified regional BackendService resource with the data included in the request. There are several restrictions and guidelines to keep in mind when updating a backend service. Read  Restrictions and Guidelines for more information. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
        patch (request: {        
            // Name of the BackendService resource to patch.
            backendService: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Updates the specified regional BackendService resource with the data included in the request. There are several restrictions and guidelines to keep in mind when updating a backend service. Read  Restrictions and Guidelines for more information.
        update (request: {        
            // Name of the BackendService resource to update.
            backendService: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface RegionCommitmentsResource {
        // Retrieves an aggregated list of commitments.
        aggregatedList (request: {        
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<CommitmentAggregatedList>;        
        
        // Returns the specified commitment resource. Get a list of available commitments by making a list() request.
        get (request: {        
            // Name of the commitment to return.
            commitment: string,
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<Commitment>;        
        
        // Creates a commitment in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of commitments contained within the specified region.
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
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<CommitmentList>;        
        
    }
    
    
    interface RegionInstanceGroupManagersResource {
        // Schedules a group action to remove the specified instances from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method.
        // 
        // If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
        // 
        // You can specify a maximum of 1000 instances with this method per request.
        abandonInstances (request: {        
            // Name of the managed instance group.
            instanceGroupManager: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Deletes the specified managed instance group and all of the instances in that group.
        delete (request: {        
            // Name of the managed instance group to delete.
            instanceGroupManager: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Schedules a group action to delete the specified instances in the managed instance group. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. This operation is marked as DONE when the action is scheduled even if the instances are still being deleted. You must separately verify the status of the deleting action with the listmanagedinstances method.
        // 
        // If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
        // 
        // You can specify a maximum of 1000 instances with this method per request.
        deleteInstances (request: {        
            // Name of the managed instance group.
            instanceGroupManager: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns all of the details about the specified managed instance group.
        get (request: {        
            // Name of the managed instance group to return.
            instanceGroupManager: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<InstanceGroupManager>;        
        
        // Creates a managed instance group using the information that you specify in the request. After the group is created, it schedules an action to create instances in the group using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method.
        // 
        // A regional managed instance group can contain up to 2000 instances.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of managed instance groups that are contained within the specified region.
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
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<RegionInstanceGroupManagerList>;        
        
        // Lists the instances in the managed instance group and instances that are scheduled to be created. The list includes any current actions that the group has scheduled for its instances.
        listManagedInstances (request: {        
            // 
            filter?: string,
            // The name of the managed instance group.
            instanceGroupManager: string,
            // 
            maxResults?: number,
            // 
            order_by?: string,
            // 
            pageToken?: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<RegionInstanceGroupManagersListInstancesResponse>;        
        
        // Schedules a group action to recreate the specified instances in the managed instance group. The instances are deleted and recreated using the current instance template for the managed instance group. This operation is marked as DONE when the action is scheduled even if the instances have not yet been recreated. You must separately verify the status of the recreating action with the listmanagedinstances method.
        // 
        // If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
        // 
        // You can specify a maximum of 1000 instances with this method per request.
        recreateInstances (request: {        
            // Name of the managed instance group.
            instanceGroupManager: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Changes the intended size for the managed instance group. If you increase the size, the group schedules actions to create new instances using the current instance template. If you decrease the size, the group schedules delete actions on one or more instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method.
        // 
        // If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
        resize (request: {        
            // Name of the managed instance group.
            instanceGroupManager: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
            // Number of instances that should exist in this instance group manager.
            size: number,
        }) : gapi.client.Request<Operation>;        
        
        // Sets the instance template to use when creating new instances or recreating instances in this group. Existing instances are not affected.
        setInstanceTemplate (request: {        
            // The name of the managed instance group.
            instanceGroupManager: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected.
        setTargetPools (request: {        
            // Name of the managed instance group.
            instanceGroupManager: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface RegionInstanceGroupsResource {
        // Returns the specified instance group resource.
        get (request: {        
            // Name of the instance group resource to return.
            instanceGroup: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<InstanceGroup>;        
        
        // Retrieves the list of instance group resources contained within the specified region.
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
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<RegionInstanceGroupList>;        
        
        // Lists the instances in the specified instance group and displays information about the named ports. Depending on the specified options, this method can list all instances or only the instances that are running.
        listInstances (request: {        
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
            // Name of the regional instance group for which we want to list the instances.
            instanceGroup: string,
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
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<RegionInstanceGroupsListInstances>;        
        
        // Sets the named ports for the specified regional instance group.
        setNamedPorts (request: {        
            // The name of the regional instance group where the named ports are updated.
            instanceGroup: string,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface RegionOperationsResource {
        // Deletes the specified region-specific Operations resource.
        delete (request: {        
            // Name of the Operations resource to delete.
            operation: string,
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves the specified region-specific Operations resource.
        get (request: {        
            // Name of the Operations resource to return.
            operation: string,
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of Operation resources contained within the specified region.
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
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<OperationList>;        
        
    }
    
    
    interface RegionsResource {
        // Returns the specified Region resource. Get a list of available regions by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region resource to return.
            region: string,
        }) : gapi.client.Request<Region>;        
        
        // Retrieves the list of region resources available to the specified project.
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<RegionList>;        
        
    }
    
    
    interface RoutersResource {
        // Retrieves an aggregated list of routers.
        aggregatedList (request: {        
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<RouterAggregatedList>;        
        
        // Deletes the specified Router resource.
        delete (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
            // Name of the Router resource to delete.
            router: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified Router resource. Get a list of available routers by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
            // Name of the Router resource to return.
            router: string,
        }) : gapi.client.Request<Router>;        
        
        // Retrieves runtime information of the specified router.
        getRouterStatus (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
            // Name of the Router resource to query.
            router: string,
        }) : gapi.client.Request<RouterStatusResponse>;        
        
        // Creates a Router resource in the specified project and region using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of Router resources available to the specified project.
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
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<RouterList>;        
        
        // Patches the specified Router resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
        patch (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
            // Name of the Router resource to patch.
            router: string,
        }) : gapi.client.Request<Operation>;        
        
        // Preview fields auto-generated during router create and update operations. Calling this method does NOT create or update the router.
        preview (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
            // Name of the Router resource to query.
            router: string,
        }) : gapi.client.Request<RoutersPreviewResponse>;        
        
        // Updates the specified Router resource with the data included in the request.
        update (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
            // Name of the Router resource to update.
            router: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface RoutesResource {
        // Deletes the specified Route resource.
        delete (request: {        
            // Project ID for this request.
            project: string,
            // Name of the Route resource to delete.
            route: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified Route resource. Get a list of available routes by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the Route resource to return.
            route: string,
        }) : gapi.client.Request<Route>;        
        
        // Creates a Route resource in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of Route resources available to the specified project.
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<RouteList>;        
        
    }
    
    
    interface SnapshotsResource {
        // Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot.
        // 
        // For more information, see Deleting snaphots.
        delete (request: {        
            // Project ID for this request.
            project: string,
            // Name of the Snapshot resource to delete.
            snapshot: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified Snapshot resource. Get a list of available snapshots by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the Snapshot resource to return.
            snapshot: string,
        }) : gapi.client.Request<Snapshot>;        
        
        // Retrieves the list of Snapshot resources contained within the specified project.
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<SnapshotList>;        
        
        // Sets the labels on a snapshot. To learn more about labels, read the Labeling Resources documentation.
        setLabels (request: {        
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface SslCertificatesResource {
        // Deletes the specified SslCertificate resource.
        delete (request: {        
            // Project ID for this request.
            project: string,
            // Name of the SslCertificate resource to delete.
            sslCertificate: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified SslCertificate resource. Get a list of available SSL certificates by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the SslCertificate resource to return.
            sslCertificate: string,
        }) : gapi.client.Request<SslCertificate>;        
        
        // Creates a SslCertificate resource in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of SslCertificate resources available to the specified project.
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<SslCertificateList>;        
        
    }
    
    
    interface SubnetworksResource {
        // Retrieves an aggregated list of subnetworks.
        aggregatedList (request: {        
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<SubnetworkAggregatedList>;        
        
        // Deletes the specified subnetwork.
        delete (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
            // Name of the Subnetwork resource to delete.
            subnetwork: string,
        }) : gapi.client.Request<Operation>;        
        
        // Expands the IP CIDR range of the subnetwork to a specified value.
        expandIpCidrRange (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
            // Name of the Subnetwork resource to update.
            subnetwork: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified subnetwork. Get a list of available subnetworks list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
            // Name of the Subnetwork resource to return.
            subnetwork: string,
        }) : gapi.client.Request<Subnetwork>;        
        
        // Creates a subnetwork in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of subnetworks available to the specified project.
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
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<SubnetworkList>;        
        
        // Set whether VMs in this subnet can access Google services without assigning external IP addresses through Private Google Access.
        setPrivateIpGoogleAccess (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
            // Name of the Subnetwork resource.
            subnetwork: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface TargetHttpProxiesResource {
        // Deletes the specified TargetHttpProxy resource.
        delete (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetHttpProxy resource to delete.
            targetHttpProxy: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified TargetHttpProxy resource. Get a list of available target HTTP proxies by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetHttpProxy resource to return.
            targetHttpProxy: string,
        }) : gapi.client.Request<TargetHttpProxy>;        
        
        // Creates a TargetHttpProxy resource in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of TargetHttpProxy resources available to the specified project.
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<TargetHttpProxyList>;        
        
        // Changes the URL map for TargetHttpProxy.
        setUrlMap (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetHttpProxy to set a URL map for.
            targetHttpProxy: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface TargetHttpsProxiesResource {
        // Deletes the specified TargetHttpsProxy resource.
        delete (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetHttpsProxy resource to delete.
            targetHttpsProxy: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified TargetHttpsProxy resource. Get a list of available target HTTPS proxies by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetHttpsProxy resource to return.
            targetHttpsProxy: string,
        }) : gapi.client.Request<TargetHttpsProxy>;        
        
        // Creates a TargetHttpsProxy resource in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of TargetHttpsProxy resources available to the specified project.
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<TargetHttpsProxyList>;        
        
        // Replaces SslCertificates for TargetHttpsProxy.
        setSslCertificates (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetHttpsProxy resource to set an SslCertificates resource for.
            targetHttpsProxy: string,
        }) : gapi.client.Request<Operation>;        
        
        // Changes the URL map for TargetHttpsProxy.
        setUrlMap (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetHttpsProxy resource whose URL map is to be set.
            targetHttpsProxy: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface TargetInstancesResource {
        // Retrieves an aggregated list of target instances.
        aggregatedList (request: {        
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<TargetInstanceAggregatedList>;        
        
        // Deletes the specified TargetInstance resource.
        delete (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetInstance resource to delete.
            targetInstance: string,
            // Name of the zone scoping this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified TargetInstance resource. Get a list of available target instances by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetInstance resource to return.
            targetInstance: string,
            // Name of the zone scoping this request.
            zone: string,
        }) : gapi.client.Request<TargetInstance>;        
        
        // Creates a TargetInstance resource in the specified project and zone using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // Name of the zone scoping this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of TargetInstance resources available to the specified project and zone.
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
            // Project ID for this request.
            project: string,
            // Name of the zone scoping this request.
            zone: string,
        }) : gapi.client.Request<TargetInstanceList>;        
        
    }
    
    
    interface TargetPoolsResource {
        // Adds health check URLs to a target pool.
        addHealthCheck (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
            // Name of the target pool to add a health check to.
            targetPool: string,
        }) : gapi.client.Request<Operation>;        
        
        // Adds an instance to a target pool.
        addInstance (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
            // Name of the TargetPool resource to add instances to.
            targetPool: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves an aggregated list of target pools.
        aggregatedList (request: {        
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<TargetPoolAggregatedList>;        
        
        // Deletes the specified target pool.
        delete (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
            // Name of the TargetPool resource to delete.
            targetPool: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified target pool. Get a list of available target pools by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
            // Name of the TargetPool resource to return.
            targetPool: string,
        }) : gapi.client.Request<TargetPool>;        
        
        // Gets the most recent health check results for each IP for the instance that is referenced by the given target pool.
        getHealth (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
            // Name of the TargetPool resource to which the queried instance belongs.
            targetPool: string,
        }) : gapi.client.Request<TargetPoolInstanceHealth>;        
        
        // Creates a target pool in the specified project and region using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of target pools available to the specified project and region.
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
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
        }) : gapi.client.Request<TargetPoolList>;        
        
        // Removes health check URL from a target pool.
        removeHealthCheck (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
            // Name of the target pool to remove health checks from.
            targetPool: string,
        }) : gapi.client.Request<Operation>;        
        
        // Removes instance URL from a target pool.
        removeInstance (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
            // Name of the TargetPool resource to remove instances from.
            targetPool: string,
        }) : gapi.client.Request<Operation>;        
        
        // Changes a backup target pool's configurations.
        setBackup (request: {        
            // New failoverRatio value for the target pool.
            failoverRatio?: number,
            // Project ID for this request.
            project: string,
            // Name of the region scoping this request.
            region: string,
            // Name of the TargetPool resource to set a backup pool for.
            targetPool: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface TargetSslProxiesResource {
        // Deletes the specified TargetSslProxy resource.
        delete (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetSslProxy resource to delete.
            targetSslProxy: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified TargetSslProxy resource. Get a list of available target SSL proxies by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetSslProxy resource to return.
            targetSslProxy: string,
        }) : gapi.client.Request<TargetSslProxy>;        
        
        // Creates a TargetSslProxy resource in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of TargetSslProxy resources available to the specified project.
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<TargetSslProxyList>;        
        
        // Changes the BackendService for TargetSslProxy.
        setBackendService (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetSslProxy resource whose BackendService resource is to be set.
            targetSslProxy: string,
        }) : gapi.client.Request<Operation>;        
        
        // Changes the ProxyHeaderType for TargetSslProxy.
        setProxyHeader (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetSslProxy resource whose ProxyHeader is to be set.
            targetSslProxy: string,
        }) : gapi.client.Request<Operation>;        
        
        // Changes SslCertificates for TargetSslProxy.
        setSslCertificates (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetSslProxy resource whose SslCertificate resource is to be set.
            targetSslProxy: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface TargetTcpProxiesResource {
        // Deletes the specified TargetTcpProxy resource.
        delete (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetTcpProxy resource to delete.
            targetTcpProxy: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified TargetTcpProxy resource. Get a list of available target TCP proxies by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetTcpProxy resource to return.
            targetTcpProxy: string,
        }) : gapi.client.Request<TargetTcpProxy>;        
        
        // Creates a TargetTcpProxy resource in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of TargetTcpProxy resources available to the specified project.
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<TargetTcpProxyList>;        
        
        // Changes the BackendService for TargetTcpProxy.
        setBackendService (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetTcpProxy resource whose BackendService resource is to be set.
            targetTcpProxy: string,
        }) : gapi.client.Request<Operation>;        
        
        // Changes the ProxyHeaderType for TargetTcpProxy.
        setProxyHeader (request: {        
            // Project ID for this request.
            project: string,
            // Name of the TargetTcpProxy resource whose ProxyHeader is to be set.
            targetTcpProxy: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface TargetVpnGatewaysResource {
        // Retrieves an aggregated list of target VPN gateways.
        aggregatedList (request: {        
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<TargetVpnGatewayAggregatedList>;        
        
        // Deletes the specified target VPN gateway.
        delete (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
            // Name of the target VPN gateway to delete.
            targetVpnGateway: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified target VPN gateway. Get a list of available target VPN gateways by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
            // Name of the target VPN gateway to return.
            targetVpnGateway: string,
        }) : gapi.client.Request<TargetVpnGateway>;        
        
        // Creates a target VPN gateway in the specified project and region using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of target VPN gateways available to the specified project and region.
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
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<TargetVpnGatewayList>;        
        
    }
    
    
    interface UrlMapsResource {
        // Deletes the specified UrlMap resource.
        delete (request: {        
            // Project ID for this request.
            project: string,
            // Name of the UrlMap resource to delete.
            urlMap: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified UrlMap resource. Get a list of available URL maps by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the UrlMap resource to return.
            urlMap: string,
        }) : gapi.client.Request<UrlMap>;        
        
        // Creates a UrlMap resource in the specified project using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Initiates a cache invalidation operation, invalidating the specified path, scoped to the specified UrlMap.
        invalidateCache (request: {        
            // Project ID for this request.
            project: string,
            // Name of the UrlMap scoping this request.
            urlMap: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of UrlMap resources available to the specified project.
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<UrlMapList>;        
        
        // Patches the specified UrlMap resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
        patch (request: {        
            // Project ID for this request.
            project: string,
            // Name of the UrlMap resource to patch.
            urlMap: string,
        }) : gapi.client.Request<Operation>;        
        
        // Updates the specified UrlMap resource with the data included in the request.
        update (request: {        
            // Project ID for this request.
            project: string,
            // Name of the UrlMap resource to update.
            urlMap: string,
        }) : gapi.client.Request<Operation>;        
        
        // Runs static validation for the UrlMap. In particular, the tests of the provided UrlMap will be run. Calling this method does NOT create the UrlMap.
        validate (request: {        
            // Project ID for this request.
            project: string,
            // Name of the UrlMap resource to be validated as.
            urlMap: string,
        }) : gapi.client.Request<UrlMapsValidateResponse>;        
        
    }
    
    
    interface VpnTunnelsResource {
        // Retrieves an aggregated list of VPN tunnels.
        aggregatedList (request: {        
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<VpnTunnelAggregatedList>;        
        
        // Deletes the specified VpnTunnel resource.
        delete (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
            // Name of the VpnTunnel resource to delete.
            vpnTunnel: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified VpnTunnel resource. Get a list of available VPN tunnels by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
            // Name of the VpnTunnel resource to return.
            vpnTunnel: string,
        }) : gapi.client.Request<VpnTunnel>;        
        
        // Creates a VpnTunnel resource in the specified project and region using the data included in the request.
        insert (request: {        
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of VpnTunnel resources contained in the specified project and region.
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
            // Project ID for this request.
            project: string,
            // Name of the region for this request.
            region: string,
        }) : gapi.client.Request<VpnTunnelList>;        
        
    }
    
    
    interface ZoneOperationsResource {
        // Deletes the specified zone-specific Operations resource.
        delete (request: {        
            // Name of the Operations resource to delete.
            operation: string,
            // Project ID for this request.
            project: string,
            // Name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves the specified zone-specific Operations resource.
        get (request: {        
            // Name of the Operations resource to return.
            operation: string,
            // Project ID for this request.
            project: string,
            // Name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of Operation resources contained within the specified zone.
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
            // Project ID for this request.
            project: string,
            // Name of the zone for request.
            zone: string,
        }) : gapi.client.Request<OperationList>;        
        
    }
    
    
    interface ZonesResource {
        // Returns the specified Zone resource. Get a list of available zones by making a list() request.
        get (request: {        
            // Project ID for this request.
            project: string,
            // Name of the zone resource to return.
            zone: string,
        }) : gapi.client.Request<Zone>;        
        
        // Retrieves the list of Zone resources available to the specified project.
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<ZoneList>;        
        
    }
    
}

declare module gapi.client.compute {
    var acceleratorTypes: gapi.client.compute.AcceleratorTypesResource; 
    
    var addresses: gapi.client.compute.AddressesResource; 
    
    var autoscalers: gapi.client.compute.AutoscalersResource; 
    
    var backendBuckets: gapi.client.compute.BackendBucketsResource; 
    
    var backendServices: gapi.client.compute.BackendServicesResource; 
    
    var diskTypes: gapi.client.compute.DiskTypesResource; 
    
    var disks: gapi.client.compute.DisksResource; 
    
    var firewalls: gapi.client.compute.FirewallsResource; 
    
    var forwardingRules: gapi.client.compute.ForwardingRulesResource; 
    
    var globalAddresses: gapi.client.compute.GlobalAddressesResource; 
    
    var globalForwardingRules: gapi.client.compute.GlobalForwardingRulesResource; 
    
    var globalOperations: gapi.client.compute.GlobalOperationsResource; 
    
    var healthChecks: gapi.client.compute.HealthChecksResource; 
    
    var httpHealthChecks: gapi.client.compute.HttpHealthChecksResource; 
    
    var httpsHealthChecks: gapi.client.compute.HttpsHealthChecksResource; 
    
    var images: gapi.client.compute.ImagesResource; 
    
    var instanceGroupManagers: gapi.client.compute.InstanceGroupManagersResource; 
    
    var instanceGroups: gapi.client.compute.InstanceGroupsResource; 
    
    var instanceTemplates: gapi.client.compute.InstanceTemplatesResource; 
    
    var instances: gapi.client.compute.InstancesResource; 
    
    var licenses: gapi.client.compute.LicensesResource; 
    
    var machineTypes: gapi.client.compute.MachineTypesResource; 
    
    var networks: gapi.client.compute.NetworksResource; 
    
    var projects: gapi.client.compute.ProjectsResource; 
    
    var regionAutoscalers: gapi.client.compute.RegionAutoscalersResource; 
    
    var regionBackendServices: gapi.client.compute.RegionBackendServicesResource; 
    
    var regionCommitments: gapi.client.compute.RegionCommitmentsResource; 
    
    var regionInstanceGroupManagers: gapi.client.compute.RegionInstanceGroupManagersResource; 
    
    var regionInstanceGroups: gapi.client.compute.RegionInstanceGroupsResource; 
    
    var regionOperations: gapi.client.compute.RegionOperationsResource; 
    
    var regions: gapi.client.compute.RegionsResource; 
    
    var routers: gapi.client.compute.RoutersResource; 
    
    var routes: gapi.client.compute.RoutesResource; 
    
    var snapshots: gapi.client.compute.SnapshotsResource; 
    
    var sslCertificates: gapi.client.compute.SslCertificatesResource; 
    
    var subnetworks: gapi.client.compute.SubnetworksResource; 
    
    var targetHttpProxies: gapi.client.compute.TargetHttpProxiesResource; 
    
    var targetHttpsProxies: gapi.client.compute.TargetHttpsProxiesResource; 
    
    var targetInstances: gapi.client.compute.TargetInstancesResource; 
    
    var targetPools: gapi.client.compute.TargetPoolsResource; 
    
    var targetSslProxies: gapi.client.compute.TargetSslProxiesResource; 
    
    var targetTcpProxies: gapi.client.compute.TargetTcpProxiesResource; 
    
    var targetVpnGateways: gapi.client.compute.TargetVpnGatewaysResource; 
    
    var urlMaps: gapi.client.compute.UrlMapsResource; 
    
    var vpnTunnels: gapi.client.compute.VpnTunnelsResource; 
    
    var zoneOperations: gapi.client.compute.ZoneOperationsResource; 
    
    var zones: gapi.client.compute.ZonesResource; 
    
}
