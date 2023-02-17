import { ReactElement } from "react";

export interface ILeftPanelListItem {
  icon: ReactElement;
  name: string;
  panel: number;
}

export interface ILeftPanelProps {
  currentPanel: number;
  setCurrentPanel: React.Dispatch<React.SetStateAction<number>>;
}

export interface IRightPanelProps {
  currentPanel: number;
}
