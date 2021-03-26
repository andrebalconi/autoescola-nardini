import React from "react";

import BreadCrumb from "./BreadCrumb";

export default {
  title: "Components/Atoms/BreadCrumb",
  component: BreadCrumb,
};

const items = [{ label: "Inicio", link: "/" }, { label: "Sobre" }];

export const usage = () => <BreadCrumb items={items} />;
