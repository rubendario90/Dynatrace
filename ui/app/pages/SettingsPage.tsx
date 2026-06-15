import React from "react";
import { Flex } from "@dynatrace/strato-components/layouts";
import { Heading, Paragraph } from "@dynatrace/strato-components/typography";

export const SettingsPage = () => {
  return (
    <Flex flexDirection="column" gap={16} padding={16}>
      <Heading level={3}>Settings</Heading>
      <Paragraph>Configuración de la aplicación.</Paragraph>
    </Flex>
  );
};