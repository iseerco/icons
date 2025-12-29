import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CardSpade = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16,13c0,1.105-.895,2-2,2-.558,0-1.062-.229-1.425-.597.296,1.005.745,1.917,1.425,2.597h-4c.68-.68,1.129-1.592,1.425-2.597-.363.368-.867.597-1.425.597-1.105,0-2-.895-2-2,0-2.333,4-5,4-5,0,0,4,2.667,4,5Zm5-10v21H3V3c0-1.654,1.346-3,3-3h12c1.654,0,3,1.346,3,3Zm-2,0c0-.551-.448-1-1-1H6c-.552,0-1,.449-1,1v19h14V3Z"/>
</svg>

);
