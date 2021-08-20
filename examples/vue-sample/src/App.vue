<template>
  <header class="nhsuk-header" role="banner">
    <div class="nhsuk-width-container nhsuk-header__container">
      <div class="nhsuk-header__transactional-service-name">
        <a
          class="nhsuk-header__transactional-service-name--link"
          href="https://github.com/rowellx68/valid-nhsnum"
          aria-label="Repo homepage"
          >Github</a
        >
      </div>
    </div>
  </header>
  <div class="nhsuk-width-container">
    <main class="nhsuk-main-wrapper" role="main">
      <h1>NHS Number validator</h1>
      <p class="nhsuk-lede-text">
        This page is demo of the
        <a href="https://github.com/rowellx68/valid-nhsnum">valid-nhsnum</a>
        library which allows you to validate if the NHS number provided is
        valid.
      </p>

      <Validation></Validation>

      <hr class="nhsd-a-horizontal-rule">

      <Generation></Generation>
    </main>
  </div>
  <footer role="contentinfo">
    <div class="nhsuk-footer">
      <div class="nhsuk-width-container"></div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Validation from './components/Validation.vue'
import Generation from './components/Generation.vue'

export default defineComponent({
  name: 'App',
  components: {
    Validation,
    Generation,
  },
})
</script>
