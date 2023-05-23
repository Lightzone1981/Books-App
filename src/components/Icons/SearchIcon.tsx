import { IIcon } from '../../types';

const SearchIcon = ({width='22', height='22', color='#fff', hoverColor }:IIcon) => {

    return (
        <svg className="search-icon menu-icon" id="search-svg" width={`${width}`} height={`${height}`} viewBox={`0 0 ${width} ${height}`}><path id="search-path" fill={`${color}`} d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z"/></svg>

      
    )
}

export default SearchIcon