import React from "react";
import { Flex } from "@dynatrace/strato-components/layouts";
import { Heading, Paragraph } from "@dynatrace/strato-components/typography";

export const AnalyticsPage = () => {
  return (
    <Flex flexDirection="column" gap={16} padding={16}>
      <Heading level={3}>Analytics</Heading>
      <Paragraph>Aquí irá tu análisis de datos.</Paragraph>
    </Flex>
  );
};