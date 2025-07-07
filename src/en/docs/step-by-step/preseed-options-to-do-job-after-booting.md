# Preseed options to do job after booting

Start Clonezilla live with sshd service on and password assigned

## The scenario

**ISSUE: Update to Clonezilla live boot parameters link**

By modifying the boot parameters in [syslinux.cfg, isolinux.cfg or grub.cfg](https://clonezilla.org//fine-print-live-doc.php?path=clonezilla-live/doc/99_Misc/00_live-boot-parameters.doc), you can preseed most of the options so that Clonezilla live can do the job for you with less interactive steps, or it's possible to make it run in an unattended mode.

In this example, we want to preseed the language, keymap, mounting the image repository, then choose the image of partition, and restore it to the partition.

## The options to be preseeded

**ISSUE: Update to Clonezilla live boot parameters link**

By refering to [the doc about the boot parameters of Clonezilla live](https://clonezilla.org//fine-print-live-doc.php?path=clonezilla-live/doc/99_Misc/00_live-boot-parameters.doc), the options we want to preseed are:

1. Preseed the language as English:
   - locales=en_US.UTF-8
2. Preseed the keymap as no change:
   - keyboard-layouts=NONE
3. Preseed the mounting of image repository. The image is located in the 2nd partition on first disk (`/dev/sda4`), under the dir `/Backup`. The boot parameters we want to preseed are:

   - ocs_prerun="mount /dev/sda4 /mnt"
   - ocs_prerun1="mount --bind /mnt/Backup /home/partimag/"

   > [!INFO] Note<!-- eslint-disable-line markdown/no-missing-label-refs -- GitHub alerts -->
   > Here we have to mount that in 2 steps. If the image is on the top dir (/) on /dev/sda4, then the 2nd step (ocs*prerun1) is \_not* required.

   If you want to user the image on a network file serer, e.g. samba file server, you can make it like:

   - ocs_prerun1="dhclient -v eth0"
   - ocs_prerun2="sleep 2"
   - ocs_prerun3="mount -t cifs -o user=$ACCOUNT,password=$PASSWD //$SAMBA_SERVER_IP/$PATH_TO_IMAGE /home/partimag" (Replace $ACCOUNT, $PASSWD, $SAMBA_SERVER_IP, $PATH_TO_IMAGE with appropriate values, like: `mount -t cifs -o user=administrator,password=apple //192.168.1.3/images2/clonezilla /home/partimag`).
   - ocs_prerun4="sleep 2"

     Here we assume a DHCP server existing on the network, if you want to configure static IP address, you can use networking configuration utils, e.g. `ifconfig` and `route` or `ip` to make that.

4. Preseed the restoring job. We want to let user to choose the image to restore to /dev/sda1. The boot parameter about this is ocs_live_run:

   - ocs_live_run="ocs-sr -g auto -e1 auto -e2 -c -r -j2 -k -p true restoreparts ask_user sda1"

   **ISSUE: Missing image link**

   > [!INFO] Note<!-- eslint-disable-line markdown/no-missing-label-refs -- GitHub alerts -->
   > This command can be easily got by running the interactive mode of Clonezilla live, then Clonezilla live will show you the command in green, as shown [here](https://clonezilla.org//clonezilla-live/doc/02_Restore_disk_image/images/ocs-10-img-restore-command-prompt.png). The word `ask_user` is a preserved word for the image or the destination disk/partition. When `ask_user` is used, Clonezilla live will show a dialog to let user to choose that.

5. Then the syslinux.cfg or isolinux.cfg is:

   ```text
   label Clonezilla live
   MENU DEFAULT
   # MENU HIDE
   MENU LABEL Clonezilla live (Default settings, VGA 800x600)
   # MENU PASSWD
   kernel /live/vmlinuz
   append initrd=/live/initrd.img boot=live union=overlay username=user config components quiet noswap edd=on nomodeset enforcing=0 ocs_prerun="mount /dev/sda4 /mnt" ocs_prerun1="mount --bind /mnt/Backup /home/partimag/" ocs_live_run="ocs-sr -g auto -e1 auto -e2 -c -r -j2 -k -p true restoreparts ask_user sda1" ocs_live_extra_param="" keyboard-layouts=NONE ocs_live_batch="no" locales=en_US.UTF-8 vga=788 ip= nosplash net.ifnames=0 splash i915.blacklist=yes radeonhd.blacklist=yes nouveau.blacklist=yes vmwgfx.enable_fbdev=1
   TEXT HELP
   * Boot menu for BIOS machine
   * Clonezilla live version: 2.7.0-10-amd64. (C) 2003-2020, NCHC, Taiwan
   * Disclaimer: Clonezilla comes with ABSOLUTELY NO WARRANTY
   ENDTEXT
   ```

6. Now with the modified Clonezilla live, when you boot it, it will ask you the image and ask you to confirm twice, then do the job.

**ISSUE: Missing links**

> [!INFO] Note<!-- eslint-disable-line markdown/no-missing-label-refs -- GitHub alerts -->
>
> 1. The files in the Clonezilla live iso file are read-only, therefore it's easier to modify the files on USB. If you want to convert the live USB files as an iso file, you can refer to [this](http://drbl.org/faq/fine-print.php?path=./2_System/87_create_clonezilla_iso_from_zip.faq#87_create_clonezilla_iso_from_zip.faq). Remember, for live CD booting, you have to modify the syslinux/isolinux.cfg.
> 2. Some hints about unattended mode could be found [here](http://drbl.org/faq/fine-print.php?path=./2_System/113_fully_automatically_restoring.faq#113_fully_automatically_restoring.faq).
