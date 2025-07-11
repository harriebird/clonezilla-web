# Customized script with PXE

Use customized script with a PXE version of Clonezilla live

## To put your customized script with a PXE version of Clonezilla live

In this example, we assume (1) The IP address of your PXE server is 192.168.120.254, (2) the customized script (custom-ocs-2) is put on your PXE server's tftpd root dir (E.g. On DRBL server, the path is /tftpboot/nbi_img/. It might be different in your case if you are not using DRBL server as a PXE server).

Therefore your pxelinux.cfg/default file is like:

```text
label Clonezilla Live
MENU DEFAULT
# MENU HIDE
MENU LABEL Clonezilla Live
# MENU PASSWD
kernel vmlinuz1
append initrd=initrd1.img boot=live union=overlay username=user config components quiet noswap edd=on nomodeset enforcing=0 noeject vga=788 fetch=tftp://192.168.120.254/filesystem.squashfs ocs_prerun="busybox tftp -g -r custom-ocs-2 -l /tmp/custom-ocs-2 192.168.120.254" ocs_live_run="bash /tmp/custom-ocs-2" keyboard-layouts=NONE ocs_live_batch="no" locales="en_US.UTF-8" nolocales
TEXT HELP
Boot Clonezilla live via network
ENDTEXT
```

> [!INFO] Note<!-- eslint-disable-line markdown/no-missing-label-refs -- GitHub alerts -->
> Remember to check the boot parameters on the Clonezilla live iso/zip file. It might change.

The content of custom-ocs-2 can be like:

```shell
#!/bin/bash
. /usr/share/drbl/sbin/drbl-conf-functions
. /etc/drbl/drbl-ocs.conf
. /usr/share/drbl/sbin/ocs-functions
. /etc/ocs/ocs-live.conf

# Load language file
ask_and_load_lang_set en_US.UTF-8

# 1. Mount the clonezilla image home.
# Types: local_dev, ssh_server, samba_server, nfs_server
prep-ocsroot -t nfs_server

# 2. Restore the image
if mountpoint /home/partimag/ &>/dev/null; then
  ocs-sr -l en_US.UTF-8 -c -p choose restoredisk ask_user ask_user
else
  [ "$BOOTUP" = "color" ] && $SETCOLOR_FAILURE
  echo "Fail to find the Clonezilla image home /home/partimag!"
  echo "Program terminated!"
  [ "$BOOTUP" = "color" ] && $SETCOLOR_NORMAL
fi
```

> [!INFO] Note<!-- eslint-disable-line markdown/no-missing-label-refs -- GitHub alerts -->
> Remember to add shebang line (`#!/bin/bash`) in your script to avoid a [`Exec format error` issue](https://sourceforge.net/p/clonezilla/discussion/Clonezilla_live/thread/cd052870).

For more boot parameters, please refer to [this doc](./misc.md#the-boot-parameters-for-clonezilla-live).
