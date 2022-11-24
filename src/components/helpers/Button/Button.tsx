import { ButtonProps } from '../../../types/button';
import './button.scss';

export function Button({
  children,
  _class,
  _type = 'button',
  onClick,
}: ButtonProps) {
  return (
    <button type={_type} className={`btn ${_class}`} onClick={onClick}>
      {children}
    </button>
  );
}

export function PrimaryButton({
  _type = 'button',
  children,
  _class,
  onClick,
}: ButtonProps) {
  return (
    <Button _type={_type} _class={`btn-primary ${_class}`} onClick={onClick}>
      {children}
    </Button>
  );
}

export function DangerButton({
  _type = 'button',
  children,
  _class,
  onClick,
}: ButtonProps) {
  return (
    <Button _type={_type} _class={`btn-danger ${_class}`} onClick={onClick}>
      {children}
    </Button>
  );
}
