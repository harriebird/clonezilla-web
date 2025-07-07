# Started with sshd on and passwd assigned

Run unattended Clonezilla live via PXE or CD booting and the process can be remotely monitored

## A PXE config example for you to boot Clonezilla live via PXE, and ssh service is on, the password of account `user` is assigned

```text
label Clonezilla Live
MENU LABEL Clonezilla Live
MENU DEFAULT
kernel vmlinuz1
append initrd=initrd1.img boot=live union=overlay username=user config components quiet noswap edd=on nomodeset enforcing=0 noswap noprompt vga=788 fetch=tftp://192.168.120.254/filesystem.squashfs usercrypted=$1$Dooguom5$a9LFeu8YO/joyNtrpUEAk0 keyboard-layouts=NONE ocs_live_batch="no" locales=en_US.UTF-8 vga=788 nosplash net.ifnames=0 splash i915.blacklist=yes radeonhd.blacklist=yes nouveau.blacklist=yes vmwgfx.enable_fbdev=1 ocs_numlk="on" ocs_daemonon="ssh"
```

The usercrypted password is created by:

mkpasswd -m TYPE YOUR_PASSWD "mkpasswd" is from package "whois" in Debian or Ubuntu.

Check your GNU/Linux to see which package provides this command if you are not using Debian or Ubuntu. Replace YOUR*PASSWORD with your plain text password, and remember do not put any " in the boot parameters of live-initramfs (while it's ok for those ocs*\* boot parameters) when you use isolinux/syslinux/pxelinux, i.e. do NOT use something like usercrypted="bkuQxLqLRuDW6".

However, when you use grub, if the crypted password has `$`, you have to use single quotation marks or backslash to escape dollar sign. For example, when `mkpasswd -m MD5 ilovesteven -s Dooguom5` gives you the encrypted password $1$Dooguom5$a9LFeu8YO/joyNtrpUEAk0, you have to put usercrypted='$1$Dooguom5$a9LFeu8YO/joyNtrpUEAk0' in the boot parameters. While for syslinux/isolinux/pxelinux you can not do so.

If you prefer sha-256 instead of md5 method, you can generate the password like:
mkpasswd -m SHA-256 YOUR_PASSWD Or sha-512:
mkpasswd -m SHA-512 YOUR_PASSWD

> [!INFO] Note<!-- eslint-disable-line markdown/no-missing-label-refs -- GitHub alerts -->
>
> 1. If you do not assign salt to mkpasswd, the encrypted password will not be the same every time you create it.
>
> For more about usercrypted discussion, please check it [here](https://lists.debian.org/debian-live/2008/10/msg00020.html).
>
> 2. The files in the Clonezilla live iso file are read-only, therefore it's easier to modify the files on USB. If you want to convert the live USB files as an iso file, you can refer to [this](http://drbl.org/faq/fine-print.php?path=./2_System/87_create_clonezilla_iso_from_zip.faq#87_create_clonezilla_iso_from_zip.faq). Remember, for live CD booting, you have to modify the syslinux/isolinux.cfg.
> 3. For more boot parameters, please refer to [this doc](https://clonezilla.org//fine-print-live-doc.php?path=clonezilla-live/doc/99_Misc/00_live-boot-parameters.doc).
