/*
SQLyog  v12.2.6 (64 bit)
MySQL - 5.5.49 : Database - daka
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`daka` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `daka`;

/*Table structure for table `time` */

DROP TABLE IF EXISTS `time`;

CREATE TABLE `time` (
  `data` varchar(10) DEFAULT NULL,
  `length` int(10) DEFAULT NULL,
  `id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `time` */

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `user` varchar(50) DEFAULT NULL,
  `pwd` varchar(50) DEFAULT NULL,
  `id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`user`,`pwd`,`id`) values 
('352563349','0',0),
('528386631','0',1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
