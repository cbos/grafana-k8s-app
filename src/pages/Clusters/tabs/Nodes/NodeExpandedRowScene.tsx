import { SceneFlexLayout } from "@grafana/scenes";
import { LabelFilters } from "common/queryHelpers";
import { getPodsScene } from "pages/Workloads/tabs/Pods/Pods";
import { TableRow } from "./types";

export function buildExpandedRowScene(row: TableRow) {

  const node = row.node;

  const staticLabelFilters: LabelFilters = [
    {
        label: 'node',
        op: '=',
        value: `${node}`
    },
  ]

  return new SceneFlexLayout({
    key: row.node,
    width: '100%',
    children: [
      getPodsScene(staticLabelFilters, false, false)
    ],        
  });
}
