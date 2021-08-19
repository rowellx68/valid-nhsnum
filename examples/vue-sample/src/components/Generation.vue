<template>
  <fieldset class="nhsuk-fieldset">
    <legend class="nhsuk-fieldset__legend nhsuk-fieldset__legend--l">
      <h2 class="nhsuk-fieldset__heading">Generation</h2>
    </legend>

    <div class="nhsuk-form-group">
      <div class="nhsuk-hint">
        The number of sample NHS numbers you want to generate.
      </div>
      <input
        class="nhsuk-input nhsuk-input--width-4"
        id="count-input"
        name="count-input"
        type="number"
        min="1"
        max="50"
        v-model="count"
      />
    </div>

    <div class="nhsuk-form-group">
      <div class="nhsuk-hint">
        Tick this box if you want the generated NHS numbers to be pre-formatted.
      </div>

      <div class="nhsuk-checkboxes">
        <div class="nhsuk-checkboxes__item">
          <input
            class="nhsuk-checkboxes__input"
            id="preformat-output"
            name="preformat"
            type="checkbox"
            v-model="preformatted"
          />
          <label
            class="nhsuk-label nhsuk-checkboxes__label"
            for="preformat-output"
          >
            Pre-format output
          </label>
        </div>
      </div>
    </div>

    <button class="nhsuk-button" type="submit" @click="generateSample">
      Generate
    </button>

    <div class="nhsuk-form-group">
      <label class="nhsuk-label" for="generated-output">
        Sample NHS numbers
      </label>
      <div class="nhsuk-hint" id="generated-output-hint">
        These values should be following the NHS number format.
      </div>
      <textarea
        class="nhsuk-textarea"
        id="generated-output"
        name="generated-output"
        rows="5"
        aria-describedby="generated-output-hint"
        v-model="output"
      ></textarea>
    </div>
  </fieldset>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { generate } from '../../../../src/index'

export default defineComponent({
  name: 'Generation',
  data() {
    return {
      count: 5,
      preformatted: true,
      output: '',
    }
  },
  computed: {
    validCount(): number {
      const parsed = parseInt(`${this.count}`)

      return parsed === NaN
        ? 1
        : parsed
    }
  },
  methods: {
    generateSample(ev: MouseEvent) {
      ev.stopPropagation()
      ev.preventDefault()

      this.output = generate(this.validCount, this.preformatted).join('\r\n')
    },
  },
})
</script>
