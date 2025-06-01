# Restore disk image

Restore an image on 2nd disk (sdb) to 1st disk (sda) (Step by step)

## Boot the machine via Clonezilla live

In this example, the machine has 2 disks, 1st disk's name is sda (device name in GNU/Linux), 2nd disk's device name is sdb. We already have a Clonezilla image in sdb, the image name is called `bookworm-2023-10-15-03-img`:

```text
root@debian:/home/partimag# ls -l
total 20
drwxr-xr-x 2 root root  4096 Oct 15 03:33 bookworm-2023-10-15-03-img
drwx------ 2 root root 16384 Oct 15 02:47 lost+found

root@debian:~# ls -lh /home/partimag/bookworm-2023-10-15-03-img/
total 1.3G
-rw-r--r-- 1 root root  901 Oct 15 03:33 blkdev.list
-rw-r--r-- 1 root root  770 Oct 15 03:33 blkid.list
-rw-r--r-- 1 root root 8.0K Oct 15 03:33 clonezilla-img
-rw-r--r-- 1 root root  218 Oct 15 03:33 dev-fs.list
-rw-r--r-- 1 root root    4 Oct 15 03:33 disk
-rw-r--r-- 1 root root 1.2K Oct 15 03:33 efi-nvram.dat
-rw-r--r-- 1 root root 118K Oct 15 03:33 Info-dmi.txt
-rw-r--r-- 1 root root  236 Oct 15 03:33 Info-img-id.txt
-rw-r--r-- 1 root root   67 Oct 15 03:33 Info-img-size.txt
-rw-r--r-- 1 root root  73K Oct 15 03:33 Info-lshw.txt
-rw-r--r-- 1 root root 4.6K Oct 15 03:33 Info-lspci.txt
-rw-r--r-- 1 root root  824 Oct 15 03:33 Info-OS-prober.txt
-rw-r--r-- 1 root root  198 Oct 15 03:33 Info-packages.txt
-rw-r--r-- 1 root root  101 Oct 15 03:33 Info-saved-by-cmd.txt
-rw-r--r-- 1 root root  980 Oct 15 03:33 Info-smart.txt
-rw-r--r-- 1 root root   15 Oct 15 03:33 parts
-rw------- 1 root root 2.5M Oct 15 03:32 sda1.vfat-ptcl-img.zst
-rw------- 1 root root 1.3G Oct 15 03:33 sda2.ext4-ptcl-img.zst
-rw------- 1 root root 315K Oct 15 03:33 sda4.ext4-ptcl-img.zst
-rw-r--r-- 1 root root   36 Oct 15 03:33 sda-chs.sf
-rw-r--r-- 1 root root  17K Oct 15 03:33 sda-gpt-1st
-rw-r--r-- 1 root root  16K Oct 15 03:33 sda-gpt-2nd
-rw-r--r-- 1 root root  18K Oct 15 03:33 sda-gpt.gdisk
-rw-r--r-- 1 root root  724 Oct 15 03:33 sda-gpt.sgdisk
-rw-r--r-- 1 root root  512 Oct 15 03:33 sda-mbr
-rw-r--r-- 1 root root  440 Oct 15 03:33 sda-pt.parted
-rw-r--r-- 1 root root  392 Oct 15 03:33 sda-pt.parted.compact
-rw-r--r-- 1 root root  684 Oct 15 03:33 sda-pt.sf
-rw-r--r-- 1 root root   53 Oct 15 03:33 swappt-sda3.info
```

Now the image `bookworm-2023-10-15-03-img` will be restored to disk sda.

Once you have the bootable Clonezilla Live CD/DVD or USB flash drive, you can boot the machine you want to clone via Clonezilla live. **Remember to use the Clonezilla live CD or USB flash drive to boot the machine**. For example, if you have Clonezilla Live in USB flash drive, you have to boot it via USB device (Ex. USB-HDD or USB-ZIP). If necessary, you can set the first boot priority in the BIOS as USB-HDD or USB-ZIP so that it can boot Clonezilla Live from your USB flash drive.

Here we take CD as an example, and this machine will boot in [uEFI mode](https://en.wikipedia.org/wiki/UEFI). You can either set CD as first boot priority in machine's BIOS like this:

![Change boot order](./images/restore-disk-image/ocs-00-boot-dev-priority-bios.png)

Or by pressing a hotkey (e.g., Esc, F8, F9 or maybe F12) when you boot the machine, you will see the boot menu of BIOS like this:

![Change boot order](./images/restore-disk-image/ocs-00-boot-dev-priority-bios.png)

Or by pressing a hotkey (e.g., Esc, F8, F9 or maybe F12) when you boot the machine, you will see the boot menu of BIOS like this:

![Boot manager](./images/restore-disk-image/ocs-00-boot-dev-priority-hotkey.png)

Check your motherboard manual for more details about how to boot your machine via CD.

## The boot menu of Clonezilla live

Here is a screenshot of Clonezilla Live boot menu:

![Boot menu](./images/restore-disk-image/ocs-01-bootmenu.png)

The first one is the default mode for Clonezilla Live. It will default to framebuffer mode with a resolution of 800x600.
The 2nd one `(VGA 800x600 & To RAM)`, is the same function with the 1st one except when Clonezilla live booting finishes, all the necessary files are copied to memory. Therefore you can remove the boot media (CD or USB flash drive) then. In addition to use the arrow key to choose, you can also press `r` to choose that.

The 3rd one `(VGA with large font & To RAM)` is for you to use large font, especially when you have 4K monitor, and it will all the necessary files will be copied to memory. In addition to use the arrow key to choose, you can also press `l` to choose that.

The 4th one `(Speech synthesis)` is for the blind to use, which can be chosen by pressing `s` key.

There are more modes which you can choose in the 5th choice `Other modes of Clonezilla live`, e.g. 1024X768 or 640x480 one if you want, as shown here:

![Sub-boot menu](./images/restore-disk-image/ocs-01-b-sub-boot-menu.png)

The choice, `KMS` is for you to use [KMS (Kernel Mode Setting)](https://en.wikipedia.org/wiki/Kernel_mode-setting) for your graphics card. If you have some problem to use the framebuffer mode of your graphics card, you can try it.

If you do not need Chinese, Japanese or Korean environment or if your computer experiences problems in the framebuffer mode, you can choose the one `Clonezilla Live Safe graphic settings (vga=normal)` to clone in the English environment.

The choice, `Clonezilla live (Failsafe mode)`, is for something goes wrong when you are not be able to boot your machine, such as ACPI of your machine is not supported in the kernel.

If you want to boot local OS in your hard drive, you can choose the one `Local operating system in hard drive (if available)`. This is an extra function in the boot media that has nothing to do with Clonezilla Live.

The choice, `Memtester (VGA 800x600 & To RAM)` is for memory testing using [Memtester](https://github.com/jnavila/memtester). This is an extra function in the boot media that has nothing to do with Clonezilla Live.

The choice, `Memory test using Memtest86+` is for memory testing using [Memtest86+](http://www.memtest.org/). This is an extra function in the boot media that has nothing to do with Clonezilla Live.

The choice, `Network boot via iPXE` is used to perform a network boot via [iPXE](https://ipxe.org/). If your computer does not have a PXE network, you can use this to do boot from a network. This is an extra function in the boot media that has nothing to do with Clonezilla Live.

The choice, `uEFI firmware setup` is used to enter uEFI BIOS settings.

## Here we choose 800x600 mode, after pressing Enter, you will see Debian Linux booting process

![Booting](./images/restore-disk-image/ocs-02-booting.png)

## Choose language

![Choose language](./images/restore-disk-image/ocs-03-lang.png)

## Choose keyboard layout

![Choose keyboard layout](./images/restore-disk-image/ocs-04-keymap.png)

The default keyboard layout is US keybaord, therefore if you are using US keyboard, just press enter (i.e. use the option `Keep`).

If you want to change keymap, you can choose `Change` then follow the dialog to change it.

## Choose `Start Clonezilla`

![Choose Start Clonezilla](./images/restore-disk-image/ocs-05-start-clonezilla.png)

## Choose `device-image` option

![Choose device-image](./images/restore-disk-image/ocs-06-dev-img.png)

Pay attention to the hints, too. You might need that:

<!-- eslint-disable-next-line markdown/no-missing-label-refs -- GitHub alerts -->

> [!INFO] Hint
> From now on, if multiple choices are available, you have to press space key to mark your selection. A star sign (`*`) will be shown when the selection is done.

## Choose `local_dev` option to assign sdb1 as the image home

![Choose local_dev](./images/restore-disk-image/ocs-07-1-img-repo.png)

There are other options, e.g. sshfs, samba, nfs or [webdav](https://en.wikipedia.org/wiki/WebDAV), [AWS S3](https://en.wikipedia.org/wiki/Amazon_S3) or [Openstack Swift](https://en.wikipedia.org/wiki/OpenStack), you can use when network is available. This is very useful when 2nd local disk is not available.

Since we choose `local_dev` option, we can use 2nd disk or USB flash drive to save 1st disk's image. If using USB flash drive as repository, insert USB flash drive and wait a few secs.

![local_dev option selected](./images/restore-disk-image/ocs-07-2-plug-and-play-dev-prompt.png)

Clonezilla will scan the disks on the machine in every few secs, and show you the results:

![Storage device scan](./images/restore-disk-image/ocs-07-3-dev-scan.png)

Once you see the device you have inserted shown on the status, you have to press `Ctrl-C` to quit the scanning report.

## Select sdb1 as image repository, then choose `restoredisk` option

![Select sdb1 as image repository](./images/restore-disk-image/ocs-08-1-sdb1-as-img-repo.png)

Before mounting the device sdb1, it allows you to do a file system check. Here we skip it.

![Skip file system check](./images/restore-disk-image/ocs-08-1-sdb1-as-img-repo-fs-check.png)

Choose the directory name on `/dev/sdb1` as the image repository. Here we put image on the top directory (i.e., Current selected dir name is `/`). Use `Tab` key to choose `Done` then press `Enter` to accept the image repository:

![Choose directory name on sdb1](./images/restore-disk-image/ocs-08-2-sdb1-dir-list.png)

Once you are sure the directory is what you want, press `TAB` key to the `Done` option and press `Enter` key to continue.

If you are not familiar with the disk or partition name in GNU/Linux, read the hints:

<!-- eslint-disable-next-line markdown/no-missing-label-refs -- GitHub alerts -->

> [!INFO] Tip
> The partition name is the device name in GNU/Linux. The first partition in the first disk is `sda1`, the 2nd partition in the first disk is `sda2`, the first partition in the second disk is `sdb1` or `sdb1`... If the system you want to save is MS Windows, normally C: is sda1, and D: could be sda2, or sda5...

Then Clonezilla shows you the disk usage report:

![Disk usage report](./images/restore-disk-image/ocs-08-3-img-repo-df.png)

Here we choose `Beginner` mode:

![Choose beginner mode](./images/restore-disk-image/ocs-08-4-beginner-expert-mode.png)

If you choose `Expert` mode, you will have some chances to choose advanced parameters, e.g. imaging program, compression program, etc.. You can see more details [here](#the-advanced-parameters-for-restoring-mode).

### The advanced parameters for restoring mode

::: details The advanced parameters for saving mode
Select advanced parameters

Choose the extra parameters you want. Here we just press enter to accept the default settings:

![Accept default selected settings](./images/restore-disk-image/ocs-09-advanced-param-extra.png)

Choose the option `-k0` (Use the partition table from the image)

![Select ko option](./images/restore-disk-image/ocs-09-advanced-param-k.png)

If the target disk size is larger than the size of source disk of image, you can try to use option `-k1` which will create the partition table proportionally in the target disk and turn on option `-r` to resize the file file system in the partition automatically. This is useful to make use all of the target disk size.

If the destination disk is smaller than the source disk, if using beginner mode, you will see an error message like this (attempting to restore an image saved from 17.1 GB to a smaller disk (8.5 GB):

![Restore to smaller disk error](./images/restore-disk-image/restore-to-smaller-diskerror.png)

If you are sure all the data from the image could fit the smaller disk, i.e. it won't be written to the wrong disk space, you can check the option `-icds`.

<!-- eslint-disable-next-line markdown/no-missing-label-refs -- GitHub alerts -->

> [!WARNING] Warning
> To select this option, you have to know what you are doing!

** ISSUE: FAQ/Q&A link missing **

For more details about the advanced parameters of Clonezilla live, you can also check this [FAQ/Q&A](http://drbl.org/faq/fine-print.php?path=./2_System/88_mbr_related_options.faq#88_mbr_related_options.faq).
:::

Now you can select `restoredisk` option:

![Select restoredisk option](./images/restore-disk-image/ocs-08-5-restoredisk.png)

## Select image name and destination disk

Choose the Clonezilla live image as source image:

![Select image to restore](./images/restore-disk-image/ocs-10-1-img-name.png)

Select the destination disk `sda` we want to restore:

![Select target disk](./images/restore-disk-image/ocs-10-2-disk-selection.png)

Choose the option to create the partition table on the destination. First choice is to use the partition table from image, 2nd choice is to create the partition table proportionally, i.e., if you have the image which is saved from a smaller disk, here you can create the partitions proportionally on the destination disk:

![Select fdisk option for target disk](./images/restore-disk-image/ocs-10-2-1-fdisk-opt.png)

Choose to check the image integrity before really restoring the image to disk sda:

![Select check image before restoring](./images/restore-disk-image/ocs-10-3-img-check-prompt-brefore-restoring.png)

It's recommended to check the image before restoring it. You will not know if the image is broken or not. If you are really sure about the integrity is OK, then of course you can choose `-scr` to skip checking.

Select the mode you want after the image restoring is done:

![Select choose later](./images/restore-disk-image/ocs-10-4-reboot-poweroff.png)

By default we will choose later, but if you have decided, you can choose to reboot or poweroff the machine.

Clonezilla will prompt us the command to restore the image. This command is very useful when you want to create a customized Clonezilla live:

![Prompt the restore command](./images/restore-disk-image/ocs-10-5-img-restore-command-prompt.png)

Since we have choosed to check the image before restoring, Clonezilla will is now checking the image:

![Image check progress FAT32](./images/restore-disk-image/ocs-10-6-img-checking-progress-1.png)

![Image check progress EXTFS](./images/restore-disk-image/ocs-10-7-img-checking-progress-2.png)

Before starting to restore the disk image to disk sda, Clonezilla will ask you to confirm that TWICE:

![Restore first confirmation](./images/restore-disk-image/ocs-10-8-img-restore-confirm-1.png)

![Restore second confirmation](./images/restore-disk-image/ocs-10-9-img-restore-confirm-2.png)

## Clonezilla is restoring disk image on 2nd disk (sdb) to 1st disk (sda)

Clonezilla now is restoring the selected disk image to 1st disk (sda). The job is done by restoring:

- MBR (by dd), and Boot loader (by grub)
- Partition table (by sfdisk).
- Data on every partition or LV (logical volume) (by partimage, ntfsclone, partclone or dd. It depends on the image of each partition or LV.)

![Restore perform partition changes](./images/restore-disk-image/ocs-11-1-restore-progress-1.png)

![Restore progress FAT32](./images/restore-disk-image/ocs-11-2-restore-progress-2.png)

![Restore progress EXTFS](./images/restore-disk-image/ocs-11-3-restore-progress-3.png)

When everything is done, Clonezilla will prompt you if you want to run it again (when something goes wrong or you want to choose different options),

1. Stay in this console (console 1), enter command line prompt
2. Run command `exit` or `logout`

![Restore process done](./images/restore-disk-image/ocs-11-4-img-restore-done.png)

Then you can choose to:

- Poweroff
- Reboot
- Enter command line prompt
- Start over (image repository /home/partimag, if mounted, will be umounted)
- Start over (keep image repository /home/partimag mounted)
- Start over (Remount subdir in medium of current repository)

![Choose poweroff after restore](./images/restore-disk-image/ocs-11-5-img-restore-done-choose-poweroff.png)

Here we choose Poweroff, and it will countdown 7 secs:

** ISSUE: 403 Image **

```text
https://clonezilla.org/clonezilla-live/doc/02_Restore_disk_image/images/ocs-11-5-img-restore-done-choose-poweroff-progress.png
```

When the shutdown process is done, it will ask you to remove the disk and close the try (if any) then press ENTER if you boot Clonezilla live from CD. If you boot Clonezilla live from USB flash drive, then there is no such prompt.

![Poweroff press enter prompt](./images/restore-disk-image/ocs-11-6-img-poweroff-disk-remove-prompt.png)
