# Step-by-step Docs

## [Save disk image](save-disk-image.md)
1. Boot the machine via Clonezilla live
2. The boot menu of Clonezilla live
3. Here we choose 800x600 mode, after pressing Enter, you will see Debian Linux booting process
4. Choose language
5. Choose keyboard layout
6. Choose "Start Clonezilla"
7. Choose "device-image" option
8. Choose "local_dev" option to assign sdb1 as the image home
9. Select sdb1 as image repository, then choose "savedisk" option
10. Input image name and select source disk
11. Clonezilla is saving disk image (sda) to the partition of 2nd disk (sdb1)

## Restore disk image
1. Boot the machine via Clonezilla live
2. The boot menu of Clonezilla live
3. Here we choose 800x600 mode, after pressing Enter, you will see Debian Linux booting process 
4. Choose language
5. Choose keyboard layout
6. Choose "Start Clonezilla"
7. Choose "device-image" option
8. Choose "local_dev" option to assign sdb1 as the image home
9. Select sdb1 as image repository, then choose "restoredisk" option
10. Select image name and destination disk
11. Clonezilla is restoring disk image on 2nd disk (sdb) to 1st disk (sda)

## Disk to disk clone
1. Prepare Clonezilla live
2. Boot your Clonezilla live via USB
3. Choose "To RAM" option in the boot menu
4. Choose language
5. Choose keyboard layout
6. Choose "Start Clonezilla"
7. Choose "disk_to_local_disk"
8. Choose source disk
9. Choose target disk
10. Start cloning
11. Disk is cloned

## One image to multiple disks
1. Boot the machine via Clonezilla live
2. The boot menu of Clonezilla live
3. The boot menu of Clonezilla live
4. Here we choose 800x600 mode, after pressing Enter, you will see Debian Linux booting process
5. Choose language
6. Choose keyboard layout
7. Choose "Start Clonezilla"
8. Choose "device-image" option
9. Choose "local_dev" option to assign sde1 as the image home
10. Select sde1 as image repository, then choose "1-2-mdisks" option
11. Select image name and destination disk
12. Clonezilla is restoring disk image on disk sde to sda, sdc, and sdd.

## Create Recovery Clonezilla
1. Boot the machine via Clonezilla live
2. The boot menu of Clonezilla live
3. Here we choose 800x600 mode, after pressing Enter, you will see Debian Linux booting process:
4. Choose language
5. Choose keyboard layout
6. Choose "Start Clonezilla"
7. Choose "device-image" option
8. Choose "local_dev" option to assign sdb1 as the image home 
9. Select sdb1 as image repository, then choose "restoredisk" option
10. Choose the image you want to include in the recovery CD or USB flash drive:

## Preseed options to do job after booting
1. The scenario
2. The options to be preseeded

## Started with sshd on and passwd assigned
1. A PXE config example for you to boot Clonezilla live via PXE, and ssh service is on, the password of account "user" is assigned

## Add extra driver
1. How to put your own binary driver in Clonezilla live without modifying /live/filesystem.squashfs

## Customized script with PXE
1. To put your customized script with a PXE version of Clonezilla live

## Screen session with PXE
1. Run Clonezilla in screen session so you can access remotely to monitor the progress.

## Burn Clonezilla live CD
1. Create Clonezilla live CD by InfraRecorder

## LinuxLive USB creator
1. Create Clonezilla live USB flash drive by LinuxLive USB creator

## lite server
1. Boot the machine via Clonezilla live
2. The boot menu of Clonezilla live
3. Here we choose 800x600 mode, after pressing Enter, you will see Debian Linux booting process
4. Choose language
5. Choose keyboard layout
6. Choose "Start Clonezilla"
7. Choose "lite-server" option
8. Now we have to mount the image repository.
9. Select sdb1 as image repository, then choose "restoredisk" option
10. Select image name and destination disk

## lite server BT from dev
1. Boot the machine via Clonezilla live
2. The boot menu of Clonezilla live
3. Here we choose 800x600 mode, after pressing Enter, you will see Debian Linux booting process
4. Choose language
5. Choose keyboard layout
6. Choose "Start Clonezilla"
7. Choose "lite-server" option
8. Mount the image repository.
9. Choose the massive deployment mode using BT from raw device mode.
10. Select source disk.

## ocs related command manpages
1. Man page of ocs-sr
2. Man page of ocs-onthefly

## Misc
1. The boot parameters for Clonezilla live