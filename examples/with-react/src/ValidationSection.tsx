import React from 'react';
import {
  Heading,
  ReadingWidth,
  WarningCallout,
  Input,
  Button,
} from 'nhsuk-frontend-react';
import { useForm } from 'react-hook-form';
import { validate } from 'valid-nhsnum';

export const ValidationSection = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ nhsNumber: string }>();

  return (
    <section>
      <Heading as="h2" size="l">
        Validation
      </Heading>

      <ReadingWidth>
        <WarningCallout>
          <WarningCallout.Label>Shallow validation</WarningCallout.Label>
          <p>
            This library only validates if the value provided follows the NHS
            number format and does not confirm that it is assigned to a patient.
          </p>
        </WarningCallout>

        <form onSubmit={handleSubmit(console.log)}>
          <Input
            label="What is your NHS number?"
            hint="Your NHS number is a 10 digit number that you find on any letter the NHS has sent you. For example, 443 938 4528."
            width="10"
            error={errors.nhsNumber?.message}
            {...register('nhsNumber', {
              required: 'Please enter your NHS number',
              validate: (value) =>
                validate(value) || 'Please enter a valid NHS number',
            })}
          />
          <Button type="submit">Validate</Button>
        </form>
      </ReadingWidth>
    </section>
  );
};
