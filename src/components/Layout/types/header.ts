export interface IHeaderProps {
  onMoveRegist: () => void;
  onMoveHome: () => void;
  onLogin: () => void;
  onLogout: () => void;
  isLogin: boolean;
  isShowControl: boolean;
  onToggleSlide: (e: any) => void;
}

export type ThemeShowControl = {
  isShowControl: boolean;
};
