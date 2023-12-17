CREATE TABLE `usermanagementsystem`.`user` (
  `ID` INT NOT NULL,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `comments` TINYTEXT NOT NULL,
  `status` VARCHAR(45) NOT NULL DEFAULT 'active',
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) VISIBLE);
