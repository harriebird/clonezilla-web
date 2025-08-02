# Add extra driver

How to put your own binary driver in Clonezilla live without modifying /live/filesystem.squashfs

## How to put your own binary driver in Clonezilla live without modifying /live/filesystem.squashfs

1. Boot clonezilla live
2. Become root by running `sudo su -`
3. Copy the dir lsi, which contains a precompiled kernel module matching the running kernel in Clonezilla live and a script to run it, to a working dir, e.g.:<br>
   `cp -r /live/image/lsi /home/partimag`
4. `cd /home/partimag`
5. `ocs-live-dev -c -s -i lsi -u lsi -x "ocs_prerun=/live/image/lsi/prep-lsi.sh"`
6. `ocs-iso -s -i lsi -u lsi -x "ocs_prerun=/live/image/lsi/prep-lsi.sh"`

> [!INFO] Note<!-- eslint-disable-line markdown/no-missing-label-refs -- GitHub alerts -->
> In this example, the 2 files in dir lsi are: megasr.ko (the binary driver) and prep-lsi.sh. The contents of prep-lsi.sh:
>
> ```shell
> #!/bin/bash
> cp -f /live/image/lsi/megasr.ko /lib/modules/`uname -r`/kernel/drivers/block/
> chown root.root /lib/modules/`uname -r`/kernel/drivers/block/megasr.ko
> depmod -a modprobe megasr
> sleep 1
> ```

For more boot parameters, please refer to [this doc](./misc.md#the-boot-parameters-for-clonezilla-live).
