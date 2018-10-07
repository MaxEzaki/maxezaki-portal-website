<template>
  <form
    name="ask-qa-panel"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="ask-team-vue" />
    <label v-for="(panelist, index) in panelists" :key="index">
      <input
        type="radio"
        name="panelist"
        :value="panelist"
        :checked="panelist === defaultPanelist"
      />
      <span>{{ panelist }}</span>
    </label>
  </form>
</template>
<script>
export default {
  name: "QAForm",
  data () {
    return {
      panelists: ['Evan You', 'Chris Fritz'],
      defaultPanelist: 'Evan You'
    }
  },
}
</script>