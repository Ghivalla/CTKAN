BEGIN TRANSACTION;

INSERT into users (email,joined) values ('test@test.test','2020-04-13');
INSERT into login (hash,email) values ('$2b$10$ItUEuOzuSWcTssiXijGl0O4UW0Nmb4zY8eaykf5x3/vSRP6FHoVPe','test@test.test');

COMMIT;