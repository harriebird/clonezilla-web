# ocs related command manpages

Manual pages about Clonezilla related commands

## Man page of ocs-sr

To save or restore an image

`ocs-sr [OPTION] {savedisk|saveparts|restoredisk|restoreparts} IMAGE DEVICE`

IMAGE is the image dir name in /home/partimag, not absolute path

DEVICE name can be with or without /dev/, e.g., /dev/sda or sda.

When in saving mode, the DEVICE name can also be assigned by:

For disk: PTUUID or SERIALNO (short format), e.g., PTUUID=03c8b280-47aa-4881-aca5-9b9c66fe28c7.

For partition: UUID or PARTUUID, e.g., UUID=0b51ce79-7bc0-4111-8a40-839461a9b12f

When in restoring mode, the DEVICE name can also be assigned by (for disk only):

SERIALNO (short format), e.g., SERIALNO=2YK8XSYD.

If there are spaces in SERIALNO, replace every space by "\_"

### Options for saving:

`-noabo`, `--not-only-access-by-owner` Make the image of partition can be accessed by others, not only by owner. By default the image of partition will be changed as 600. With this option, it will be 644.

`-senc`, `--skip-enc-ocs-img` Skip encrypting the image with passphrase.

`-enc`, `--enc-ocs-img` To encrypt the image with passphrase.

`-sfsck`, `--skip-fsck-src-part` Skip running fsck on the source file system before saving it.

`-fsck`, `-fsck-src-part`, `--fsck-src-part` Run fsck interactively on the source file system before saving it.

`-fsck-y`, `-fsck-src-part-y`, `--fsck-src-part-y` Run fsck automatically on the source file system before saving it. This option will always attempt to fix any detected filesystem corruption automatically. //NOTE// Use this option in caution.

`-gm`, `--gen-md5sum` Generate the MD5 checksum for the image. Later you can use -cm|--check-md5sum option to check the image when restoring the image. Note! It might take a lot of time to generate if the image size is large.

`-gs`, `--gen-sha1sum` Generate the SHA1 checksum for the image. Later you can use -cs|--check-sha1sum option to check the image when restoring the image. Note! It might take a lot of time to generate if the image size is large.

`-gmf`, `--gen-chksum-for-files-in-dev` Generate the checksum for files in the source device. Later you can use -cmf|--chk-chksum-for-files-in-dev to check the files in the destination device after they are restored. Note! It might take a lot of time to inspect the checksum if there are many files in the destination device.

`-i`, `--image-size SIZE` Set the size in MB to split the partition image file into multiple volumes files. For the FAT32 image repository, the SIZE should not be larger than 4096.

`-j2`, `--clone-hidden-data` Use dd to clone the image of the data between MBR (1st sector, i.e. 512 bytes) and 1st partition, which might be useful for some recovery tool.

`-ntfs-ok`, `--ntfs-ok` Assume the NTFS integrity is OK, do NOT check again (for ntfsclone only)

`-rm-win-swap-hib`, `--rm-win-swap-hib` Try to remove the MS windows swap file in the source partition.

`-q`, `--use-ntfsclone` If the partition to be saved is NTFS, use program ntfsclone instead of partimage (i.e. Priority: ntfsclone > partimage > dd)

`-q1`, `--force-to-use-dd` Force to use dd to save partition(s) (inefficient method, very slow, but works for all the file system).

`-q2`, `--use-partclone` Use partclone to save partition(s) (i.e. partclone > partimage > dd).

`-rescue`, `--rescue` Turn on rescue mode, i.e. try to skip bad sectors.

`-sc`, `-scs`, `--skip-check-restorable`, `--skip-check-restorable-s` By default Clonezilla will check the image if restorable after it is created. This option allows you to skip that.

`-z0`, `--no-compress` Don't compress when saving: very fast but very big image file (NOT compatible with multicast restoring!!!)

`-z1`, `--gzip-compress` Compress using gzip when saving: fast and small image file (default)

`-z1p`, `--smp-gzip-compress` Compress using parallel gzip program (pigz) when saving: fast and small image file, good for multi-core or multi-CPU machine

`-z2`, `--bz2-compress` Compress using bzip2 when saving: slow but smallest image file

`-z2p`, `--smp-bzip2-compress` Compress using parallel bzip2 program (lbzip2) when saving: faster and smallest image file, good for multi-core or multi-CPU machine

`-z3`, `--lzo-compress` Compress using lzop when saving: similar to the size by gzip, but faster than gzip.

`-z4`, `--lzma-compress` Compress using lzma when saving: slow but smallest image file, faster decompression than bzip2.

`-z5`, `--xz-compress` Compress using xz when saving: slow but smallest image file, faster decompression than bzip2.

`-z5p`, `--smp-xz-compress` Compress using parallel xz when saving: slow but smallest image file, faster decompression than bzip2.

`-z6`, `--lzip-compress` Compress using lzip when saving: slow but smallest image file, faster decompression than bzip2.

`-z6p`, `--smp-lzip-compress` Compress using parallel lzip when saving: slow but smallest image file, faster decompression than bzip2.

`-z7`, `--lrzip-compress` Compress using lrzip when saving.

`-z8`, `--lz4-compress` Compress using lz4 when saving.

`-z8p`, `--lz4mt-compress` Compress using lz4mt when saving.

`-z9`, `--zstd-compress` Compress using zstd when saving.

`-z9p`, `--zstdmt-compress` Compress using zstdmt when saving.

`-i`, `--image-size SIZE` Set the split image file volume size SIZE (MB). When ocs-sr is run with -x, the default SIZE is set as 0, if without -x, we will not split it.

`-sfs`, `--skip-fs-save` Do not save the file system for device, just save the rest of files. This is mainly for BT from device massive deployment. A tag file 00-pseudo-img-note.txt will be added in the image dir, too.

`-pe`, `--passwd-ecryptfs PASSWD` Set the password to encrypt the image. Use with option `-enc` when saving, or restoring when the image is encrypted. //NOTE// This is not a safe way to use it because the password is shown in the command line or system processes.

`-pfe`, `--passwd-file-ecryptfs FILE` Set the password to encrypt the image in the FILE. Use with option -enc, or restoring when the image is encrypted. The file contains the password to encrypt the image. Its format is like: passphrase_passwd=YOURPASSWORD.

`-scpt`, `--skip-check-part-table` Skip checking the partition table of the source disk, i.e., just save it without checking it is MBR or GPT format.

`-luks`, `--enable-luks MODE` Open LUKS device or not. MODE can be either yes or no.

Some words are reserved for `IMAGE_NAME`, `ask_user` is used to let user to input a name when saving an image. `autoname` is used to automatically generate the image name based on network card MAC address and time. `autohostname` is used to automatically generate the image name based on hostname. `autoproductname` is used to automatically generate the image name based on hardware product model gotten from dmidecode.

The words reserved for `DEVICE`: `ask_user` could be used to let user to select the source device when saving an image. `all` can be used for all the unmounted local disks or partitions, depending on the mode is to save disks or partitions.

### Options for restoring:

`-f`, `--from-part PARTITION` Restore the partition from image or block device. This is especially for `restoreparts` to restore the image of partition (only works for one) to different partition, e.g. sda1 of image to sdb6, or partition to partition, e.g, sda1 to sdb2.

`-g`, `--grub-install GRUB_PARTITION` Install grub in the MBR of the disk containing partition GRUB_PARTITION with root grub directory in the same GRUB_PARTITION when restoration finishes, GRUB_PARTITION can be one of `/dev/sda1`, `/dev/sda2`... or `auto` (`auto` will let clonezilla detect the grub root partition automatically). If `auto` is assigned, it will work if grub partition and root partition are not in the same partition.

`-r`, `--resize-partition` Resize the partition when restoration finishes, this will resize the file system size to fit the partition size. It is normally used when when a small partition image is restored to a larger partition.

`-k`, `--no-fdisk`, `--no-create-partition` Do NOT create partition in target harddisk. If this option is set, you must make sure there is an existing partition table in the current restored harddisk. Default is to create the partition table.

`-icrc`, `--icrc` Skip Partclone CRC checking.

`-irhr`, `--irhr` Skip removing the Linux udev hardware records on the restored GNU/Linux.

`-irvd`, `--irvd` Skip removing the NTFS volume dirty flag after the file system is restored.

`-ius`, `--ius` Skip updating syslinux-related files on the restored GNU/Linux.

`-iui`, `--iui` Skip updating initramfs file(s) on the restored GNU/Linux.

`-icds`, `--ignore-chk-dsk-size-pt` Skip checking destination disk size before creating the partition table on it. By default it will be checked and if the size is smaller than the source disk, quit.

`-iefi`, `--ignore-update-efi-nvram` Skip updating boot entries in EFI NVRAM after restoring.

`-k0`, Create partition table based on the partition table from the image. this is the same as as default. Just an option to let us explain the action easier.

`-k1`, Create partition table in the target disk proportionally.

`-k2`, Enter command line prompt to create partition table manually before restoring image.

`-scr`, `--skip-check-restorable-r` By default Clonezilla will check the image if restorable before restoring. This option allows you to skip that.

`-t`, `--no-restore-mbr` Do NOT restore the MBR (Mater Boot Record) when restoring image. If this option is set, you must make sure there is an existing MBR in the current restored harddisk. Default is Yes

`-t1`, `--restore-raw-mbr` Restores the prebuilt bootloader from syslinux (For Windows only)

`-t2`, `--no-restore-ebr` Do NOT restore the EBR (Extended Boot Record) when restoring image. Default is to restore

`-u`, `--select-img-in-client` Input the image name in clients

`-e`, `--load-geometry` Force to use the saved CHS (cylinders, heads, sectors) when using sfdisk

`-e1`, `--change-geometry NTFS-BOOT-PARTITION` Force to change the CHS (cylinders, heads, sectors) value of NTFS boot partition after image is restored. NTFS-BOOT-PARTITION can be one of `/dev/sda1`, `/dev/sda2`... or `auto` (`auto` will let clonezilla detect the NTFS boot partition automatically)

`-e2`, `--load-geometry-from-edd` Force to use the CHS (cylinders, heads, sectors) from EDD (Enhanced Disk Device) when creating partition table by sfdisk

`-j`, `--create-part-by-sfdisk` Use sfdisk to create partition table instead of using dd to dump the partition table from saved image (This is default)

`-j0`,` --create-part-by-dd` Use dd to dump the partition table from saved image instead of sfdisk. ///Note/// This does NOT work when logical drives exist.

-`j1`, `--dump-mbr-in-the-end` Use dd to dump the MBR (total 512 bytes, i.e. 446 bytes (executable code area) + 64 bytes (table of primary partitions) + 2 bytes (MBR signature; # 0xAA55) = 512 bytes) after disk image was restored. This is an insurance for some hard drive has different numbers of cylinder, head and sector between image was saved and restored.

`-j2`, `--clone-hidden-data` Use dd to clone the image of the data between MBR (1st sector, i.e. 512 bytes) and 1st partition, which might be useful for some recovery tool. When this option is used, it only works for restoredisk mode, not the restoreparts one

`-hn0 PREFIX` Change the hostname of MS Windows based on the combination of hostname prefix and IP address, i.e. PREFIX-IP

`-hn1 PREFIX` Change the hostname of MS Windows based on the combination of hostname prefix and NIC MAC address, i.e. PREFIX-MAC

`--max-time-to-wait TIME` When not enough clients have connected (but at least one), start anyways when TIME seconds since first client connection have pased. This option is used with --clients-to-wait

`-cm`, `--check-md5sum` Check the MD5 checksum for the image. To use this option, you must enable -gm|--gen-md5sum option when the image is saved. Note! It might take a lot of time to check if the image size is large.

`-cs`, `--check-sha1sum` Check the SHA1 checksum for the image. To use this option, you must enable -gs|--gen-sha1sum option when the image is saved. Note! It might take a lot of time to check if the image size is large.

`-cmf`, `--chk-chksum-for-files-in-dev` Check the checksum for the files in the device. To use this option, you must enable -gmf|--gen-chksum-for-files-in-dev when the image is saved. Note! (1) The file system must be supported by Linux kernel so that it can be mounted as read-only to check the files. (2) It might take a lot of time to check if there are many files in the source device.

`-srel`, `--save-restore-error-log` Save the error log file in the image dir. By default the log file won't be saved when error occurs.

`--mcast-port NO` Assign the udp port number for multicast restore. This is used by clonezilla server. Normally it's not necessary to manually assign this option.

`-ssnf`, `--skip-set-netboot-first` Skip setting 1st boot device as network in uEFI NVRAM of the restored machine.

Some words are reserved for `IMAGE_NAME`, `ask_user` is used to let user to input a name when saving an image. `autoproductname` is used to automatically get the image name based on hardware product model from dmidecode.

A word is reserved for `DEVICE`, `ask_user` could be used to let user to select the source device when saving an image.

General options:

`-l`, `--language INDEX` Set the language to be shown by index number:

`[0|en_US.UTF-8]`: English,

`[2|zh_TW.UTF-8]`: Traditional Chinese (UTF-8, Unicode) - Taiwan

`[a|ask]`: Prompt to ask the language index

This option is for backward compatibility. It's recommended to use locales to assign that.

`-b`, `-batch`, `--batch` (DANGEROUS!) Run program in batch mode, i.e. without any prompt or wait for pressing enter key. //NOTE// You have to use `-batch` instead of `-b` when you want to use it in the boot parameters. Otherwise the program init on system will honor `-b`, too.

`-c`, `--confirm` Wait for confirmation before saving or restoring

`-d`, `--debug-mode` Enter command mode to debug before saving/restoring

`--debug=LEVEL` Output the partimage debug log in directory /var/log/ with debug LEVEL (0,1,2... default=0)

`-m`, `--module MODULE` Force to load kernel module MODULE, this is useful when some SCSI device is not detected. NOTE! Use only one module, more than one may cause parsing problem.

`--use-netcat` Use netcat instead of nuttcp when running ocs-onthefly in the clone over net mode.

`--net-filter PROGRAM` Use the PROGRAM (gzip/lzop/bzip2/xz/lz4/zstd/cat) before sending partition data to netcat (only in network clone mode). The default action is zstd. Use `cat` if you do not want to compress (Good for fast internode network).

`-o0`, `--run-prerun-dir` Run the script in the directory /usr/share/drbl/postrun/ocs/ before clone is started. The command will be run before MBR is created or saved.

`-o1`, `-o`, `--run-postrun-dir` Run the script in the directory /usr/share/drbl/postrun/ocs/ when clone is finished. The command will be run before that assigned in -p or --postaction.

`-w`, `--wait-time TIME` Wait for TIME secs before saving/restoring

`-nogui`, `--nogui` Do not show GUI (TUI) of Partclone or Partimage, use text only

`-a`, `--no-force-dma-on` Do not force to turn on HD DMA

`-mp`, `--mount-point MOUNT_POINT` Use NFS to mount MOUNT_POINT as directory ocsroot (ocsroot is assigned in drbl.conf)

`-or`, `--ocsroot` DIR Specify DIR (absolute path) as directory ocsroot (i.e. overwrite the ocsroot assigned in drbl.conf)

`-p`, `--postaction [choose|poweroff|reboot|command|CMD]` When save/restoration finishes, choose action in the client, poweroff, reboot (default), in command prompt or run CMD

`-ps`, `--play-sound` Play sound when the job is done.

`-ns`, `--ntfs-progress-in-image-dir` Save the ntfsclone progress tmp file in the image dir so that if cloning is in DRBL client, the progress can be check in the server (Default in to be put in local /tmp/, which is local tmpfs).

`-s`, `--source-IP IPADD` Assign the IP address of source machine for device to device cloning. This option is mainly used by ocs-onthefly to run ocs-sr in device to device cloning over net.

`-bm`, `--beginner-mode` Run in beginner mode. This is a short way for `-um beginner`.

`-em`, `--expert-mode` Run in expert mode. This is a short way for `-um expert`.

`-um`, `--user-mode [beginner|expert]` Specify the mode to use. If not specified, default mode is for a beginner.

`-v`, `--verbose` Prints verbose information

`-d0`, `--dialog` Use dialog

`-d1`, `--Xdialog` Use Xdialog

`-d2`, `--whiptail` Use whiptail

`-d3`, `--gdialog` Use gdialog

`-d4`, `--kdialog` Use kdialog

`-x`, `--interactive` Interactive mode to save or restore.

`-os`, `--ocs-server SRV` Assign the OCS server as SRV.

### Example:

Before saving or restoring an image, you have to make sure the device is NOT mounted!

To save all the data in local 1st harddrive `sda` as image `IMAGE1`, use ntfsclone, and lzop compression:

`ocs-sr --use-ntfsclone -z3 savedisk IMAGE1 sda`

To save the data in 1st and 2nd partition in local first harddrive `sda` as image `IMAGE2`, use ntfsclone:

`ocs-sr --use-ntfsclone -z3 saveparts IMAGE2 "sda1 sda2"`

To restore the image IMAGE1 to local sda, and grub-install will be run after cloning:

`ocs-sr -g auto restoredisk IMAGE1 sda`

To restore the image for the 1st and 2nd partition from IMAGE2 to local sda1 and sda2, and grub-install will be run after restoring:

`ocs-sr -g auto restoreparts IMAGE2 "sda1 sda2"`

To save disk(s)/partition(s) as an image or restore an image to disk(s)/partition(s) interactively, use:

`ocs-sr -x `

## Man page of ocs-onthefly

To run clonezilla on-the-fly:

`ocs-onthefly [OPTION]`

### Option

`-b`, `-batch`, `--batch`, `--batch-mode` (DANGEROUS!) Run program in batch mode, i.e. without any prompt or wait for pressing enter key. //NOTE// You have to use `-batch` instead of `-b` when you want to use it in the boot parameters. Otherwise the program init on system will honor `-b`, too.

`-cmf`, `--chk-chksum-for-files-in-dev` Do the files checksum inspection for cloned files in destination devices.

`-d`, `--destination`, `--target DEV` Specify the target device as DEV (can be with or without /dev/, e.g., /dev/sda or sda, /dev/sda1 or sda1...)

`-e1`, `--change-geometry NTFS-BOOT-PARTITION` Force to change the CHS (cylinders, heads, sectors) value of NTFS boot partitoin after image is restored. NTFS-BOOT-PARTITION can be one of "`/dev/sda1`, `/dev/sda2`... or `auto` (`auto` will let clonezilla detect the NTFS boot partition automatically)

`-e2`, `--load-geometry-from-edd` Force to use the CHS (cylinders, heads, sectors) from EDD (Enhanced Disk Device) when creating partition table by sfdisk

`-r`, `--resize-partition` Resize the file system size to fit the partition size in the destination disk. It is normally used when when a small partition image is restored to a larger partition.

`-f`, `--source DEV` Specify the source device as DEV (can be with or without /dev/, e.g., /dev/sda or sda, /dev/sda1 or sda1...)

`-g`, `--grub-install GRUB_PARTITION` Install grub in the MBR of the disk containing partition GRUB_PARTITION with root grub directory in the same GRUB_PARTITION when restoration finishes, GRUB_PARTITION can be one of `/dev/sda1`, `/dev/sda2`... or `auto` (`auto` will let clonezilla detect the grub root partition automatically). If `auto` is assigned, it will work if grub partition and root partition are not in the same partition.

`--net-filter PROGRAM` Use the PROGRAM (gzip/lzop/bzip2/xz/lz4/zstd/cat) before sending partition data to netcat/nuttcp (only in network clone mode). The default action is zstd. Use `cat` if you do not want to compress (Good for fast internode network).

`-nogui`, `--nogui` Do not show GUI (TUI) of Partclone or Partimage, use text only

`-rescue`, `--rescue` Turn on rescue mode, i.e. try to skip bad sectors.

`-rvd`, `--rvd` Remove the NTFS volume dirty flag in source NTFS file system before cloning it.

`-irhr`, `--irhr` Skip removing the Linux udev hardware records on the restored GNU/Linux.

`-ius`, `--ius` Skip updating syslinux-related files on the restored GNU/Linux.

`-iui`, `--iui` Skip updating initramfs file(s) on the restored GNU/Linux.

`-icds`, `--ignore-chk-dsk-size-pt` Skip checking destination disk size before creating the partition table on it. By default it will be checked and if the size is smaller than the source disk, quit.

`-iefi`, `--ignore-update-efi-nvram` Skip updating boot entries in EFI NVRAm after cloning.

`-k`, `--no-sfdisk` Do NOT create partition table in boot sector in target machine

`-k0`, Create partition table based on the partition table from the image. this is the same as as default. Just an option to let us explain the action easier.

`-k1`, Create partition table in the target disk proportionally.

`-k2`, Enter command line prompt to create partition table manually before restoring image.

`-j2`, `--clone-hidden-data` Use dd to clone the image of the data between MBR (1st sector, i.e. 512 bytes) and 1st partition, which might be useful for some recovery tool.

`-m`, `--no-boot-loader-clone` Do NOT clone boot loader

`-o`, `--load-geometry` Force to use the saved CHS (cylinders, heads, sectors) when using sfdisk in restoring.

`-q1`, `--force-to-use-dd` Force to use sector-by-sector copy (supports all filesystem, but inefficient). By default we will use partclone to clone a partition.

`-po`, `--port PORT` Specify the netcat port (Only in network clone mode)

`-p`, `-pa`, `--postaction [choose|poweroff|reboot|true|CMD]` When cloning job finishes, the action to be run, e.g. poweroff, reboot, enter command line prompt or run CMD you assign

`-a`, `--server` Specify the running machine is in network clone server.

`-s`, `--source-IP IP` Specify the source IP address (used in target client machine).

`-t`, `--no-restore-mbr` Do NOT restore the MBR (Mater Boot Record) when cloning. If this option is set, you must make sure there is an existing MBR in the current restored harddisk. Default is to restore.

`-t1`, `--restore-raw-mbr` Restores the prebuilt bootloader from syslinux (For Windows only)

`-t2`, `--no-restore-ebr` Do NOT restore the EBR (Extended Boot Record) when restoring image. Default is to restore

`-v`, `--verbose` Prints verbose information

`-np`, `--net-pipe PROGRAM` Use PROGRAM as network pipe program. Available: netcat, nuttcp. Default is

`-x`, `--interactive` Interactive mode.

`-bm`, `--beginner-mode` Run in beginner mode. This is a short way for `-um beginner`.

`-em`, `--expert-mode` Run in expert mode. This is a short way for `-um expert`.

`-um`, `--user-mode [beginner|expert]` Specify the mode to use.

### Example:

1. To clone local sda to local sdb, run

   `ocs-onthefly -f sda -d sdb`

2. To clone sda (in machine A with IP 192.168.100.1) to sda (in machine B) via network,

   - In machine A, boot it into DRBL client mode or boot on Clonezilla live, then run

   `ocs-onthefly -a -f sda`

   - Then in machine B, boot it into DRBL client mode or boot on Clonezilla live, too. Then run

   `ocs-onthefly -s 192.168.100.1 -d sda`
