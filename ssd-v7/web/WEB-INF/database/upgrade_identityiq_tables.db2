--
-- This script contains DDL statements to upgrade a database schema to
-- reflect changes to the model.  This file should only be used to
-- upgrade from the last formal release version to the current code base.
--

CONNECT TO iiq;

create table identityiq.spt_bulk_id_join (
   id varchar(32) not null,
    created bigint,
    modified bigint,
    join_id varchar(128),
    join_property varchar(128),
    user_id varchar(128),
    user_id_ci generated always as (upper(user_id)),
    join_property_ci generated always as (upper(join_property)),
    join_id_ci generated always as (upper(join_id)),
    primary key (id)
) IN identityiq_ts;

create index identityiq.spt_bulkidjoin_id_ci on identityiq.spt_bulk_id_join (join_id_ci);

create index identityiq.spt_bulkidjoin_prop_ci on identityiq.spt_bulk_id_join (join_property_ci);

create index identityiq.spt_bulkidjoin_user_ci on identityiq.spt_bulk_id_join (user_id_ci);

-- Add TaskResult.live column
alter table identityiq.spt_task_result add live smallint default 0;
update identityiq.spt_task_result set live = 0;

alter table identityiq.spt_role_change_event add status varchar(255);
alter table identityiq.spt_role_change_event add failed_identity_ids clob(100000000);
alter table identityiq.spt_role_change_event add skipped_identity_ids clob(100000000);
alter table identityiq.spt_role_change_event add affected_identity_count integer default 0 NOT NULL;
alter table identityiq.spt_role_change_event add run_count integer default 0 NOT NULL;
alter table identityiq.spt_role_change_event add failed_attempts integer default 0 NOT NULL;

-- 
-- Add cloudAccessType to application schema
-- 
alter table identityiq.spt_application_schema add cloud_access_mgmt_type varchar(255);

--
-- Add new cloud access-related tables
--
create table identityiq.spt_cloud_access3way (
 id varchar(32) not null,
 created bigint,
 modified bigint,
 cloud_access_group varchar(32),
 cloud_access_role varchar(32),
 cloud_access_scope varchar(32),
 primary key (id)
) IN identityiq_ts;

create table identityiq.spt_cloud_access_group (
 id varchar(32) not null,
 created bigint,
 modified bigint,
 name varchar(450) not null,
 uri varchar(450),
 display_name varchar(450),
 cloud_type varchar(80),
 event_time_stamp bigint,
 application_id varchar(32),
 object_type varchar(255),
 name_ci generated always as (upper(name)),
 primary key (id)
) in identityiq_ts;

create table identityiq.spt_cloud_access_role (
 id varchar(32) not null,
 created bigint,
 modified bigint,
 name varchar(450) not null,
 uri varchar(450),
 display_name varchar(450),
 cloud_type varchar(80),
 event_time_stamp bigint,
 name_ci generated always as (upper(name)),
 primary key (id)
) in identityiq_ts;

create table identityiq.spt_cloud_access_scope (
 id varchar(32) not null,
 created bigint,
 modified bigint,
 name varchar(450) not null,
 uri varchar(450),
 display_name varchar(450),
 cloud_type varchar(80),
 name_ci generated always as (upper(name)),
 primary key (id)
) in identityiq_ts;

alter table identityiq.spt_cloud_access_group
 add constraint uk_dfcupn1yjhukxrl4hs7rf4046 unique (name);

alter table identityiq.spt_cloud_access_role
 add constraint uk_ntejuomvc5awi8b6apshil7q3 unique (name);

alter table identityiq.spt_cloud_access_scope
 add constraint uk_rj2onrkbufpyxss96wu2i8nt8 unique (name);

create index identityiq.spt_cloud_access_group_name on identityiq.spt_cloud_access_group (name_ci);

create index identityiq.spt_cloud_access_role_name on identityiq.spt_cloud_access_role (name_ci);

create index identityiq.spt_cloud_access_scope_name on identityiq.spt_cloud_access_scope (name_ci);

alter table identityiq.spt_cloud_access3way
       add constraint FK25ss4xxt4e2nvwcd8ne1iw3b4
       foreign key (cloud_access_group)
       references identityiq.spt_cloud_access_group;

create index identityiq.FK25ss4xxt4e2nvwcd8ne1iw3b4 on identityiq.spt_cloud_access3way (cloud_access_group);

alter table identityiq.spt_cloud_access3way
       add constraint FK6o7a9k31y9pc0xy7bd24uoqu5
       foreign key (cloud_access_role)
       references identityiq.spt_cloud_access_role;

create index identityiq.FK6o7a9k31y9pc0xy7bd24uoqu5 on identityiq.spt_cloud_access3way (cloud_access_role);

alter table identityiq.spt_cloud_access3way
       add constraint FKe65krw4kpvcduwmsp1mggynbg
       foreign key (cloud_access_scope)
       references identityiq.spt_cloud_access_scope;

create index identityiq.FKe65krw4kpvcduwmsp1mggynbg on identityiq.spt_cloud_access3way (cloud_access_scope);

-- add spt_service_lock
create table identityiq.spt_service_lock (
       id varchar(32) not null,
        created bigint,
        modified bigint,
        host varchar(255),
        locker varchar(255),
        last_start bigint,
        last_execute bigint,
        service_definition varchar(32),
        primary key (id)
) IN identityiq_ts;

create unique index UK_su52ugaros4i67n6s56beyyby on identityiq.spt_service_lock (service_definition);
alter table identityiq.spt_service_lock
       add constraint FKiq6v3rrxwrku71j0ghepn66p5
       foreign key (service_definition)
       references identityiq.spt_service_definition;
create index identityiq.FKiq6v3rrxwrku71j0ghepn66p5 on identityiq.spt_service_lock (service_definition);

-- Add iiqDisabled and iiqLocked fields to Link table
alter table identityiq.spt_link add iiq_disabled smallint;
alter table identityiq.spt_link add iiq_locked smallint;
create index identityiq.spt_link_iiq_disabled on identityiq.spt_link (iiq_disabled);
create index identityiq.spt_link_iiq_locked on identityiq.spt_link (iiq_locked);

-- Increase the field size for spt_sign_off_history.account to match spt_link.native_identity
ALTER TABLE identityiq.spt_sign_off_history ALTER COLUMN account SET DATA TYPE varchar(322);

-- add SAMLToken table
create table identityiq.spt_samltoken (
    id varchar(128) not null,
    expiration bigint,
    primary key (id)
) IN identityiq_ts;

-- add Pending Request Attachment table and indexes
create table identityiq.spt_pending_req_attach (
   id varchar(32) not null,
    created bigint,
    modified bigint,
    item_id varchar(128) not null,
    attachment_id varchar(128),
    type varchar(128) not null,
    requester_id varchar(128) not null,
    target_id varchar(128),
    primary key (id)
) IN identityiq_ts;

create index identityiq.spt_pend_attach_item on identityiq.spt_pending_req_attach (item_id);
create index identityiq.spt_pend_attach_req on identityiq.spt_pending_req_attach (requester_id);

-- add post commit notification object table
create table identityiq.spt_post_commit_notification_object (
   id varchar(256) not null,
    class_name varchar(1024) not null,
    modified_id varchar(1024) not null,
    type varchar(255) not null,
    modified bigint,
    primary key (id)
) IN identityiq_ts;

--
-- This is necessary to maintain the schema version. DO NOT REMOVE.
--
update identityiq.spt_database_version set schema_version = '8.2-12' where name = 'main';
