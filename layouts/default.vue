<template>
  <div class="app">
    <Header />
    <main id="main" role="main" class="main">
      <div class="container">
        <h1 class="glitch">
          <span aria-hidden="true">COMING SOON</span>
          COMING SOON
          <span aria-hidden="true">COMING SOON</span>
        </h1>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('@/components/Header.vue'),
    Footer: () => import('@/components/Footer.vue')
  }
}
</script>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  flex-grow: 1;
}
.navbar-menu, .navbar-burger {
  display: none !important;
}
.container {
  margin-bottom: 100px;
  // text-align: center;
  color: #2b3f74;
}
.glitch {
  font-size: 8rem;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;

  text-shadow: 0.05em 0 0 rgba(62, 109, 163,0.75),
    -0.025em -0.05em 0 rgba(60, 136, 187,0.75),
    0.025em 0.05em 0 rgba(126, 183, 214,0.75);

  animation: glitch 500ms infinite;
}

.glitch span {
  position: absolute;
  top: 0;
  left: 0;
}

.glitch span:first-child {
  animation: glitch 650ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  transform: translate(-0.025em, -0.0125em);
  /* color: green; */
  opacity: 0.8;
}

.glitch span:last-child {
  animation: glitch 375ms infinite;
  clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
  transform: translate(0.0125em, 0.025em);
  /* color: red; */
  opacity: 0.8;
}

/* https://web.dev/prefers-reduced-motion/#(bonus)-forcing-reduced-motion-on-all-websites */

@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 rgba(62, 109, 163,0.75),
      -0.05em -0.025em 0 rgba(60, 136, 187,0.75),
      -0.025em 0.05em 0 rgba(126, 183, 214,0.75);
  }
  14% {
    text-shadow: 0.05em 0 0 rgba(62, 109, 163,0.75),
      -0.05em -0.025em 0 rgba(60, 136, 187,0.75),
      -0.025em 0.05em 0 rgba(126, 183, 214,0.75);
  }
  15% {
    text-shadow: -0.05em -0.025em 0 rgba(62, 109, 163,0.75),
      0.025em 0.025em 0 rgba(60, 136, 187,0.75),
      -0.05em -0.05em 0 rgba(126, 183, 214,0.75);
  }
  49% {
    text-shadow: -0.05em -0.025em 0 rgba(62, 109, 163,0.75),
      0.025em 0.025em 0 rgba(60, 136, 187,0.75),
      -0.05em -0.05em 0 rgba(126, 183, 214,0.75);
  }
  50% {
    text-shadow: 0.025em 0.05em 0 rgba(62, 109, 163,0.75),
      0.05em 0 0 rgba(60, 136, 187,0.75), 0 -0.05em 0 rgba(126, 183, 214,0.75);
  }
  99% {
    text-shadow: 0.025em 0.05em 0 rgba(62, 109, 163,0.75),
      0.05em 0 0 rgba(60, 136, 187,0.75), 0 -0.05em 0 rgba(126, 183, 214,0.75);
  }
  100% {
    text-shadow: -0.025em 0 0 rgba(62, 109, 163,0.75),
      -0.025em -0.025em 0 rgba(60, 136, 187,0.75),
      -0.025em -0.05em 0 rgba(126, 183, 214,0.75);
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  ::before,
  ::after {
    animation-delay: -1ms !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    background-attachment: initial !important;
    scroll-behavior: auto !important;
    transition-duration: 0s !important;
    transition-delay: 0s !important;
  }
}
</style>
