import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessKing = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.647,9.842a2.96,2.96,0,0,0-1.769-1.453A38.51,38.51,0,0,0,13,7.023V5h3V3H13V0H11V3H8V5h3V7.023A38.51,38.51,0,0,0,2.122,8.389,2.994,2.994,0,0,0,.134,12.14L3.168,22H2v2H22V22H20.832l3.035-9.86A2.986,2.986,0,0,0,23.647,9.842Zm-1.692,1.71L18.74,22H5.26L2.045,11.552a1,1,0,0,1,.073-.77A.978.978,0,0,1,2.7,10.3,36.7,36.7,0,0,1,12,9a36.7,36.7,0,0,1,9.3,1.3.978.978,0,0,1,.583.479A1,1,0,0,1,21.955,11.552Z"/></svg>

);
