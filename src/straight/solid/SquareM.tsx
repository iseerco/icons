import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareM = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,0H3C1.346,0,0,1.346,0,3v21h24V3c0-1.654-1.346-3-3-3Zm-2,19h-2V7.557l-5,8.026L7,7.56v11.44h-2V6.812c0-.817.479-1.496,1.221-1.73.751-.238,1.569.048,2.032.709l3.747,6.011,3.718-5.966c.493-.707,1.309-.989,2.061-.754.742.234,1.221.913,1.221,1.73v12.188Z"/></svg>

);
