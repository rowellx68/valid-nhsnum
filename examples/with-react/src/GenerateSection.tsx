import {
  Heading,
  ReadingWidth,
  WarningCallout,
  Input,
  Checkbox,
  Button,
  Textarea,
} from 'nhsuk-frontend-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { generate } from 'valid-nhsnum';

export const GenerateSection = () => {
  const { register, handleSubmit } = useForm<{
    count: number;
    preFormat: boolean;
  }>({
    defaultValues: {
      count: 1,
      preFormat: true,
    },
  });

  const [numbers, setNumbers] = useState<string[]>([]);

  const onSubmit = (data: { count: number; preFormat: boolean }) => {
    setNumbers(generate(data.count, data.preFormat));
  }

  return (
    <section>
      <Heading as="h2" size="l">
        Generate
      </Heading>

      <ReadingWidth>
        <WarningCallout>
          <WarningCallout.Label>Potentially assigned</WarningCallout.Label>
          <p>
            Due to the randomness of the generator, there is a chance that the
            generated values could have been assigned to a patient.
          </p>
        </WarningCallout>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Number of NHS numbers to generate"
            type="number"
            width="5"
            min={1}
            {...register('count', {
              valueAsNumber: true,
              min: { value: 1, message: 'Generate at least one NHS number' },
            })}
          />

          <Checkbox>
            <Checkbox.Item {...register('preFormat')}>
              Pre-format output
            </Checkbox.Item>
          </Checkbox>
          <Button type="submit">Generate</Button>
        </form>

        <Textarea
          variant="textarea"
          label="Sample NHS numbers"
          hint="These values should be following the NHS number format."
          defaultValue={numbers.join('\n')}
          rows={10}
        />
      </ReadingWidth>
    </section>
  );
};
