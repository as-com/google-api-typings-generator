// Type definitions for Google Genomics API v1
// Project: https://cloud.google.com/genomics
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.genomics {
    
    interface CodingSequence {
        // The start of the coding sequence on this annotation's reference sequence,
        // 0-based inclusive. Note that this position is relative to the reference
        // start, and *not* the containing annotation start.
        start?: string,
        // The end of the coding sequence on this annotation's reference sequence,
        // 0-based exclusive. Note that this position is relative to the reference
        // start, and *not* the containing annotation start.
        end?: string,
    }
    
    interface SearchReferencesResponse {
        // The matching references.
        references?: Reference[],        
        // The continuation token, which is used to page through large result sets.
        // Provide this value in a subsequent request to return the next page of
        // results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
    }
    
    interface GetIamPolicyRequest {
    }
    
    interface TestIamPermissionsResponse {
        // A subset of `TestPermissionsRequest.permissions` that the caller is
        // allowed.
        permissions?: string[],        
    }
    
    interface SearchAnnotationSetsRequest {
        // The continuation token, which is used to page through large result sets.
        // To get the next page of results, set this parameter to the value of
        // `nextPageToken` from the previous response.
        pageToken?: string,
        // The maximum number of results to return in a single page. If unspecified,
        // defaults to 128. The maximum value is 1024.
        pageSize?: number,
        // Required. The dataset IDs to search within. Caller must have `READ` access
        // to these datasets.
        datasetIds?: string[],        
        // If specified, only annotation sets that have any of these types are
        // returned.
        types?: string[],        
        // Only return annotations sets for which a substring of the name matches this
        // string (case insensitive).
        name?: string,
        // If specified, only annotation sets associated with the given reference set
        // are returned.
        referenceSetId?: string,
    }
    
    interface SearchReadGroupSetsResponse {
        // The list of matching read group sets.
        readGroupSets?: ReadGroupSet[],        
        // The continuation token, which is used to page through large result sets.
        // Provide this value in a subsequent request to return the next page of
        // results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
    }
    
    interface LinearAlignment {
        // The mapping quality of this alignment. Represents how likely
        // the read maps to this position as opposed to other locations.
        // 
        // Specifically, this is -10 log10 Pr(mapping position is wrong), rounded to
        // the nearest integer.
        mappingQuality?: number,
        // Represents the local alignment of this sequence (alignment matches, indels,
        // etc) against the reference.
        cigar?: CigarUnit[],        
        // The position of this alignment.
        position?: Position,
    }
    
    interface SearchReferencesRequest {
        // The continuation token, which is used to page through large result sets.
        // To get the next page of results, set this parameter to the value of
        // `nextPageToken` from the previous response.
        pageToken?: string,
        // If present, return references for which a prefix of any of
        // sourceAccessions match
        // any of these strings. Accession numbers typically have a main number and a
        // version, for example `GCF_000001405.26`.
        accessions?: string[],        
        // The maximum number of results to return in a single page. If unspecified,
        // defaults to 1024. The maximum value is 4096.
        pageSize?: number,
        // If present, return only references which belong to this reference set.
        referenceSetId?: string,
        // If present, return references for which the
        // md5checksum matches exactly.
        md5checksums?: string[],        
    }
    
    interface Dataset {
        // The Google Cloud project ID that this dataset belongs to.
        projectId?: string,
        // The server-generated dataset ID, unique across all datasets.
        id?: string,
        // The time this dataset was created, in seconds from the epoch.
        createTime?: string,
        // The dataset name.
        name?: string,
    }
    
    interface ImportVariantsResponse {
        // IDs of the call sets created during the import.
        callSetIds?: string[],        
    }
    
    interface ReadGroup {
        // A map of additional read group information. This must be of the form
        // map<string, string[]> (string key mapping to a list of string values).
        info?: any,
        // The server-generated read group ID, unique for all read groups.
        // Note: This is different than the @RG ID field in the SAM spec. For that
        // value, see name.
        id?: string,
        // The programs used to generate this read group. Programs are always
        // identical for all read groups within a read group set. For this reason,
        // only the first read group in a returned set will have this field
        // populated.
        programs?: Program[],        
        // The predicted insert size of this read group. The insert size is the length
        // the sequenced DNA fragment from end-to-end, not including the adapters.
        predictedInsertSize?: number,
        // A free-form text description of this read group.
        description?: string,
        // A client-supplied sample identifier for the reads in this read group.
        sampleId?: string,
        // The dataset to which this read group belongs.
        datasetId?: string,
        // The experiment used to generate this read group.
        experiment?: Experiment,
        // The read group name. This corresponds to the @RG ID field in the SAM spec.
        name?: string,
        // The reference set the reads in this read group are aligned to.
        referenceSetId?: string,
    }
    
    interface ReadGroupSet {
        // The dataset to which this read group set belongs.
        datasetId?: string,
        // The read groups in this set. There are typically 1-10 read groups in a read
        // group set.
        readGroups?: ReadGroup[],        
        // The filename of the original source file for this read group set, if any.
        filename?: string,
        // The read group set name. By default this will be initialized to the sample
        // name of the sequenced data contained in this set.
        name?: string,
        // The reference set to which the reads in this read group set are aligned.
        referenceSetId?: string,
        // A map of additional read group set information.
        info?: any,
        // The server-generated read group set ID, unique for all read group sets.
        id?: string,
    }
    
    interface SearchVariantSetsResponse {
        // The continuation token, which is used to page through large result sets.
        // Provide this value in a subsequent request to return the next page of
        // results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
        // The variant sets belonging to the requested dataset.
        variantSets?: VariantSet[],        
    }
    
    interface Empty {
    }
    
    interface Entry {
        // The created annotation, if creation was successful.
        annotation?: Annotation,
        // The creation status.
        status?: Status,
    }
    
    interface Position {
        // The 0-based offset from the start of the forward strand for that reference.
        position?: string,
        // The name of the reference in whatever reference set is being used.
        referenceName?: string,
        // Whether this position is on the reverse strand, as opposed to the forward
        // strand.
        reverseStrand?: boolean,
    }
    
    interface SearchReferenceSetsResponse {
        // The continuation token, which is used to page through large result sets.
        // Provide this value in a subsequent request to return the next page of
        // results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
        // The matching references sets.
        referenceSets?: ReferenceSet[],        
    }
    
    interface SearchCallSetsRequest {
        // The continuation token, which is used to page through large result sets.
        // To get the next page of results, set this parameter to the value of
        // `nextPageToken` from the previous response.
        pageToken?: string,
        // Only return call sets for which a substring of the name matches this
        // string.
        name?: string,
        // The maximum number of results to return in a single page. If unspecified,
        // defaults to 1024.
        pageSize?: number,
        // Restrict the query to call sets within the given variant sets. At least one
        // ID must be provided.
        variantSetIds?: string[],        
    }
    
    interface ImportReadGroupSetsRequest {
        // A list of URIs pointing at [BAM
        // files](https://samtools.github.io/hts-specs/SAMv1.pdf)
        // in Google Cloud Storage.
        // Those URIs can include wildcards (*), but do not add or remove
        // matching files before import has completed.
        // 
        // Note that Google Cloud Storage object listing is only eventually
        // consistent: files added may be not be immediately visible to
        // everyone. Thus, if using a wildcard it is preferable not to start
        // the import immediately after the files are created.
        sourceUris?: string[],        
        // The reference set to which the imported read group sets are aligned to, if
        // any. The reference names of this reference set must be a superset of those
        // found in the imported file headers. If no reference set id is provided, a
        // best effort is made to associate with a matching reference set.
        referenceSetId?: string,
        // The partition strategy describes how read groups are partitioned into read
        // group sets.
        partitionStrategy?: string,
        // Required. The ID of the dataset these read group sets will belong to. The
        // caller must have WRITE permissions to this dataset.
        datasetId?: string,
    }
    
    interface Policy {
        // `etag` is used for optimistic concurrency control as a way to help
        // prevent simultaneous updates of a policy from overwriting each other.
        // It is strongly suggested that systems make use of the `etag` in the
        // read-modify-write cycle to perform policy updates in order to avoid race
        // conditions: An `etag` is returned in the response to `getIamPolicy`, and
        // systems are expected to put that etag in the request to `setIamPolicy` to
        // ensure that their change will be applied to the same version of the policy.
        // 
        // If no `etag` is provided in the call to `setIamPolicy`, then the existing
        // policy is overwritten blindly.
        etag?: string,
        // Version of the `Policy`. The default version is 0.
        version?: number,
        // Associates a list of `members` to a `role`.
        // `bindings` with no members will result in an error.
        bindings?: Binding[],        
    }
    
    interface SearchReadsRequest {
        // The IDs of the read groups within which to search for reads. All specified
        // read groups must belong to the same read group sets. Must specify one of
        // `readGroupSetIds` or `readGroupIds`.
        readGroupIds?: string[],        
        // The end position of the range on the reference, 0-based exclusive. If
        // specified, `referenceName` must also be specified.
        end?: string,
        // The continuation token, which is used to page through large result sets.
        // To get the next page of results, set this parameter to the value of
        // `nextPageToken` from the previous response.
        pageToken?: string,
        // The maximum number of results to return in a single page. If unspecified,
        // defaults to 256. The maximum value is 2048.
        pageSize?: number,
        // The start position of the range on the reference, 0-based inclusive. If
        // specified, `referenceName` must also be specified.
        start?: string,
        // The reference sequence name, for example `chr1`, `1`, or `chrX`. If set to
        // `*`, only unmapped reads are returned. If unspecified, all reads (mapped
        // and unmapped) are returned.
        referenceName?: string,
        // The IDs of the read groups sets within which to search for reads. All
        // specified read group sets must be aligned against a common set of reference
        // sequences; this defines the genomic coordinates for the query. Must specify
        // one of `readGroupSetIds` or `readGroupIds`.
        readGroupSetIds?: string[],        
    }
    
    interface CancelOperationRequest {
    }
    
    interface Annotation {
        // The annotation set to which this annotation belongs.
        annotationSetId?: string,
        // The display name of this annotation.
        name?: string,
        // A variant annotation, which describes the effect of a variant on the
        // genome, the coding sequence, and/or higher level consequences at the
        // organism level e.g. pathogenicity. This field is only set for annotations
        // of type `VARIANT`.
        variant?: VariantAnnotation,
        // The server-generated annotation ID, unique across all annotations.
        id?: string,
        // The ID of the Google Genomics reference associated with this range.
        referenceId?: string,
        // Whether this range refers to the reverse strand, as opposed to the forward
        // strand. Note that regardless of this field, the start/end position of the
        // range always refer to the forward strand.
        reverseStrand?: boolean,
        // The display name corresponding to the reference specified by
        // `referenceId`, for example `chr1`, `1`, or `chrX`.
        referenceName?: string,
        // The data type for this annotation. Must match the containing annotation
        // set's type.
        type?: string,
        // A map of additional read alignment information. This must be of the form
        // map<string, string[]> (string key mapping to a list of string values).
        info?: any,
        // The end position of the range on the reference, 0-based exclusive.
        end?: string,
        // A transcript value represents the assertion that a particular region of
        // the reference genome may be transcribed as RNA. An alternative splicing
        // pattern would be represented as a separate transcript object. This field
        // is only set for annotations of type `TRANSCRIPT`.
        transcript?: Transcript,
        // The start position of the range on the reference, 0-based inclusive.
        start?: string,
    }
    
    interface Operation {
        // If importing ReadGroupSets, an ImportReadGroupSetsResponse is returned. If importing Variants, an ImportVariantsResponse is returned. For pipelines and exports, an empty response is returned.
        response?: any,
        // The server-assigned name, which is only unique within the same service that originally returns it. For example&#58; `operations/CJHU7Oi_ChDrveSpBRjfuL-qzoWAgEw`
        name?: string,
        // The error result of the operation in case of failure or cancellation.
        error?: Status,
        // An OperationMetadata object. This will always be returned with the Operation.
        metadata?: any,
        // If the value is `false`, it means the operation is still in progress.
        // If true, the operation is completed, and either `error` or `response` is
        // available.
        done?: boolean,
    }
    
    interface RuntimeMetadata {
        // Execution information specific to Google Compute Engine.
        computeEngine?: ComputeEngine,
    }
    
    interface ImportReadGroupSetsResponse {
        // IDs of the read group sets that were created.
        readGroupSetIds?: string[],        
    }
    
    interface VariantCall {
        // A map of additional variant call information. This must be of the form
        // map<string, string[]> (string key mapping to a list of string values).
        info?: any,
        // The name of the call set this variant call belongs to.
        callSetName?: string,
        // The genotype likelihoods for this variant call. Each array entry
        // represents how likely a specific genotype is for this call. The value
        // ordering is defined by the GL tag in the VCF spec.
        // If Phred-scaled genotype likelihood scores (PL) are available and
        // log10(P) genotype likelihood scores (GL) are not, PL scores are converted
        // to GL scores.  If both are available, PL scores are stored in `info`.
        genotypeLikelihood?: number[],        
        // The ID of the call set this variant call belongs to.
        callSetId?: string,
        // The genotype of this variant call. Each value represents either the value
        // of the `referenceBases` field or a 1-based index into
        // `alternateBases`. If a variant had a `referenceBases`
        // value of `T` and an `alternateBases`
        // value of `["A", "C"]`, and the `genotype` was
        // `[2, 1]`, that would mean the call
        // represented the heterozygous value `CA` for this variant.
        // If the `genotype` was instead `[0, 1]`, the
        // represented value would be `TA`. Ordering of the
        // genotype values is important if the `phaseset` is present.
        // If a genotype is not called (that is, a `.` is present in the
        // GT string) -1 is returned.
        genotype?: number[],        
        // If this field is present, this variant call's genotype ordering implies
        // the phase of the bases and is consistent with any other variant calls in
        // the same reference sequence which have the same phaseset value.
        // When importing data from VCF, if the genotype data was phased but no
        // phase set was specified this field will be set to `*`.
        phaseset?: string,
    }
    
    interface SearchVariantsResponse {
        // The continuation token, which is used to page through large result sets.
        // Provide this value in a subsequent request to return the next page of
        // results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
        // The list of matching Variants.
        variants?: Variant[],        
    }
    
    interface ListBasesResponse {
        // The offset position (0-based) of the given `sequence` from the
        // start of this `Reference`. This value will differ for each page
        // in a paginated request.
        offset?: string,
        // The continuation token, which is used to page through large result sets.
        // Provide this value in a subsequent request to return the next page of
        // results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
        // A substring of the bases that make up this reference.
        sequence?: string,
    }
    
    interface Status {
        // A list of messages that carry the error details.  There is a common set of
        // message types for APIs to use.
        details?: any[],        
        // The status code, which should be an enum value of google.rpc.Code.
        code?: number,
        // A developer-facing error message, which should be in English. Any
        // user-facing error message should be localized and sent in the
        // google.rpc.Status.details field, or localized by the client.
        message?: string,
    }
    
    interface UndeleteDatasetRequest {
    }
    
    interface Binding {
        // Specifies the identities requesting access for a Cloud Platform resource.
        // `members` can have the following values:
        // 
        // * `allUsers`: A special identifier that represents anyone who is
        //    on the internet; with or without a Google account.
        // 
        // * `allAuthenticatedUsers`: A special identifier that represents anyone
        //    who is authenticated with a Google account or a service account.
        // 
        // * `user:{emailid}`: An email address that represents a specific Google
        //    account. For example, `alice@gmail.com` or `joe@example.com`.
        // 
        // 
        // * `serviceAccount:{emailid}`: An email address that represents a service
        //    account. For example, `my-other-app@appspot.gserviceaccount.com`.
        // 
        // * `group:{emailid}`: An email address that represents a Google group.
        //    For example, `admins@example.com`.
        // 
        // 
        // * `domain:{domain}`: A Google Apps domain name that represents all the
        //    users of that domain. For example, `google.com` or `example.com`.
        // 
        // 
        members?: string[],        
        // Role that is assigned to `members`.
        // For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
        // Required
        role?: string,
    }
    
    interface Range {
        // The reference sequence name, for example `chr1`,
        // `1`, or `chrX`.
        referenceName?: string,
        // The start position of the range on the reference, 0-based inclusive.
        start?: string,
        // The end position of the range on the reference, 0-based exclusive.
        end?: string,
    }
    
    interface VariantSet {
        // The metadata associated with this variant set.
        metadata?: VariantSetMetadata[],        
        // A list of all references used by the variants in a variant set
        // with associated coordinate upper bounds for each one.
        referenceBounds?: ReferenceBound[],        
        // The server-generated variant set ID, unique across all variant sets.
        id?: string,
        // A textual description of this variant set.
        description?: string,
        // The dataset to which this variant set belongs.
        datasetId?: string,
        // User-specified, mutable name.
        name?: string,
        // The reference set to which the variant set is mapped. The reference set
        // describes the alignment provenance of the variant set, while the
        // `referenceBounds` describe the shape of the actual variant data. The
        // reference set's reference names are a superset of those found in the
        // `referenceBounds`.
        // 
        // For example, given a variant set that is mapped to the GRCh38 reference set
        // and contains a single variant on reference 'X', `referenceBounds` would
        // contain only an entry for 'X', while the associated reference set
        // enumerates all possible references: '1', '2', 'X', 'Y', 'MT', etc.
        referenceSetId?: string,
    }
    
    interface BatchCreateAnnotationsResponse {
        // The resulting per-annotation entries, ordered consistently with the
        // original request.
        entries?: Entry[],        
    }
    
    interface ReferenceBound {
        // An upper bound (inclusive) on the starting coordinate of any
        // variant in the reference sequence.
        upperBound?: string,
        // The name of the reference associated with this reference bound.
        referenceName?: string,
    }
    
    interface ListOperationsResponse {
        // The standard List next-page token.
        nextPageToken?: string,
        // A list of operations that matches the specified filter in the request.
        operations?: Operation[],        
    }
    
    interface Variant {
        // The variant calls for this particular variant. Each one represents the
        // determination of genotype with respect to this variant.
        calls?: VariantCall[],        
        // The date this variant was created, in milliseconds from the epoch.
        created?: string,
        // The position at which this variant occurs (0-based).
        // This corresponds to the first base of the string of reference bases.
        start?: string,
        // A measure of how likely this variant is to be real.
        // A higher value is better.
        quality?: number,
        // The server-generated variant ID, unique across all variants.
        id?: string,
        // The ID of the variant set this variant belongs to.
        variantSetId?: string,
        // The reference on which this variant occurs.
        // (such as `chr20` or `X`)
        referenceName?: string,
        // A map of additional variant information. This must be of the form
        // map<string, string[]> (string key mapping to a list of string values).
        info?: any,
        // The reference bases for this variant. They start at the given
        // position.
        referenceBases?: string,
        // Names for the variant, for example a RefSNP ID.
        names?: string[],        
        // The bases that appear instead of the reference bases.
        alternateBases?: string[],        
        // A list of filters (normally quality filters) this variant has failed.
        // `PASS` indicates this variant has passed all filters.
        filter?: string[],        
        // The end position (0-based) of this variant. This corresponds to the first
        // base after the last base in the reference allele. So, the length of
        // the reference allele is (end - start). This is useful for variants
        // that don't explicitly give alternate bases, for example large deletions.
        end?: string,
    }
    
    interface SearchCallSetsResponse {
        // The continuation token, which is used to page through large result sets.
        // Provide this value in a subsequent request to return the next page of
        // results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
        // The list of matching call sets.
        callSets?: CallSet[],        
    }
    
    interface SearchVariantsRequest {
        // The maximum number of calls to return in a single page. Note that this
        // limit may be exceeded in the event that a matching variant contains more
        // calls than the requested maximum. If unspecified, defaults to 5000. The
        // maximum value is 10000.
        maxCalls?: number,
        // The continuation token, which is used to page through large result sets.
        // To get the next page of results, set this parameter to the value of
        // `nextPageToken` from the previous response.
        pageToken?: string,
        // The maximum number of variants to return in a single page. If unspecified,
        // defaults to 5000. The maximum value is 10000.
        pageSize?: number,
        // Only return variant calls which belong to call sets with these ids.
        // Leaving this blank returns all variant calls. If a variant has no
        // calls belonging to any of these call sets, it won't be returned at all.
        callSetIds?: string[],        
        // Only return variants which have exactly this name.
        variantName?: string,
        // The beginning of the window (0-based, inclusive) for which
        // overlapping variants should be returned. If unspecified, defaults to 0.
        start?: string,
        // Required. Only return variants in this reference sequence.
        referenceName?: string,
        // At most one variant set ID must be provided. Only variants from this
        // variant set will be returned. If omitted, a call set id must be included in
        // the request.
        variantSetIds?: string[],        
        // The end of the window, 0-based exclusive. If unspecified or 0, defaults to
        // the length of the reference.
        end?: string,
    }
    
    interface OperationMetadata {
        // The time at which the job stopped running.
        endTime?: string,
        // Optional event messages that were generated during the job's execution.
        // This also contains any warnings that were generated during import
        // or export.
        events?: OperationEvent[],        
        // The time at which the job began to run.
        startTime?: string,
        // The original request that started the operation. Note that this will be in
        // current version of the API. If the operation was started with v1beta2 API
        // and a GetOperation is performed on v1 API, a v1 request will be returned.
        request?: any,
        // Runtime metadata on this Operation.
        runtimeMetadata?: any,
        // The time at which the job was submitted to the Genomics service.
        createTime?: string,
        // Optionally provided by the caller when submitting the request that creates
        // the operation.
        labels?: any,
        // The Google Cloud Project in which the job is scoped.
        projectId?: string,
        // This field is deprecated. Use `labels` instead. Optionally provided by the
        // caller when submitting the request that creates the operation.
        clientId?: string,
    }
    
    interface SearchReadGroupSetsRequest {
        // The continuation token, which is used to page through large result sets.
        // To get the next page of results, set this parameter to the value of
        // `nextPageToken` from the previous response.
        pageToken?: string,
        // Only return read group sets for which a substring of the name matches this
        // string.
        name?: string,
        // The maximum number of results to return in a single page. If unspecified,
        // defaults to 256. The maximum value is 1024.
        pageSize?: number,
        // Restricts this query to read group sets within the given datasets. At least
        // one ID must be provided.
        datasetIds?: string[],        
    }
    
    interface SearchAnnotationsResponse {
        // The continuation token, which is used to page through large result sets.
        // Provide this value in a subsequent request to return the next page of
        // results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
        // The matching annotations.
        annotations?: Annotation[],        
    }
    
    interface SearchReadsResponse {
        // The continuation token, which is used to page through large result sets.
        // Provide this value in a subsequent request to return the next page of
        // results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
        // The list of matching alignments sorted by mapped genomic coordinate,
        // if any, ascending in position within the same reference. Unmapped reads,
        // which have no position, are returned contiguously and are sorted in
        // ascending lexicographic order by fragment name.
        alignments?: Read[],        
    }
    
    interface ClinicalCondition {
        // The OMIM id for this condition.
        // Search for these IDs at http://omim.org/
        omimId?: string,
        // The set of external IDs for this condition.
        externalIds?: ExternalId[],        
        // The MedGen concept id associated with this gene.
        // Search for these IDs at http://www.ncbi.nlm.nih.gov/medgen/
        conceptId?: string,
        // A set of names for the condition.
        names?: string[],        
    }
    
    interface Program {
        // The ID of the program run before this one.
        prevProgramId?: string,
        // The command line used to run this program.
        commandLine?: string,
        // The version of the program run.
        version?: string,
        // The user specified locally unique ID of the program. Used along with
        // `prevProgramId` to define an ordering between programs.
        id?: string,
        // The display name of the program. This is typically the colloquial name of
        // the tool used, for example 'bwa' or 'picard'.
        name?: string,
    }
    
    interface CoverageBucket {
        // The genomic coordinate range spanned by this bucket.
        range?: Range,
        // The average number of reads which are aligned to each individual
        // reference base in this bucket.
        meanCoverage?: number,
    }
    
    interface ComputeEngine {
        // The names of the disks that were created for this pipeline.
        diskNames?: string[],        
        // The machine type of the instance.
        machineType?: string,
        // The instance on which the operation is running.
        instanceName?: string,
        // The availability zone in which the instance resides.
        zone?: string,
    }
    
    interface ExternalId {
        // The id used by the source of this data.
        id?: string,
        // The name of the source of this data.
        sourceName?: string,
    }
    
    interface Reference {
        // The URI from which the sequence was obtained. Typically specifies a FASTA
        // format file.
        sourceUri?: string,
        // ID from http://www.ncbi.nlm.nih.gov/taxonomy. For example, 9606 for human.
        ncbiTaxonId?: number,
        // The name of this reference, for example `22`.
        name?: string,
        // MD5 of the upper-case sequence excluding all whitespace characters (this
        // is equivalent to SQ:M5 in SAM). This value is represented in lower case
        // hexadecimal format.
        md5checksum?: string,
        // The server-generated reference ID, unique across all references.
        id?: string,
        // The length of this reference's sequence.
        length?: string,
        // All known corresponding accession IDs in INSDC (GenBank/ENA/DDBJ) ideally
        // with a version number, for example `GCF_000001405.26`.
        sourceAccessions?: string[],        
    }
    
    interface VariantSetMetadata {
        // Remaining structured metadata key-value pairs. This must be of the form
        // map<string, string[]> (string key mapping to a list of string values).
        info?: any,
        // The type of data. Possible types include: Integer, Float,
        // Flag, Character, and String.
        type?: string,
        // The value field for simple metadata
        value?: string,
        // User-provided ID field, not enforced by this API.
        // Two or more pieces of structured metadata with identical
        // id and key fields are considered equivalent.
        id?: string,
        // The number of values that can be included in a field described by this
        // metadata.
        number?: string,
        // The top-level key.
        key?: string,
        // A textual description of this metadata.
        description?: string,
    }
    
    interface SearchVariantSetsRequest {
        // Exactly one dataset ID must be provided here. Only variant sets which
        // belong to this dataset will be returned.
        datasetIds?: string[],        
        // The continuation token, which is used to page through large result sets.
        // To get the next page of results, set this parameter to the value of
        // `nextPageToken` from the previous response.
        pageToken?: string,
        // The maximum number of results to return in a single page. If unspecified,
        // defaults to 1024.
        pageSize?: number,
    }
    
    interface SearchReferenceSetsRequest {
        // The continuation token, which is used to page through large result sets.
        // To get the next page of results, set this parameter to the value of
        // `nextPageToken` from the previous response.
        pageToken?: string,
        // If present, return reference sets for which a prefix of any of
        // sourceAccessions
        // match any of these strings. Accession numbers typically have a main number
        // and a version, for example `NC_000001.11`.
        accessions?: string[],        
        // The maximum number of results to return in a single page. If unspecified,
        // defaults to 1024. The maximum value is 4096.
        pageSize?: number,
        // If present, return reference sets for which a substring of their
        // `assemblyId` matches this string (case insensitive).
        assemblyId?: string,
        // If present, return reference sets for which the
        // md5checksum matches exactly.
        md5checksums?: string[],        
    }
    
    interface SetIamPolicyRequest {
        // REQUIRED: The complete policy to be applied to the `resource`. The size of
        // the policy is limited to a few 10s of KB. An empty policy is a
        // valid policy but certain Cloud Platform services (such as Projects)
        // might reject them.
        policy?: Policy,
    }
    
    interface MergeVariantsRequest {
        // The variants to be merged with existing variants.
        variants?: Variant[],        
        // A mapping between info field keys and the InfoMergeOperations to
        // be performed on them.
        infoMergeConfig?: any,
        // The destination variant set.
        variantSetId?: string,
    }
    
    interface BatchCreateAnnotationsRequest {
        // A unique request ID which enables the server to detect duplicated requests.
        // If provided, duplicated requests will result in the same response; if not
        // provided, duplicated requests may result in duplicated data. For a given
        // annotation set, callers should not reuse `request_id`s when writing
        // different batches of annotations - behavior in this case is undefined.
        // A common approach is to use a UUID. For batch jobs where worker crashes are
        // a possibility, consider using some unique variant of a worker or run ID.
        requestId?: string,
        // The annotations to be created. At most 4096 can be specified in a single
        // request.
        annotations?: Annotation[],        
    }
    
    interface Read {
        // The observed length of the fragment, equivalent to TLEN in SAM.
        fragmentLength?: number,
        // Whether this read did not pass filters, such as platform or vendor quality
        // controls (SAM flag 0x200).
        failedVendorQualityChecks?: boolean,
        // The quality of the read sequence contained in this alignment record
        // (equivalent to QUAL in SAM).
        // `alignedSequence` and `alignedQuality` may be shorter than the full read
        // sequence and quality. This will occur if the alignment is part of a
        // chimeric alignment, or if the read was trimmed. When this occurs, the CIGAR
        // for this read will begin/end with a hard clip operator that will indicate
        // the length of the excised sequence.
        alignedQuality?: number[],        
        // The linear alignment for this alignment record. This field is null for
        // unmapped reads.
        alignment?: LinearAlignment,
        // The server-generated read ID, unique across all reads. This is different
        // from the `fragmentName`.
        id?: string,
        // The number of reads in the fragment (extension to SAM flag 0x1).
        numberReads?: number,
        // Whether this alignment is secondary. Equivalent to SAM flag 0x100.
        // A secondary alignment represents an alternative to the primary alignment
        // for this read. Aligners may return secondary alignments if a read can map
        // ambiguously to multiple coordinates in the genome. By convention, each read
        // has one and only one alignment where both `secondaryAlignment`
        // and `supplementaryAlignment` are false.
        secondaryAlignment?: boolean,
        // The fragment name. Equivalent to QNAME (query template name) in SAM.
        fragmentName?: string,
        // The ID of the read group set this read belongs to. A read belongs to
        // exactly one read group set.
        readGroupSetId?: string,
        // The fragment is a PCR or optical duplicate (SAM flag 0x400).
        duplicateFragment?: boolean,
        // The read number in sequencing. 0-based and less than numberReads. This
        // field replaces SAM flag 0x40 and 0x80.
        readNumber?: number,
        // The bases of the read sequence contained in this alignment record,
        // **without CIGAR operations applied** (equivalent to SEQ in SAM).
        // `alignedSequence` and `alignedQuality` may be
        // shorter than the full read sequence and quality. This will occur if the
        // alignment is part of a chimeric alignment, or if the read was trimmed. When
        // this occurs, the CIGAR for this read will begin/end with a hard clip
        // operator that will indicate the length of the excised sequence.
        alignedSequence?: string,
        // The ID of the read group this read belongs to. A read belongs to exactly
        // one read group. This is a server-generated ID which is distinct from SAM's
        // RG tag (for that value, see
        // ReadGroup.name).
        readGroupId?: string,
        // The mapping of the primary alignment of the
        // `(readNumber+1)%numberReads` read in the fragment. It replaces
        // mate position and mate strand in SAM.
        nextMatePosition?: Position,
        // A map of additional read alignment information. This must be of the form
        // map<string, string[]> (string key mapping to a list of string values).
        info?: any,
        // The orientation and the distance between reads from the fragment are
        // consistent with the sequencing protocol (SAM flag 0x2).
        properPlacement?: boolean,
        // Whether this alignment is supplementary. Equivalent to SAM flag 0x800.
        // Supplementary alignments are used in the representation of a chimeric
        // alignment. In a chimeric alignment, a read is split into multiple
        // linear alignments that map to different reference contigs. The first
        // linear alignment in the read will be designated as the representative
        // alignment; the remaining linear alignments will be designated as
        // supplementary alignments. These alignments may have different mapping
        // quality scores. In each linear alignment in a chimeric alignment, the read
        // will be hard clipped. The `alignedSequence` and
        // `alignedQuality` fields in the alignment record will only
        // represent the bases for its respective linear alignment.
        supplementaryAlignment?: boolean,
    }
    
    interface ReferenceSet {
        // ID from http://www.ncbi.nlm.nih.gov/taxonomy (for example, 9606 for human)
        // indicating the species which this reference set is intended to model. Note
        // that contained references may specify a different `ncbiTaxonId`, as
        // assemblies may contain reference sequences which do not belong to the
        // modeled species, for example EBV in a human reference genome.
        ncbiTaxonId?: number,
        // The URI from which the references were obtained.
        sourceUri?: string,
        // The IDs of the reference objects that are part of this set.
        // `Reference.md5checksum` must be unique within this set.
        referenceIds?: string[],        
        // Public id of this reference set, such as `GRCh37`.
        assemblyId?: string,
        // Order-independent MD5 checksum which identifies this reference set. The
        // checksum is computed by sorting all lower case hexidecimal string
        // `reference.md5checksum` (for all reference in this set) in
        // ascending lexicographic order, concatenating, and taking the MD5 of that
        // value. The resulting value is represented in lower case hexadecimal format.
        md5checksum?: string,
        // The server-generated reference set ID, unique across all reference sets.
        id?: string,
        // All known corresponding accession IDs in INSDC (GenBank/ENA/DDBJ) ideally
        // with a version number, for example `NC_000001.11`.
        sourceAccessions?: string[],        
        // Free text description of this reference set.
        description?: string,
    }
    
    interface CigarUnit {
        // 
        operation?: string,
        // `referenceSequence` is only used at mismatches
        // (`SEQUENCE_MISMATCH`) and deletions (`DELETE`).
        // Filling this field replaces SAM's MD tag. If the relevant information is
        // not available, this field is unset.
        referenceSequence?: string,
        // The number of genomic bases that the operation runs for. Required.
        operationLength?: string,
    }
    
    interface Transcript {
        // The annotation ID of the gene from which this transcript is transcribed.
        geneId?: string,
        // The <a href="http://en.wikipedia.org/wiki/Exon">exons</a> that compose
        // this transcript. This field should be unset for genomes where transcript
        // splicing does not occur, for example prokaryotes.
        // 
        // Introns are regions of the transcript that are not included in the
        // spliced RNA product. Though not explicitly modeled here, intron ranges can
        // be deduced; all regions of this transcript that are not exons are introns.
        // 
        // Exonic sequences do not necessarily code for a translational product
        // (amino acids). Only the regions of exons bounded by the
        // codingSequence correspond
        // to coding DNA sequence.
        // 
        // Exons are ordered by start position and may not overlap.
        exons?: Exon[],        
        // The range of the coding sequence for this transcript, if any. To determine
        // the exact ranges of coding sequence, intersect this range with those of the
        // exons, if any. If there are any
        // exons, the
        // codingSequence must start
        // and end within them.
        // 
        // Note that in some cases, the reference genome will not exactly match the
        // observed mRNA transcript e.g. due to variance in the source genome from
        // reference. In these cases,
        // exon.frame will not necessarily
        // match the expected reference reading frame and coding exon reference bases
        // cannot necessarily be concatenated to produce the original transcript mRNA.
        codingSequence?: CodingSequence,
    }
    
    interface AnnotationSet {
        // The display name for this annotation set.
        name?: string,
        // The ID of the reference set that defines the coordinate space for this
        // set's annotations.
        referenceSetId?: string,
        // The type of annotations contained within this set.
        type?: string,
        // A map of additional read alignment information. This must be of the form
        // map<string, string[]> (string key mapping to a list of string values).
        info?: any,
        // The server-generated annotation set ID, unique across all annotation sets.
        id?: string,
        // The source URI describing the file from which this annotation set was
        // generated, if any.
        sourceUri?: string,
        // The dataset to which this annotation set belongs.
        datasetId?: string,
    }
    
    interface Experiment {
        // The platform unit used as part of this experiment, for example
        // flowcell-barcode.lane for Illumina or slide for SOLiD. Corresponds to the
        // @RG PU field in the SAM spec.
        platformUnit?: string,
        // The instrument model used as part of this experiment. This maps to
        // sequencing technology in the SAM spec.
        instrumentModel?: string,
        // A client-supplied library identifier; a library is a collection of DNA
        // fragments which have been prepared for sequencing from a sample. This
        // field is important for quality control as error or bias can be introduced
        // during sample preparation.
        libraryId?: string,
        // The sequencing center used as part of this experiment.
        sequencingCenter?: string,
    }
    
    interface ListDatasetsResponse {
        // The continuation token, which is used to page through large result sets.
        // Provide this value in a subsequent request to return the next page of
        // results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
        // The list of matching Datasets.
        datasets?: Dataset[],        
    }
    
    interface TestIamPermissionsRequest {
        // REQUIRED: The set of permissions to check for the 'resource'.
        // Permissions with wildcards (such as '*' or 'storage.*') are not allowed.
        // Allowed permissions are&#58;
        // 
        // * `genomics.datasets.create`
        // * `genomics.datasets.delete`
        // * `genomics.datasets.get`
        // * `genomics.datasets.list`
        // * `genomics.datasets.update`
        // * `genomics.datasets.getIamPolicy`
        // * `genomics.datasets.setIamPolicy`
        permissions?: string[],        
    }
    
    interface ExportReadGroupSetRequest {
        // The reference names to export. If this is not specified, all reference
        // sequences, including unmapped reads, are exported.
        // Use `*` to export only unmapped reads.
        referenceNames?: string[],        
        // Required. A Google Cloud Storage URI for the exported BAM file.
        // The currently authenticated user must have write access to the new file.
        // An error will be returned if the URI already contains data.
        exportUri?: string,
        // Required. The Google Cloud project ID that owns this
        // export. The caller must have WRITE access to this project.
        projectId?: string,
    }
    
    interface Exon {
        // The start position of the exon on this annotation's reference sequence,
        // 0-based inclusive. Note that this is relative to the reference start, and
        // **not** the containing annotation start.
        start?: string,
        // The frame of this exon. Contains a value of 0, 1, or 2, which indicates
        // the offset of the first coding base of the exon within the reading frame
        // of the coding DNA sequence, if any. This field is dependent on the
        // strandedness of this annotation (see
        // Annotation.reverse_strand).
        // For forward stranded annotations, this offset is relative to the
        // exon.start. For reverse
        // strand annotations, this offset is relative to the
        // exon.end `- 1`.
        // 
        // Unset if this exon does not intersect the coding sequence. Upon creation
        // of a transcript, the frame must be populated for all or none of the
        // coding exons.
        frame?: number,
        // The end position of the exon on this annotation's reference sequence,
        // 0-based exclusive. Note that this is relative to the reference start, and
        // *not* the containing annotation start.
        end?: string,
    }
    
    interface CallSet {
        // The date this call set was created in milliseconds from the epoch.
        created?: string,
        // The sample ID this call set corresponds to.
        sampleId?: string,
        // The call set name.
        name?: string,
        // A map of additional call set information. This must be of the form
        // map<string, string[]> (string key mapping to a list of string values).
        info?: any,
        // The IDs of the variant sets this call set belongs to. This field must
        // have exactly length one, as a call set belongs to a single variant set.
        // This field is repeated for compatibility with the
        // [GA4GH 0.5.1
        // API](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variants.avdl#L76).
        variantSetIds?: string[],        
        // The server-generated call set ID, unique across all call sets.
        id?: string,
    }
    
    interface SearchAnnotationSetsResponse {
        // The continuation token, which is used to page through large result sets.
        // Provide this value in a subsequent request to return the next page of
        // results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
        // The matching annotation sets.
        annotationSets?: AnnotationSet[],        
    }
    
    interface ImportVariantsRequest {
        // A list of URIs referencing variant files in Google Cloud Storage. URIs can
        // include wildcards [as described
        // here](https://cloud.google.com/storage/docs/gsutil/addlhelp/WildcardNames).
        // Note that recursive wildcards ('**') are not supported.
        sourceUris?: string[],        
        // Required. The variant set to which variant data should be imported.
        variantSetId?: string,
        // Convert reference names to the canonical representation.
        // hg19 haploytypes (those reference names containing "_hap")
        // are not modified in any way.
        // All other reference names are modified according to the following rules:
        // The reference name is capitalized.
        // The "chr" prefix is dropped for all autosomes and sex chromsomes.
        // For example "chr17" becomes "17" and "chrX" becomes "X".
        // All mitochondrial chromosomes ("chrM", "chrMT", etc) become "MT".
        normalizeReferenceNames?: boolean,
        // The format of the variant data being imported. If unspecified, defaults to
        // to `VCF`.
        format?: string,
        // A mapping between info field keys and the InfoMergeOperations to
        // be performed on them. This is plumbed down to the MergeVariantRequests
        // generated by the resulting import job.
        infoMergeConfig?: any,
    }
    
    interface VariantAnnotation {
        // The set of conditions associated with this variant.
        // A condition describes the way a variant influences human health.
        conditions?: ClinicalCondition[],        
        // Effect of the variant on the coding sequence.
        effect?: string,
        // Google annotation IDs of the transcripts affected by this variant. These
        // should be provided when the variant is created.
        transcriptIds?: string[],        
        // Type has been adapted from ClinVar's list of variant types.
        type?: string,
        // The alternate allele for this variant. If multiple alternate alleles
        // exist at this location, create a separate variant for each one, as they
        // may represent distinct conditions.
        alternateBases?: string,
        // Google annotation ID of the gene affected by this variant. This should
        // be provided when the variant is created.
        geneId?: string,
        // Describes the clinical significance of a variant.
        // It is adapted from the ClinVar controlled vocabulary for clinical
        // significance described at:
        // http://www.ncbi.nlm.nih.gov/clinvar/docs/clinsig/
        clinicalSignificance?: string,
    }
    
    interface ListCoverageBucketsResponse {
        // The coverage buckets. The list of buckets is sparse; a bucket with 0
        // overlapping reads is not returned. A bucket never crosses more than one
        // reference sequence. Each bucket has width `bucketWidth`, unless
        // its end is the end of the reference sequence.
        coverageBuckets?: CoverageBucket[],        
        // The continuation token, which is used to page through large result sets.
        // Provide this value in a subsequent request to return the next page of
        // results. This field will be empty if there aren't any additional results.
        nextPageToken?: string,
        // The length of each coverage bucket in base pairs. Note that buckets at the
        // end of a reference sequence may be shorter. This value is omitted if the
        // bucket width is infinity (the default behaviour, with no range or
        // `targetBucketWidth`).
        bucketWidth?: string,
    }
    
    interface ExportVariantSetRequest {
        // Required. The Google Cloud project ID that owns the destination
        // BigQuery dataset. The caller must have WRITE access to this project.  This
        // project will also own the resulting export job.
        projectId?: string,
        // If provided, only variant call information from the specified call sets
        // will be exported. By default all variant calls are exported.
        callSetIds?: string[],        
        // Required. The BigQuery table to export data to.
        // If the table doesn't exist, it will be created. If it already exists, it
        // will be overwritten.
        bigqueryTable?: string,
        // Required. The BigQuery dataset to export data to. This dataset must already
        // exist. Note that this is distinct from the Genomics concept of "dataset".
        bigqueryDataset?: string,
        // The format for the exported data.
        format?: string,
    }
    
    interface SearchAnnotationsRequest {
        // The continuation token, which is used to page through large result sets.
        // To get the next page of results, set this parameter to the value of
        // `nextPageToken` from the previous response.
        pageToken?: string,
        // The maximum number of results to return in a single page. If unspecified,
        // defaults to 256. The maximum value is 2048.
        pageSize?: number,
        // The start position of the range on the reference, 0-based inclusive. If
        // specified,
        // referenceId or
        // referenceName
        // must be specified. Defaults to 0.
        start?: string,
        // Required. The annotation sets to search within. The caller must have
        // `READ` access to these annotation sets.
        // All queried annotation sets must have the same type.
        annotationSetIds?: string[],        
        // The name of the reference to query, within the reference set associated
        // with this query.
        referenceName?: string,
        // The ID of the reference to query.
        referenceId?: string,
        // The end position of the range on the reference, 0-based exclusive. If
        // referenceId or
        // referenceName
        // must be specified, Defaults to the length of the reference.
        end?: string,
    }
    
    interface OperationEvent {
        // Optional time of when event finished. An event can have a start time and no
        // finish time. If an event has a finish time, there must be a start time.
        endTime?: string,
        // Optional time of when event started.
        startTime?: string,
        // Required description of event.
        description?: string,
    }
    
    interface OperationsResource {
        // Gets the latest state of a long-running operation.  Clients can use this
        // method to poll the operation result at intervals as recommended by the API
        // service.
        get (request: {        
            // The name of the operation resource.
            name: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists operations that match the specified filter in the request.
        list (request: {        
            // A string for filtering Operations.
            // The following filter fields are supported&#58;
            // 
            // * projectId&#58; Required. Corresponds to
            //   OperationMetadata.projectId.
            // * createTime&#58; The time this job was created, in seconds from the
            //   [epoch](http://en.wikipedia.org/wiki/Unix_time). Can use `>=` and/or `<=`
            //   operators.
            // * status&#58; Can be `RUNNING`, `SUCCESS`, `FAILURE`, or `CANCELED`. Only
            //   one status may be specified.
            // * labels.key where key is a label key.
            // 
            // Examples&#58;
            // 
            // * `projectId = my-project AND createTime >= 1432140000`
            // * `projectId = my-project AND createTime >= 1432140000 AND createTime <= 1432150000 AND status = RUNNING`
            // * `projectId = my-project AND labels.color = *`
            // * `projectId = my-project AND labels.color = red`
            filter?: string,
            // The standard list page token.
            pageToken?: string,
            // The name of the operation's parent resource.
            name: string,
            // The maximum number of results to return. If unspecified, defaults to
            // 256. The maximum value is 2048.
            pageSize?: number,
        }) : gapi.client.Request<ListOperationsResponse>;        
        
        // Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation.
        cancel (request: {        
            // The name of the operation resource to be cancelled.
            name: string,
        }) : gapi.client.Request<Empty>;        
        
    }
    
    
    interface ReferencesetsResource {
        // Searches for reference sets which match the given criteria.
        // 
        // For the definitions of references and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        // 
        // Implements
        // [GlobalAllianceApi.searchReferenceSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L71)
        search (request: {        
        }) : gapi.client.Request<SearchReferenceSetsResponse>;        
        
        // Gets a reference set.
        // 
        // For the definitions of references and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        // 
        // Implements
        // [GlobalAllianceApi.getReferenceSet](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L83).
        get (request: {        
            // The ID of the reference set.
            referenceSetId: string,
        }) : gapi.client.Request<ReferenceSet>;        
        
    }
    
    
    interface CallsetsResource {
        // Gets a call set by ID.
        // 
        // For the definitions of call sets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        get (request: {        
            // The ID of the call set.
            callSetId: string,
        }) : gapi.client.Request<CallSet>;        
        
        // Updates a call set.
        // 
        // For the definitions of call sets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        // 
        // This method supports patch semantics.
        patch (request: {        
            // An optional mask specifying which fields to update. At this time, the only
            // mutable field is name. The only
            // acceptable value is "name". If unspecified, all mutable fields will be
            // updated.
            updateMask?: string,
            // The ID of the call set to be updated.
            callSetId: string,
        }) : gapi.client.Request<CallSet>;        
        
        // Creates a new call set.
        // 
        // For the definitions of call sets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        create (request: {        
        }) : gapi.client.Request<CallSet>;        
        
        // Deletes a call set.
        // 
        // For the definitions of call sets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        delete (request: {        
            // The ID of the call set to be deleted.
            callSetId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Gets a list of call sets matching the criteria.
        // 
        // For the definitions of call sets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        // 
        // Implements
        // [GlobalAllianceApi.searchCallSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L178).
        search (request: {        
        }) : gapi.client.Request<SearchCallSetsResponse>;        
        
    }
    
    
    interface ReadsResource {
        // Gets a list of reads for one or more read group sets.
        // 
        // For the definitions of read group sets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        // 
        // Reads search operates over a genomic coordinate space of reference sequence
        // & position defined over the reference sequences to which the requested
        // read group sets are aligned.
        // 
        // If a target positional range is specified, search returns all reads whose
        // alignment to the reference genome overlap the range. A query which
        // specifies only read group set IDs yields all reads in those read group
        // sets, including unmapped reads.
        // 
        // All reads returned (including reads on subsequent pages) are ordered by
        // genomic coordinate (by reference sequence, then position). Reads with
        // equivalent genomic coordinates are returned in an unspecified order. This
        // order is consistent, such that two queries for the same content (regardless
        // of page size) yield reads in the same order across their respective streams
        // of paginated responses.
        // 
        // Implements
        // [GlobalAllianceApi.searchReads](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/readmethods.avdl#L85).
        search (request: {        
        }) : gapi.client.Request<SearchReadsResponse>;        
        
    }
    
    
    interface CoveragebucketsResource {
        // Lists fixed width coverage buckets for a read group set, each of which
        // correspond to a range of a reference sequence. Each bucket summarizes
        // coverage information across its corresponding genomic range.
        // 
        // For the definitions of read group sets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        // 
        // Coverage is defined as the number of reads which are aligned to a given
        // base in the reference sequence. Coverage buckets are available at several
        // precomputed bucket widths, enabling retrieval of various coverage 'zoom
        // levels'. The caller must have READ permissions for the target read group
        // set.
        list (request: {        
            // The end position of the range on the reference, 0-based exclusive. If
            // specified, `referenceName` must also be specified. If unset or 0, defaults
            // to the length of the reference.
            end?: string,
            // The continuation token, which is used to page through large result sets.
            // To get the next page of results, set this parameter to the value of
            // `nextPageToken` from the previous response.
            pageToken?: string,
            // The maximum number of results to return in a single page. If unspecified,
            // defaults to 1024. The maximum value is 2048.
            pageSize?: number,
            // The start position of the range on the reference, 0-based inclusive. If
            // specified, `referenceName` must also be specified. Defaults to 0.
            start?: string,
            // Required. The ID of the read group set over which coverage is requested.
            readGroupSetId: string,
            // The desired width of each reported coverage bucket in base pairs. This
            // will be rounded down to the nearest precomputed bucket width; the value
            // of which is returned as `bucketWidth` in the response. Defaults
            // to infinity (each bucket spans an entire reference sequence) or the length
            // of the target range, if specified. The smallest precomputed
            // `bucketWidth` is currently 2048 base pairs; this is subject to
            // change.
            targetBucketWidth?: string,
            // The name of the reference to query, within the reference set associated
            // with this query. Optional.
            referenceName?: string,
        }) : gapi.client.Request<ListCoverageBucketsResponse>;        
        
    }
    
    
    interface ReadgroupsetsResource {
        // Deletes a read group set.
        // 
        // For the definitions of read group sets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        delete (request: {        
            // The ID of the read group set to be deleted. The caller must have WRITE
            // permissions to the dataset associated with this read group set.
            readGroupSetId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Creates read group sets by asynchronously importing the provided
        // information.
        // 
        // For the definitions of read group sets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        // 
        // The caller must have WRITE permissions to the dataset.
        // 
        // ## Notes on [BAM](https://samtools.github.io/hts-specs/SAMv1.pdf) import
        // 
        // - Tags will be converted to strings - tag types are not preserved
        // - Comments (`@CO`) in the input file header will not be preserved
        // - Original header order of references (`@SQ`) will not be preserved
        // - Any reverse stranded unmapped reads will be reverse complemented, and
        // their qualities (also the "BQ" and "OQ" tags, if any) will be reversed
        // - Unmapped reads will be stripped of positional information (reference name
        // and position)
        import (request: {        
        }) : gapi.client.Request<Operation>;        
        
        // Exports a read group set to a BAM file in Google Cloud Storage.
        // 
        // For the definitions of read group sets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        // 
        // Note that currently there may be some differences between exported BAM
        // files and the original BAM file at the time of import. See
        // ImportReadGroupSets
        // for caveats.
        export (request: {        
            // Required. The ID of the read group set to export. The caller must have
            // READ access to this read group set.
            readGroupSetId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Searches for read group sets matching the criteria.
        // 
        // For the definitions of read group sets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        // 
        // Implements
        // [GlobalAllianceApi.searchReadGroupSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/readmethods.avdl#L135).
        search (request: {        
        }) : gapi.client.Request<SearchReadGroupSetsResponse>;        
        
        // Updates a read group set.
        // 
        // For the definitions of read group sets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        // 
        // This method supports patch semantics.
        patch (request: {        
            // The ID of the read group set to be updated. The caller must have WRITE
            // permissions to the dataset associated with this read group set.
            readGroupSetId: string,
            // An optional mask specifying which fields to update. Supported fields:
            // 
            // * name.
            // * referenceSetId.
            // 
            // Leaving `updateMask` unset is equivalent to specifying all mutable
            // fields.
            updateMask?: string,
        }) : gapi.client.Request<ReadGroupSet>;        
        
        // Gets a read group set by ID.
        // 
        // For the definitions of read group sets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        get (request: {        
            // The ID of the read group set.
            readGroupSetId: string,
        }) : gapi.client.Request<ReadGroupSet>;        
        
        coveragebuckets: CoveragebucketsResource,
    }
    
    
    interface AnnotationsetsResource {
        // Deletes an annotation set. Caller must have WRITE permission
        // for the associated annotation set.
        delete (request: {        
            // The ID of the annotation set to be deleted.
            annotationSetId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Searches for annotation sets that match the given criteria. Annotation sets
        // are returned in an unspecified order. This order is consistent, such that
        // two queries for the same content (regardless of page size) yield annotation
        // sets in the same order across their respective streams of paginated
        // responses. Caller must have READ permission for the queried datasets.
        search (request: {        
        }) : gapi.client.Request<SearchAnnotationSetsResponse>;        
        
        // Gets an annotation set. Caller must have READ permission for
        // the associated dataset.
        get (request: {        
            // The ID of the annotation set to be retrieved.
            annotationSetId: string,
        }) : gapi.client.Request<AnnotationSet>;        
        
        // Updates an annotation set. The update must respect all mutability
        // restrictions and other invariants described on the annotation set resource.
        // Caller must have WRITE permission for the associated dataset.
        update (request: {        
            // The ID of the annotation set to be updated.
            annotationSetId: string,
            // An optional mask specifying which fields to update. Mutable fields are
            // name,
            // source_uri, and
            // info. If unspecified, all
            // mutable fields will be updated.
            updateMask?: string,
        }) : gapi.client.Request<AnnotationSet>;        
        
        // Creates a new annotation set. Caller must have WRITE permission for the
        // associated dataset.
        // 
        // The following fields are required:
        // 
        //   * datasetId
        //   * referenceSetId
        // 
        // All other fields may be optionally specified, unless documented as being
        // server-generated (for example, the `id` field).
        create (request: {        
        }) : gapi.client.Request<AnnotationSet>;        
        
    }
    
    
    interface VariantsResource {
        // Gets a list of variants matching the criteria.
        // 
        // For the definitions of variants and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        // 
        // Implements
        // [GlobalAllianceApi.searchVariants](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L126).
        search (request: {        
        }) : gapi.client.Request<SearchVariantsResponse>;        
        
        // Updates a variant.
        // 
        // For the definitions of variants and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        // 
        // This method supports patch semantics. Returns the modified variant without
        // its calls.
        patch (request: {        
            // An optional mask specifying which fields to update. At this time, mutable
            // fields are names and
            // info. Acceptable values are "names" and
            // "info". If unspecified, all mutable fields will be updated.
            updateMask?: string,
            // The ID of the variant to be updated.
            variantId: string,
        }) : gapi.client.Request<Variant>;        
        
        // Gets a variant by ID.
        // 
        // For the definitions of variants and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        get (request: {        
            // The ID of the variant.
            variantId: string,
        }) : gapi.client.Request<Variant>;        
        
        // Deletes a variant.
        // 
        // For the definitions of variants and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        delete (request: {        
            // The ID of the variant to be deleted.
            variantId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Creates variant data by asynchronously importing the provided information.
        // 
        // For the definitions of variant sets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        // 
        // The variants for import will be merged with any existing variant that
        // matches its reference sequence, start, end, reference bases, and
        // alternative bases. If no such variant exists, a new one will be created.
        // 
        // When variants are merged, the call information from the new variant
        // is added to the existing variant, and Variant info fields are merged
        // as specified in
        // infoMergeConfig.
        // As a special case, for single-sample VCF files, QUAL and FILTER fields will
        // be moved to the call level; these are sometimes interpreted in a
        // call-specific context.
        // Imported VCF headers are appended to the metadata already in a variant set.
        import (request: {        
        }) : gapi.client.Request<Operation>;        
        
        // Merges the given variants with existing variants.
        // 
        // For the definitions of variants and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        // 
        // Each variant will be
        // merged with an existing variant that matches its reference sequence,
        // start, end, reference bases, and alternative bases. If no such variant
        // exists, a new one will be created.
        // 
        // When variants are merged, the call information from the new variant
        // is added to the existing variant. Variant info fields are merged as
        // specified in the
        // infoMergeConfig
        // field of the MergeVariantsRequest.
        // 
        // Please exercise caution when using this method!  It is easy to introduce
        // mistakes in existing variants and difficult to back out of them.  For
        // example,
        // suppose you were trying to merge a new variant with an existing one and
        // both
        // variants contain calls that belong to callsets with the same callset ID.
        // 
        //     // Existing variant - irrelevant fields trimmed for clarity
        //     {
        //         "variantSetId": "10473108253681171589",
        //         "referenceName": "1",
        //         "start": "10582",
        //         "referenceBases": "G",
        //         "alternateBases": [
        //             "A"
        //         ],
        //         "calls": [
        //             {
        //                 "callSetId": "10473108253681171589-0",
        //                 "callSetName": "CALLSET0",
        //                 "genotype": [
        //                     0,
        //                     1
        //                 ],
        //             }
        //         ]
        //     }
        // 
        //     // New variant with conflicting call information
        //     {
        //         "variantSetId": "10473108253681171589",
        //         "referenceName": "1",
        //         "start": "10582",
        //         "referenceBases": "G",
        //         "alternateBases": [
        //             "A"
        //         ],
        //         "calls": [
        //             {
        //                 "callSetId": "10473108253681171589-0",
        //                 "callSetName": "CALLSET0",
        //                 "genotype": [
        //                     1,
        //                     1
        //                 ],
        //             }
        //         ]
        //     }
        // 
        // The resulting merged variant would overwrite the existing calls with those
        // from the new variant:
        // 
        //     {
        //         "variantSetId": "10473108253681171589",
        //         "referenceName": "1",
        //         "start": "10582",
        //         "referenceBases": "G",
        //         "alternateBases": [
        //             "A"
        //         ],
        //         "calls": [
        //             {
        //                 "callSetId": "10473108253681171589-0",
        //                 "callSetName": "CALLSET0",
        //                 "genotype": [
        //                     1,
        //                     1
        //                 ],
        //             }
        //         ]
        //     }
        // 
        // This may be the desired outcome, but it is up to the user to determine if
        // if that is indeed the case.
        merge (request: {        
        }) : gapi.client.Request<Empty>;        
        
        // Creates a new variant.
        // 
        // For the definitions of variants and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        create (request: {        
        }) : gapi.client.Request<Variant>;        
        
    }
    
    
    interface BasesResource {
        // Lists the bases in a reference, optionally restricted to a range.
        // 
        // For the definitions of references and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        // 
        // Implements
        // [GlobalAllianceApi.getReferenceBases](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L221).
        list (request: {        
            // The continuation token, which is used to page through large result sets.
            // To get the next page of results, set this parameter to the value of
            // `nextPageToken` from the previous response.
            pageToken?: string,
            // The maximum number of bases to return in a single page. If unspecified,
            // defaults to 200Kbp (kilo base pairs). The maximum value is 10Mbp (mega base
            // pairs).
            pageSize?: number,
            // The start position (0-based) of this query. Defaults to 0.
            start?: string,
            // The ID of the reference.
            referenceId: string,
            // The end position (0-based, exclusive) of this query. Defaults to the length
            // of this reference.
            end?: string,
        }) : gapi.client.Request<ListBasesResponse>;        
        
    }
    
    
    interface ReferencesResource {
        // Searches for references which match the given criteria.
        // 
        // For the definitions of references and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        // 
        // Implements
        // [GlobalAllianceApi.searchReferences](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L146).
        search (request: {        
        }) : gapi.client.Request<SearchReferencesResponse>;        
        
        // Gets a reference.
        // 
        // For the definitions of references and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        // 
        // Implements
        // [GlobalAllianceApi.getReference](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L158).
        get (request: {        
            // The ID of the reference.
            referenceId: string,
        }) : gapi.client.Request<Reference>;        
        
        bases: BasesResource,
    }
    
    
    interface DatasetsResource {
        // Deletes a dataset and all of its contents (all read group sets,
        // reference sets, variant sets, call sets, annotation sets, etc.)
        // This is reversible (up to one week after the deletion) via
        // the
        // datasets.undelete
        // operation.
        // 
        // For the definitions of datasets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        delete (request: {        
            // The ID of the dataset to be deleted.
            datasetId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Lists datasets within a project.
        // 
        // For the definitions of datasets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        list (request: {        
            // The continuation token, which is used to page through large result sets.
            // To get the next page of results, set this parameter to the value of
            // `nextPageToken` from the previous response.
            pageToken?: string,
            // The maximum number of results to return in a single page. If unspecified,
            // defaults to 50. The maximum value is 1024.
            pageSize?: number,
            // Required. The Google Cloud project ID to list datasets for.
            projectId?: string,
        }) : gapi.client.Request<ListDatasetsResponse>;        
        
        // Sets the access control policy on the specified dataset. Replaces any
        // existing policy.
        // 
        // For the definitions of datasets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        // 
        // See <a href="/iam/docs/managing-policies#setting_a_policy">Setting a
        // Policy</a> for more information.
        setIamPolicy (request: {        
            // REQUIRED: The resource for which policy is being specified. Format is
            // `datasets/<dataset ID>`.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Creates a new dataset.
        // 
        // For the definitions of datasets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        create (request: {        
        }) : gapi.client.Request<Dataset>;        
        
        // Gets the access control policy for the dataset. This is empty if the
        // policy or resource does not exist.
        // 
        // See <a href="/iam/docs/managing-policies#getting_a_policy">Getting a
        // Policy</a> for more information.
        // 
        // For the definitions of datasets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        getIamPolicy (request: {        
            // REQUIRED: The resource for which policy is being specified. Format is
            // `datasets/<dataset ID>`.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Undeletes a dataset by restoring a dataset which was deleted via this API.
        // 
        // For the definitions of datasets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        // 
        // This operation is only possible for a week after the deletion occurred.
        undelete (request: {        
            // The ID of the dataset to be undeleted.
            datasetId: string,
        }) : gapi.client.Request<Dataset>;        
        
        // Gets a dataset by ID.
        // 
        // For the definitions of datasets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        get (request: {        
            // The ID of the dataset.
            datasetId: string,
        }) : gapi.client.Request<Dataset>;        
        
        // Updates a dataset.
        // 
        // For the definitions of datasets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        // 
        // This method supports patch semantics.
        patch (request: {        
            // The ID of the dataset to be updated.
            datasetId: string,
            // An optional mask specifying which fields to update. At this time, the only
            // mutable field is name. The only
            // acceptable value is "name". If unspecified, all mutable fields will be
            // updated.
            updateMask?: string,
        }) : gapi.client.Request<Dataset>;        
        
        // Returns permissions that a caller has on the specified resource.
        // See <a href="/iam/docs/managing-policies#testing_permissions">Testing
        // Permissions</a> for more information.
        // 
        // For the definitions of datasets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        testIamPermissions (request: {        
            // REQUIRED: The resource for which policy is being specified. Format is
            // `datasets/<dataset ID>`.
            resource: string,
        }) : gapi.client.Request<TestIamPermissionsResponse>;        
        
    }
    
    
    interface AnnotationsResource {
        // Creates a new annotation. Caller must have WRITE permission
        // for the associated annotation set.
        // 
        // The following fields are required:
        // 
        // * annotationSetId
        // * referenceName or
        //   referenceId
        // 
        // ### Transcripts
        // 
        // For annotations of type TRANSCRIPT, the following fields of
        // transcript must be provided:
        // 
        // * exons.start
        // * exons.end
        // 
        // All other fields may be optionally specified, unless documented as being
        // server-generated (for example, the `id` field). The annotated
        // range must be no longer than 100Mbp (mega base pairs). See the
        // Annotation resource
        // for additional restrictions on each field.
        create (request: {        
        }) : gapi.client.Request<Annotation>;        
        
        // Creates one or more new annotations atomically. All annotations must
        // belong to the same annotation set. Caller must have WRITE
        // permission for this annotation set. For optimal performance, batch
        // positionally adjacent annotations together.
        // 
        // If the request has a systemic issue, such as an attempt to write to
        // an inaccessible annotation set, the entire RPC will fail accordingly. For
        // lesser data issues, when possible an error will be isolated to the
        // corresponding batch entry in the response; the remaining well formed
        // annotations will be created normally.
        // 
        // For details on the requirements for each individual annotation resource,
        // see
        // CreateAnnotation.
        batchCreate (request: {        
        }) : gapi.client.Request<BatchCreateAnnotationsResponse>;        
        
        // Searches for annotations that match the given criteria. Results are
        // ordered by genomic coordinate (by reference sequence, then position).
        // Annotations with equivalent genomic coordinates are returned in an
        // unspecified order. This order is consistent, such that two queries for the
        // same content (regardless of page size) yield annotations in the same order
        // across their respective streams of paginated responses. Caller must have
        // READ permission for the queried annotation sets.
        search (request: {        
        }) : gapi.client.Request<SearchAnnotationsResponse>;        
        
        // Gets an annotation. Caller must have READ permission
        // for the associated annotation set.
        get (request: {        
            // The ID of the annotation to be retrieved.
            annotationId: string,
        }) : gapi.client.Request<Annotation>;        
        
        // Updates an annotation. Caller must have
        // WRITE permission for the associated dataset.
        update (request: {        
            // An optional mask specifying which fields to update. Mutable fields are
            // name,
            // variant,
            // transcript, and
            // info. If unspecified, all mutable
            // fields will be updated.
            updateMask?: string,
            // The ID of the annotation to be updated.
            annotationId: string,
        }) : gapi.client.Request<Annotation>;        
        
        // Deletes an annotation. Caller must have WRITE permission for
        // the associated annotation set.
        delete (request: {        
            // The ID of the annotation to be deleted.
            annotationId: string,
        }) : gapi.client.Request<Empty>;        
        
    }
    
    
    interface VariantsetsResource {
        // Creates a new variant set.
        // 
        // For the definitions of variant sets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        // 
        // The provided variant set must have a valid `datasetId` set - all other
        // fields are optional. Note that the `id` field will be ignored, as this is
        // assigned by the server.
        create (request: {        
        }) : gapi.client.Request<VariantSet>;        
        
        // Exports variant set data to an external destination.
        // 
        // For the definitions of variant sets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        export (request: {        
            // Required. The ID of the variant set that contains variant data which
            // should be exported. The caller must have READ access to this variant set.
            variantSetId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns a list of all variant sets matching search criteria.
        // 
        // For the definitions of variant sets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        // 
        // Implements
        // [GlobalAllianceApi.searchVariantSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L49).
        search (request: {        
        }) : gapi.client.Request<SearchVariantSetsResponse>;        
        
        // Updates a variant set using patch semantics.
        // 
        // For the definitions of variant sets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        patch (request: {        
            // The ID of the variant to be updated (must already exist).
            variantSetId: string,
            // An optional mask specifying which fields to update. Supported fields:
            // 
            // * metadata.
            // * name.
            // * description.
            // 
            // Leaving `updateMask` unset is equivalent to specifying all mutable
            // fields.
            updateMask?: string,
        }) : gapi.client.Request<VariantSet>;        
        
        // Gets a variant set by ID.
        // 
        // For the definitions of variant sets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        get (request: {        
            // Required. The ID of the variant set.
            variantSetId: string,
        }) : gapi.client.Request<VariantSet>;        
        
        // Deletes a variant set including all variants, call sets, and calls within.
        // This is not reversible.
        // 
        // For the definitions of variant sets and other genomics resources, see
        // [Fundamentals of Google
        // Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
        delete (request: {        
            // The ID of the variant set to be deleted.
            variantSetId: string,
        }) : gapi.client.Request<Empty>;        
        
    }
    
}

declare module gapi.client.genomics {
    var operations: gapi.client.genomics.OperationsResource; 
    
    var referencesets: gapi.client.genomics.ReferencesetsResource; 
    
    var callsets: gapi.client.genomics.CallsetsResource; 
    
    var reads: gapi.client.genomics.ReadsResource; 
    
    var readgroupsets: gapi.client.genomics.ReadgroupsetsResource; 
    
    var annotationsets: gapi.client.genomics.AnnotationsetsResource; 
    
    var variants: gapi.client.genomics.VariantsResource; 
    
    var references: gapi.client.genomics.ReferencesResource; 
    
    var datasets: gapi.client.genomics.DatasetsResource; 
    
    var annotations: gapi.client.genomics.AnnotationsResource; 
    
    var variantsets: gapi.client.genomics.VariantsetsResource; 
    
}
