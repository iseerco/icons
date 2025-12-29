import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSquareN = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.5,0H5.5C2.467,0,0,2.467,0,5.5v13c0,3.032,2.467,5.5,5.5,5.5h13c3.033,0,5.5-2.468,5.5-5.5V5.5c0-3.033-2.467-5.5-5.5-5.5Zm2.5,18.5c0,1.379-1.122,2.5-2.5,2.5H5.5c-1.378,0-2.5-1.121-2.5-2.5V5.5c0-1.378,1.122-2.5,2.5-2.5h13c1.378,0,2.5,1.122,2.5,2.5v13Zm-3-12v10.165c0,1.045-.673,1.944-1.675,2.239-.222.065-.447.097-.667.097-.777,0-1.513-.39-1.953-1.073l-4.705-8.112v7.685c0,.828-.671,1.5-1.5,1.5s-1.5-.672-1.5-1.5V7.334c0-1.044.673-1.944,1.675-2.238,1.002-.295,2.055.098,2.62.976l4.705,8.112v-7.685c0-.829.671-1.5,1.5-1.5s1.5.671,1.5,1.5Z"/></svg>

);
