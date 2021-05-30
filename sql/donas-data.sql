-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: localhost    Database: donas
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Donas Glaseadas','Donas Glaseadas'),(2,'Donas Rellenas','Donas Rellenas'),(3,'Donas Gourmet','Donas Gourmet'),(4,'Donas Saludables','Donas Saludables'),(5,'Donas Aptos Celíacos','Donas Aptos Celíacos'),(6,'Buñuelos','Buñuelos');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (2,'Dona Fuxia',100,'0% Off',0,'product-1621548090616.jpg','Dona Fuxia','ico-donut.jpg',2),(3,'Dona Blanca',100,'0% Off',0,'dona-blanca.jpg','Dona Blanca','ico-donut.jpg',3),(4,'Dona Chocolate',100,'0% Off',0,'dona-choco.jpg','Dona Chocolate','ico-donut.jpg',4),(5,'Dona Verde',150,'30% Off',1,'dona-verde.jpg','Dona Verde','fab fa-hotjar',5),(6,'Dona Krispi',160,'10% Off',0,'product-1615245092021.jpg','Dona Dona Krispi','ico-donut.jpg',6),(7,'Dona Coco',80,'50% Off',1,'dona-glaseada-blanca.jpg','Dona Glaseada Coco','fab fa-hotjar',1),(8,'dona9',100,'0',0,'product-1613950706961.jpg','dona9','ico-donut.jpg',2),(9,'Dona Turquesa',100,'40% Off',1,'dona-turquesa.jpg','Dona Turquesa','fab fa-hotjar',3),(10,'Dona Fuxia',100,'0% Off',0,'product-1621283435193.jpg','dona es una masa para comer','ico-donut.jpg',4),(11,'Dona Blanca',100,'0% Off',0,'product-1621458356071.jpg','Dona Blanca','ico-donut.jpg',3),(12,'Dona Chocolate',100,'0% Off',0,'dona-choco.jpg','Dona Chocolate','ico-donut.jpg',6),(13,'Dona Verde',150,'30% Off',1,'dona-verde.jpg','Dona Verde','fab fa-hotjar',1),(14,'Dona Krispi',160,'10% Off',0,'product-1615245092021.jpg','Dona Dona Krispi','ico-donut.jpg',2),(15,'Dona Coco',80,'50% Off',1,'dona-glaseada-blanca.jpg','Dona Glaseada Coco','fab fa-hotjar',3),(16,'Dona Choco Krispi',110,'0% Off',0,'dona-choco-krispi.jpg','Dona Choco Krispi','ico-donut.jpg',4),(23,'Dona Madonna',100,NULL,1,'product-1621208413750.jpg','Dona Madonna','fab fa-hotjar',5),(24,'Dona Barrilete Cosmico',100,'10% Off',1,'product-1621208729681.jpg','La dona que comia el diego','fab fa-hotjar',6),(25,'Dona Cerati',100,'10% Off',1,'product-1621208797312.jpg','Dona con fuerza Natural','fab fa-hotjar',1),(26,'Dona Cerati',100,'10% Off',1,'product-1621208811031.jpg','Dona con fuerza Natural','fab fa-hotjar',2),(28,'Dona Capresse',100,'10% Off',1,'product-1621284409869.jpg','Dona C apresse con tomate y Albahaca','fab fa-hotjar',3),(29,'Dona Mamma Mia',100,'',0,'product-1621284473241.jpg','Mamma Mia, la que prepara tu vieja','ico-donut.jpg',4),(30,'Dona DDL',100,'20 % Off',1,'product-1621433089072.jpg','Dona de Dulce de Leche','fab fa-hotjar',3),(32,'Donas Ricas',100,'20% Off',1,'product-1621648355521.jpg','Son Donas muy ricas y a comerlas','fab fa-hotjar',1),(33,'Donas Polentas',100,'10% Off',1,'product-1621648763345.jpg','Dona de Polenta para piolas','fab fa-hotjar',2),(34,'Donas Lindas',100,'10% Off',1,'product-1621648855857.jpg','Donas Ricas Ricas Lindas','fab fa-hotjar',2),(35,'Donas Lindas2',100,'10% Off',1,'product-1621649058958.jpg','Donas Ricas Ricas Lindas','fab fa-hotjar',2);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products_users`
--

LOCK TABLES `products_users` WRITE;
/*!40000 ALTER TABLE `products_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Adela','Cawthera','acawthera0','2020-03-19','acawthera0@japanpost.jp','KkwXoX0zR5B','dona.png',0),(2,'Federico','Domney','fdomney1','2020-03-28','fdomney1@photobucket.com','Swh3WLGd2n','dona.png',0),(3,'Claudette','Kippling','ckippling2','2019-08-19','ckippling2@wikimedia.org','8aCnLYu','dona.png',0),(4,'Brok','Esler','besler3','2019-06-30','besler3@edublogs.org','FDNxsm16c0g6','dona.png',0),(5,'Kermie','MacAloren','kmacaloren4','2020-02-01','kmacaloren4@google.co.uk','TFYB27o2NA','dona.png',0),(6,'ale','lorenz','alorenz','1974-10-10','e23','1234567890','user-1615416542808.jpg',0),(7,'Pikachu','Pika','pikachu','2003-12-01','sdw','1234567890','user-1615417814724.png',0),(8,'Diego','Silva','disilva','1974-09-27','ddd','$2a$10$eC8vOrmgmMKPMYDOB3Sc4uI0mPTJagG19cjJGDIW1LSZntRsPHI0y','user-1615419021151.jpeg',0),(9,'Diego','Silva','disilva','1974-10-10','diego@diego.com','$2a$10$474Rvx7pVhBh2tE5ipipgOy859.rC/YkTK5Vw96..hpnHu17I/3QW','user-1615420403906.png',0),(10,'Diego','Silva','diegote','1974-10-10','diegote@gmail.com','$2a$10$j1iMIweUvj/yUXjzq1ian.z.1zEvTBJPmd8ZLFBAEu2DsQN3pVX8S','user-1620264005916.jpg',0),(11,'Adela','Cawthera','acawthera0','2020-08-03','acawthera0@japanpost.jp','KkwXoX0zR5B','dona.png',0),(12,'Federico','Domney','fdomney1','2020-03-28','fdomney1@photobucket.com','Swh3WLGd2n','dona.png',0),(13,'Claudette','Kippling','ckippling2','2019-08-18','ckippling2@wikimedia.org','8aCnLYu','dona.png',0),(14,'Brok','Esler','besler3','2019-06-30','besler3@edublogs.org','FDNxsm16c0g6','dona.png',0),(15,'Kermie','MacAloren','kmacaloren4','2020-02-01','kmacaloren4@google.co.uk','TFYB27o2NA','dona.png',0),(16,'ale','lorenz','alorenz','1973-10-10','e23','1234567890','user-1615416542808.jpg',0),(17,'Pikachu','Pika','pikachu','2003-12-01','sdw','1234567890','user-1615417814724.png',0),(18,'Diego','Silva','disilva','1975-12-29','ddd','$2a$10$eC8vOrmgmMKPMYDOB3Sc4uI0mPTJagG19cjJGDIW1LSZntRsPHI0y','user-1615419021151.jpeg',0),(19,'Diego','Silva','disilva','1974-10-10','diego@diego.com','$2a$10$474Rvx7pVhBh2tE5ipipgOy859.rC/YkTK5Vw96..hpnHu17I/3QW','user-1615420403906.png',0),(21,'ale','lorenz','alorenz','1975-12-29','alorenz@gmail.com','$2a$10$dObBQVtR2Yse43h2tI31vOQq7UL8i7EXeQxHF7SA0/pBoofnHLCqe','user-1620265073328.jpg',0),(22,'ale2','lorenz','alorenz','1975-12-29','alorenz@gmail.com','$2a$10$yQDevo6GKgMXfgy7.fI3g.2f1rQn9jtSQnQTZuYZO6xw0..LD8Q.e','user-1620265199740.jpg',0),(23,'Samantha','High','sami','2001-02-07','','$2a$10$kgdq/2Kglmhtnw3e6GsrnOhcUjq06LUOWUfV2rqVZ1BpDgH3Dmwl.','user-1620778983426.jpg',0),(24,'Samantha','High','sami','2001-02-07','sami@gmail.com','87654321','user-1620780524227.jpg',0),(25,'Samantha','High','sami','2001-02-07','sami2@gmail.com','$2a$10$Lz5NJiIXDO7MfvWenxyps.j75Ahawxn.D15/auI98.PpXl3n.clMG','user-1620784604825.jpg',0),(26,'Samantha','High','sami','2001-02-07','sami3@gmail.com','$2a$10$ulZ5.qireQ6UriREStNNQO1oGuKq5z4g8LXu9vk3Gjtr7uBvsHAiK','user-1620784651018.jpg',0),(27,'Luis','Ponzio','lponzio','1965-11-23','lponzio@gmail.com','$2a$10$FVdqSBkp/Mm9ovxl7/KjnOvV2mVRtW.weHcnbDa1YM99doFL.XQzu','user-1620868344106.png',0),(28,'Maximo','Silva Wall','maxi','2003-03-21','maxi@gmail.com','$2a$10$cJCz98D9SyfAzRJ5WBlVfOMYCtU.sr8D.JPhzNNuR4A4TYx3d1Ruq','user-1621178221612.jpg',0),(29,'Luca','Luca Silva Wall','lucasilvawall','2003-03-21','luca@gmail.com','$2a$10$XyffB5eWDM.EJiteF7fqKOZNlTqMVhb94dhQbP0FQtvA3NEhlrCgu','user-1621370539296.jpg',0),(31,'Marcelo','Gallardo','mgallardo','1987-05-23','mgallardo@gmail.com','$2a$10$SvVD/kQW.NJz51nt9LF6v.dnIFZIqxP6QqPIruKtP1k9yUcjM0g5O','user-1621457131591.jpeg',0),(32,'Gustavo','Cerati','gcerati','1959-08-11','gcerati@gmail.com','$2a$10$vCC2xqAUobAx1lDnaPltKOMG9N4LtqFGIRNiwm9AzO487m5jFtv4u','user-1621461780088.jpeg',1),(33,'alejandra','lo','aloren','2020-10-29','alorenzo@gmail.com','$2a$10$ZXJtI30gWw6K5lM0qa5iiOI0zRGiVBEeIDzm2/AixRmiPxtAOUH46','user-1621465344911.jpg',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-24 20:37:15
