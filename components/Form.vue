<template>
  <section id="contact" class="section has-background-primary">
    <div class="container">
      <h2 v-if="!status" class="title is-3 content has-text-centered has-text-white">
        Contattaci
      </h2>

      <form v-if="!status" @submit="sendForm">
        <div class="columns">
          <div class="column">
            <b-field label="Nome" class="has-text-white">
              <b-input
                type="text"
                name="nome expanded"
                placeholder="Il tuo nome"
              />
            </b-field>
          </div>
          <div class="column">
            <b-field label="Email" class="has-text-white">
              <b-input
                type="email"
                name="email expanded"
                placeholder="La tua email"
                required
              />
            </b-field>
          </div>
        </div>
        <b-field label="Messaggio" class="has-text-white">
          <b-input
            type="textarea"
            name="messaggio"
            placeholder="Il tuo messaggio"
            required
          />
        </b-field>
        <b-field>
          <!-- Label left empty for spacing -->
          <p class="control">
            <button class="button is-fullwidth" type="submit">
              Invia
            </button>
          </p>
        </b-field>
      </form>

      <h1 v-if="status === 'success'">
        Grazie!
      </h1>
      <p v-if="status === 'success'">
        Abbiamo ricevuto il tuo messaggio
      </p>
      <h1 v-if="status === 'error'">
        Qualcosa è andato storto!
      </h1>
      <p v-if="status === 'error'">
        Prova nuovamente o scrivi a info@scaligeravaleggiorugby.com
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      status: null,
      email: null,
      message: null
    }
  },
  methods: {
    sendForm (event) {
      event.preventDefault()

      fetch('https://formcarry.com/s/LkmE2sLfI6LW', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({ email: this.email, message: this.message })
      })
        .then(response => response.json())
        .then((response) => {
          if (response.code === 200) {
            this.status = 'success'
          } else {
            // Formcarry error
            this.status = 'error'
          }
        })
        // network error
        .catch(() => (this.status = 'error'))
    }
  }
}
</script>

<style lang="scss">
.has-text-white label.label {
  color: #fff;
}
</style>
