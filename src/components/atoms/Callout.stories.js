import React from "react";

import Callout, { CalloutBody, CallautActions, CalloutMedia } from "./Callout";
import Button from "components/atoms/Button";

import SpeedImage from "draws/Speed";

export default {
  title: "Components/Atoms/Callout",
  component: Callout,
  subcomponents: { CalloutBody, CallautActions, CalloutMedia },
};

export const usage = () => (
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
);
