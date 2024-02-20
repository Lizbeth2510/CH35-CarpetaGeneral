CREATE SCHEMA IF NOT EXISTS `umbrella_corp`;
USE `umbrella_corp` ;

CREATE TABLE IF NOT EXISTS `user` (
	`id_client` INT NOT NULL AUTO_INCREMENT,
	`first_name` VARCHAR(35) NOT NULL,
	`last_name` VARCHAR(50) NOT NULL,
	`email` VARCHAR(50) NOT NULL,
	`phone` VARCHAR(20) NOT NULL,
	PRIMARY KEY (`id_client`)
);

INSERT INTO `user`
(`first_name`, `last_name`, `email`, `phone`) 
VALUES 
('Ewell', 'Stinson', 'estinson0@theglobeandmail.com', '127-983-9708'),
('Trip', 'Avery', 'tavery1@cdbaby.com', '124-969-3456'),
('Eugenie', 'Fereday', 'efereday2@apple.com', '212-855-9479'),
('Phillipe', 'Filchakov', 'pfilchakov3@deviantart.com', '763-596-2215'),
('Tiebout', 'Avrahm', 'tavrahm4@sakura.ne.jp', '563-643-7680'),
('Boote', 'Thonger', 'bthonger5@youtube.com', '823-400-5249'),
('Milli', 'Penwright', 'mpenwright6@gizmodo.com', '549-360-1664'),
('Tirrell', 'Yandle', 'tyandle7@wp.com', '280-706-5780'),
('Mignonne', 'Falkingham', 'mfalkingham8@cmu.edu', '979-675-8832'),
('Kandace', 'Scowcraft', 'kscowcraft9@sfgate.com', '754-326-5936'),
('Bone', 'Ruste', 'brustea@sakura.ne.jp', '476-285-6629'),
('Vitia', 'Murfett', 'vmurfettb@csmonitor.com', '242-757-2016'),
('Keriann', 'Ceschi', 'kceschic@ning.com', '353-301-3841'),
('Kimberlee', 'Ghent', 'kghentd@examiner.com', '292-910-3010'),
('Clemens', 'Philipp', 'cphilippe@cornell.edu', '850-550-7095'),
('Tammie', 'Campbell', 'tcampbellf@facebook.com', '477-173-0477'),
('Thor', 'O''Dowgaine', 'todowgaineg@admin.ch', '306-748-8156'),
('Chev', 'Rosone', 'crosoneh@si.edu', '886-727-0580'),
('Lorinda', 'Kelly', 'lkellyi@oracle.com', '561-559-5110'),
('Minnaminnie', 'Grayer', 'mgrayerj@bigcartel.com', '648-419-4373'),
('Fawn', 'Scotsbrook', 'fscotsbrookk@epa.gov', '533-978-8510'),
('Merridie', 'Maywood', 'mmaywoodl@flickr.com', '217-819-1449'),
('Minny', 'Helleker',  'mhellekerm@purevolume.com', '233-946-1057'),
('Bartholomeus', 'Boughton', 'bboughtonn@go.com', '566-716-6297'),
('Doroteya', 'Shakespeare', 'dshakespeareo@npr.org', '787-605-5695'),
('Helen', 'Strotone', 'hstrotonep@youtu.be', '312-622-9705'),
('Torrance', 'Davidou', 'tdavidouq@answers.com', '668-639-5436'),
('Tybi', 'Bollon', 'tbollonr@amazon.co.jp', '803-172-6891'),
('Lorna', 'Franzotto', 'lfranzottos@goodreads.com', '323-267-6519'),
('Shantee', 'Bunton', 'sbuntont@biglobe.ne.jp', '597-156-0315');
