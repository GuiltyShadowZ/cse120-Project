MySQL dump 10.13  Distrib 8.1.0, for macos13 (arm64)
--
-- Host: localhost    Database: backpack
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `backpack`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `backpack` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `backpack`;

--
-- Table structure for table `Apprenticeships`
--

DROP TABLE IF EXISTS `Apprenticeships`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Apprenticeships` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(99) DEFAULT NULL,
  `Deadline` date DEFAULT NULL,
  `Wage` varchar(99) DEFAULT NULL,
  `Field` varchar(99) DEFAULT NULL,
  `Location` varchar(99) DEFAULT NULL,
  `Reqs` varchar(999) DEFAULT NULL,
  `Schedule` varchar(99) DEFAULT NULL,
  `Details` varchar(999) DEFAULT NULL,
  `Ed_Level` varchar(99) DEFAULT NULL,
  `URL` varchar(999) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Apprenticeships`
--

LOCK TABLES `Apprenticeships` WRITE;
/*!40000 ALTER TABLE `Apprenticeships` DISABLE KEYS */;
/*!40000 ALTER TABLE `Apprenticeships` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Bootcamps`
--

DROP TABLE IF EXISTS `Bootcamps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Bootcamps` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(99) DEFAULT NULL,
  `Deadline` date DEFAULT NULL,
  `Field` varchar(99) DEFAULT NULL,
  `Certification` varchar(99) DEFAULT NULL,
  `Duration` varchar(99) DEFAULT NULL,
  `Pricing` varchar(99) DEFAULT NULL,
  `Schedule` varchar(99) DEFAULT NULL,
  `Details` varchar(999) DEFAULT NULL,
  `Location` varchar(99) DEFAULT NULL,
  `URL` varchar(999) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Bootcamps`
--

LOCK TABLES `Bootcamps` WRITE;
/*!40000 ALTER TABLE `Bootcamps` DISABLE KEYS */;
/*!40000 ALTER TABLE `Bootcamps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Internships_Jobs`
--

DROP TABLE IF EXISTS `Internships_Jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Internships_Jobs` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(99) DEFAULT NULL,
  `Deadline` date DEFAULT NULL,
  `Wage` varchar(99) DEFAULT NULL,
  `Benefits` varchar(999) DEFAULT NULL,
  `Job_Field` varchar(99) DEFAULT NULL,
  `Job_Type` varchar(99) DEFAULT NULL,
  `Schedule` varchar(99) DEFAULT NULL,
  `Location` varchar(99) DEFAULT NULL,
  `Details` varchar(999) DEFAULT NULL,
  `Ed_Level` varchar(99) DEFAULT NULL,
  `URL` varchar(999) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Internships_Jobs`
--

LOCK TABLES `Internships_Jobs` WRITE;
/*!40000 ALTER TABLE `Internships_Jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `Internships_Jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Mentorships`
--

DROP TABLE IF EXISTS `Mentorships`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Mentorships` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(99) DEFAULT NULL,
  `Deadline` date DEFAULT NULL,
  `Field` varchar(99) DEFAULT NULL,
  `Reqs` varchar(999) DEFAULT NULL,
  `Schedule` varchar(99) DEFAULT NULL,
  `Location` varchar(99) DEFAULT NULL,
  `Details` varchar(999) DEFAULT NULL,
  `URL` varchar(999) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Mentorships`
--

LOCK TABLES `Mentorships` WRITE;
/*!40000 ALTER TABLE `Mentorships` DISABLE KEYS */;
/*!40000 ALTER TABLE `Mentorships` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Saved_Opportunities`
--

DROP TABLE IF EXISTS `Saved_Opportunities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Saved_Opportunities` (
  `User_ID` int NOT NULL,
  `Opp_ID` int NOT NULL,
  `Opp_Type` varchar(99) DEFAULT NULL,
  `Saved_Date` date DEFAULT NULL,
  PRIMARY KEY (`User_ID`,`Opp_ID`),
  KEY `Opp_ID` (`Opp_ID`),
  CONSTRAINT `saved_opportunities_ibfk_1` FOREIGN KEY (`User_ID`) REFERENCES `Users` (`ID`),
  CONSTRAINT `saved_opportunities_ibfk_2` FOREIGN KEY (`Opp_ID`) REFERENCES `Internships_Jobs` (`ID`),
  CONSTRAINT `saved_opportunities_ibfk_3` FOREIGN KEY (`Opp_ID`) REFERENCES `Scholarships` (`ID`),
  CONSTRAINT `saved_opportunities_ibfk_4` FOREIGN KEY (`Opp_ID`) REFERENCES `Mentorships` (`ID`),
  CONSTRAINT `saved_opportunities_ibfk_5` FOREIGN KEY (`Opp_ID`) REFERENCES `Bootcamps` (`ID`),
  CONSTRAINT `saved_opportunities_ibfk_6` FOREIGN KEY (`Opp_ID`) REFERENCES `Apprenticeships` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Saved_Opportunities`
--

LOCK TABLES `Saved_Opportunities` WRITE;
/*!40000 ALTER TABLE `Saved_Opportunities` DISABLE KEYS */;
/*!40000 ALTER TABLE `Saved_Opportunities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Scholarships`
--

DROP TABLE IF EXISTS `Scholarships`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Scholarships` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(99) DEFAULT NULL,
  `Deadline` date DEFAULT NULL,
  `Field` varchar(99) DEFAULT NULL,
  `Background` varchar(99) DEFAULT NULL,
  `Award` varchar(99) DEFAULT NULL,
  `Reqs` varchar(999) DEFAULT NULL,
  `Schedule` varchar(99) DEFAULT NULL,
  `Amount` varchar(99) DEFAULT NULL,
  `Details` varchar(999) DEFAULT NULL,
  `Ed_Level` varchar(99) DEFAULT NULL,
  `URL` varchar(999) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Scholarships`
--

LOCK TABLES `Scholarships` WRITE;
/*!40000 ALTER TABLE `Scholarships` DISABLE KEYS */;
/*!40000 ALTER TABLE `Scholarships` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(99) DEFAULT NULL,
  `Password` varchar(99) DEFAULT NULL,
  `Ed_Level` varchar(99) DEFAULT NULL,
  `Field` varchar(99) DEFAULT NULL,
  `Bio` varchar(99) DEFAULT NULL,
  `Link_Acct` varchar(99) DEFAULT NULL,
  `Organization` varchar(99) DEFAULT NULL,
  `Location` varchar(99) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

INSERT INTO Users (Name, Password, Ed_Level, Field, Bio, Link_Acct, Organization, Location)
VALUES
  ('John Doe', 'password123', 'Bachelor', 'Computer Science', 'I am a software engineer.', 'https://example.com/johndoe', 'XYZ Company', 'New York'),
  ('Jane Smith', 'pass456', 'Master', 'Data Science', 'Data enthusiast with a passion for analytics.', 'https://example.com/janesmith', 'ABC Corporation', 'San Francisco'),
  ('Alice Johnson', 'pwd789', 'PhD', 'Electrical Engineering', 'Experienced researcher in power systems.', 'https://example.com/alicejohnson', 'DEF Industries', 'Los Angeles');

INSERT INTO Apprenticeships (Name, Deadline, Wage, Field, Location, Reqs, Schedule, Details, Ed_Level, URL)
VALUES
  ('First Year Substation Apprentice', '2024-06-30', '$20/hour', 'Electrical Engineering', 'Remote', 'Bachelor’s degree in Computer Science or related field', 'Full-time', 'Join us as a software developer apprentice and gain hands-on experience in building cutting-edge software solutions.', 'Bachelor', 'https://www.linkedin.com/jobs/search/?currentJobId=3826793255&keywords=apprenticeship&origin=SWITCH_SEARCH_VERTICAL'),
  ('Signal Apprentice', '2024-05-15', '$15/hour', 'Marketing', 'New York', 'High school diploma or equivalent', 'Part-time', 'Work alongside experienced marketing professionals and learn the ropes of digital marketing and advertising.', 'High School', 'https://www.linkedin.com/jobs/search/?currentJobId=3829901341&keywords=apprenticeship&origin=SWITCH_SEARCH_VERTICAL');

INSERT INTO Bootcamps (Name, Deadline, Field, Certification, Duration, Pricing, chedule, Details, Location, URL)
VALUES
  ('Data Science Bootcamp', '2024-07-15', 'Data Science', 'Certificate of Completion', '12 weeks', '$5,000', 'Full-time', 'Intensive bootcamp covering data analysis, machine learning, and data visualization techniques.', 'San Francisco', 'https://example.com/bootcamp1'),
  ('Web Development Bootcamp', '2024-06-30', 'Web Development', 'Certificate', '16 weeks', '$6,500', 'Part-time', 'Become proficient in front-end and back-end web development through our comprehensive bootcamp.', 'New York', 'https://example.com/bootcamp2');

INSERT INTO Internships_Jobs (Name, Deadline, Wage, Benefits, Job_Field, Job_Type, Schedule, Location, Details, Ed_Level, URL)
VALUES
  ('Software Engineer Internship', '2024-05-31', '$25/hour', 'Flexible work hours, mentorship program', 'Software Engineering', 'Internship', 'Full-time', 'Remote', 'Gain real-world experience in developing software applications under the guidance of senior developers.', 'Bachelor', 'https://example.com/internship1'),
  ('Marketing Specialist Job', '2024-06-15', '$30/hour', 'Health insurance, retirement plan', 'Marketing', 'Full-time', 'Full-time', 'Chicago', 'Execute marketing campaigns and strategies to promote our products and services.', 'Bachelor', 'https://example.com/job1');



--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-20 20:00:26