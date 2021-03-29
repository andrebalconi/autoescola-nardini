import React from "react";
import styled from "styled-components";
import { FaIdCard, FaHome, FaScroll } from "react-icons/fa";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Button from "components/atoms/Button";
import Footer from "components/organisms/Footer";

import Callout, {
  CalloutBody,
  CallautActions,
  CalloutMedia,
} from "components/atoms/Callout";

import HeroImage from "assets/hero.jpg";
import SpeedImage from "draws/Speed";
import BreadCrumb from "components/atoms/BreadCrumb";
import ProductType from "models/types/ProductType";

const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PinnedItem = styled.li`
  display: inline-block;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;

  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`;

const ProductDetail = ({ product }) => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>{product.title}</h1>
      </Heading>
      <BreadCrumb
        items={[
          { label: "Inicio", link: "/" },
          { label: "Servicos" },
          { label: product.title },
        ]}
      />
    </Hero>
    <Section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Tellus in hac
        habitasse platea dictumst vestibulum rhoncus. Lacus laoreet non
        curabitur gravida arcu ac.
      </p>
      <p>
        Semper viverra nam libero justo laoreet sit amet cursus sit.
        Pellentesque habitant morbi tristique senectus et. Imperdiet proin
        fermentum leo vel orci porta non pulvinar neque.{" "}
      </p>
      <p>
        Sem fringilla ut morbi tincidunt. Risus sed vulputate odio ut enim. Nibh
        ipsum consequat nisl vel pretium lectus. Amet facilisis magna etiam
        tempor.
      </p>
      <h5>Documentos necessarios</h5>
      <PinnedList>
        <PinnedItem>
          <FaIdCard />
          RG
        </PinnedItem>
        <PinnedItem>
          <FaIdCard />
          CPF
        </PinnedItem>
        <PinnedItem>
          <FaScroll />
          Certidao de nascimento ou casamento
        </PinnedItem>
        <PinnedItem>
          <FaHome />
          Comprovante de Residencia
        </PinnedItem>
      </PinnedList>
    </Section>
    <Section inverse>
      <Callout>
        <CalloutBody>
          <h6>Faca a sua matricula agora mesmo</h6>
          <p>Qualquer texto somente para testar como esta ficando</p>
          <CallautActions>
            <Button color="primary">Matricular</Button>
          </CallautActions>
        </CalloutBody>
        <CalloutMedia>
          <SpeedImage />
        </CalloutMedia>
      </Callout>
    </Section>
    <Footer />
  </>
);

ProductDetail.defaultProps = {
  product: {},
};

ProductDetail.propTypes = {
  product: ProductType,
};

export default ProductDetail;
