# What is Clonezilla?

Clonezilla is a partition and disk imaging/cloning program similar to [True Image®](https://en.wikipedia.org/wiki/Acronis_True_Image) or [Norton Ghost®](https://en.wikipedia.org/wiki/Ghost_%28software%29). It helps you to do
system deployment, bare metal backup and recovery. Three types of Clonezilla are available, Clonezilla live, Clonezilla
lite server, and Clonezilla SE (server edition). Clonezilla live is suitable for single machine backup and restore.
While Clonezilla lite server or SE is for massive deployment, it can clone many (40 plus!) computers simultaneously.
Clonezilla saves and restores only used blocks in the hard disk. This increases the clone efficiency. With some
high-end hardware in a 42-node cluster, a multicast restoring at rate 8 GB/min was reported.

## Features

- Many File systems are supported: (1) ext2, ext3, ext4, reiserfs, reiser4, xfs, jfs, btrfs (testing), f2fs and nilfs2 of GNU/Linux, (2) FAT12, FAT16, FAT32, exFAT and NTFS of MS Windows, (3) HFS+ and APFS of Mac OS, (4) UFS of FreeBSD, NetBSD, and OpenBSD, (5) minix of Minix, and (6) VMFS3 and VMFS5 of VMWare ESX. Therefore you can clone GNU/Linux, MS windows, Intel-based Mac OS, FreeBSD, NetBSD, OpenBSD, Minix, VMWare ESX and Chrome OS/Chromium OS, no matter it's 32-bit (x86) or 64-bit (x86-64) OS. For these file systems, only used blocks in partition are saved and restored by Partclone. For unsupported file system, sector-to-sector copy is done by dd in Clonezilla.
- LVM2 (LVM version 1 is not) under GNU/Linux is supported.
- LUKS (Linux Unified Key Setup) is supported.
- Boot loader, including grub (version 1 and version 2) and syslinux, could be reinstalled.
- Both MBR and GPT partition formats of hard drive are supported. Clonezilla live also can be booted on a BIOS or uEFI machine.
- Unattended mode is supported. Almost all steps can be done via commands and options. You can also use a lot of boot parameters to customize your own imaging and cloning.
- One image restoring to multiple local devices is supported.
- Image could be encrypted. This is done with ecryptfs, a POSIX-compliant enterprise cryptographic stacked filesystem.
- Multicast is supported in Clonezilla SE, which is suitable for massive clone. You can also remotely use it to save or restore a bunch of computers if PXE and Wake-on-LAN are supported in your clients.
- Bittorrent (BT) is supported in Clonezilla lite server, which is suitable for massive deployment. The job for BT mode is done by Ezio.
- Massive deployment directly from the disk of a machine with multicast or BT mechanism.
- The image file can be on local disk, ssh server, samba server, NFS server or WebDAV server.
- AES-256 encryption could be used to secures data access, storage and transfer.
- Based on Partclone (default), Partimage (optional), ntfsclone (optional), or dd to image or clone a partition. However, Clonezilla, containing some other programs, can save and restore not only partitions, but also a whole disk.
- By using another free software drbl-winroll, which is also developed by us, the hostname, group, and SID of cloned MS windows machine can be automatically changed.

## Minimum System Requirements for Clonezilla live

- X86 or x86-64 processor
- 196 MB of system memory (RAM)
- Boot device, e.g. CD/DVD Drive, USB port, PXE, or hard drive

## License

Clonezilla itself is licensed under the GNU General Public License (GPL) Version 2. However, to run Clonezilla, a lot of free and open source software, e.g. the Linux kernel and a minimal GNU/Linux OS, are required.

## Which Clonezilla Shall I Use?

- Clonezilla Live: Clonezilla live allows you to use CD/DVD or USB flash drive to boot and run clonezilla (Unicast only)
- Clonezilla lite server: Clonezilla lite server allows you to use Clonezilla live to do massively cloning (unicast, broadcast, multicast, bittorrent are supported)
- Clonezilla SE: Clonezilla SE is included in DRBL, therefore a DRBL server must first be set up in order to use Clonezilla to do massively cloning (unicast, broadcast and multicast are supported)
