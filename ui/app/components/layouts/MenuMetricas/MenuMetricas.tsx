import React, { useState, SyntheticEvent } from "react";
import { Button } from "@dynatrace/strato-components/buttons";
import { Label } from "@dynatrace/strato-components/forms";
import { Menu } from "@dynatrace/strato-components/navigation";
import Spacings from "@dynatrace/strato-design-tokens/spacings";

// Le decimos que va a recibir una función para avisar qué se seleccionó
interface MenuMetricasProps {
  onSelectMetric: (metric: string) => void;
}

export const MenuMetricas: React.FC<MenuMetricasProps> = ({
  onSelectMetric,
}) => {
  const [selected, setSelected] = useState("");

  const onItemSelected = (event: SyntheticEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLElement) {
      const metricName = event.target.innerText;
      setSelected(metricName);
      onSelectMetric(metricName); // ¡Aquí le avisamos al resto de la app!
    }
  };

  return (
    <div style={{ padding: Spacings.Size16 }}>
      <Menu>
        <Menu.Trigger>
          <Button variant="accent" color="primary" style={{ width: "100%" }}>
            Filtrar por Métricas
          </Button>
        </Menu.Trigger>
        <Menu.Content>
          <Menu.Sub>
            <Menu.SubTrigger>CPU</Menu.SubTrigger>
            <Menu.SubContent>
              <Menu.Item onSelect={onItemSelected}>CPU</Menu.Item>
              <Menu.Item onSelect={onItemSelected}>CPU %</Menu.Item>
            </Menu.SubContent>
          </Menu.Sub>
          <Menu.Sub>
            <Menu.SubTrigger>MEMORIA</Menu.SubTrigger>
            <Menu.SubContent>
              <Menu.Item onSelect={onItemSelected}>MEMORIA</Menu.Item>
              <Menu.Item onSelect={onItemSelected}>MEMORIA %</Menu.Item>
            </Menu.SubContent>
          </Menu.Sub>
          <Menu.Sub>
            <Menu.SubTrigger>PODS</Menu.SubTrigger>
            <Menu.SubContent>
              <Menu.Item onSelect={onItemSelected}>PODS</Menu.Item>
            </Menu.SubContent>
          </Menu.Sub>
          <Menu.Sub>
            <Menu.SubTrigger>LOGS</Menu.SubTrigger>
            <Menu.SubContent>
              <Menu.Item onSelect={onItemSelected}>LOGS</Menu.Item>
            </Menu.SubContent>
          </Menu.Sub>
        </Menu.Content>
      </Menu>

      {selected && (
        <div style={{ marginTop: Spacings.Size16 }}>
          <p>
            Filtro activo: <Label>{selected}</Label>
          </p>
        </div>
      )}
    </div>
  );
};
