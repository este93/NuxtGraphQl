import Vue from "vue"

const formatDate = function(value) {
  if (!value) {
    return "(n/a)"
  }
  value = value.replace(/ /g, "T")
  value = new Date(value)
  const month = value.toLocaleString("En", { month: "long" })
  return month + " " + value.getDate() + " - " + value.getFullYear()
}


Vue.mixin({
  methods: {
    formatDate: formatDate
  }
})

export default ({ app }, inject) => {
  app.methods.formatDate = formatDate
}