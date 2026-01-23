<script setup>
import { useSidebar } from "vitepress/theme";

const { hasSidebar } = useSidebar();
</script>

<template>
  <footer class="page-footer" :class="{ 'has-sidebar': hasSidebar }">
    <div class="container">
      <p class="message">
        From Taiwan to the World
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="var(--vp-c-red-3)"
            style="display: inline-block"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
            /></svg
        ></span>
      </p>
      <p class="copyright">
        <a href="https://free.nchc.org.tw/">Free Software Lab</a>,
        <a href="https://www.nchc.org.tw/"
          >NCHC (National Center for High-Performance Computing)</a
        >
      </p>
      <div
        style="
          margin-left: auto;
          margin-right: auto;
          width: 180px;
          margin-top: 1em;
        "
      >
        <a
          href="https://www.clustrmaps.com/map/clonezilla.org"
          title="Visitor Map for clonezilla.org"
          target="_blank"
          ><img
            alt="Clustermaps thumbnail"
            loading="lazy"
            src="https://www.clustrmaps.com/map_v2.png?u=CCBf&d=bmkqu3_7K1DtIMVDM4DA1fNTdXlQ-1t6hcXC6H3FY6g"
        /></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.page-footer {
  position: relative;
  z-index: var(--vp-z-index-footer);
  border-top: 1px solid var(--vp-c-gutter);
  padding: 32px 24px;
  background-color: var(--vp-c-bg);
}

.page-footer.has-sidebar {
  padding-right: calc((100vw - var(--vp-layout-max-width)) / 2);
  padding-left: calc(
    (100vw - var(--vp-layout-max-width)) / 2 + var(--vp-sidebar-width)
  );
}

.container {
  margin: 0 auto;
  max-width: var(--vp-layout-max-width);
  text-align: center;
}

.message,
.copyright {
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
</style>
