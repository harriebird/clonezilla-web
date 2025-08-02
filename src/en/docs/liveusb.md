# Clonezilla Live on USB flash drive or USB hard drive

Nowadays the PC or laptop mostly comes without CD/DVD drive. In this case, an USB flash drive or USB hard drive is the best way to boot Clonezilla live. You can follow the following to make a bootable Clonezilla live USB flash drive or hard drive using either:

- [MS Windows](#usb-setup-with-ms-windows)
- GNU/Linux
- MacOS

## Requirements:

- Microsoft Windows 7/8/10, GNU/Linux or MacOS.
- Internet access for downloading a distribution to install, or a pre-downloaded ISO file.
- A USB flash drive or USB hard drive has the MBR (msdos) partition table and a free partition. If you want to create a bootable USB flash drive/hard drive only for uEFI boot mode, it can be either GPT (recommended) or MBR (msdos) format.

## USB setup with MS Windows

Depends on the boot mode for the machine you want to boot with the USB flash drive, choose one of the following methods to setup Clonezilla Live on your USB flash drive using MS Windows:

- [uEFI boot mode (GPT)](#uefi-boot-mode-gpt)
- [Legacy boot mode (MBR)](#legacy-boot-mode-mbr)

### [uEFI](https://en.wikipedia.org/wiki/UEFI) boot mode ([GPT](https://en.wikipedia.org/wiki/GUID_Partition_Table))

**ISSUE: Clonezilla download page**

1. [Download](#to-clonezilla-download-link) the amd64 (x86-64) version of Clonezilla Live `zip` file.
2. If you already have a partition of at least 500 MB in size on your USB flash drive formatted with a FAT (not NTFS) file system then skip to the next step (3).
3. Otherwise create at least a 500 MB partition on your USB flash drive and format it with a FAT16/FAT32 (not NTFS) file system.
4. Use unzip tool, e.g., [7-zip](https://www.7-zip.org/), to extract all the contents of the zip file to the FAT16/FAT32 partition on your USB flash drive. Make sure you have extracted all the directories and files, including the ".disk" dir and the files under it. Keep the directory architecture, for example, file "GPL" should be in the USB flash drive's top directory (e.g. G:\GPL).
5. That's all. You can boot this USB flash drive on a uEFI boot mode machine.

### Legacy boot mode ([MBR](https://en.wikipedia.org/wiki/Master_boot_record))

Choose one of the following methods to setup Clonezilla Live for legacy boot mode on your USB flash drive using MS Windows:

- [MS Windows Method A: Manual](#ms-windows-method-a-manual)
- [MS Windows Method B: Rufus USB Creator](#ms-windows-method-b-rufus-usb-creator)
- [MS Windows Method C: Etcher](#ms-windows-method-b-rufus-usb-creator)
- [MS Windows Method D: LinuxLive USB Creator](#ms-windows-method-b-rufus-usb-creator)
- [MS Windows Method E: Unetbootin](#ms-windows-method-e-unetbootin)

> [!INFO] Note<!-- eslint-disable-line markdown/no-missing-label-refs -- GitHub alerts -->
> If you use FAT file system in one of the above methods, the installed USB flash drive should be able to boot both on uEFI and legacy boot modes.

#### MS Windows Method A: Manual

> [!DANGER] Warning<!-- eslint-disable-line markdown/no-missing-label-refs -- GitHub alerts -->
> DO NOT RUN makeboot.bat from your local hard drive!
> Doing so could cause your MS windows not to boot!!!

1. [Download](#to-clonezilla-download-link) the Clonezilla Live `zip` file.
2. If you already have a partition of at least 500 MB in size on your USB flash drive formatted with a FAT or NTFS file system then skip to the next step (3).

   Otherwise create at least a 500 MB partition on your USB flash drive and format it with a FAT16/FAT32 or NTFS file system.

3. Extract all the contents of the zip file to the FAT16/FAT32 or NTFS partition on your USB flash drive. Keep the directory architecture, for example, file "GPL" should be in the USB flash drive's top directory (e.g. G:\GPL).
4. Browse to your USB flash drive and **as an administrator**, (On the USB flash key, create a shortcut to the makeboot.bat file. Then right-clic on the shortcut, Properties, Advanced and check "Run as administrator".), click the makeboot.bat in the dir utils\win32\ (for 32-bit Windows) or makeboot64.bat in the dir utils\win64\ (for 64-bit Windows).

   > [!DANGER] Warning<!-- eslint-disable-line markdown/no-missing-label-refs -- GitHub alerts -->
   > WARNING! Makeboot.bat must be run from your USB flash drive.

   If you are an experienced user, open a command prompt as Administrator, navigate to the root of the USB flash key and enter \utils\win32\makeboot or \utils\win64\makeboot, depending on the flavor of Windows you are running.

5. Follow the on-screen instructions.
   (PS: The above description is modified from: http://www.pendrivelinux.com/2007/01/02/all-in-one-usb-dsl. Thanks to PDLA from http://pendrivelinux.com)

#### MS Windows Method B: Rufus USB Creator

1. If you already have Rufus installed on your computer then skip to the next step (2).

   Otherwise download and install [Rufus](https://rufus.ie/en/) on your MS Windows computer.

2. [Download](#to-clonezilla-download-link) the Clonezilla Live `iso` file.
3. From MS Windows, run the Rufus program and follow the instructions in the GUI to install Clonezilla Live on your USB flash drive.

#### MS Windows Method C: Etcher

1. If you already have Etcher installed on your computer then skip to the next step (2).
   Otherwise download and install Etcher on your MS Windows computer.
2. [Download](#to-clonezilla-download-link) the Clonezilla Live `iso` file.
3. From MS Windows, run the Etcher program and follow the instructions in the GUI to install Clonezilla Live on your USB flash drive.

#### MS Windows Method D: LinuxLive USB Creator

1. If you already have LinuxLive USB Creator installed on your computer then skip to the next step (2).
   Otherwise download and install LinuxLive USB Creator on your MS Windows computer.
2. [Download](#to-clonezilla-download-link) the Clonezilla Live `iso` file.
3. From Windows, install then run the LinuxLive USB Creator program and follow the instructions in the GUI to install Clonezilla Live on your USB flash drive.

#### MS Windows Method E: Unetbootin

1. If you already have Unetbootin installed on your computer then skip to the next step (2).
   Otherwise download and install Unetbootin on your MS Windows computer.
2. Download the Clonezilla Live iso file.
3. From MS Windows, run the Unetbootin program and follow the instructions in the GUI to install Clonezilla Live on your USB flash drive.

   > [!INFO] Note<!-- eslint-disable-line markdown/no-missing-label-refs -- GitHub alerts -->
   > The boot menu created by Unetbootin is not exactly the same as the boot menu created in method A. Therefore it is recommended to use method A.

## USB setup with GNU/Linux

Depends on the boot mode for the machine you want to boot with the USB flash drive, choose one of the following methods to setup Clonezilla Live on your USB flash drive using GNU/Linux:

- [uEFI boot mode (GPT)](#uefi-boot-mode-gpt-1)
- [Legacy boot mode (MBR)](#legacy-boot-mode-mbr-1)

### [uEFI](https://en.wikipedia.org/wiki/UEFI) boot mode ([GPT](https://en.wikipedia.org/wiki/GUID_Partition_Table))

**ISSUE: Clonezilla download page**

1. [Download](#to-clonezilla-download-link) the amd64 (x86-64) version of Clonezilla Live `zip` file.
2. If you already have a partition of at least 500 MB in size on your USB flash drive formatted with a FAT (not NTFS) file system then skip to the next step (3).

   Otherwise create at least a 500 MB partition on your USB flash drive and format it with a FAT16/FAT32 (not NTFS) file system.

3. Mount the FAT16/FAT32 file system of your USB flash drive, e.g., assuming the FAT16/FAT32 file system of your USB flash drive is /dev/sdg1,

   `# pmount /dev/sdg1 /media/disk/`

   If you have no pmount, you can run "sudo apt install pmount" to install it. Then unzip the clonezilla live amd64 zip file to the FAT16/FAT32 partition on your USB flash drive, e.g.,

   `# unzip clonezilla-live-2.7.3-21-amd64.zip -d /media/disk/`

   Then unmount the USB flash drive, e.g.,

   `# pumount /media/disk/`

4. That's all. You can boot this USB flash drive on a uEFI boot mode machine.

### Legacy boot mode ([MBR](https://en.wikipedia.org/wiki/Master_boot_record))

Choose one of the following methods to setup Clonezilla Live on your USB flash drive using GNU/Linux:

- [GNU/Linux Method A: Manual](#gnu-linux-method-a-manual)
- [GNU/Linux Method B: Etcher](#gnu-linux-method-b-etcher)
- [GNU/Linux Method C: Unetbootin](#gnu-linux-method-c-unetbootin)

> [!INFO] Note<!-- eslint-disable-line markdown/no-missing-label-refs -- GitHub alerts -->
> If you use FAT file system in one of the above methods, the installed USB flash drive should be able to boot both on uEFI and legacy boot modes.

#### GNU/Linux Method A: Manual

> [!DANGER] Warning<!-- eslint-disable-line markdown/no-missing-label-refs -- GitHub alerts -->
> Confirm you have the correct path name before executing commands!
> Failure to do so could cause loss of data or your GNU/Linux not to boot!!!
>
> `/dev/sdd` is a device path name
>
> `/dev/sdd1` is a partition path name

1. [Download](#to-clonezilla-download-link) the Clonezilla Live `zip` file.
2. If you already have a FAT or NTFS partition on your USB flash drive then skip to the next step (3).

   Otherwise prepare at least a 500 MB partition formatted with either a FAT16/FAT32 or NTFS file system.
   If the USB flash drive or USB hard drive does not have any partition, you can use a partitioning tool (e.g. gparted, parted, fdisk, cfdisk or sfdisk) to create a partition with a size of 500 MB or more.
   Here we assume your USB flash drive or USB hard drive is /dev/sdd (**You have to comfirm your device name, since it's _NOT_ always /dev/sdd**) on your GNU/Linux, so the partition table is like:

   ```text
   # fdisk -l /dev/sdd
   Disk /dev/sdd: 12.8 GB, 12884901888 bytes
   15 heads, 63 sectors/track, 26630 cylinders
   Units = cylinders of 945 * 512 = 483840 bytes
   Disk identifier: 0x000c2aa7

    Device Boot      Start         End      Blocks   Id  System
    /dev/sdd1   *           1       26630    12582643+   b  W95 FAT32
   ```

   Then format the partition as FAT with a command such as `mkfs.vfat -F 32 /dev/sdd1`

   > [!DANGER] Warning<!-- eslint-disable-line markdown/no-missing-label-refs -- GitHub alerts -->
   > Executing the mkfs.vfat command on the wrong partition or device could cause your GNU/Linux not to boot. Be sure to confirm the command before you run it.

   ```text
   # mkfs.vfat -F 32 /dev/sdd1
   mkfs.vfat 2.11 (12 Mar 2005)
   ```

3. Insert your USB flash drive or USB hard drive into the USB port on your Linux machine and wait a few seconds. Next, run the command `dmesg` to query the device name of the USB flash drive or USB hard drive. Let's say, for example, that you find it is /dev/sdd1. In this example, we assume /dev/sdd1 has FAT filesystem, and it is automatically mounted in dir /media/usb/. If it's not automatically mounted, manually mount it with commands such as `mkdir -p /media/usb; mount /dev/sdd1 /media/usb/`.
4. Unzip all the files and copy them into your USB flash drive or USB hard drive. You can do this with a command such as: `unzip clonezilla-live-2.4.2-32-i686-pae.zip -d /media/usb/`. Keep the directory architecture, for example, file `GPL` should be in the USB flash drive or USB hard drive's top directory (e.g. /media/usb/GPL).
5. To make your USB flash drive bootable, first change the working dir, e.g. `cd /media/usb/utils/linux`, then run `bash makeboot.sh /dev/sdd1` (**replace /dev/sdd1 with your USB flash drive device name**), and follow the prompts.

   > [!DANGER] Warning<!-- eslint-disable-line markdown/no-missing-label-refs -- GitHub alerts -->
   > Executing makeboot.sh with the wrong device name could cause your GNU/Linux not to boot. Be sure to confirm the command before you run it.

   > [!INFO] Note<!-- eslint-disable-line markdown/no-missing-label-refs -- GitHub alerts -->
   > There is a known problem if you run makeboot.sh on Debian Etch (4.0), since the program utils/linux/syslinux does not work properly. Make sure you run it on newer GNU/Linux than that.

   > [!INFO] Tip<!-- eslint-disable-line markdown/no-missing-label-refs -- GitHub alerts -->
   > If your USB flash drive or USB hard drive is not able to boot, check the following:
   >
   > - Ensure that your USB flash drive contains at least one FAT or NTFS partition.
   > - Ensure that the partition is marked as `bootable` in the partition table.
   > - Ensure that the partition starts on a cylinder boundary. For the first partition, this is usually sector 63.

#### GNU/Linux Method B: Etcher

1. If you already have Etcher installed on your computer then skip to step 2.

   Otherwise install Etcher on your GNU/Linux computer.

2. [Download](#to-clonezilla-download-link) the Clonezilla Live `iso` file.
3. From GNU/Linux, run the Etcher program and follow the instructions in the GUI to install Clonezilla Live on your USB flash drive.

#### GNU/Linux Method C: Unetbootin

1. If you already have Unetbootin installed on your computer then skip to step 2.

   Otherwise install Unetbootin on your GNU/Linux computer.

2. [Download](#to-clonezilla-download-link) the Clonezilla Live `iso` file.
3. From GNU/Linux, run the Unetbootin program and follow the instructions in the GUI to install Clonezilla Live on your USB flash drive.

> [!INFO] Note<!-- eslint-disable-line markdown/no-missing-label-refs -- GitHub alerts -->
> The boot menu created by Unetbootin is not exactly the same as the boot menu created in method A. Therefore it is recommended to use method A.

## USB setup with MacOS

The following method can be used to setup Clonezilla Live on your USB flash drive using MacOS:

### MacOS Method: balenaEtcher

**ISSUE: Clonezilla download page**

1. [Download](#to-clonezilla-download-link) the Clonezilla Live `iso` file.
2. Insert a USB flash drive on the Mac machine.
3. Erase it using the standard Mac Disk Utility (exFAT works fine).
4. Download [balenaEtcher for MacOS](https://etcher.balena.io/), then follow its document to burn the image to the USB flash drive.
5. Eject the USB drive.

   Thanks to Hans Palm for providing this info.
