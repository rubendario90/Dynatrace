import React from 'react';
import { TimeseriesChart } from '@dynatrace/strato-components/charts';
// Nota: Para ejecutar DQL real necesitarás importar el hook de Dynatrace
// import { useDqlQuery } from '@dynatrace-sdk/react-hooks';

interface CpuChartProps {
  activeFilter: string;
}

// 1. FUNCIÓN PARA TRADUCIR EL FILTRO VISUAL A DQL
const translateFilterToDQL = (stratoFilter: string) => {
  if (!stratoFilter) {
    // Si no hay nada seleccionado, usamos tu filtro por defecto
    return 'k8s.cluster.name == "aks-playground"';
  }

  // Reemplazamos los nombres bonitos por las propiedades reales de DQL
  return stratoFilter
    .replace(/Cluster/g, 'k8s.cluster.name')
    .replace(/Namespace/g, 'k8s.namespace.name')
    .replace(/Pod/g, 'k8s.pod.name')
    // El Strato usa un solo "=" pero DQL requiere "==" para equals
    .replace(/ = /g, ' == '); 
};

export const CpuChart: React.FC<CpuChartProps> = ({ activeFilter }) => {
  
  // 2. GENERAMOS EL STRING DEL FILTRO DQL
  const dqlFilterCondition = translateFilterToDQL(activeFilter);

  // 3. INYECTAMOS EL FILTRO EN TU QUERY ESPECTACULAR
  // Usamos ${dqlFilterCondition} para que se actualice dinámicamente
  const myDqlQuery = `
    timeseries result = sum(dt.kubernetes.container.cpu_usage, default: 0, rollup: sum, rate: 1m),
      nonempty: true,
      by: {k8s.cluster.name},
      filter: ${dqlFilterCondition} | fieldsAdd metricName = "CPU usage"
    | append[timeseries result = sum(dt.kubernetes.container.cpu_throttled, default: 0, rollup: sum, rate: 1m),
      nonempty: true,
      by: {k8s.cluster.name},
      filter: ${dqlFilterCondition} | fieldsAdd metricName = "CPU throttled"]
    | append[timeseries result = sum(dt.kubernetes.container.requests_cpu, rollup: sum, rate: 1m),
      by: {k8s.cluster.name},
      filter: ${dqlFilterCondition} | fieldsAdd metricName = "CPU requests"]
    | append[timeseries result = sum(dt.kubernetes.container.limits_cpu, rollup: sum, rate: 1m),
      by: {k8s.cluster.name},
      filter: ${dqlFilterCondition} | fieldsAdd metricName = "CPU limits"]
    | append[timeseries result = sum(dt.kubernetes.node.cpu_allocatable, rollup: sum, rate: 1m),
      by: {k8s.cluster.name},
      filter: ${dqlFilterCondition} | fieldsAdd metricName = "CPU allocatable"]
  `;

  // === AQUÍ SE EJECUTARÍA TU QUERY EN EL ENTORNO REAL ===
  // const { data, isLoading } = useDqlQuery({ body: { query: myDqlQuery } });
  
  // Para ver cómo se está construyendo tu query internamente, 
  // abre la consola del navegador (F12) y búscalo ahí.
  console.log("EJECUTANDO QUERY DQL:", myDqlQuery);

  return (
    <div style={{ height: '400px', width: '100%', marginTop: '24px' }}>
      {/* Cuando integres useDqlQuery, le pasarás los datos a TimeseriesChart 
        y utilizarás variables como isLoading para mostrar un spinner
      */}
      <p style={{ color: 'gray', fontSize: '12px' }}>
        <em>Filtro DQL Aplicado: {dqlFilterCondition}</em>
      </p>
      
      <TimeseriesChart
        data={[]} // Aquí irá tu 'data' mapeada desde useDqlQuery
        variant="line"
        gapPolicy="connect"
      >
        <TimeseriesChart.Tooltip />
        <TimeseriesChart.Legend />
      </TimeseriesChart>
    </div>
  );
};