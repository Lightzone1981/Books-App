import { IIcon,IStoreState } from '../../types'
import { useState } from 'react';

const ArrowIcon = ({width='22', height='22', color='#313037', hoverColor, callback }:IIcon) => {
    const [fill, setIconFill] = useState(color)
    return (
        <svg className="button-arrow" width={`${width}`} height={`${width}`} viewBox={`0 0 ${width} ${height}`} onClick={()=>callback}>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.2905 14.7076C10.1005 14.5076 10.0005 14.2576 10.0005 13.9976C10.0005 13.7376 10.1005 13.4876 10.2905 13.2876L14.5905 8.99762L1.00055 8.99762C0.450549 8.99762 0.000547739 8.54762 0.000547715 7.99762C0.000547691 7.44762 0.450548 6.99762 1.00055 6.99762L14.5905 6.99762L10.2905 2.70762C9.90055 2.31762 9.90055 1.67762 10.2905 1.28762C10.6805 0.897618 11.3205 0.897617 11.7105 1.28762L17.7105 7.28762C17.8005 7.37762 17.8705 7.48762 17.9205 7.60762C17.9405 7.65762 17.9605 7.69762 17.9605 7.74762C18.0105 7.90762 18.0105 8.08762 17.9605 8.24762C17.9605 8.29762 17.9405 8.33762 17.9205 8.38762C17.8705 8.50762 17.8005 8.61762 17.7105 8.70762L11.7105 14.7076C11.3205 15.0976 10.6805 15.0976 10.2905 14.7076Z" fill={`${fill}`}
                onMouseOver={() => setIconFill(hoverColor ? hoverColor : color)}
                onMouseOut={() => setIconFill(color)}
            />
        </svg>
    )
}

export default ArrowIcon