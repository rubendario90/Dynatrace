import React, { useState } from "react";
import { Flex } from "@dynatrace/strato-components/layouts";
import { Heading, Paragraph } from "@dynatrace/strato-components/typography";

// 1. Importamos tu Filtro y tu nueva Gráfica
import { Filtro } from "../components/layouts/Filtros/Filtro"; 
import { CpuChart } from "../components/layouts/Graficos/CpuChart"; // Ajusta la ruta si lo guardaste en otro lado

// Definimos que esta página espera recibir la métrica que seleccionaste en el panel izquierdo
interface DashboardPageProps {
  selectedMetric?: string;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ selectedMetric }) => {
  // 2. Creamos un estado para guardar lo que el usuario escribe en el filtro
  const [activeFilter, setActiveFilter] = useState<string>('');

  return (
    <Flex flexDirection="column" gap={16} padding={16}>
      
      {/* 3. Le pasamos la función setActiveFilter al Filtro para que nos avise cada vez que cambia */}
      <Filtro onChange={setActiveFilter} />
      
      {/* 4. Evaluamos qué métrica seleccionó el usuario en el panel izquierdo */}
      {(selectedMetric === 'CPU' || selectedMetric === 'CPU %') ? (
        <>
          <Heading level={3}>Uso de CPU</Heading>
          
          {/* 5. Le pasamos el texto del filtro directamente a la gráfica */}
          <CpuChart activeFilter={activeFilter} />
        </>
      ) : (
        <Paragraph>
          {selectedMetric 
            ? `Seleccionaste la métrica: ${selectedMetric}. Aquí irá su gráfica en el futuro.` 
            : 'Por favor, selecciona una métrica en el panel izquierdo para comenzar.'}
        </Paragraph>
      )}
      
    </Flex>
  );
};