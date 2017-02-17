--------------------------------------------------------
--  DDL for Table CUISINE
--------------------------------------------------------

  CREATE TABLE "CUISINE" 
   (	"C_ID" NUMBER(10,0), 
	"CUI_NAME" VARCHAR2(15)
   ) ;
--------------------------------------------------------
--  DDL for Table CUSTOMER_TABLE
--------------------------------------------------------

  CREATE TABLE "CUSTOMER_TABLE" 
   (	"CUS_ID" NUMBER, 
	"CUS_NAME" VARCHAR2(20), 
	"IDENTITY_NO" VARCHAR2(20), 
	"I_ID" NUMBER, 
	"USERNAME" VARCHAR2(20), 
	"PASWORD" VARCHAR2(20), 
	"CUS_VALID" VARCHAR2(20)
   ) ;
--------------------------------------------------------
--  DDL for Table CUS_ORDER
--------------------------------------------------------

  CREATE TABLE "CUS_ORDER" 
   (	"O_ID" NUMBER, 
	"ORDER_TIME" TIMESTAMP (6), 
	"T_ID" NUMBER, 
	"M_ID" NUMBER, 
	"CUS_ID" NUMBER
   ) ;
--------------------------------------------------------
--  DDL for Sequence MENU_SEQ
--------------------------------------------------------

   CREATE SEQUENCE  "MENU_SEQ"  MINVALUE 1 MAXVALUE 999999999999999999999999999 INCREMENT BY 1 START WITH 21 CACHE 20 NOORDER  NOCYCLE ;

--------------------------------------------------------
--  DDL for Table IDENTITY_PROOF
--------------------------------------------------------
  CREATE TABLE "IDENTITY_PROOF" 
   (	"ID" NUMBER, 
	"ID_PROOF" VARCHAR2(20)
   ) ;

--------------------------------------------------------
--  DDL for Table MENU
--------------------------------------------------------

  CREATE TABLE "MENU" 
   (	"M_ID" NUMBER, 
	"M_NAME" VARCHAR2(20), 
	"M_UNITPRICE" NUMBER, 
	"C_ID" NUMBER
   ) ;

--------------------------------------------------------
--  DDL for Table REST_TABLES
--------------------------------------------------------

  CREATE TABLE "REST_TABLES" 
   (	"T_ID" NUMBER(10,0), 
	"T_NO" NUMBER(10,0), 
	"T_STATUS" VARCHAR2(15), 
	"DEV_ID" NUMBER(10,0)
   ) ;

--------------------------------------------------------
--  Constraints for Table CUSTOMER_TABLE
--------------------------------------------------------

  ALTER TABLE "CUSTOMER_TABLE" ADD CONSTRAINT "CUSTOMER_TABLE_PK" PRIMARY KEY ("CUS_ID") ENABLE;
 
  ALTER TABLE "CUSTOMER_TABLE" MODIFY ("CUS_ID" NOT NULL ENABLE);

--------------------------------------------------------
--  Constraints for Table LOGMNR_TYPE$
--------------------------------------------------------


--------------------------------------------------------
--  Constraints for Table STUDENT12
--------------------------------------------------------

  ALTER TABLE "STUDENT12" ADD PRIMARY KEY ("S_ID") ENABLE;
--------------------------------------------------------
--  Constraints for Table REPCAT$_COLUMN_GROUP
--------------------------------------------------------

--------------------------------------------------------
--  Constraints for Table CUISINE
--------------------------------------------------------

  ALTER TABLE "CUISINE" ADD PRIMARY KEY ("C_ID") ENABLE;
--------------------------------------------------------
--  Constraints for Table MVIEW$_ADV_LEVEL
--------------------------------------------------------
--------------------------------------------------------
--  Constraints for Table IDENTITY_PROOF
--------------------------------------------------------

  ALTER TABLE "IDENTITY_PROOF" ADD CONSTRAINT "CUSTOMER_PK" PRIMARY KEY ("ID") ENABLE;
 
  ALTER TABLE "IDENTITY_PROOF" MODIFY ("ID" NOT NULL ENABLE);
 
  ALTER TABLE "IDENTITY_PROOF" MODIFY ("ID_PROOF" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table REPCAT$_EXTENSION
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Index MENU_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "MENU_PK" ON "MENU" ("M_ID") 
  ;


--------------------------------------------------------
--  Ref Constraints for Table MENU
--------------------------------------------------------

  ALTER TABLE "MENU" ADD CONSTRAINT "MENU_CUISINE_FK1" FOREIGN KEY ("C_ID")
	  REFERENCES "CUISINE" ("C_ID") ON DELETE CASCADE ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table MVIEW$_ADV_AJG
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Trigger MENU_TRG
--------------------------------------------------------

  CREATE OR REPLACE TRIGGER "MENU_TRG" BEFORE INSERT ON MENU 
FOR EACH ROW 
BEGIN
  <<COLUMN_SEQUENCES>>
  BEGIN
    IF :NEW.M_ID IS NULL THEN
      SELECT MENU_SEQ.NEXTVAL INTO :NEW.M_ID FROM DUAL;
    END IF;
  END COLUMN_SEQUENCES;
END;
/
ALTER TRIGGER "MENU_TRG" ENABLE;


---------------------------------------------------
--   DATA FOR TABLE CUISINE
--   FILTER = none used
---------------------------------------------------
REM INSERTING into CUISINE
Insert into CUISINE (C_ID,CUI_NAME) values (1,'italian');
Insert into CUISINE (C_ID,CUI_NAME) values (2,'spanish');
Insert into CUISINE (C_ID,CUI_NAME) values (3,'indian');
---------------------------------------------------
--   END DATA FOR TABLE CUISINE
---------------------------------------------------


---------------------------------------------------
--   DATA FOR TABLE CUSTOMER_TABLE
--   FILTER = none used
---------------------------------------------------
REM INSERTING into CUSTOMER_TABLE
Insert into CUSTOMER_TABLE (CUS_ID,CUS_NAME,IDENTITY_NO,I_ID,USERNAME,PASWORD,CUS_VALID) values (1,'Shahid','123456',1,'user1','user_no1','1');
Insert into CUSTOMER_TABLE (CUS_ID,CUS_NAME,IDENTITY_NO,I_ID,USERNAME,PASWORD,CUS_VALID) values (2,'Karan','654321',2,'user2','user_no2','0');
Insert into CUSTOMER_TABLE (CUS_ID,CUS_NAME,IDENTITY_NO,I_ID,USERNAME,PASWORD,CUS_VALID) values (3,'anil','4555858',3,'user3','user_no3','1');
Insert into CUSTOMER_TABLE (CUS_ID,CUS_NAME,IDENTITY_NO,I_ID,USERNAME,PASWORD,CUS_VALID) values (4,'zishan','458789',1,'user4','user_no4',' 1');

---------------------------------------------------
--   END DATA FOR TABLE CUSTOMER_TABLE
---------------------------------------------------


---------------------------------------------------
--   DATA FOR TABLE CUS_ORDER
--   FILTER = none used
---------------------------------------------------
REM INSERTING into CUS_ORDER
Insert into CUS_ORDER (O_ID,ORDER_TIME,T_ID,M_ID,CUS_ID) values (1,to_timestamp('16-03-16 08:02:23.884000000 PM','DD-MM-RR HH12:MI:SS.FF AM'),1,1,1);
Insert into CUS_ORDER (O_ID,ORDER_TIME,T_ID,M_ID,CUS_ID) values (2,to_timestamp('16-03-16 08:14:56.685000000 PM','DD-MM-RR HH12:MI:SS.FF AM'),2,5,2);

---------------------------------------------------
--   END DATA FOR TABLE CUS_ORDER
---------------------------------------------------



---------------------------------------------------
--   DATA FOR TABLE EMPLOYE
--   FILTER = none used
---------------------------------------------------
REM INSERTING into EMPLOYE
Insert into EMPLOYE (E_ID,E_NAME,E_DESI,USERNAME,PASWORD) values (1,'saif','admin','saif','saifio12');
Insert into EMPLOYE (E_ID,E_NAME,E_DESI,USERNAME,PASWORD) values (2,'hamid','manager','hamid','hamid12');
Insert into EMPLOYE (E_ID,E_NAME,E_DESI,USERNAME,PASWORD) values (3,'anil','cook','anil','anil12');
Insert into EMPLOYE (E_ID,E_NAME,E_DESI,USERNAME,PASWORD) values (4,'ataul','waiter','ataul','ataul12');
Insert into EMPLOYE (E_ID,E_NAME,E_DESI,USERNAME,PASWORD) values (5,'jabir','cleaner','jabir','jabir12');

---------------------------------------------------
--   END DATA FOR TABLE EMPLOYE
---------------------------------------------------

---------------------------------------------------
--   DATA FOR TABLE MENU
--   FILTER = none used
---------------------------------------------------
REM INSERTING into MENU
Insert into MENU (M_ID,M_NAME,M_UNITPRICE,C_ID) values (1,'rice plate',50,3);
Insert into MENU (M_ID,M_NAME,M_UNITPRICE,C_ID) values (2,'pizza cock',100,1);
Insert into MENU (M_ID,M_NAME,M_UNITPRICE,C_ID) values (3,'binger roll',70,2);
Insert into MENU (M_ID,M_NAME,M_UNITPRICE,C_ID) values (4,'tiramisu',90,1);
Insert into MENU (M_ID,M_NAME,M_UNITPRICE,C_ID) values (5,'antipasto',150,1);
Insert into MENU (M_ID,M_NAME,M_UNITPRICE,C_ID) values (6,'dahi vada',40,3);
Insert into MENU (M_ID,M_NAME,M_UNITPRICE,C_ID) values (7,'dsal ghotala',80,3);
Insert into MENU (M_ID,M_NAME,M_UNITPRICE,C_ID) values (8,'trotilla',130,2);
Insert into MENU (M_ID,M_NAME,M_UNITPRICE,C_ID) values (9,'salmorejo',200,2);
Insert into MENU (M_ID,M_NAME,M_UNITPRICE,C_ID) values (10,'chicken 65',250,3);

---------------------------------------------------
--   END DATA FOR TABLE MENU
---------------------------------------------------


---------------------------------------------------
--   DATA FOR TABLE REST_TABLES
--   FILTER = none used
---------------------------------------------------
REM INSERTING into REST_TABLES
Insert into REST_TABLES (T_ID,T_NO,T_STATUS,DEV_ID) values (1,1,'1',1);
Insert into REST_TABLES (T_ID,T_NO,T_STATUS,DEV_ID) values (2,2,'0',2);
Insert into REST_TABLES (T_ID,T_NO,T_STATUS,DEV_ID) values (3,3,'1',1);
Insert into REST_TABLES (T_ID,T_NO,T_STATUS,DEV_ID) values (4,4,'0',2);

---------------------------------------------------
--   END DATA FOR TABLE REST_TABLES
---------------------------------------------------


