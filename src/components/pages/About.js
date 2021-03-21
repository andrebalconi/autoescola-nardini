import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Footer from "components/organisms/Footer";
import Card, { CardMedia, CardMediaDescription } from "components/atoms/Card";

import HeroImage from "assets/hero.jpg";
import AboutImage from "draws/About";
import InstImage1 from "assets/instructors/inst1.jpg";
import InstImage2 from "assets/instructors/inst2.jpg";
import InstImage3 from "assets/instructors/inst3.jpg";
import InstImage4 from "assets/instructors/inst4.jpg";
import InstImage5 from "assets/instructors/inst5.jpg";
import InstImage6 from "assets/instructors/inst6.jpg";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const instructors = [
  { id: 1, name: "Thor", avatar: InstImage1 },
  { id: 2, name: "Mel", avatar: InstImage2 },
  { id: 3, name: "Bolinha", avatar: InstImage3 },
  { id: 4, name: "Mike", avatar: InstImage4 },
  { id: 5, name: "Emmy", avatar: InstImage5 },
  { id: 6, name: "Bob", avatar: InstImage6 },
];

const About = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>Auto Escola Nardini</h1>
      </Heading>
    </Hero>
    <Section>
      <Grid md={2}>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum
            quisque non tellus orci.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In nisl
            nisi scelerisque eu ultrices vitae. Metus dictum at tempor commodo
            ullamcorper.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Suspendisse ultrices gravida dictum fusce ut placerat orci.
          </p>
          <ul>
            <li>
              Laoreet suspendisse interdum consectetur libero id faucibus nisl.
            </li>
            <li>Faucibus a pellentesque sit amet porttitor eget dolor. </li>
            <li>
              Leo duis ut diam quam. Mauris in aliquam sem fringilla ut morbi.{" "}
            </li>
            <li>
              Duis at tellus at urna. Massa tempor nec feugiat nisl pretium
              fusce id velit.
            </li>
            <li>
              Vel elit scelerisque mauris pellentesque pulvinar pellentesque
              habitant.
            </li>
          </ul>
        </div>
        <div>
          <p>
            Lectus urna duis convallis convallis tellus id interdum. Urna neque
            viverra justo nec ultrices dui sapien eget mi. Ullamcorper sit amet
            risus nullam eget felis eget nunc lobortis.
          </p>
          <center>
            <ImageContainer>
              <AboutImage />
            </ImageContainer>
          </center>
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Grid md={2}>
        <div>
          <h4>Missao</h4>
          <p>
            Mauris in aliquam sem fringilla ut morbi. Duis at tellus at urna.
            Consequat id porta nibh venenatis.
          </p>
        </div>
        <div>
          <h4>Visao</h4>
          <p>
            Massa tempor nec feugiat nisl pretium fusce id velit. Consequat id
            porta nibh venenatis.
          </p>
        </div>
      </Grid>
    </Section>
    <Section>
      <Heading>
        <h2>Conheca nossos professores</h2>
      </Heading>
      <Grid sm={2} md={3} lg={4}>
        {instructors.map((instructor) => (
          <Card key={instructor.id}>
            <CardMedia image={instructor.avatar}>
              <CardMediaDescription>
                <h5>{instructor.name}</h5>
              </CardMediaDescription>
            </CardMedia>
          </Card>
        ))}
      </Grid>
    </Section>
    <Footer />
  </>
);

About.defaultProps = {};

About.propTypes = {};

export default About;
