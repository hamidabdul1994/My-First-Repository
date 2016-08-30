#!/bin/bash
# Backs up a single project directory
# Ryan 30/8/2016
 
date=`date +%F`
mkdir /$1_$date
cp -R /$1 /$1_$date
echo Backup of $1 completed
