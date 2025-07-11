# Misc

Misc doc

## The boot parameters for Clonezilla live

**ISSUE: True links of other tools**

[Kernel boot parameters](https://wiki.ubuntu.com/Kernel/KernelBootParameters) are text strings which are interpreted by the system to change specific behaviors and enable or disable certain features. Different bootloaders use different config files for the boot parameters:

1. For Clonezilla live booting from CD on a MBR machine, [isolinux](https://www.syslinux.org/) is the boot loader. Therefore the config file is /syslinux/isolinux.cfg.
2. For Clonezilla live booting from USB flash drive on a MBR machine, [syslinux](https://www.syslinux.org/) is the boot loader. Therefore the config file is /syslinux/syslinux.cfg.
3. For Clonezilla live booting from PXE on a MBR machine, [pxelinux](https://www.syslinux.org/) is the boot loader. The config file is on the PXE server, and is configured by the system administrator. it could be something like /tftpboot/nbi_img/pxelinux.cfg/default (for DRBL server), or different file.
4. For Clonezilla live booting from a uEFI machine, [grub2](https://en.wikipedia.org/wiki/GNU_GRUB) is used. Therefore the config file is /boot/grub/grub.cfg (Was /EFI/boot/grub.cfg).
5. For Clonezilla live booting from a uEFI netboot machine, [grub2](https://en.wikipedia.org/wiki/GNU_GRUB) is used. Therefore the config file is on the uEFI network booting server, it can be /tftpboot/nbi_img/grub/grub.cfg (for DRBL serer), or any other place, configured by the system administrator.

The boot parameters assigned by the above mentioned config file will be shown in /proc/cmdline after the GNU/Linux boots.

We now describe the kernel boot parameters related to Clonezilla live. If you want to modify the boot parameters, make sure you edit the right config file.

Clonezilla live is based on [Debian live](https://www.debian.org/CD/live/) with clonezilla installed. Therefore there are 2 kinds of boot parameters:

1. Boot parameters from Debian live-boot and live-config. You can refer to the [manual of live-boot](https://manpages.debian.org/unstable/live-boot-doc/live-boot.7.en.html) and [manual of live-config](https://manpages.debian.org/unstable/live-config-doc/live-config.7.en.html)..
2. Boot parameters specially for Clonezilla. All of them are named as `ocs_*`, e.g. ocs_live_run, ocs_live_extra_param, ocs_live_batch.

   - ocs_live_run is intended for saving/restoring an image or cloning disk/partition. It is the main program to be run in Clonezilla live. Available program: ocs-live-general, ocs-live-restore or any command you write. e.g. `ocs_live_run="ocs-live-general"`

   > [!INFO] Note <!-- eslint-disable-line markdown/no-missing-label-refs -- GitHub alerts -->
   > You might have to use `sudo` command inside your own script, or you can assign it like: ocs_live_run="sudo bash /my-clonezilla"

   - ocs_live_extra_param will be used only when ocs_live_run=ocs-live-restore (not for ocs-live-general or any other), then it will be passed to ocs-sr. Therefore these parameters are actually those of ocs-sr. e.g. `ocs_live_extra_param="--batch -c restoredisk sarge-r5 sda"`
   - To preset the keyboard layout, use `keyboard-layouts` from live-config. You can find the files about keyboard in /usr/share/X11/xkb/rules/base.lst after booting Clonezilla live. To assign the keyboard-layouts, use the layout name. e.g. `keyboard-layouts=us (English (US) keyboard)` `keyboard-layouts=fr (French keyboard)`
   - To preset the language, use `locales` from live-config. e.g. `locales=en_US.UTF-8`
   - Batch mode or not (yes/no), if no, will run interactively. e.g. `ocs_live_batch="no"`
   - Console blank or not. When ocs_screen_blank="no" is assigned in the boot parameters, the console won't blank.
   - To assign the image repository via URI (Uniform Resource Identifier), use `ocs_repository`. URI supported in Clonezilla live: `[dev|smb|smb1|smb1.0|smb2|smb2.0|smb2.1|smb3|smb3.0|smb3.11|smb3.1.1|ssh|nfs|nfs4|http|https|ram]:[//[user:password@]host[:port]][/]path`

     - There are 5 types of repository can be assigned via `ocs_repository`:
       - local device: dev:///dev/partition, dev:///LABEL|UUID|PARTLABEL|PARTUUID=uuid|label
         LABEL, UUID is from file system, while PARTLABEL or PARTUUID is from the partition of GPT partition tabel.
       - nfs server: `nfs|nfs4://host/path`
       - samba server: `smb://[domain;user:password@]host/path`
       - samba_server with version assigned: `(smb1|smb1.0|smb2|smb2.0|smb2.1|smb3|smb3.0|smb3.11|smb3.1.1)://[domain;user:password@]host/path`
       - ssh server: `ssh://[user@]host[:port]/path` (No password can be assigned in URI)
       - webdav server: `http|https://host[:port]/path` (No username and password can be assigned in URI)
     - Example:
       - ocs_repository="dev:///dev/sdf1"
       - ocs_repository="dev:///LABEL=my-img-repo"
       - ocs_repository="nfs://192.168.100.254/home/partimag/"
       - ocs_repository="nfs4://192.168.100.254/partimag/"
       - ocs_repository="smb://administrator:mypasswd@192.168.100.175/images/"
       - ocs_repository="smb://my_domain;jack:mypasswd@192.168.1.1:445/images/"
       - ocs_repository="ssh://jack@192.168.100.211/home/partimag/"
       - ocs_repository="http://192.168.100.180/share"

     Then when Clonezilla live boots, the image repository assigned by ocs_repository will be automatically mounted, and if authentication is required, it will prompt you.

     > [!INFO] Note <!-- eslint-disable-line markdown/no-missing-label-refs -- GitHub alerts -->
     >
     > - Remember to set the network configuration either by the option `ocs_prerun` to run `dhclient` or the option `ip` if your image repository is a network repository.
     > - You can also use `ocs_prerun` to use your own command to mount your image repository if you like, and that's more flexible if you want to assign more parameters for your mount command.

     - To preset the font name and font size for KMS mode, use `ocs_fontface` and `ocs_fontsize`.
       - e.g. ocs_fontface="TerminusBold"
       - ocs_fontsize="24x12"
       - Check file /etc/default/console-setup and the console-setup(5) manual page on Debian or Ubuntu system.
     - ocs_debug (or ocs-debug) is for you to enter command line prompt before any clonezilla-related action is run. This is easier for you to debug.
     - ocs_daemonon, ocs_daemonoff, ocs_numlk, ocs_capslk.
       - Ex. for the first 2 parameters, ocs_daemonon="ssh", then ssh service will be turned on when booting. For the last 2 parameters, use `on` or `off`, e.g. ocs_numlk=on to turn on numberlock when booting.
     - ocs_prerun, ocs_prerun1, ocs_prerun2... is intended for running a command before an operation of saving/restoring an image or cloning disk/partition is started. E.g. ocs_prerun=`df -h` (For running the system command "df -h", or ocs_prerun="/lib/live/mount/medium/myscript.sh" (For running the script myscript.sh in the root path of the live USB media or CD, i.e. after booting into Clonezilla live, the root path of live USB media or CD is mounted as /lib/live/mount/medium/). If you have more commands to run, you can assign them in the order: ocs_prerun=..., ocs_prerun1=..., ocs_prerun2=.... If more than 10 parameters, remember to use ocs_prerun01, ocs_prerun02..., ocs_prerun11 to make it in order.
     - ocs_postrun, ocs_postrun1, ocs_postrun2... is intended for running a command after an operation of saving/restoring an image or cloning disk/partition has been completed. E.g. ocs_postrun="/live/image/myscript.sh". If you have more commands to run, you can assign them in the order: ocs_postrun=..., ocs_postrun1=..., ocs_postrun2=.... If more than 10 parameters, remember to use ocs_postrun01, ocs_postrun02..., ocs_postrun11 to make it in order.

       > [!INFO] Note <!-- eslint-disable-line markdown/no-missing-label-refs -- GitHub alerts -->
       > If you use this parameter, remember not to use `-p reboot` or `-p poweroff` option of ocs-sr. Use `-p true` instead because if `-p reboot` or `-p poweroff` is used, it will reboot or shutdown the system before ocs_postrun related commands are executed. For more info, check this [discussion](https://sourceforge.net/p/clonezilla/discussion/Help/thread/3ff1a97c/#3d16/f4a9/1a20/0482).

     - ocs_savedisk_prerun, ocs_saveparts_prerun, ocs_restoredisk_prerun, and ocs_restoreparts_prerun. These four boot parameters can be used to run a command right before the action savedisk, saveparts, restoredisk, and restoreparts, respectively. E.g. ocs_restoredisk_prerun="echo running ocs_restoredisk_prerun" means the command `echo running ocs_restoredisk_prerun` will be run right before `restoredisk` action is run.
     - ocs_savedisk_postrun, ocs_saveparts_postrun, ocs_restoredisk_postrun, and ocs_restoreparts_postrun. These four boot parameters can be used to run a command right after the action savedisk, saveparts, restoredisk, and restoreparts, respectively. E.g. ocs_restoredisk_postrun="echo running ocs_restoredisk_postrun" means the command `echo running ocs_restoredisk_postrun` will be run right after `restoredisk` action is run.
     - ocs_overwrite_postaction. This boot parameter has higher priority than the action assigned by option `-p` in ocs-sr, and `-pa` in ocs-onthefly. The value for ocs_overwrite_postaction is: `[choose|reboot|poweroff]-on-[restoredisk|restoreparts|savedisk|saveparts|clone]` E.g., choose-on-restoredisk means the postaction for restoredisk will always be `choose` no matter what is assigned in -p of ocs-sr or -pa of ocs-onthefly.
     - echo_ocs_prerun and echo_ocs_postrun are used to echo the commands of prerun and postrun. By default the command assigned in ocs_prerun or ocs_postrun will be echoed. By using `no` the command won't be echoed. This is useful when you want to hide some commands.
       - e.g. echo_ocs_prerun="no" (Will not show the commands assigned in boot parameter `ocs_prerun`).
     - ocs_live_run_tty. This option allows you to specify the tty where $ocs_live_run is run. By default $ocs_live_run is run on /dev/tty1 only. If you want to make $ocs_live_run use on ttyS0, for example, use ocs_live_run_tty="/dev/ttyS0".

       > [!INFO] Note <!-- eslint-disable-line markdown/no-missing-label-refs -- GitHub alerts -->
       >
       > - The kernel boot parameter `console` (e.g. console=ttyS0,38400n81) is for the GNU/Linux system, while ocs_live_run_tty is for $ocs_live_run. They are different. Therefore you can make GNU/Linux system output the messages on tty1, while make $ocs_live_run run on ttyS1 like: `console=tty1,38400n81 ocs_live_run_tty=/dev/ttyS1`. To make all the output on serial console ttyS1, use: `console=ttyS1,38400n81 ocs_live_run_tty=/dev/ttyS1`
       > - It's recommended to assign locales and keyboard-layouts in the boot parameters too.

     - ip, this option allows you to specify the network parameters for network card. In Clonezilla live a patched live-initramfs is used, which is different from the original live-initramfs so that you can assign DNS server, too. Its format is: ip=ethernet port,IP address, netmask, gateway, DNS. E.g. If you want to assing eth0 with IP address 10.0.100.1, netmask 255.255.255.0, gateway 10.0.100.254, DNS server 8.8.8.8, you can assign the following in the boot parameter:
       - ip=eth0:10.0.100.1:255.255.255.0:10.0.100.254:8.8.8.8
       - If more than one network card, you can use `,` to separate them, e.g.: ip=eth0:10.0.100.1:255.255.255.0:10.0.100.254:8.8.8.8,eth1:192.168.120.1:255.255.255.0:192.168.120.254::
     - ocs_nic_type, this option allows you to assign the network type to configure when `ocs-live-netcfg` is running. It can be `wired` or `wireless`, e.g., ocs_nic_type="wired", then only the wired network device will be prompted to be configured in the Clonezilla TUI.
     - Besides, two parameters could be used to assign the network card for PXE booting, `live-netdev` (yes, not ocs_live_netdev) and `nicif` can be used when using PXE booting,
       1. For `live-netdev`, you can force to assign the network device by its ethernet device name on GNU/Linux, e.g. eth0, eth1, to get filesystem.squashfs. This is useful when there are two or more NICs are linked. E.g. live-netdev="eth1" allows you to force the live-initramfs to use eth1 to fetch the root file system filesystem.squashfs.
       2. For `nicif`, you can force to assign the network device by its MAC address, e.g. 00:aa:bb:cc:dd:ee, to get filesystem.squashfs. This is useful when there are two or more NICs are linked. E.g. nicif="00:aa:bb:cc:dd:ee", allows you to force the live-initramfs to use the ethernet card with MAC address `00:aa:bb:cc:dd:ee` to fetch the root file system filesystem.squashfs.
     - ocs_netlink_timeout, this option allows you to specify the time out (in sec) when detecting the network link. By default it's set as 30 secs. If you want to shorten the timeout, say, make it as 5 secs only, you can set it in the boot paramater as:
       - ocs_netlink_timeout=5

You can find some examples about using these boot parameters in the [Clonezilla Live Doc](./index.md).
