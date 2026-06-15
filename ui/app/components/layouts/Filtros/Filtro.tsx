import React, { useEffect, useRef } from "react";
import {
  FilterField,
  type FilterFieldValidatorMap,
} from '@dynatrace/strato-components/filters';
import {
  type FormControlWithOverlayRef,
  FormField,
  FormFieldMessages,
} from '@dynatrace/strato-components/forms';

// --- CONSTANTES DE VALORES SIMULADOS ---
const defaultValue =
  'Cluster = k8s-cluster-loadtest Namespace = local-dev-namespace-4 ';

const clusterValues = [
  'k8s-cluster-loadtest',
  'k8s-cluster-loadtest-sm',
  'k8s-cluster-e2e',
  'aws-topology',
  'local-dev',
];

const namespaceValues = [
  'kube-public',
  'kube-scheduler',
  'local-dev-namespace-1',
  'local-dev-namespace-2',
  'local-dev-namespace-3',
];

const serviceValues = [
  'frontend-svc',
  'backend-api-svc',
  'auth-service',
  'payment-gateway',
  'database-svc'
];

const workloadValues = [
  'frontend-app',
  'backend-api',
  'payment-worker',
  'auth-daemon'
];

const podValues = [
  'frontend-app-7d9f5c',
  'backend-api-88b42x',
  'payment-worker-123',
  'auth-daemon-zxcv'
];

// --- OPERADORES ---
const allOperators: FilterFieldValidatorMap['comparisonOperators'] = [
  'equals', 
  'not-equals', 
  'in', 
  'not in',
  'less-than', 
  'less-or-equal',
  'greater-than', 
  'greater-or-equal', 
  'exists',
  'not-exists'
];

// --- TODAS LAS LLAVES EXTRAÍDAS DE TUS FOTOS ---
const additionalKeys = [
  'Cluster ID',
  'Distribution',
  'Provider name',
  'Node',
  'Node labels',
  'Node annotations',
  'Node conditions',
  'Namespace labels',
  'Namespace annotations',
  'Workload type',
  'Workload labels',
  'Workload annotations',
  'Workload conditions',
  'Pod state',
  'Pod conditions',
  'Container restarts',
  'OOM events',
  'Ingress',
  'Service type',
  'Service labels',
  'Service annotations',
  'Alert status'
];

// --- MAPA DE VALIDACIÓN ---
const validatorMap: FilterFieldValidatorMap = {
  keyPredicates: [
    {
      key: 'Cluster',
      valuePredicate: clusterValues,
      valueType: 'String',
      comparisonOperators: allOperators,
    },
    {
      key: 'Namespace',
      valuePredicate: namespaceValues,
      comparisonOperators: allOperators,
      valueType: 'String',
    },
    {
      key: 'Service',
      valuePredicate: serviceValues,
      comparisonOperators: allOperators,
      valueType: 'String',
    },
    {
      key: 'Workload',
      valuePredicate: workloadValues,
      comparisonOperators: allOperators,
      valueType: 'String',
    },
    {
      key: 'Pod',
      valuePredicate: podValues,
      comparisonOperators: allOperators,
      valueType: 'String',
    },
    ...additionalKeys.map(key => ({
      key: key,
      comparisonOperators: allOperators,
      valueType: 'String' as const, 
    }))
  ],
  comparisonOperators: allOperators,
  exhaustive: false,
};

// --- NUEVA INTERFAZ PARA RECIBIR LA FUNCIÓN ONCHANGE ---
interface FiltroProps {
  onChange: (filtroString: string) => void;
}

// --- COMPONENTE FILTRO ACTUALIZADO ---
export const Filtro: React.FC<FiltroProps> = ({ onChange }) => {
  const filterFieldRef = useRef<FormControlWithOverlayRef>(null);
  
  useEffect(() => {
    filterFieldRef.current?.validate();
  }, []);

  return (
    <FormField>
      <FilterField
        aria-label="Filter Kubernetes data"
        ref={filterFieldRef}
        defaultValue={defaultValue}
        validatorMap={validatorMap}
        autoSuggestions={true}
        onChange={(value) => onChange(value)} 
      />
      <FormFieldMessages />
    </FormField>
  );
};