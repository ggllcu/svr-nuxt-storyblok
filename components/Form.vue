<template>
  <section id="contact" class="row has-background-primary">
    <div class="container">
      <h2 v-if="!status" class="title is-3 content has-text-centered has-text-white">
        Contattaci
      </h2>

      <form id="contact" name="contact" method="POST">
        <!-- Start Netlify generated inputs -->
        <input type='hidden' name='form-name' value='svr_contact' />
        <input name="bot-field" class="is-hidden" />
        <!-- End Netlify generated inputs -->
        <div class="columns">
          <div class="column">
            <b-field label="Nome" class="has-text-white">
              <b-input
                type="text"
                name="nome"
                placeholder="Il tuo nome"
              />
            </b-field>
          </div>
          <div class="column">
            <b-field label="Email" class="has-text-white">
              <b-input
                type="email"
                name="email"
                placeholder="La tua email"
                required
              />
            </b-field>
          </div>
        </div>
        <b-field label="Messaggio" class="has-text-white">
          <b-input
            type="textarea"
            name="message"
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
      <h1 v-if="status === 'error'" class="has-text-white">
        Qualcosa è andato storto!
      </h1>
      <p v-if="status === 'error'" class="has-text-white">
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
  }
}
</script>

<style lang="scss">
.has-text-white label.label {
  color: #fff;
}
</style>
