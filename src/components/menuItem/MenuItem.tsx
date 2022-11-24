import { MenuProps } from "../../types/menu"

export default function Menu({ title, img, altText } : MenuProps) {
  return (
    <div className='item'>
        <img src={img} alt={altText} />
        <span>{title}</span>
    </div>
  )
}
