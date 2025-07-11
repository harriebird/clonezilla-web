export const enConfig = {
  label: "English",
  lang: "en",
  title: "Clonezilla",
  description:
    "The Free and Open Source Software for Disk Imaging and Cloning.",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Download", link: "/download.md" },
      { text: "About", link: "/about.md" },
      { text: "Docs", link: "/docs/index.md" },
    ],

    sidebar: {
      "/docs": [
        {
          text: "What is Clonezilla?",
          link: "/docs/what-is-clonezilla.md",
        },
        {
          text: "Step-by-step Docs",
          link: "/docs/step-by-step/index.md",
          collapsed: false,
          items: [
            {
              text: "Save disk image",
              link: "/docs/step-by-step/save-disk-image.md",
            },
            {
              text: "Restore disk image",
              link: "/docs/step-by-step/restore-disk-image.md",
            },
            {
              text: "Disk to disk clone",
              link: "/docs/step-by-step/disk-to-disk-clone.md",
            },
            {
              text: "One image to multiple disks",
              link: "/docs/step-by-step/one-image-to-multiple-disks.md",
            },
            {
              text: "Create Recovery Clonezilla",
              link: "/docs/step-by-step/create-recovery-clonezilla.md",
            },
            {
              text: "Preseed options to do job after booting",
              link: "/docs/step-by-step/preseed-options-to-do-job-after-booting.md",
            },
            {
              text: "Started with sshd on and passwd assigned",
              link: "/docs/step-by-step/started-with-sshd-on-and-passwd-assigned.md",
            },
            {
              text: "Add extra driver",
              link: "/docs/step-by-step/add-extra-driver.md",
            },
            {
              text: "Customized script with PXE",
              link: "/docs/step-by-step/customized-script-with-pxe.md",
            },
            {
              text: "Screen session with PXE",
              link: "/docs/step-by-step/screen-session-with-pxe.md",
            },
            {
              text: "Burn Clonezilla live CD",
              link: "/docs/step-by-step/burn-clonezilla-live-cd.md",
            },
            {
              text: "LinuxLive USB creator",
              link: "/docs/step-by-step/linuxlive-usb-creator.md",
            },
            {
              text: "lite server",
              link: "/docs/step-by-step/lite-server.md",
            },
            {
              text: "lite server BT from dev",
              link: "/docs/step-by-step/lite-server-bt-from-dev.md",
            },
            {
              text: "ocs related command manpages",
              link: "/docs/step-by-step/ocs-related-command-manpages.md",
            },
            {
              text: "Misc",
              link: "/docs/step-by-step/misc.md",
            },
          ],
        },
      ],
    },

    footer: {
      message: `From Taiwan to the World <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="var(--vp-c-red-3)" style="display: inline-block" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/></svg></span>`,
      copyright: `<a href="https://free.nchc.org.tw/">Free Software Lab</a>, <a href="https://www.nchc.org.tw/">NCHC (National Center for High-Performance Computing)</a>`,
    },
  },
};
