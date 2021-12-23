import { Text } from '@chakra-ui/react';
import { Hero } from '../components/Hero/Hero';
import { Container } from '../components/utils/Container';
// import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Footer } from '../components/Footer/Footer';
import { TopMainMarquee } from '../components/TopMainMarquee/TopMainMarquee';

const Index = () => (
  <Container>
    <TopMainMarquee />
    <Hero />

    <Footer>
      <Text>Footer</Text>
    </Footer>
  </Container>
);

export default Index;
