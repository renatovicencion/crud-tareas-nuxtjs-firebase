<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxtjs-1
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Esta es mi página de inicio',
    meta: [
      {hid: 'description', name: 'description', content: 'Esta es la descripción de mi página de inicio'}
    ]
  }
}
</script>