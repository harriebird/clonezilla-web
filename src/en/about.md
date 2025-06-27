---
layout: page
---

<script setup>
import {
    VPTeamPage,
    VPTeamPageTitle,
    VPTeamMembers
} from 'vitepress/theme';

const developers = [
    {
        avatar: 'https://avatars.githubusercontent.com/u/191970523',
        name: 'Steven Shiau',
        title: 'steven _at_ clonezilla org, steven _at_ stevenshiau org',
        links: [
            { icon: 'webtrees', link: 'https://www.stevenshiau.org/' }
        ]
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/191970523',
        name: 'K. L. Huang',
        title: 'klhaung _at_ gmail com',
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/191970523',
        name: 'Ceasar Sun',
        title: 'ceasar _at_ nchc org tw, ceasar _at_ clonezilla org',
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/191970523',
        name: 'Jazz Wang',
        title: 'jazzwang.tw _at_ gmail com',
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/191970523',
        name: 'Thomas Tsai',
        title: 'thomas _at_ nchc org tw, thomas _at_ clonezilla org',
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/191970523',
        name: 'Jean-Francois Nifenecker',
        title: 'jean-francois.nifenecker _at_ laposte net',
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/191970523',
        name: 'Louie Chen',
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/191970523',
        name: 'Nagappan Alagappan',
        title: 'nagappan _at_ gmail com',
    },
];
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      About Clonezilla
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="developers" />
</VPTeamPage>
