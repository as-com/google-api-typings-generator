// Type definitions for Google Google Partners API v2
// Project: https://developers.google.com/partners/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.partners {
    
    interface LogUserEventResponse {
        // Current response metadata.
        responseMetadata?: ResponseMetadata,
    }
    
    interface ListOffersHistoryResponse {
        // True if the user has the option to show entire company history.
        canShowEntireCompany?: boolean,
        // Number of results across all pages.
        totalResults?: number,
        // True if this response is showing entire company history.
        showingEntireCompany?: boolean,
        // Historical offers meeting request.
        offers?: HistoricalOffer[],        
        // Supply this token in a ListOffersHistoryRequest to retrieve the next page.
        nextPageToken?: string,
        // Current response metadata.
        responseMetadata?: ResponseMetadata,
    }
    
    interface LogMessageResponse {
        // Current response metadata.
        responseMetadata?: ResponseMetadata,
    }
    
    interface SpecializationStatus {
        // The specialization this status is for.
        badgeSpecialization?: string,
        // State of agency specialization.
        badgeSpecializationState?: string,
    }
    
    interface Certification {
        // The date the user last achieved certification.
        lastAchieved?: string,
        // Whether this certification is in the state of warning.
        warning?: boolean,
        // Date this certification is due to expire.
        expiration?: string,
        // Whether this certification has been achieved.
        achieved?: boolean,
        // The type of certification, the area of expertise.
        certificationType?: string,
    }
    
    interface User {
        // Information about a user's external public profile outside Google Partners.
        publicProfile?: PublicProfile,
        // The email address used by the user used for company verification.
        // @OutputOnly
        companyVerificationEmail?: string,
        // The list of achieved certifications. These are calculated based on exam
        // results and other requirements.
        // @OutputOnly
        certificationStatus?: Certification[],        
        // The profile information of a Partners user, contains all the directly
        // editable user information.
        profile?: UserProfile,
        // The company that the user is associated with.
        // If not present, the user is not associated with any company.
        company?: CompanyRelation,
        // The most recent time the user interacted with the Partners site.
        // @OutputOnly
        lastAccessTime?: string,
        // The list of emails the user has access to/can select as primary.
        // @OutputOnly
        primaryEmails?: string[],        
        // This is the list of AdWords Manager Accounts the user has edit access to.
        // If the user has edit access to multiple accounts, the user can choose the
        // preferred account and we use this when a personal account is needed. Can
        // be empty meaning the user has access to no accounts.
        // @OutputOnly
        availableAdwordsManagerAccounts?: AdWordsManagerAccountInfo[],        
        // The internal user ID.
        // Only available for a whitelisted set of api clients.
        internalId?: string,
        // The list of exams the user ever taken. For each type of exam, only one
        // entry is listed.
        examStatus?: ExamStatus[],        
        // The ID of the user.
        id?: string,
    }
    
    interface ListAnalyticsResponse {
        // A token to retrieve next page of results.
        // Pass this value in the `ListAnalyticsRequest.page_token` field in the
        // subsequent call to
        // ListAnalytics to retrieve the
        // next page of results.
        nextPageToken?: string,
        // Aggregated information across the response's
        // analytics.
        analyticsSummary?: AnalyticsSummary,
        // Current response metadata.
        responseMetadata?: ResponseMetadata,
        // The list of analytics.
        // Sorted in ascending order of
        // Analytics.event_date.
        analytics?: Analytics[],        
    }
    
    interface Company {
        // Industries the company can help with.
        industries?: string[],        
        // URL of the company's additional websites used to verify the dynamic badges.
        // These are stored as full URLs as entered by the user, but only the TLD will
        // be used for the actual verification.
        additionalWebsites?: string[],        
        // URL of the company's website.
        websiteUrl?: string,
        // The Primary AdWords Manager Account id.
        primaryAdwordsManagerAccountId?: string,
        // The name of the company.
        name?: string,
        // The list of localized info for the company.
        localizedInfos?: LocalizedCompanyInfo[],        
        // The list of Google Partners certification statuses for the company.
        certificationStatuses?: CertificationStatus[],        
        // The ID of the company.
        id?: string,
        // The primary location of the company.
        primaryLocation?: Location,
        // Services the company can help with.
        services?: string[],        
        // The unconverted minimum monthly budget that the company accepts for partner
        // business.
        originalMinMonthlyBudget?: Money,
        // Basic information from the company's public profile.
        publicProfile?: PublicProfile,
        // Information related to the ranking of the company within the list of
        // companies.
        ranks?: Rank[],        
        // The list of Google Partners specialization statuses for the company.
        specializationStatus?: SpecializationStatus[],        
        // Partner badge tier
        badgeTier?: string,
        // Email domains that allow users with a matching email address to get
        // auto-approved for associating with this company.
        autoApprovalEmailDomains?: string[],        
        // Company type labels listed on the company's profile.
        companyTypes?: string[],        
        // The primary language code of the company, as defined by
        // <a href="https://tools.ietf.org/html/bcp47">BCP 47</a>
        // (IETF BCP 47, "Tags for Identifying Languages").
        primaryLanguageCode?: string,
        // The public viewability status of the company's profile.
        profileStatus?: string,
        // The list of all company locations.
        // If set, must include the
        // primary_location
        // in the list.
        locations?: Location[],        
        // The minimum monthly budget that the company accepts for partner business,
        // converted to the requested currency code.
        convertedMinMonthlyBudget?: Money,
    }
    
    interface ListLeadsResponse {
        // A token to retrieve next page of results.
        // Pass this value in the `ListLeadsRequest.page_token` field in the
        // subsequent call to
        // ListLeads to retrieve the
        // next page of results.
        nextPageToken?: string,
        // The total count of leads for the given company.
        totalSize?: number,
        // Current response metadata.
        responseMetadata?: ResponseMetadata,
        // The list of leads.
        leads?: Lead[],        
    }
    
    interface CreateLeadResponse {
        // The outcome of <a href="https://www.google.com/recaptcha/">reCaptcha</a>
        // validation.
        recaptchaStatus?: string,
        // Lead that was created depending on the outcome of
        // <a href="https://www.google.com/recaptcha/">reCaptcha</a> validation.
        lead?: Lead,
        // Current response metadata.
        responseMetadata?: ResponseMetadata,
    }
    
    interface GetCompanyResponse {
        // The company.
        company?: Company,
        // Current response metadata.
        responseMetadata?: ResponseMetadata,
    }
    
    interface Location {
        // Generally refers to the city/town portion of an address.
        locality?: string,
        // Top-level administrative subdivision of this country.
        administrativeArea?: string,
        // The latitude and longitude of the location, in degrees.
        latLng?: LatLng,
        // CLDR (Common Locale Data Repository) region code .
        regionCode?: string,
        // Dependent locality or sublocality. Used for UK dependent localities, or
        // neighborhoods or boroughs in other locations.
        dependentLocality?: string,
        // The single string version of the address.
        address?: string,
        // Values are frequently alphanumeric.
        postalCode?: string,
        // Language code of the address. Should be in BCP 47 format.
        languageCode?: string,
        // Use of this code is very country-specific, but will refer to a secondary
        // classification code for sorting mail.
        sortingCode?: string,
        // The following address lines represent the most specific part of any
        // address.
        addressLine?: string[],        
    }
    
    interface CertificationExamStatus {
        // The number of people who have passed the certification exam.
        numberUsersPass?: number,
        // The type of certification exam.
        type?: string,
    }
    
    interface ExamToken {
        // The id of the exam the token is for.
        examId?: string,
        // The token, only present if the user has access to the exam.
        token?: string,
        // The type of the exam the token belongs to.
        examType?: string,
    }
    
    interface OptIns {
        // An opt-in about receiving email regarding new features and products.
        specialOffers?: boolean,
        // An opt-in about receiving email with customized AdWords campaign management
        // tips.
        performanceSuggestions?: boolean,
        // An opt-in to allow recieivng phone calls about their Partners account.
        phoneContact?: boolean,
        // An opt-in to receive special promotional gifts and material in the mail.
        physicalMail?: boolean,
        // An opt-in about receiving email from Partners marketing teams. Includes
        // member-only events and special promotional offers for Google products.
        marketComm?: boolean,
    }
    
    interface Rank {
        // The numerical value of the rank.
        value?: number,
        // The type of rank.
        type?: string,
    }
    
    interface GetPartnersStatusResponse {
        // Current response metadata.
        responseMetadata?: ResponseMetadata,
    }
    
    interface UserProfile {
        // The list of opt-ins for the user, related to communication preferences.
        emailOptIns?: OptIns,
        // The user's family name.
        familyName?: string,
        // The list of languages this user understands.
        languages?: string[],        
        // A list of ids representing which markets the user was interested in.
        markets?: string[],        
        // The user's phone number.
        phoneNumber?: string,
        // If the user has edit access to multiple accounts, the user can choose the
        // preferred account and it is used when a personal account is needed. Can
        // be empty.
        adwordsManagerAccount?: string,
        // The user's primary country, an ISO 2-character code.
        primaryCountryCode?: string,
        // The email address the user has selected on the Partners site as primary.
        emailAddress?: string,
        // Whether the user's public profile is visible to anyone with the URL.
        profilePublic?: boolean,
        // A list of ids representing which channels the user selected they were in.
        channels?: string[],        
        // A list of ids represnting which job categories the user selected.
        jobFunctions?: string[],        
        // The user's given name.
        givenName?: string,
        // The user's mailing address, contains multiple fields.
        address?: Location,
        // A list of ids representing which industries the user selected.
        industries?: string[],        
    }
    
    interface HistoricalOffer {
        // Name (First + Last) of the partners user to whom the incentive is allocated.
        senderName?: string,
        // Country Code for the offer country.
        offerCountryCode?: string,
        // Time this offer expires.
        expirationTime?: string,
        // Offer code.
        offerCode?: string,
        // Time offer was first created.
        creationTime?: string,
        // Email address for client.
        clientEmail?: string,
        // Status of the offer.
        status?: string,
        // ID of client.
        clientId?: string,
        // Name of the client.
        clientName?: string,
        // Time last action was taken.
        lastModifiedTime?: string,
        // Client's AdWords page URL.
        adwordsUrl?: string,
        // Type of offer.
        offerType?: string,
    }
    
    interface LogUserEventRequest {
        // The URL where the event occurred.
        url?: string,
        // Current request metadata.
        requestMetadata?: RequestMetadata,
        // The scope of the event.
        eventScope?: string,
        // List of event data for the event.
        eventDatas?: EventData[],        
        // The category the action belongs to.
        eventCategory?: string,
        // Advertiser lead information.
        lead?: Lead,
        // The action that occurred.
        eventAction?: string,
    }
    
    interface UserOverrides {
        // IP address to use instead of the user's geo-located IP address.
        ipAddress?: string,
        // Logged-in user ID to impersonate instead of the user's ID.
        userId?: string,
    }
    
    interface AnalyticsDataPoint {
        // Number of times the type of event occurred.
        // Meaning depends on context (e.g. profile views, contacts, etc.).
        eventCount?: number,
        // Location information of where these events occurred.
        eventLocations?: LatLng[],        
    }
    
    interface Analytics {
        // Instances of users seeing the `Company` in Google Partners Search results
        // on the specified date.
        searchViews?: AnalyticsDataPoint,
        // Instances of users viewing the `Company` profile
        // on the specified date.
        profileViews?: AnalyticsDataPoint,
        // Date on which these events occurred.
        eventDate?: Date,
        // Instances of users contacting the `Company`
        // on the specified date.
        contacts?: AnalyticsDataPoint,
    }
    
    interface AdWordsManagerAccountInfo {
        // Name of the customer this account represents.
        customerName?: string,
        // The AdWords Manager Account id.
        id?: string,
    }
    
    interface PublicProfile {
        // The URL to the main profile image of the public profile.
        profileImage?: string,
        // The URL to the main display image of the public profile. Being deprecated.
        displayImageUrl?: string,
        // The display name of the public profile.
        displayName?: string,
        // The URL of the public profile.
        url?: string,
        // The ID which can be used to retrieve more details about the public profile.
        id?: string,
    }
    
    interface ResponseMetadata {
        // Debug information about this request.
        debugInfo?: DebugInfo,
    }
    
    interface RecaptchaChallenge {
        // The ID of the reCaptcha challenge.
        id?: string,
        // The response to the reCaptcha challenge.
        response?: string,
    }
    
    interface AvailableOffer {
        // Level of this offer.
        offerLevel?: string,
        // Name of the offer.
        name?: string,
        // ID of this offer.
        id?: string,
        // Whether or not the list of qualified customers is definitely complete.
        qualifiedCustomersComplete?: boolean,
        // Offer info by country.
        countryOfferInfos?: CountryOfferInfo[],        
        // Type of offer.
        offerType?: string,
        // The maximum age of an account [in days] to be eligible.
        maxAccountAge?: number,
        // Customers who qualify for this offer.
        qualifiedCustomer?: OfferCustomer[],        
        // Terms of the offer.
        terms?: string,
        // Should special text be shown on the offers page.
        showSpecialOfferCopy?: boolean,
        // The number of codes for this offer that are available for distribution.
        available?: number,
        // Description of the offer.
        description?: string,
    }
    
    interface LatLng {
        // The latitude in degrees. It must be in the range [-90.0, +90.0].
        latitude?: number,
        // The longitude in degrees. It must be in the range [-180.0, +180.0].
        longitude?: number,
    }
    
    interface Money {
        // Number of nano (10^-9) units of the amount.
        // The value must be between -999,999,999 and +999,999,999 inclusive.
        // If `units` is positive, `nanos` must be positive or zero.
        // If `units` is zero, `nanos` can be positive, zero, or negative.
        // If `units` is negative, `nanos` must be negative or zero.
        // For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
        nanos?: number,
        // The whole units of the amount.
        // For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
        units?: string,
        // The 3-letter currency code defined in ISO 4217.
        currencyCode?: string,
    }
    
    interface AnalyticsSummary {
        // Aggregated number of times users saw the `Company`
        // in Google Partners Search results for given date range.
        searchViewsCount?: number,
        // Aggregated number of times users contacted the `Company`
        // for given date range.
        contactsCount?: number,
        // Aggregated number of profile views for the `Company` for given date range.
        profileViewsCount?: number,
    }
    
    interface LogMessageRequest {
        // Map of client info, such as URL, browser navigator, browser platform, etc.
        clientInfo?: any,
        // Current request metadata.
        requestMetadata?: RequestMetadata,
        // Message level of client message.
        level?: string,
        // Details about the client message.
        details?: string,
    }
    
    interface DebugInfo {
        // Server-side debug stack trace.
        serverTraceInfo?: string,
        // Info about the server that serviced this request.
        serverInfo?: string,
        // URL of the service that handled this request.
        serviceUrl?: string,
    }
    
    interface Lead {
        // The AdWords Customer ID of the lead.
        adwordsCustomerId?: string,
        // Phone number of lead source.
        phoneNumber?: string,
        // Timestamp of when this lead was created.
        createTime?: string,
        // Whether or not the lead signed up for marketing emails
        marketingOptIn?: boolean,
        // Type of lead.
        type?: string,
        // First name of lead source.
        givenName?: string,
        // The minimum monthly budget lead source is willing to spend.
        minMonthlyBudget?: Money,
        // Website URL of lead source.
        websiteUrl?: string,
        // Language code of the lead's language preference, as defined by
        // <a href="https://tools.ietf.org/html/bcp47">BCP 47</a>
        // (IETF BCP 47, "Tags for Identifying Languages").
        languageCode?: string,
        // The lead's state in relation to the company.
        state?: string,
        // List of reasons for using Google Partner Search and creating a lead.
        gpsMotivations?: string[],        
        // Email address of lead source.
        email?: string,
        // Last name of lead source.
        familyName?: string,
        // ID of the lead.
        id?: string,
        // Comments lead source gave.
        comments?: string,
    }
    
    interface ListUserStatesResponse {
        // Current response metadata.
        responseMetadata?: ResponseMetadata,
        // User's states.
        userStates?: string[],        
    }
    
    interface CompanyRelation {
        // The flag that indicates if the company is pending verification.
        isPending?: boolean,
        // The primary address for this company.
        address?: string,
        // The timestamp of when affiliation was requested.
        // @OutputOnly
        creationTime?: string,
        // The state of relationship, in terms of approvals.
        state?: string,
        // The primary location of the company.
        primaryAddress?: Location,
        // The AdWords manager account # associated this company.
        managerAccount?: string,
        // The name (in the company's primary language) for the company.
        name?: string,
        // The segment the company is classified as.
        segment?: string[],        
        // The internal company ID.
        // Only available for a whitelisted set of api clients.
        internalCompanyId?: string,
        // Whether the company is a Partner.
        badgeTier?: string,
        // The list of Google Partners specialization statuses for the company.
        specializationStatus?: SpecializationStatus[],        
        // The phone number for the company's primary address.
        phoneNumber?: string,
        // The website URL for this company.
        website?: string,
        // The primary country code of the company.
        primaryCountryCode?: string,
        // The ID of the company. There may be no id if this is a
        // pending company.5
        companyId?: string,
        // The primary language code of the company.
        primaryLanguageCode?: string,
        // A URL to a profile photo, e.g. a G+ profile photo.
        logoUrl?: string,
        // The timestamp when the user was approved.
        // @OutputOnly
        resolvedTimestamp?: string,
        // Indicates if the user is an admin for this company.
        companyAdmin?: boolean,
    }
    
    interface Date {
        // Day of month. Must be from 1 to 31 and valid for the year and month, or 0
        // if specifying a year/month where the day is not significant.
        day?: number,
        // Year of date. Must be from 1 to 9999, or 0 if specifying a date without
        // a year.
        year?: number,
        // Month of year. Must be from 1 to 12.
        month?: number,
    }
    
    interface Empty {
    }
    
    interface TrafficSource {
        // Identifier to indicate where the traffic comes from.
        // An identifier has multiple letters created by a team which redirected the
        // traffic to us.
        trafficSourceId?: string,
        // Second level identifier to indicate where the traffic comes from.
        // An identifier has multiple letters created by a team which redirected the
        // traffic to us.
        trafficSubId?: string,
    }
    
    interface RequestMetadata {
        // Google Partners session ID.
        partnersSessionId?: string,
        // Values to use instead of the user's respective defaults for the current
        // request. These are only honored by whitelisted products.
        userOverrides?: UserOverrides,
        // Source of traffic for the current request.
        trafficSource?: TrafficSource,
        // Experiment IDs the current request belongs to.
        experimentIds?: string[],        
        // Locale to use for the current request.
        locale?: string,
    }
    
    interface CreateLeadRequest {
        // Current request metadata.
        requestMetadata?: RequestMetadata,
        // <a href="https://www.google.com/recaptcha/">reCaptcha</a> challenge info.
        recaptchaChallenge?: RecaptchaChallenge,
        // The lead resource. The `LeadType` must not be `LEAD_TYPE_UNSPECIFIED`
        // and either `email` or `phone_number` must be provided.
        lead?: Lead,
    }
    
    interface EventData {
        // Data type.
        key?: string,
        // Data values.
        values?: string[],        
    }
    
    interface ExamStatus {
        // Whether this exam is in the state of warning.
        warning?: boolean,
        // Date this exam is due to expire.
        expiration?: string,
        // The date the user last passed this exam.
        lastPassed?: string,
        // The type of the exam.
        examType?: string,
        // The date the user last taken this exam.
        taken?: string,
        // Whether this exam has been passed and not expired.
        passed?: boolean,
    }
    
    interface ListOffersResponse {
        // Reason why no Offers are available.
        noOfferReason?: string,
        // Available Offers to be distributed.
        availableOffers?: AvailableOffer[],        
        // Current response metadata.
        responseMetadata?: ResponseMetadata,
    }
    
    interface CountryOfferInfo {
        // (localized) Spend X amount for that country's offer.
        spendXAmount?: string,
        // Country code for which offer codes may be requested.
        offerCountryCode?: string,
        // Type of offer country is eligible for.
        offerType?: string,
        // (localized) Get Y amount for that country's offer.
        getYAmount?: string,
    }
    
    interface ListCompaniesResponse {
        // The list of companies.
        companies?: Company[],        
        // A token to retrieve next page of results.
        // Pass this value in the `ListCompaniesRequest.page_token` field in the
        // subsequent call to
        // ListCompanies to retrieve the
        // next page of results.
        nextPageToken?: string,
        // Current response metadata.
        responseMetadata?: ResponseMetadata,
    }
    
    interface OfferCustomer {
        // URL to the customer's AdWords page.
        adwordsUrl?: string,
        // Type of the offer
        offerType?: string,
        // Days the customer is still eligible.
        eligibilityDaysLeft?: number,
        // Time the customer was created.
        creationTime?: string,
        // Country code of the customer.
        countryCode?: string,
        // External CID for the customer.
        externalCid?: string,
        // Formatted Get Y amount with currency code.
        getYAmount?: string,
        // Name of the customer.
        name?: string,
        // Formatted Spend X amount with currency code.
        spendXAmount?: string,
    }
    
    interface CertificationStatus {
        // List of certification exam statuses.
        examStatuses?: CertificationExamStatus[],        
        // The type of the certification.
        type?: string,
        // Number of people who are certified,
        userCount?: number,
        // Whether certification is passing.
        isCertified?: boolean,
    }
    
    interface LocalizedCompanyInfo {
        // Language code of the localized company info, as defined by
        // <a href="https://tools.ietf.org/html/bcp47">BCP 47</a>
        // (IETF BCP 47, "Tags for Identifying Languages").
        languageCode?: string,
        // List of country codes for the localized company info.
        countryCodes?: string[],        
        // Localized brief description that the company uses to advertise themselves.
        overview?: string,
        // Localized display name.
        displayName?: string,
    }
    
    interface UserEventsResource {
        // Logs a user event.
        log (request: {        
        }) : gapi.client.Request<LogUserEventResponse>;        
        
    }
    
    
    interface ClientMessagesResource {
        // Logs a generic message from the client, such as
        // `Failed to render component`, `Profile page is running slow`,
        // `More than 500 users have accessed this result.`, etc.
        log (request: {        
        }) : gapi.client.Request<LogMessageResponse>;        
        
    }
    
    
    interface ExamsResource {
        // Gets an Exam Token for a Partner's user to take an exam in the Exams System
        getToken (request: {        
            // Google Partners session ID.
            requestMetadata.partnersSessionId?: string,
            // Logged-in user ID to impersonate instead of the user's ID.
            requestMetadata.userOverrides.userId?: string,
            // Identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSourceId?: string,
            // Locale to use for the current request.
            requestMetadata.locale?: string,
            // IP address to use instead of the user's geo-located IP address.
            requestMetadata.userOverrides.ipAddress?: string,
            // Experiment IDs the current request belongs to.
            requestMetadata.experimentIds?: string,
            // Second level identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSubId?: string,
            // The exam type we are requesting a token for.
            examType: string,
        }) : gapi.client.Request<ExamToken>;        
        
    }
    
    
    interface LeadsResource {
        // Lists advertiser leads for a user's associated company.
        // Should only be called within the context of an authorized logged in user.
        list (request: {        
            // Identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSourceId?: string,
            // Locale to use for the current request.
            requestMetadata.locale?: string,
            // IP address to use instead of the user's geo-located IP address.
            requestMetadata.userOverrides.ipAddress?: string,
            // Experiment IDs the current request belongs to.
            requestMetadata.experimentIds?: string,
            // Second level identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSubId?: string,
            // How to order Leads. Currently, only `create_time`
            // and `create_time desc` are supported
            orderBy?: string,
            // Google Partners session ID.
            requestMetadata.partnersSessionId?: string,
            // Logged-in user ID to impersonate instead of the user's ID.
            requestMetadata.userOverrides.userId?: string,
            // A token identifying a page of results that the server returns.
            // Typically, this is the value of `ListLeadsResponse.next_page_token`
            // returned from the previous call to
            // ListLeads.
            pageToken?: string,
            // Requested page size. Server may return fewer leads than requested.
            // If unspecified, server picks an appropriate default.
            pageSize?: number,
        }) : gapi.client.Request<ListLeadsResponse>;        
        
    }
    
    
    interface HistoryResource {
        // Lists the Historical Offers for the current user (or user's entire company)
        list (request: {        
            // Logged-in user ID to impersonate instead of the user's ID.
            requestMetadata.userOverrides.userId?: string,
            // Google Partners session ID.
            requestMetadata.partnersSessionId?: string,
            // Token to retrieve a specific page.
            pageToken?: string,
            // Maximum number of rows to return per page.
            pageSize?: number,
            // Identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSourceId?: string,
            // Locale to use for the current request.
            requestMetadata.locale?: string,
            // IP address to use instead of the user's geo-located IP address.
            requestMetadata.userOverrides.ipAddress?: string,
            // if true, show history for the entire company.  Requires user to be admin.
            entireCompany?: boolean,
            // Experiment IDs the current request belongs to.
            requestMetadata.experimentIds?: string,
            // Comma-separated list of fields to order by, e.g.: "foo,bar,baz".
            // Use "foo desc" to sort descending.
            // List of valid field names is: name, offer_code, expiration_time, status,
            //     last_modified_time, sender_name, creation_time, country_code,
            //     offer_type.
            orderBy?: string,
            // Second level identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSubId?: string,
        }) : gapi.client.Request<ListOffersHistoryResponse>;        
        
    }
    
    
    interface OffersResource {
        // Lists the Offers available for the current user
        list (request: {        
            // Logged-in user ID to impersonate instead of the user's ID.
            requestMetadata.userOverrides.userId?: string,
            // Google Partners session ID.
            requestMetadata.partnersSessionId?: string,
            // Identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSourceId?: string,
            // Locale to use for the current request.
            requestMetadata.locale?: string,
            // IP address to use instead of the user's geo-located IP address.
            requestMetadata.userOverrides.ipAddress?: string,
            // Experiment IDs the current request belongs to.
            requestMetadata.experimentIds?: string,
            // Second level identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSubId?: string,
        }) : gapi.client.Request<ListOffersResponse>;        
        
        history: HistoryResource,
    }
    
    
    interface UserStatesResource {
        // Lists states for current user.
        list (request: {        
            // Experiment IDs the current request belongs to.
            requestMetadata.experimentIds?: string,
            // Second level identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSubId?: string,
            // Google Partners session ID.
            requestMetadata.partnersSessionId?: string,
            // Logged-in user ID to impersonate instead of the user's ID.
            requestMetadata.userOverrides.userId?: string,
            // Identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSourceId?: string,
            // Locale to use for the current request.
            requestMetadata.locale?: string,
            // IP address to use instead of the user's geo-located IP address.
            requestMetadata.userOverrides.ipAddress?: string,
        }) : gapi.client.Request<ListUserStatesResponse>;        
        
    }
    
    
    interface AnalyticsResource {
        // Lists analytics data for a user's associated company.
        // Should only be called within the context of an authorized logged in user.
        list (request: {        
            // Experiment IDs the current request belongs to.
            requestMetadata.experimentIds?: string,
            // Second level identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSubId?: string,
            // Google Partners session ID.
            requestMetadata.partnersSessionId?: string,
            // Logged-in user ID to impersonate instead of the user's ID.
            requestMetadata.userOverrides.userId?: string,
            // A token identifying a page of results that the server returns.
            // Typically, this is the value of `ListAnalyticsResponse.next_page_token`
            // returned from the previous call to
            // ListAnalytics.
            // Will be a date string in `YYYY-MM-DD` format representing the end date
            // of the date range of results to return.
            // If unspecified or set to "", default value is the current date.
            pageToken?: string,
            // Requested page size. Server may return fewer analytics than requested.
            // If unspecified or set to 0, default value is 30.
            // Specifies the number of days in the date range when querying analytics.
            // The `page_token` represents the end date of the date range
            // and the start date is calculated using the `page_size` as the number
            // of days BEFORE the end date.
            // Must be a non-negative integer.
            pageSize?: number,
            // Identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSourceId?: string,
            // Locale to use for the current request.
            requestMetadata.locale?: string,
            // IP address to use instead of the user's geo-located IP address.
            requestMetadata.userOverrides.ipAddress?: string,
        }) : gapi.client.Request<ListAnalyticsResponse>;        
        
    }
    
    
    interface V2Resource {
        // Updates the specified lead.
        updateLeads (request: {        
            // Second level identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSubId?: string,
            // Logged-in user ID to impersonate instead of the user's ID.
            requestMetadata.userOverrides.userId?: string,
            // Google Partners session ID.
            requestMetadata.partnersSessionId?: string,
            // Identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSourceId?: string,
            // Locale to use for the current request.
            requestMetadata.locale?: string,
            // IP address to use instead of the user's geo-located IP address.
            requestMetadata.userOverrides.ipAddress?: string,
            // Standard field mask for the set of fields to be updated.
            // Required with at least 1 value in FieldMask's paths.
            // Only `state` and `adwords_customer_id` are currently supported.
            updateMask?: string,
            // Experiment IDs the current request belongs to.
            requestMetadata.experimentIds?: string,
        }) : gapi.client.Request<Lead>;        
        
        // Update company.
        // Should only be called within the context of an authorized logged in user.
        updateCompanies (request: {        
            // Google Partners session ID.
            requestMetadata.partnersSessionId?: string,
            // Logged-in user ID to impersonate instead of the user's ID.
            requestMetadata.userOverrides.userId?: string,
            // Identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSourceId?: string,
            // Locale to use for the current request.
            requestMetadata.locale?: string,
            // IP address to use instead of the user's geo-located IP address.
            requestMetadata.userOverrides.ipAddress?: string,
            // Standard field mask for the set of fields to be updated.
            // Required with at least 1 value in FieldMask's paths.
            updateMask?: string,
            // Experiment IDs the current request belongs to.
            requestMetadata.experimentIds?: string,
            // Second level identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSubId?: string,
        }) : gapi.client.Request<Company>;        
        
        // Gets Partners Status of the logged in user's agency.
        // Should only be called if the logged in user is the admin of the agency.
        getPartnersstatus (request: {        
            // Google Partners session ID.
            requestMetadata.partnersSessionId?: string,
            // Logged-in user ID to impersonate instead of the user's ID.
            requestMetadata.userOverrides.userId?: string,
            // Identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSourceId?: string,
            // Locale to use for the current request.
            requestMetadata.locale?: string,
            // IP address to use instead of the user's geo-located IP address.
            requestMetadata.userOverrides.ipAddress?: string,
            // Experiment IDs the current request belongs to.
            requestMetadata.experimentIds?: string,
            // Second level identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSubId?: string,
        }) : gapi.client.Request<GetPartnersStatusResponse>;        
        
    }
    
    
    interface UsersResource {
        // Deletes a user's company relation. Unaffiliaites the user from a company.
        deleteCompanyRelation (request: {        
            // Experiment IDs the current request belongs to.
            requestMetadata.experimentIds?: string,
            // The ID of the user. Can be set to <code>me</code> to mean
            // the currently authenticated user.
            userId: string,
            // Second level identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSubId?: string,
            // Logged-in user ID to impersonate instead of the user's ID.
            requestMetadata.userOverrides.userId?: string,
            // Google Partners session ID.
            requestMetadata.partnersSessionId?: string,
            // Identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSourceId?: string,
            // Locale to use for the current request.
            requestMetadata.locale?: string,
            // IP address to use instead of the user's geo-located IP address.
            requestMetadata.userOverrides.ipAddress?: string,
        }) : gapi.client.Request<Empty>;        
        
        // Creates a user's company relation. Affiliates the user to a company.
        createCompanyRelation (request: {        
            // Experiment IDs the current request belongs to.
            requestMetadata.experimentIds?: string,
            // Second level identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSubId?: string,
            // The ID of the user. Can be set to <code>me</code> to mean
            // the currently authenticated user.
            userId: string,
            // Logged-in user ID to impersonate instead of the user's ID.
            requestMetadata.userOverrides.userId?: string,
            // Google Partners session ID.
            requestMetadata.partnersSessionId?: string,
            // Identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSourceId?: string,
            // Locale to use for the current request.
            requestMetadata.locale?: string,
            // IP address to use instead of the user's geo-located IP address.
            requestMetadata.userOverrides.ipAddress?: string,
        }) : gapi.client.Request<CompanyRelation>;        
        
        // Gets a user.
        get (request: {        
            // Logged-in user ID to impersonate instead of the user's ID.
            requestMetadata.userOverrides.userId?: string,
            // Google Partners session ID.
            requestMetadata.partnersSessionId?: string,
            // Specifies what parts of the user information to return.
            userView?: string,
            // Identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSourceId?: string,
            // Locale to use for the current request.
            requestMetadata.locale?: string,
            // IP address to use instead of the user's geo-located IP address.
            requestMetadata.userOverrides.ipAddress?: string,
            // Experiment IDs the current request belongs to.
            requestMetadata.experimentIds?: string,
            // Second level identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSubId?: string,
            // Identifier of the user. Can be set to <code>me</code> to mean the currently
            // authenticated user.
            userId: string,
        }) : gapi.client.Request<User>;        
        
        // Updates a user's profile. A user can only update their own profile and
        // should only be called within the context of a logged in user.
        updateProfile (request: {        
            // IP address to use instead of the user's geo-located IP address.
            requestMetadata.userOverrides.ipAddress?: string,
            // Experiment IDs the current request belongs to.
            requestMetadata.experimentIds?: string,
            // Second level identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSubId?: string,
            // Google Partners session ID.
            requestMetadata.partnersSessionId?: string,
            // Logged-in user ID to impersonate instead of the user's ID.
            requestMetadata.userOverrides.userId?: string,
            // Identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSourceId?: string,
            // Locale to use for the current request.
            requestMetadata.locale?: string,
        }) : gapi.client.Request<UserProfile>;        
        
    }
    
    
    interface LeadsResource {
        // Creates an advertiser lead for the given company ID.
        create (request: {        
            // The ID of the company to contact.
            companyId: string,
        }) : gapi.client.Request<CreateLeadResponse>;        
        
    }
    
    
    interface CompaniesResource {
        // Lists companies.
        list (request: {        
            // List of industries the company can help with.
            industries?: string,
            // Website URL that will help to find a better matched company.
            // .
            websiteUrl?: string,
            // List of reasons for using Google Partner Search to get companies.
            gpsMotivations?: string,
            // List of language codes that company can support. Only primary language
            // subtags are accepted as defined by
            // <a href="https://tools.ietf.org/html/bcp47">BCP 47</a>
            // (IETF BCP 47, "Tags for Identifying Languages").
            languageCodes?: string,
            // Requested page size. Server may return fewer companies than requested.
            // If unspecified, server picks an appropriate default.
            pageSize?: number,
            // IP address to use instead of the user's geo-located IP address.
            requestMetadata.userOverrides.ipAddress?: string,
            // Experiment IDs the current request belongs to.
            requestMetadata.experimentIds?: string,
            // How to order addresses within the returned companies. Currently, only
            // `address` and `address desc` is supported which will sorted by closest to
            // farthest in distance from given address and farthest to closest distance
            // from given address respectively.
            orderBy?: string,
            // List of specializations that the returned agencies should provide. If this
            // is not empty, any returned agency must have at least one of these
            // specializations, or one of the services in the "services" field.
            specializations?: string,
            // The 3-letter currency code defined in ISO 4217.
            maxMonthlyBudget.currencyCode?: string,
            // The 3-letter currency code defined in ISO 4217.
            minMonthlyBudget.currencyCode?: string,
            // Logged-in user ID to impersonate instead of the user's ID.
            requestMetadata.userOverrides.userId?: string,
            // The view of the `Company` resource to be returned. This must not be
            // `COMPANY_VIEW_UNSPECIFIED`.
            view?: string,
            // Locale to use for the current request.
            requestMetadata.locale?: string,
            // The address to use when searching for companies.
            // If not given, the geo-located address of the request is used.
            address?: string,
            // The whole units of the amount.
            // For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
            minMonthlyBudget.units?: string,
            // Number of nano (10^-9) units of the amount.
            // The value must be between -999,999,999 and +999,999,999 inclusive.
            // If `units` is positive, `nanos` must be positive or zero.
            // If `units` is zero, `nanos` can be positive, zero, or negative.
            // If `units` is negative, `nanos` must be negative or zero.
            // For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
            maxMonthlyBudget.nanos?: number,
            // List of services that the returned agencies should provide. If this is
            // not empty, any returned agency must have at least one of these services,
            // or one of the specializations in the "specializations" field.
            services?: string,
            // The whole units of the amount.
            // For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
            maxMonthlyBudget.units?: string,
            // Identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSourceId?: string,
            // Number of nano (10^-9) units of the amount.
            // The value must be between -999,999,999 and +999,999,999 inclusive.
            // If `units` is positive, `nanos` must be positive or zero.
            // If `units` is zero, `nanos` can be positive, zero, or negative.
            // If `units` is negative, `nanos` must be negative or zero.
            // For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
            minMonthlyBudget.nanos?: number,
            // Second level identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSubId?: string,
            // Google Partners session ID.
            requestMetadata.partnersSessionId?: string,
            // A token identifying a page of results that the server returns.
            // Typically, this is the value of `ListCompaniesResponse.next_page_token`
            // returned from the previous call to
            // ListCompanies.
            pageToken?: string,
            // Company name to search for.
            companyName?: string,
        }) : gapi.client.Request<ListCompaniesResponse>;        
        
        // Gets a company.
        get (request: {        
            // The view of `Company` resource to be returned. This must not be
            // `COMPANY_VIEW_UNSPECIFIED`.
            view?: string,
            // The address to use for sorting the company's addresses by proximity.
            // If not given, the geo-located address of the request is used.
            // Used when order_by is set.
            address?: string,
            // Locale to use for the current request.
            requestMetadata.locale?: string,
            // Identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSourceId?: string,
            // IP address to use instead of the user's geo-located IP address.
            requestMetadata.userOverrides.ipAddress?: string,
            // The ID of the company to retrieve.
            companyId: string,
            // If the company's budget is in a different currency code than this one, then
            // the converted budget is converted to this currency code.
            currencyCode?: string,
            // Experiment IDs the current request belongs to.
            requestMetadata.experimentIds?: string,
            // Second level identifier to indicate where the traffic comes from.
            // An identifier has multiple letters created by a team which redirected the
            // traffic to us.
            requestMetadata.trafficSource.trafficSubId?: string,
            // How to order addresses within the returned company. Currently, only
            // `address` and `address desc` is supported which will sorted by closest to
            // farthest in distance from given address and farthest to closest distance
            // from given address respectively.
            orderBy?: string,
            // Google Partners session ID.
            requestMetadata.partnersSessionId?: string,
            // Logged-in user ID to impersonate instead of the user's ID.
            requestMetadata.userOverrides.userId?: string,
        }) : gapi.client.Request<GetCompanyResponse>;        
        
        leads: LeadsResource,
    }
    
}

declare module gapi.client.partners {
    var userEvents: gapi.client.partners.UserEventsResource; 
    
    var clientMessages: gapi.client.partners.ClientMessagesResource; 
    
    var exams: gapi.client.partners.ExamsResource; 
    
    var leads: gapi.client.partners.LeadsResource; 
    
    var offers: gapi.client.partners.OffersResource; 
    
    var userStates: gapi.client.partners.UserStatesResource; 
    
    var analytics: gapi.client.partners.AnalyticsResource; 
    
    var v2: gapi.client.partners.V2Resource; 
    
    var users: gapi.client.partners.UsersResource; 
    
    var companies: gapi.client.partners.CompaniesResource; 
    
}
