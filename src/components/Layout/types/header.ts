export interface IHeaderProps {
  onMoveRegist: () => void;
  onMoveHome: () => void;
  handleLogin: () => void;
  isLogin: boolean;
  isShowControl: boolean;
  onToggleSlide: () => void;
}

export type ThemeShowControl = {
  isShowControl: boolean;
};
