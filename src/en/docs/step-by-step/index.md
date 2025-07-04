# Step-by-step Docs

## [Save disk image](./save-disk-image.md)

Save 1st disk (sda) as an image on 2nd disk (sdb) (Step by step)

1. [Boot the machine via Clonezilla live](./save-disk-image.md#boot-the-machine-via-clonezilla-live)
2. [The boot menu of Clonezilla live](./save-disk-image.md#the-boot-menu-of-clonezilla-live)
3. [Here we choose 800x600 mode, after pressing Enter, you will see Debian Linux booting process](./save-disk-image.md#here-we-choose-800x600-mode-after-pressing-enter-you-will-see-debian-linux-booting-process)
4. [Choose language](./save-disk-image.md#choose-language)
5. [Choose keyboard layout](./save-disk-image.md#choose-keyboard-layout)
6. [Choose `Start Clonezilla`](./save-disk-image.md#choose-start-clonezilla)
7. [Choose `device-image` option](./save-disk-image.md#choose-device-image-option)
8. [Choose `local_dev` option to assign sdb1 as the image home](./save-disk-image.md#choose-local-dev-option-to-assign-sdb1-as-the-image-home)
9. [Select sdb1 as image repository, then choose `savedisk` option](./save-disk-image.md#select-sdb1-as-image-repository-then-choose-savedisk-option)
10. [Input image name and select source disk](./save-disk-image.md#input-image-name-and-select-source-disk)
11. [Clonezilla is saving disk image (sda) to the partition of 2nd disk (sdb1)](./save-disk-image.md#clonezilla-is-saving-disk-image-sda-to-the-partition-of-2nd-disk-sdb1)

## [Restore disk image](./restore-disk-image.md)

Restore an image on 2nd disk (sdb) to 1st disk (sda) (Step by step)

1. [Boot the machine via Clonezilla live](./restore-disk-image.md#boot-the-machine-via-clonezilla-live)
2. [The boot menu of Clonezilla live](./restore-disk-image.md#the-boot-menu-of-clonezilla-live)
3. [Here we choose 800x600 mode, after pressing Enter, you will see Debian Linux booting process](./restore-disk-image.md#here-we-choose-800x600-mode-after-pressing-enter-you-will-see-debian-linux-booting-process)
4. [Choose language](./restore-disk-image.md#choose-language)
5. [Choose keyboard layout](./restore-disk-image.md#choose-keyboard-layout)
6. [Choose `Start Clonezilla`](./restore-disk-image.md#choose-start-clonezilla)
7. [Choose `device-image` option](./restore-disk-image.md#choose-device-image-option)
8. [Choose `local_dev` option to assign sdb1 as the image home](./restore-disk-image.md#choose-local-dev-option-to-assign-sdb1-as-the-image-home)
9. [Select sdb1 as image repository, then choose `restoredisk` option](./restore-disk-image.md#select-sdb1-as-image-repository-then-choose-restoredisk-option)
10. [Select image name and destination disk](./restore-disk-image.md#select-image-name-and-destination-disk)
11. [Clonezilla is restoring disk image on 2nd disk (sdb) to 1st disk (sda)](./restore-disk-image.md#clonezilla-is-restoring-disk-image-on-2nd-disk-sdb-to-1st-disk-sda)

## [Disk to disk clone](./disk-to-disk-clone.md)

Clone small disk to larger disk (e.g. 20 GB to 60 GB) (Step by step)

1. [Prepare Clonezilla live](./disk-to-disk-clone.md#prepare-clonezilla-live)
2. [Boot your Clonezilla live via USB](./disk-to-disk-clone.md#boot-your-clonezilla-live-via-usb)
3. [Choose `To RAM` option in the boot menu](./disk-to-disk-clone.md#choose-toram-option-in-the-boot-menu)
4. [Choose language](./disk-to-disk-clone.md#choose-language)
5. [Choose keyboard layout](./disk-to-disk-clone.md#choose-keyboard-layout)
6. [Choose `Start Clonezilla`](./disk-to-disk-clone.md#choose-start-clonezilla)
7. [Choose `disk_to_local_disk`](./disk-to-disk-clone.md#choose-disk-to-local-disk)
8. [Choose source disk](./disk-to-disk-clone.md#choose-source-disk)
9. [Choose target disk](./disk-to-disk-clone.md#choose-target-disk)
10. [Start cloning](./disk-to-disk-clone.md#start-cloning)
11. [Disk is cloned](./disk-to-disk-clone.md#disk-is-cloned)

## [One image to multiple disks](./one-image-to-multiple-disks.md)

Restore an image to multiple disks, e.g. massive production of live USB flash drives.

1. [Boot the machine via Clonezilla live](./one-image-to-multiple-disks.md#boot-the-machine-via-clonezilla-live)
2. [The boot menu of Clonezilla live](./one-image-to-multiple-disks.md#the-boot-menu-of-clonezilla-live)
3. [Here we choose 800x600 mode, after pressing Enter, you will see Debian Linux booting process](./one-image-to-multiple-disks.md#here-we-choose-800x600-mode-after-pressing-enter-you-will-see-debian-linux-booting-process)3
4. [Choose language](./one-image-to-multiple-disks.md#choose-language)
5. [Choose keyboard layout](./one-image-to-multiple-disks.md#choose-keyboard-layout)
6. [Choose `Start Clonezilla`](./one-image-to-multiple-disks.md#choose-start-clonezilla)
7. [Choose `device-image` option](./one-image-to-multiple-disks.md#choose-device-image-option)
8. [Choose `local_dev` option to assign sde1 as the image home](./one-image-to-multiple-disks.md#choose-local-dev-option-to-assign-sde1-as-the-image-home)
9. [Select sde1 as image repository, then choose `1-2-mdisks` option](./one-image-to-multiple-disks.md#select-sde1-as-image-repository-then-choose-1-2-mdisks-option)
10. [Select image name and destination disk](./one-image-to-multiple-disks.md#select-image-name-and-destination-disk)
11. [Clonezilla is restoring disk image on disk sde to sda, sdc, and sdd](./one-image-to-multiple-disks.md#clonezilla-is-restoring-disk-image-on-disk-sde-to-sda-sdc-and-sdd)

## [Create Recovery Clonezilla](./create-recovery-clonezilla.md)

Create an autorun recovery Clonezilla live CD or USB flash drive (Step by step)

1. Boot the machine via Clonezilla live
2. The boot menu of Clonezilla live
3. Here we choose 800x600 mode, after pressing Enter, you will see Debian Linux booting process:
4. Choose language
5. Choose keyboard layout
6. Choose `Start Clonezilla`
7. Choose `device-image` option
8. Choose `local_dev` option to assign sdb1 as the image home
9. Select sdb1 as image repository, then choose `restoredisk` option
10. Choose the image you want to include in the recovery CD or USB flash drive:

## Preseed options to do job after booting

1. The scenario
2. The options to be preseeded

## Started with sshd on and passwd assigned

1. A PXE config example for you to boot Clonezilla live via PXE, and ssh service is on, the password of account `user` is assigned

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
6. Choose `Start Clonezilla`
7. Choose `lite-server` option
8. Now we have to mount the image repository.
9. Select sdb1 as image repository, then choose `restoredisk` option
10. Select image name and destination disk

## lite server BT from dev

1. Boot the machine via Clonezilla live
2. The boot menu of Clonezilla live
3. Here we choose 800x600 mode, after pressing Enter, you will see Debian Linux booting process
4. Choose language
5. Choose keyboard layout
6. Choose `Start Clonezilla`
7. Choose `lite-server` option
8. Mount the image repository.
9. Choose the massive deployment mode using BT from raw device mode.
10. Select source disk.

## ocs related command manpages

1. Man page of ocs-sr
2. Man page of ocs-onthefly

## Misc

1. The boot parameters for Clonezilla live
