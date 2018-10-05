{\rtf1\ansi\ansicpg1252\cocoartf1671
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 -- phpMyAdmin SQL Dump\
-- version 4.8.3\
-- https://www.phpmyadmin.net/\
--\
-- Host: localhost:8889\
-- Generation Time: Oct 05, 2018 at 06:33 PM\
-- Server version: 5.7.23\
-- PHP Version: 7.2.8\
\
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";\
SET time_zone = "+00:00";\
\
--\
-- Database: `test`\
--\
\
-- --------------------------------------------------------\
\
--\
-- Table structure for table `tbl_gold`\
--\
\
CREATE TABLE `tbl_gold` (\
  `id` int(10) UNSIGNED NOT NULL,\
  `memberName` varchar(100) NOT NULL,\
  `memberPosition` varchar(100) NOT NULL,\
  `memberBio` varchar(300) NOT NULL\
) ENGINE=InnoDB DEFAULT CHARSET=utf8;\
\
--\
-- Dumping data for table `tbl_gold`\
--\
\
INSERT INTO `tbl_gold` (`id`, `memberName`, `memberPosition`, `memberBio`) VALUES\
(1, 'BRENDAN', 'developer', 'Brendan Rogers is a freelance web programmer based out of London, Ontario. He does semi-professional video work on the side. His work is GOLD. Contact Brendan directly at brendan@notwheat.ca'),\
(2, 'AIDEN', 'designer', 'Aiden Reikenbrauck is a freelance 3D modeller and animator, based in London Ontario. He is also profficient in the web design field. His work is GOLD. Contact Aiden directly at aiden@notwheat.ca');\
\
--\
-- Indexes for dumped tables\
--\
\
--\
-- Indexes for table `tbl_gold`\
--\
ALTER TABLE `tbl_gold`\
  ADD PRIMARY KEY (`id`);\
\
--\
-- AUTO_INCREMENT for dumped tables\
--\
\
--\
-- AUTO_INCREMENT for table `tbl_gold`\
--\
ALTER TABLE `tbl_gold`\
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;\
}