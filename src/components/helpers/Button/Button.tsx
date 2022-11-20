import { ButtonProps } from '../../../types/button';
import './button.scss';


export function Button({ children, _class, onClick } : ButtonProps) {
  return <button type='button' className={`btn ${_class}`} onClick={onClick}>{children}</button>
}

export function PrimaryButton({ children, _class, onClick } : ButtonProps) {
  return <Button _class='btn-primary' onClick={() => null}>{children}</Button>
}

