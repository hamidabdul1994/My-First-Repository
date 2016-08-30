#!/bin/bash
# Backs up a single project directory
# Ryan 30/8/2016
 
if [ $# != 1 ]
then
    echo Usage: A single argument which is the directory to backup
    exit
fi
if [ ! -d ~/Practice/$1 ]
then
    echo 'The given directory does not seem to exist (possible typo?)'
    exit
fi
date=`date +%F`
 
# Do we already have a backup folder for todays date?
if [ -d ~/Practice/$1_$date ]
then
    echo 'This project has already been backed up today, overwrite?'
    read answer
    if [ $answer != 'y' ]
    then
        exit
    fi
else
    mkdir ~/Practice/$1_$date
fi
cp -R ~/Practice/$1 ~/Practice/backup/$1_$date
echo Backup of $1 completed
