define({"380":{y:0,u:"../pam/pamappconfig.htm",l:-1,t:"Privileged Account Management Application Configuration",i:0.000617525743904817,a:"There are two possible application configuration scenarios available for the Privileged Account Management Module. The first is a direct connection, for PAM vendors using SailPoint’s SCIM API, and the second involves using the PAM Plugin, for those who do not. Application Configuration - Direct ..."},"381":{y:0,u:"../pam/appconfigdirect.htm",l:-1,t:"Application Configuration - Direct",i:0.000879983932793982,a:"If you use the SailPoint SCIM API, define a Privileged Account Management application type to communicate information to IdentityIQ. This application is very similar to the SCIM Application type. Refer to the SCIM application connector documentation available on Compass for detailed information.  On ..."},"382":{y:0,u:"../pam/appconfigplugin.htm",l:-1,t:"Application Configuration - Plugin",i:0.000879983932793982,a:"PAM vendors not using the SailPoint SCIM API need to create a database to hold their privileged information, for example accounts, account groups, and containers, a JDBC application type, used by the PAM plugin to interact with the database, and install the PAM Plugin.  Create a Privileged Account ..."},"383":{y:0,u:"../pam/appconfigpluginconfigtab.htm",l:-1,t:"Configuration Tab",i:0.000991533623899835,a:"Define the JDBC Connection Settings, for example the Database URL and JDBC Driver. Define SQL Statements and getObjectSQL for each object in the PAM database.  The following objects are required: account group Container ContainterPermission PrivilegedData (optional) PrivilegedDataPermission ..."},"384":{y:0,u:"../pam/appconfigpluginruletab.htm",l:-1,t:"Rule Tab",i:0.000991533623899835,a:"If you are enabling provisioning in the Privileged Account Management Module you must select a Provisioning Rule Type and specify a Provisioning Rule. You can import a rule into IdentityIQ or create one using the Rule Editor. Refer to the JDBC application connector documentation available on Compass ..."},"385":{y:0,u:"../pam/pamscimbridge.htm",l:-1,t:"Privileged Account Management SCIM Bridge Plugins",i:0.000617525743904817,a:"SailPoint provides a SCIM privileged account management bridge that provides a PAM REST API that the PAM collector and connector can use if a PAM vendor does not support the API. This has a pluggable PAMEngine interface that enables using an engine plugin to communicate with the vendor through some ..."},"386":{y:0,u:"../pam/pamsetuptab.htm",l:-1,t:"Privileged Account Management Setup Tab",i:0.000617525743904817,a:"Use the Privileged Account Management tab on the Configure Identity Settings page to set up your deployment of the Privileged Account Management module. Click the gear icon and select Global Settings \u003e IdentityIQ Configuration to display the Privileged Account Management tab. Define the following: ..."},"387":{y:0,u:"../pam/pamactivationdeployment.htm",l:-1,t:"Privileged Account Management Activation and Deployment",i:0.000617525743904817,a:"Use the following information to activate the Privileged Account Management Module. Log on to your instance of IdentityIQ as an administrator. Click on Global Settings under the gear icon and select the Import from File Page. Click Browse and browse to the following directory: ..."},"388":{y:0,u:"../pam/pamcredentcycle.htm",l:-1,t:"Privileged Account Management Credential Cycling",i:0.000617525743904817,a:"Credential cycling enables applications that require credentials, such as username and password, to obtain that information directly from a PAM vendor, such as a CyberArk or Beyond Trust vault. Credential cycling enables credentials to be authenticated directly from the PAM source at runtime. An ..."},"389":{y:0,u:"../pam/credential_cycling_confi.htm",l:-1,t:"Credential Cycling Configuration",i:0.000792497869830927,a:"A more detailed look at the template and the configuration options is provided in a later section. To enable credential cycling, BeyondTrust PowerBroker Password Safe application passwords must be configured in the JSON format: {\"bt_user\":\"MyUserName\",\"bt_password\":\"MyPasswordValue\"} Prerequisites:  ..."},"390":{y:0,u:"../pam/workingwcredentcycletemp.htm",l:-1,t:"Working with the Credential Configuration Template",i:0.000792497869830927,a:"The credentialConfigurationTemplate.xml is located in the WEB-INF\\config directory of your IdentityIQ installation. The template file includes sections for BeyondTrust, CyberArk, and a solution-neutral mapping option. If you are using a PAM solution other than BeyondTrust or CyberArk, you can use ..."},"391":{y:0,u:"../pam/credentialcyclinginapp.htm",l:-1,t:"Credential Cycling in an Application",i:0.000792497869830927,a:"When credential cycling is configured for an application, the Application Definition page displays a message for the users. Although the relevant credential fields are still marked as requiring values, these fields are not validated when credential cycling is enabled, and so can be left blank, or ..."},"392":{y:0,u:"../passwordmgmt/passwordmanagement.htm",l:-1,t:"Password Management",i:0.000617525743904817,a:"Password Management"},"393":{y:0,u:"../passwordmgmt/introduction.htm",l:-1,t:"Introduction to Password Management",i:0.000617525743904817,a:"IdentityIQ supports multiple login configurations, including single sign-on, pass-through authentication, and validation against IdentityIQ’s internally stored passwords. Pass-through authentication and internal passwords can be managed through the IdentityIQ user interface.  IdentityIQ’s internal ..."},"394":{y:0,u:"../passwordmgmt/pm_application.htm",l:-1,t:"Application Password Management",i:0.000792497869830927,a:"IdentityIQ can use the Lifecycle Manager product to manage passwords across many of the applications with which it is associated. It can enforce password policies specified for the applications, which can include requirements for length, complexity, unique history, and mandatory reset. To manage ..."},"395":{y:0,u:"../passwordmgmt/enabling_password_manage.htm",l:-1,t:"Enabling Password Management in IdentityIQ",i:0.000713761358083789,a:"The ability to manage passwords in other applications through IdentityIQ is controlled by a combination of settings:  \na business process that manages provisioning of password changes and password resets for application passwords\n some optional configuration settings that refine the behavior of your ..."},"396":{y:0,u:"../passwordmgmt/specialcharacterdef.htm",l:-1,t:"Defining Special Characters Available For Password Use",i:0.000954495752215023,a:"IdentityIQ enables you to define the special characters that can be used in passwords throughout your deployment of the product. A default set of special characters are included in the System Configuration object.  The special characters enabled for use in passwords are listed in the ..."},"397":{y:0,u:"../passwordmgmt/configuring_password_pol.htm",l:-1,t:"Configuring Password Policies for an Application",i:0.000713761358083789,a:"Password policies specify the password requirements for an application. These can include minimum and maximum lengths for the password and requirements for its makeup, for example number of letters, digits, uppercase letters, lowercase letters, and special characters. The policies can also restrict ..."},"398":{y:0,u:"../passwordmgmt/configuring_applications.htm",l:-1,t:"Configuring Applications for Password Management",i:0.000713761358083789,a:"Password management is further governed by the capabilities of the connector in use for each application. Passwords can be managed through IdentityIQ for any application using a read-write connector that has the PASSWORD feature enabled; this feature is enabled when the features String attribute on ..."},"399":{y:0,u:"../passwordmgmt/pwpolicydef.htm",l:-1,t:"Defining a Password Policy",i:0.00145920796478365,a:"Complete these steps to define an application\u0027s password policy: Open the application definition. From the navigation menu, go to Applications -\u003e Application Definition -\u003e select application from list or click Add New Application to create a new application.  Open the Password Policy tab. Click ..."},"400":{y:0,u:"../passwordmgmt/passworddictionary.htm",l:-1,t:"Password Dictionary",i:0.00123771545040536,a:"The password dictionary is a set of words (or character strings) that have been deemed impermissible as passwords or password contents for the specific IdentityIQ installation. It is populated by importing a Dictionary XML object through the iiq console or the Import from File option under System ..."},"401":{y:0,u:"../passwordmgmt/reuse.htm",l:-1,t:"Policy Re-Use",i:0.00143995559886501,a:"Previously created policies (for example, ones created for one application but applicable to more than one application) can be added to an application instead of recreating the same policy over and over. For example, if super-user accounts on all applications have the same password requirements, the ..."},"402":{y:0,u:"../passwordmgmt/pwvalidation.htm",l:-1,t:"Password Validation Process",i:0.000819765892364463,a:"In many cases, the password policy for an application applies to all users, so there is only one password policy per application. Sometimes, more than one policy is created for a single application to specify different password requirements for different levels or types of user access. In the ..."},"403":{y:0,u:"../passwordmgmt/appchangepw.htm",l:-1,t:"Application Change Password Provisioning Policy",i:0.000865441469428523,a:"Some applications support more than one password type. For example, Lotus Notes has three different types of passwords that need to be managed, a vault password, a file password, and an internet password. IdentityIQ can be used to configure those applications so that all password types can be ..."},"404":{y:0,u:"../passwordmgmt/requestpwchange.htm",l:-1,t:"Requesting a Password Change",i:0.000713761358083789,a:"Password changes, self-service or for others, are requested through the Manage Access QuickLink for Lifecycle Manager. When the request is submitted, it is immediately processed through a workflow, by default, the LCM Manage Passwords workflow. By default, application password requests (forgot, ..."},"405":{y:0,u:"../passwordmgmt/self_service_requests.htm",l:-1,t:"Self-Service Requests",i:0.000769205855249552,a:"When a user wants to, and is authorized to, change their own password on an application, they must complete these steps in IdentityIQ: From the Manage Access Quicklink, click Change Passwords and select For Me. Select the application account or accounts for which the password is being changed. Hover ..."},"406":{y:0,u:"../passwordmgmt/requestpwchnageothers.htm",l:-1,t:"Requests for Others",i:0.000769205855249552,a:"As described in Enabling Password Management in IdentityIQ, the sets of Identities for which a user can make requests, as well as the types of requests available to each user, depend on the Lifecycle Manager Configuration settings that apply to that Identity. The rest of this section assumes that ..."},"407":{y:0,u:"../passwordmgmt/lcmpwworkflow.htm",l:-1,t:"LCM Manage Passwords Workflow",i:0.000971446003709198,a:"By default, application password requests (forgot, expired, or change), either self-service or for others, invoke the LCM Manage Passwords workflow. This workflow\u0027s default configuration requires no application-owner or manager approvals on a password change. It creates and processes a provisioning ..."},"408":{y:0,u:"../passwordmgmt/passwords_on_new_account.htm",l:-1,t:"Passwords on New Account Requests",i:0.000713761358083789,a:"New account requests often contain password values. If you want to use default account-creation passwords that are different from the standard password policy for that application, IdentityIQ uses a configuration setting to govern the enforcement of password policies on account creation.  To enforce ..."},"409":{y:0,u:"../passwordmgmt/troubleshooting_password.htm",l:-1,t:"Troubleshooting Password Management with Provisioning Plan Debugging",i:0.000713761358083789,a:"Password changes are managed as provisioning activities, creating a provisioning plan that reflects the password change as an account modification request. Problems encountered with password management during the early set-up phases can be more easily diagnosed by turning on logging of the ..."},"410":{y:0,u:"../passwordmgmt/pm_iiq.htm",l:-1,t:"IdentityIQ Password Management",i:0.000792497869830927,a:"IdentityIQ supports multiple login configurations, including single sign-on, pass-through authentication, and validation against IdentityIQ\u0027s internally stored passwords. Pass-through authentication and internal passwords can be managed through the IdentityIQ user interface. IdentityIQ\u0027s internal ..."},"411":{y:0,u:"../passwordmgmt/pwconfig.htm",l:-1,t:"IdentityIQ Password Configuration",i:0.000752255603755377,a:"IdentityIQ supports one-way hashing for following identity secrets: IdentityIQ password IdentityIQ password history IdentityIQ security question answers Application password history for external applications, such as Active Directory. Hashing support for application password history is enabled even ..."},"412":{y:0,u:"../passwordmgmt/pwpolicy.htm",l:-1,t:"IdentityIQ Password Policy",i:0.000752255603755377,a:"The password policy for the IdentityIQ internally stored passwords is set in the System Setup configuration pages. Click the Gear icon and select Global Settings \u003e IdentityIQ Configuration \u003e Passwords tab \u003e Password Policy.  Most of the setting options are the same as the password policy options for ..."},"413":{y:0,u:"../passwordmgmt/resettinginternalpw.htm",l:-1,t:"Resetting IdentityIQ Internal Passwords",i:0.000752255603755377,a:"Each user\u0027s internally-stored password in IdentityIQ can be updated by that user on the Edit Preferences window. A user with rights to edit Identities\u0027 passwords (Password Administrator, Identity Administrator, etc.) can change passwords for other users as well through the Identity Cube. Passwords ..."},"414":{y:0,u:"../passwordmgmt/self_service_password_re.htm",l:-1,t:"Self-Service Password Reset",i:0.000830673101377878,a:"To change your own IdentityIQ password: \tFrom the navigation menu bar, click the user name and select Preferences. Click the Password tab to display the section in which the new password can be entered.  If the IdentityIQ password policy requires that the current password be entered, the Current ..."},"415":{y:0,u:"../passwordmgmt/resetotherusers.htm",l:-1,t:"Password Resets for Others",i:0.000830673101377878,a:"To use this feature, you must have authority to reset passwords for other users. To change an IdentityIQ password for another user:  From the navigation menu bar, click Identities \u003e Identity Warehouse -\u003e [select Identity name]. Then click Change Password to display the password reset fields. Enter ..."},"416":{y:0,u:"../passwordmgmt/password_expiration_rese.htm",l:-1,t:"Password Expiration Resets",i:0.000830673101377878,a:"When a password expiration date is set for the IdentityIQ password, the system forces the user to change their password the first time they try to sign in, on or after the specified date. First the user is informed that the password has expired. Click Close to acknowledge and dismiss this message. ..."},"417":{y:0,u:"../passwordmgmt/mgmtwpassthroughauth.htm",l:-1,t:"Password Management with Pass-Through Authentication ",i:0.000752255603755377,a:" This feature is available when pass-through authentication is in use and can only be used to reset the password for a pass-through-authentication application. When IdentityIQ is configured for pass-through authentication, the Forgot Password option can be turned on to enable a user to reset their ..."},"418":{y:0,u:"../passwordmgmt/securityquestdef.htm",l:-1,t:"Defining the Security Questions",i:0.000777386262009612,a:"To specify the security questions, from the Navigation bar, go to the Gear icon -\u003e Global Settings -\u003e Login Configuration -\u003e User Reset tab -\u003e Security Question Configuration -\u003e Questions area. A default set of security questions is provided. Any of these can be removed from the list by clicking the ..."},"419":{y:0,u:"../passwordmgmt/securityquestconfig.htm",l:-1,t:"Configuring the Security Question Settings",i:0.000777386262009612,a:"Configuring the Security Question Settings To configure security questions, from the Navigation bar, go to the Gear icon -\u003e Global Settings -\u003e Login Configuration -\u003e User Reset tab -\u003e Security Question Configuration -\u003e Settings area."},"420":{y:0,u:"../passwordmgmt/security_questions_.htm",l:-1,t:"Security Questions Tab",i:0.000777386262009612,a:"The Security Questions tab allows users to change security questions and answers, should the user need assistance when the password has been forgotten. The Security Questions tab is only displayed when Forgot Password and Security Question is enabled from the Login Configuration -\u003e User Reset page. ..."},"421":{y:0,u:"../passwordmgmt/recording_security_answe.htm",l:-1,t:"Recording Security Answers",i:0.000777386262009612,a:"\tA user can only be authenticated through these questions if the answers are pre-recorded in IdentityIQ. Users can be required to provide these answers or they can choose to provide (or modify) their own answers. Requiring Security Answers Users can be forced to provide answers to these questions by ..."},"422":{y:0,u:"../passwordmgmt/pm_application_specific.htm",l:-1,t:"Application-Specific Password Management Requirements",i:0.000792497869830927,a:"Some applications have specific configurations requirements that go beyond the basic password management requirements previously discussed in this document.   This section explores some of those application-specific requirements. This section contains: Active Directory and ADAM: SSL Windows Local ..."},"423":{y:0,u:"../passwordmgmt/active_directory_and_ada.htm",l:-1,t:"Active Directory and ADAM: SSL",i:0.000842075510322417,a:"Active Directory and ADAM: SSL Both AD and ADAM require a secure connection (SSL) for any password management activities. IdentityIQ offers two separate read-write connectors for each of these applications. See: SSL Configuration for the Direct Connector"},"424":{y:0,u:"../passwordmgmt/sslconfigdc.htm",l:-1,t:"SSL Configuration for the Direct Connector",i:0.0013333182794179,a:"Installations using the AD or ADAM Direct connector must generate and install an SSL certificate under AD/ADAM and then build a java key store for IdentityIQ that trusts the AD/ADAM SSL certificate.  These are the basic steps for building that java key store and configuring IdentityIQ to use it. \tOn ..."},"425":{y:0,u:"../passwordmgmt/windows_local_and_active.htm",l:-1,t:"Windows Local and Active Directory: IQService Agent",i:0.000842075510322417,a:"AD and ADAM require a secure connection (SSL) for any password management activities. The IQService is a native Windows service that enables IdentityIQ to participate in a Windows environment and access information only available through Win32 APIs. You must install and register an IQService before ..."},"426":{y:0,u:"../passwordmgmt/windows_desktop_password.htm",l:-1,t:"Windows Desktop Password Reset Utility",i:0.000842075510322417,a:"Since a user would normally have to successfully log into their computer before accessing IdentityIQ (or any other application) through a web browser, enabling reset of a Windows Desktop password requires the installation of a utility application called IdentityIQ Lifecycle Manager Desktop Password ..."},"427":{y:0,u:"../plugins/identityiq_plugins.htm",l:-1,t:"Plugins",i:0.00175982122708261,a:"Plugins"},"428":{y:0,u:"../plugins/plugins.htm",l:-1,t:"Working with Plugins",i:0.000617525743904817,a:"The SailPoint Plugin Framework is an extension framework model for IdentityIQ. It enables third parties to develop rich application and service-level enhancements to the core SailPoint platform. It enables plugins to extend the standard user interface, deliver custom REST endpoints, and to deliver ..."},"429":{y:0,u:"../plugins/plugin_framework.htm",l:-1,t:"Plugin Framework",i:0.000617525743904817,a:"The plugin framework manages the installation and loading of plugins. It provides:  Class path isolation on the server side  Implementers are free to use any third-party libraries or technology they choose, as long as it can be served from a REST end point, a background service, or a Java class ..."},"430":{y:0,u:"../plugins/workingwithpluginsiiq.htm",l:-1,t:"Working with Plugins in IdentityIQ",i:0.000617525743904817,a:"The plugin feature must be enabled in IdentityIQ and you must have the proper access, such as System Administrator or Plugin Administrator capabilities, before this page can be displayed. The Installed Plugins page displays and enables you to manage your plugins from within IdentityIQ. Open the page ..."},"431":{y:0,u:"../plugins/configure_plugins_page.htm",l:-1,t:"Configure Plugins Page",i:0.000879983932793982,a:"Each plugin can include a Configuration option, which is accessed through a button on the Plugin card on the gear icon \u003e Plugins page. The Configuration page enables you to view detailed information about the plugin, including its version, installation date, and certification level. This page also ..."},"432":{y:0,u:"../plugins/workingwithpluginsconsole.htm",l:-1,t:"Working with Plugins from the IdentityIQ Console",i:0.000617525743904817,a:"The  IdentityIQ Console  (iiq console) provides several commands for managing plugins, as well as for performing scripted installation of multiple plugins. The iiq console includes these plugin commands: plugin install Install a single plugin or multiple plugins. Either a path to the zip file of the ..."},"433":{y:0,u:"../plugins/developing_plugins.htm",l:-1,t:"Developing Plugins",i:0.000879983932793982,a:"IdentityIQ stores the .zip archive file of the Plugin in the IdentityIQ database in a data LONGBLOB in the spt_file_bucket table. The data in the spt_file_bucket table is referenced ID to an entry in the spt_persisted_file table. Plugins are loaded from this .zip file after installation or after an ..."},"434":{y:0,u:"../plugins/plugin_manifest_file.htm",l:-1,t:"Plugin Manifest File",i:0.000617525743904817,a:"A plugin is defined in IdentityIQ by the Plugin XML object that defines the parameters of the plugin. For example, features such as REST resources, Snippets, Settings. The Plugin object is defined in the manifest.xml file. This is a required artifact. For more complex plugins that require support ..."},"435":{y:0,u:"../plugins/plugin_build_file.htm",l:-1,t:"Plugin Build File",i:0.000617525743904817,a:"Apache Ant is a readily available tool that can be used to package plugins prior to deployment and distribution. To provide build specific values, the standard is to also include a build.properties file with a simple key-value pair for all build specific tokens. The following example illustrates how ..."},"436":{y:0,u:"../plugins/plugin_database_scripts.htm",l:-1,t:"Plugin Database Scripts",i:0.000617525743904817,a:"Plugins that require persistence of data outside of that allowed by the IdentityIQ object model require at minimum the creation, updating, and deletion of unique tablespace. The plugin framework creates a database named identityiqPlugin. The creation of this database is handled by the installation ..."},"437":{y:0,u:"../plugins/pluginuielements.htm",l:-1,t:"Plugin User Interface Elements",i:0.000617525743904817,a:"Most plugins have some additional user interface component that appears in IdentityIQ. Images, CSS files, HTML templates, and JavaScript can all be used to provide the interactions and views required by the plugin. Plugins that use a fullPage element look for a file called page.xhtml in the build. ..."},"438":{y:0,u:"../plugins/plugin_authorization.htm",l:-1,t:"Plugin Authorization",i:0.000617525743904817,a:"To prevent unauthorized access to your new endpoints, each should be guarded with an authorization mechanism. You can constrain which users can see and access the user interface components, and you can secure the REST endpoints you build into your plugin. When you define snippets, including widget ..."},"439":{y:0,u:"../plugins/plugin_xml_artifacts.htm",l:-1,t:"Plugin XML Artifacts",i:0.000617525743904817,a:"Any IdentityIQ objects that are required as part of a plugin need to be represented in XML artifacts. This could be something as small as a single new SPRight object or a complex workflow or rule. The mechanism that is used for importing these artifacts during installation is the same as any ..."},"440":{y:0,u:"../plugins/plugin_java_classes.htm",l:-1,t:"Plugin Java Classes",i:0.000617525743904817,a:"Plugins are a powerful productivity-enabler, that give users the ability to extend both the IdentityIQ user interface and server in a well-defined manner. Plugin Java Classes - REST Classes The plugin framework relies heavily on REST web services integration for the majority of CRUD (create, read, ..."},"441":{y:0,u:"../plugins/angularcomponents.htm",l:-1,t:"SailPoint Angular Components",i:0.00114244212168315,a:"To implement the SailPoint-styled angular components, your project needs to include the SailPointBundleLibrary JavaScript file. There are specific directive dependencies on this library when you use the SailPoint-styled components. Widgets and snippets donot require this library in the plugin ..."},"442":{y:0,u:"../plugins/internationalization.htm",l:-1,t:"Internationalization",i:0.000617525743904817,a:"Message catalog files are specified per language with the two character abbreviation for the corresponding language, or the four-character options when you have locale-specific message catalogs, for example, TrainingPlugin_fr_ca.properties for Canadian French. These files should be recorded in the ..."},"443":{y:0,u:"../plugins/plugininstallationremoval.htm",l:-1,t:"Plugin Installation and Removal",i:0.000879983932793982,a:"To install a plugin, click the gear icon and select Plugins to navigate to the Installed Plugins page. Click New and drag and drop or upload the plugin .zip file. If you downloaded a plugin, the .zip file should be included with the download. If you developed the plugin yourself, the .zip file is in ..."},"444":{y:0,u:"../policy/iiqpolicies.htm",l:-1,t:"Policies",i:0.00122046253886054,a:"Policies"},"445":{y:0,u:"../policy/policy_violation.htm",l:-1,t:"Policy Violations",i:0.000617525743904817,a:"Policies in IdentityIQ check identities for certain conditions that are unwanted, or even considered dangerous - for example, a set of roles that should not be combined in a single identity (such as “payment preparation” and “payment approval”), two conflicting values of a multi-valued attribute, a ..."},"446":{y:0,u:"../policy/overviewpolicyviolationpage.htm",l:-1,t:"Overview of the Policy Violations Page",i:0.000617525743904817,a:"The Policy Violations page lists policy violations that are marked as active and violations owned by you or one of the workgroups to which you belong. When a policy is defined, an owner to a policy violation can be defined. The policy violation owner is a chosen identity, manager of the person who ..."},"447":{y:0,u:"../policy/accesspolicyviolationworkitems.htm",l:-1,t:"Accessing the Policy Violations Page",i:0.000617525743904817,a:"Policy violation can be accessed from the menu bar using MyWork \u003e Policy Violations. Depending on how your system is configured, you can also access the Policy Violations page from the QuickLinks menu \u003e My Tasks \u003e Policy Violations or from a Home page QuickLink card.  Most users will see the same ..."},"448":{y:0,u:"../policy/display_options.htm",l:-1,t:"Display Options",i:0.000617525743904817,a:"Use the Filter button to limit what is displayed on the Policy Violations Page. You can filter violations by user name, (including first name and last name), policy type, status, and policy violation ID, using any combination of filters and values. To apply your filter criteria, click Apply.  When ..."},"449":{y:0,u:"../policy/accesspolicyviolationpage.htm",l:-1,t:"Accessing Policy Violation Work Items",i:0.000617525743904817,a:"Depending on how the policy was configured, you can also view your policy violation items in your work item listing, by clicking My Work \u003e Work Items. In the Work Items page, policy violations are listed along with any other work items you may have. You can filter, search, and sort the items in this ..."},"450":{y:0,u:"../policy/policy_violations_open_t.htm",l:-1,t:"Policy Violations Open Tab",i:0.000617525743904817,a:"Policy Violations Open Tab The Open tab lists policy violations awaiting your attention. The Open tab includes:  "},"451":{y:0,u:"../policy/violationdecisionsactions.htm",l:-1,t:"Violation Decisions and Actions",i:0.000617525743904817,a:"Violation Decisions and Actions You cannot take action on your own violations. Depending on how your system is configured the following decision options can be available:     These are the available options for specific policy types:     After you have made your decisions, click Save.  "},"452":{y:0,u:"../policy/policy_violations_comple.htm",l:-1,t:"Policy Violations Complete Tab",i:0.000617525743904817,a:"The Complete tab lists the items you have made a decision on and saved. The Complete tab contains information about the Identity, Policy Name, Rule, Owner, Description, and Decisions for each policy violation in the list. Based on how your system is configured, the Complete tab can include these ..."},});