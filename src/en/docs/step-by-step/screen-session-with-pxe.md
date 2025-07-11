# Screen session with PXE

Run unattended Clonezilla live via PXE booting and the process can be remotely monitored

## Run Clonezilla in screen session so you can access remotely to monitor the progress

1. First, you have to setup a PXE server. You may refer to [this doc](https://clonezilla.org//livepxe.php).
2. We'd like to change the default password (`live`) to another one, e.g. `iloveclonezilla`. By running this on GNU/Linux (e.g. Clonezilla live) command line prompt:

   ```text
   mkpasswd -m sha-256 iloveclonezilla
   $5$QF6o03o/iNM7NEnk$Ba6QZrT055.T1tFIL.CKwjwLt04TBqpCcjprKdWOGS5
   ```

   Then you get the encrypted password `$5$QF6o03o/iNM7NEnk$Ba6QZrT055.T1tFIL.CKwjwLt04TBqpCcjprKdWOGS5`, so later we can use `usercrypted=$5$QF6o03o/iNM7NEnk$Ba6QZrT055.T1tFIL.CKwjwLt04TBqpCcjprKdWOGS5` (Remember to use backslash to escape dollar sign if you use grub, i.e., usercrypted=\$5\$QF6o03o/iNM7NEnk\$Ba6QZrT055.T1tFIL.CKwjwLt04TBqpCcjprKdWOGS5). We want Clonezilla to restore the image `lenny-i386-partclone` (which is on a NFS server) to client's disk hda. The complete session of Clonezilla live

   ```text
   label Clonezilla-live
   MENU LABEL Clonezilla Live 2.2.2-37 (Ramdisk)
   KERNEL vmlinuz1
   APPEND initrd=initrd1.img boot=live union=aufs nolocales vga=788 ip= noprompt usercrypted=$5$QF6o03o/iNM7NEnk$Ba6QZrT055.T1tFIL.CKwjwLt04TBqpCcjprKdWOGS5 fetch=tftp://192.168.120.254/Clonezilla-live-filesystem.squashfs ocs_daemonon="ssh" keyboard-layouts=NONE ocs_live_batch="no" locales="en_US.UTF-8" ocs_prerun="mount -t nfs 192.168.120.254:/home/partimag /home/partimag" ocs_live_run="screen ocs-sr -g auto -e1 auto -e2 --batch -j2 -p reboot restoredisk lenny-i386-partclone hda"
   ```

3. Then after client machine is booted via PXE, you can ssh login into it with account user and passwd `iloveclonezilla`, then:
   - sudo -i
   - screen -x

You are in the screen session now. You should be able to see the restoring process before it's rebooted.

For more boot parameters, please refer to [this doc](./misc.md#the-boot-parameters-for-clonezilla-live).
