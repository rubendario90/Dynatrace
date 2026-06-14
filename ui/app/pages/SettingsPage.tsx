import React from "react";
import { Flex } from "@dynatrace/strato-components/layouts";
import { Heading, Paragraph } from "@dynatrace/strato-components/typography";

export const DashboardPage = () => {
  return (
    <Flex flexDirection="column" gap={16} padding={16}>
      <Heading level={3}>Welcome to Dashboard</Heading>
      <Paragraph>Your main content goes here.</Paragraph>
      
      {/* Aquí en el futuro pondrás tus gráficas, tablas y botones reales */}
      
    </Flex>
  );
};