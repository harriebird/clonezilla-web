export const enConfig = {
  label: "English",
  lang: "en",
  title: "Clonezilla",
  description:
    "The Free and Open Source Software for Disk Imaging and Cloning.",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs/index.md" },
      { text: "About", link: "/about.md" },
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
            { text: "Disk to disk clone", link: "#" },
            { text: "One image to multiple disks", link: "#" },
            { text: "Create Recovery Clonezilla", link: "#" },
            { text: "Preseed options to do job after booting", link: "#" },
            { text: "Started with sshd on and passwd assigned", link: "#" },
            { text: "Add extra driver", link: "#" },
            { text: "Customized script with PXE", link: "#" },
            { text: "Screen session with PXE", link: "#" },
            { text: "Burn Clonezilla live CD", link: "#" },
            { text: "LinuxLive USB creator", link: "#" },
            { text: "lite server", link: "#" },
            { text: "lite server BT from dev", link: "#" },
            { text: "ocs related command manpages", link: "#" },
            { text: "Misc", link: "#" },
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
