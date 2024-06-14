import React from 'react';
import {
  Container,
  Footer,
  Header,
  Heading,
  Link,
  Main,
  Paragraph,
  ReadingWidth,
} from 'nhsuk-frontend-react';
import { ValidationSection } from './ValidationSection';
import { GenerateSection } from './GenerateSection';

export const App = () => {
  return (
    <>
      <Header serviceName="Valid NHS Number">
        <Header.Container>
          <Header.Logo
            href="https://github.com/rowellx68/valid-nhsnum"
            aria-label="Go to the NHS number validator GitHub repository"
          />
        </Header.Container>
      </Header>

      <Container>
        <Main>
          <Heading>NHS Number validator</Heading>
          <ReadingWidth>
            <Paragraph variant="lead">
              This page is demo of the{' '}
              <Link href="https://github.com/rowellx68/valid-nhsnum">
                valid-nhsnum
              </Link>{' '}
              library which allows you to validate if the NHS number provided is
              valid.
            </Paragraph>
          </ReadingWidth>

          <ValidationSection />

          <hr />

          <GenerateSection />
        </Main>
      </Container>
      <Footer />
    </>
  );
};
