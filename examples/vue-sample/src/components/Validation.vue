<template>
  <h2>Validation</h2>

  <div class="nhsuk-warning-callout">
    <h3 class="nhsuk-warning-callout__label">
      <span role="text">
        <span class="nhsuk-u-visually-hidden">Important: </span>
        Shallow validation
      </span>
    </h3>
    <p>
      This library only validates if the value provided follows the NHS number
      format and <strong>does not</strong> confirm that it is assigned to a
      patient.
    </p>
  </div>

  <div
    class="nhsuk-form-group"
    :class="{
      'nhsuk-form-group--error': !valid,
      'nhsuk-form-group--success': validAndNotEmpty,
    }"
  >
    <label class="nhsuk-label" for="validation-input">
      What is your NHS number?
    </label>
    <div class="nhsuk-hint" id="validation-input-hint">
      Your NHS number is a 10 digit number that you find on any letter the NHS
      has sent you. For example, 443 938 4528.
    </div>

    <span v-if="!valid" class="nhsuk-error-message">
      <span class="nhsuk-u-visually-hidden">Error:</span> This is not a valid
      NHS number
    </span>

    <span v-if="validAndNotEmpty" class="nhsuk-success-message">
      <span class="nhsuk-u-visually-hidden">Success:</span> This is a valid NHS
      number
    </span>

    <input
      class="nhsuk-input nhsuk-input--width-10"
      :class="{
        'nhsuk-input--error': !valid,
        'nhsuk-input--success': validAndNotEmpty,
      }"
      id="validation-input"
      name="validation-input"
      type="text"
      aria-describedby="validation-input-hint"
      inputmode="numeric"
      v-model="nhsNumber"
      @blur="validateInput"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { validate } from '../../../../src/index'

export default defineComponent({
  name: 'Validation',
  data() {
    return {
      valid: true,
      nhsNumber: '',
    }
  },
  computed: {
    validAndNotEmpty: function (): boolean {
      return this.nhsNumber.trim().length >= 10 && this.valid
    },
  },
  methods: {
    validateInput() {
      if (!this.nhsNumber) {
        this.valid = true

        return
      }

      this.valid = validate(this.nhsNumber)
    },
  },
})
</script>
