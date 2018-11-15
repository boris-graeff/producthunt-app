<template>
  <select :value="value" @change="onChange">
    <option v-for="date in $options.selectOptions" :value="date.value" :key="date.value">
      {{ date.label }}
    </option>
  </select>
</template>

<script>
import { format, subDays } from 'date-fns'

const today = new Date()
const selectOptions = Array.from(Array(31).keys(), x => {
  const date = format(subDays(today, x), 'YYYY-MM-DD')
  return { value: date, label: `${x} days ago` }
})

selectOptions[0].label = 'Today'
selectOptions[1].label = 'Yesterday'

export default {
  selectOptions,
  props: ['value'],
  methods: {
    onChange (event) {
      this.$emit('change', event.target.value)
    }
  }
}
</script>
