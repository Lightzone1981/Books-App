import { IIcon } from '../../types';

const CartIcon = ({width='22', height='22', color='#fff', hoverColor }:IIcon) => {

    return (
        <svg className="cart-icon" width={`${width}`} height={`${height}`} viewBox={`0 0 ${width} ${height}`}><path fill={`${color}`} d="M4.142 4L6.01 16.136A1.002 1.002 0 0 0 7.016 17H18a1 1 0 0 0 .958-.713l3-10A1 1 0 0 0 21 5H6.32l-.33-2.138a.993.993 0 0 0-.346-.627a.997.997 0 0 0-.66-.235H3a1 1 0 1 0 0 2h1.142zm3.716 11l-1.23-8h13.028l-2.4 8H7.858zM10 20a2 2 0 1 1-4 0a2 2 0 0 1 4 0zm9 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0z"/></svg>
    )
}

export default CartIcon