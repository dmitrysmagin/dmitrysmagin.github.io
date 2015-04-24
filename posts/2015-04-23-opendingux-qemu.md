---
title: Qemu: Using Dingoo a320 OpenDingux rootfs with Malta kernel in Qemu
author: Dmitry Smagin
published: 2015-04-23T00:00:00Z
tags: Qemu, OpenDingux, Buildroot, Dingoo a320, GCW-Zero
---

From the user's point of view this article could be named 'Dingoo a320 emulation in
Qemu' or 'OpenDingux emulation in Qemu' but both are incorrect.

What qemu does emulate is mips Malta board which exists in
[silicon](http://www.linux-mips.org/wiki/MIPS_Malta) and can host several 32 and 64 bit
mips-compatible processors both BIG or LITTLE endian. Hardware-wise it is completely
different from jz47xx SoCs with different memory map and additional hardware.
This means that only Malta kernel could be used in qemu and not Dingoo a320 or GCW-Zero one.
Of course, this kernel's settings could be tweaked according to the situation.

At the same time no one forbids to use any rootfs with Malta kernel and Dingoo a320's
rootfs could be used as well, of course with minor tweaking for qemu's specifics.
This allows to run any software compiled for Dingoo a320 OpenDingux as-is without
recompilation. There are restrictions though: software must be generic and must
use common linux kernel interfaces and devices. So, programs using MXU simd extension
or non-standard devices won't work and probably crash.

The following text could be interesting for developers who would like to test the behavior
of their applications in OpenDingux or debug them in a more comfortable way than with
real devices.

From the point of view of the text above, this is not even an OpenDingux emulation
but rather a fair OpenDingux port for Malta board being run inside qemu.

*Note: When 'rootfs' is mentioned here, it's about Dingoo a320 OpenDingux rootfs
(cpu: mips32 r1 soft-float) if the contrary is not explicitely stated.*

## Building up a modified Malta kernel

First a kernel should be prepared which is standard Malta kernel except for a small
hack for cirrusfb driver. The following implies that you have mipsel toolchain located
at /opt otherwise download from [here](http://www.treewalker.org/opendingux/opendingux-toolchain.2012-06-16.tar.bz2) and unpack to /opt.
Other changes include special defconfig options to accomodate closer to what
OpenDingux expects from kernel.

The most notable setting is:

````
CONFIG_CMDLINE="boot=/dev/sda loop0=/boot/rootfs.bin root=/dev/loop0 video=cirrusfb:320x240-16@60"
````

This relates to rootfs placement on disk image we create later.

````
> git clone -b jz-3.16-qemu  https://github.com/dmitrysmagin/linux.git
> cd linux
> export ARCH=mips
> export CROSS_COMPILE=/opt/opendingux-toolchain/usr/bin/mipsel-linux-
> make gcw0-qemu_defconfig
> make
````

Despite the name 'gcw-qemu_defconfig' it has little to do with GCW-Zero hardware. In fact
it's a greatly reduced 'malta_defconfig' with some elements needed for OpenDingux
(e.g. using initramfs with tree.txt and mininit).

After compilation is complete vmlinux is created and that what is needed for qemu. This
kernel can run both modified Dingoo a320's rootfs and GCW-Zero's rootfs.

## Building up OpenDingux rootfs with buildroot

Second a rootfs image is needed, and buildroot system is used for creating it.
In this case a slightly modified OpenDingux rootfs for Dingoo a320 is used.
This means that it can also be used with Dingoo a380, Ritmix RZX50 and qemu, and
all binaries compiled for Dingoo a320 OpenDingux could be runned as-is.

````
> git clone -b opendingux-2012.11 https://github.com/dmitrysmagin/opendingux-buildroot.git
> cd opendingux-buildroot
> make a380_defconfig
> make
````

After some hours of work if no error, the file we need will be located at
output/images/rootfs.squashfs

## Preparing a disk image

Rootfs itself is of little use if no third-party programs are installed. Besides the kernel
command line implies that rootfs.bin itself is located on other disk.
So, here's the scheme:

````
> dd if=/dev/zero of=512M bs=1M count=512
> mkdosfs 512M
> sudo mount 512M /mnt/
> sudo cp rootfs.squashfs /mnt/rootfs.bin
> sudo mkdir /mnt/local /mnt/local/apps /mnt/local/home /mnt/local/etc
> # copy some more software to /mnt/local/apps and unmount
> sudo umount /mnt/
````

## Running qemu on Linux host

Qemu should be already installed on your system otherwise do

````
> sudo apt-get install qemu
````

At the time of writing, the latest version is 2.2.0 but no harm if an older
one is used (at least 1.3.0 worked fine).
Now it's time to burst into action. Typical script to run qemu would look like:

````
#!/bin/sh

MACHINE="-M malta -m 256"
FIRMWARE="-kernel vmlinux -hda 512M"
HARDWARE="-sdl -soundhw ac97 -usbdevice keyboard -k en-us -rtc clock=vm"
NETWORK="-net nic,model=e1000 -net user"
SERIAL="-serial stdio -monitor none"

qemu-system-mipsel $MACHINE $FIRMWARE $HARDWARE $NETWORK $SERIAL

````

The explanation is obvious: '-M malta -m 256' for Malta board with 256 megabytes of RAM.
'-kernel vmlinux -hda 512M' for the generated kernel and disk image,
'-serial stdio' for redirecting serial output to console, other settings for enabling
sound, usb keyboard and network card. If no error, the kernel booting log will
immediately appear which ends with login prompt. Type 'root' to log in.

````
opendingux:/boot/local/home #
````

Note that network setup given by '-net nic,model=e1000 -net user' is very simple and
doesn't allow complicated interaction between guest and host.

````
opendingux:/boot/local/home # ifconfig
eth0      Link encap:Ethernet  HWaddr 52:54:00:12:34:56
          inet addr:10.0.2.15  Bcast:10.0.2.255  Mask:255.255.255.0
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:2 errors:0 dropped:0 overruns:0 frame:0
          TX packets:2 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:1180 (1.1 KiB)  TX bytes:656 (656.0 B)

lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)

opendingux:/boot/local/home #
````

DNS should be running at 10.0.2.3, so it's possible to access remote servers
from guest using ordinary urls; such tools like ssh/sftp and wget work
flawlessly.

It's even possible to access from guest to host using ssh/sftp:

````
opendingux:/boot/local/home # sftp username@10.0.2.2
````

Note, that vice-versa, i.e. connecting from host to guest is not possible without
special network settings.

![Running Qemu on Linux](/files/2015-04-23-opendingux-qemu/qemu-linux-02.png)

![Sound card as AlsaMixer sees it. Note that sound is disabled on each boot,
so run AlsaMixer to fix it.](/files/2015-04-23-opendingux-qemu/qemu-linux-03.png)

![System Info reporting](/files/2015-04-23-opendingux-qemu/qemu-linux-04.png)

![Let's play some Giana Sisters](/files/2015-04-23-opendingux-qemu/qemu-linux-05.png)

## Running qemu on Windows host

Using qemu on Windows is somewhat tricky, and some parameters should be set in a weird
way. Latest Qemu 2.2.0 binary could be downloaded
[here](http://lassauge.free.fr/qemu/release/Qemu-2.2.0-windows.zip)

Here's the example of run.bat:

````
@CLS
set PORTFWD=hostfwd=tcp::21-:21,hostfwd=tcp::22-:22,hostfwd=tcp::23-:23

set MACHINE=-M malta -m 256
set FIRMWARE=-kernel vmlinux -hda 512M
set HARDWARE=-sdl -soundhw ac97 -usbdevice keyboard -k en-us -rtc clock=vm
set NETWORK=-net nic,model=e1000 -net user,%PORTFWD%
set SERIAL=-serial telnet:127.0.0.1:5555,server,nowait

set SETTINGS=%MACHINE% %FIRMWARE% %HARDWARE% %NETWORK% %SERIAL%

qemu-system-mipselw -L BIOS %SETTINGS%
````

Note that the combination of '-sdl -usbdevice keyboard -k en_us' is very important. If you
omit one part you'll happen to have non-working keyboard. Why so? Normally one would
use '-usbdevice keyboard' but for some reason arrow-keys are not working. If qemu version
is lower than 2.0.0 then adding '-k en_us' cures this bug. That's not the case for 2.0.0
and above because now gtk is used for output and arrow-keys are not working again. This
is where adding '-sdl' helps the situation.

The other annoying thing is Windows console (cmd.exe) which doesn't work right with
escape sequences. Moreover, SDL.dll completely hijacks the stdio output and redirects
it to a file stdio.txt, so using -serial stdio is impossible.

That's why a special redirection is used: '-serial telnet:127.0.0.1:5555,server,nowait'
which means that serial will be fed to localhost on port 5555 using qemu as server and
qemu will not wait for connection.

This trick works on Linux hosts as well and using
'telnet localhost 5555' is possible to access to serial output but it's fairly
overcomplicating since usual stdio is just fine.

Network should work just like with Linux host, the only difference that it's not
possible to ssh/sftp from guest to host via 10.0.2.2

![Qemu runs on Windows and scales up gmenu2x](/files/2015-04-23-opendingux-qemu/qemu-win1.png)

![System Info shows MIPS Malta processor](/files/2015-04-23-opendingux-qemu/qemu-win2.png)


## Setting up Putty to catch serial output from qemu

To catch the redirected serial one would use a simple Putty application, download
is [here](http://the.earth.li/~sgtatham/putty/latest/x86/putty.exe)

First run qemu, then putty. Set Host Name to localhost, Port to 5555, Connection type
to telnet and Saved Sessions to 'telnet' or any other name. Press Save and you are done.
Optionally, Window -> Translation -> Remote character set could be set to UTF-8.
Double click on the 'telnet' and press any key on black screen.
Normally, there would be some output.

![Setting up Putty for qemu](/files/2015-04-23-opendingux-qemu/qemu-win3.png)

![Character encoding](/files/2015-04-23-opendingux-qemu/qemu-win4.png)

![Putty connected to qemu](/files/2015-04-23-opendingux-qemu/qemu-win5.png)

## Precompiled qemu binaries for Windows

[Link 1](http://lassauge.free.fr/qemu/QEMU_on_Windows.html)

[Link 2](http://www.omledom.com/)

[Link 3](http://qemu.weilnetz.de/)

