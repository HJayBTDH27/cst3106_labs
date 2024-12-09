# Database Layout Concept

Within this concept entities will be displayed with h3 formatting and their attributes will be displayed normally.

* * *
| Patients    |
| --- |
| patientId INT  **Primary Key** |
| firstName VARCHAR|
| lastName VARCHAR|
| pronouns   VARCHAR |
| date of birth   DATE |
| biologicalSex   CHAR |
| publicHealthNum   INT |
| privateHealthNum   INT |

| MedicalHistories    |
| --- |
| historyId INT **PK**   |
| patientId  INT  **FK** |
| currentMedicalConditions BLOB|
| pastMedicalConditions BLOB|
| allergies BLOB|

| VisitRecords |
| --- |
| visitId  INT **PK**  |
| patientId   INT **FK** |
| checkInTime   TIME |
| triaged   BOOLEAN |
| admitted   BOOLEAN |
| conditionCode   INT |
| conditionSeverity  INT  |
| conditionType   INT |