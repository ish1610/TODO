export interface IButtonDeativeProps {
  children: React.ReactNode;
  isDeactivation: boolean;
  color: string;
  hoverColor: string;
  backgroundColor: string;
  isSubmit?: boolean;
  onButtonAcitve?: () => void;
}

export type ThemeButtonDeative = {
  isDeactivation: boolean;
  color: string;
  hoverColor: string;
  backgroundColor: string;
};
