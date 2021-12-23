import { Text } from '@chakra-ui/react';
import { Hero } from '../components/Hero/Hero';
import { Container } from '../components/utils/Container';
// import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Footer } from '../components/Footer/Footer';
import { TopMainMarquee } from '../components/TopMainMarquee/TopMainMarquee';
import { Entry } from '../components/Entry/Entry';
import { RegisterMarquee } from '../components/RegisterMarquee/RegisterMarquee';
import { LineUp } from '../components/LineUp/LineUp';

const Index = () => (
  <Container>
    <TopMainMarquee />
    <Hero />
    <Entry />
    <RegisterMarquee />
    <LineUp />
    <Footer>
      <Text>Footer</Text>
    </Footer>
  </Container>
);

export default Index;
