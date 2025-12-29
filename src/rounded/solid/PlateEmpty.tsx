import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PlateEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M13.861,19h-3.722c-2.366,0-4.65-.924-6.268-2.533-1.718-1.712-3-3.896-3.707-6.317-.36-1.233-.126-2.527,.642-3.552,.762-1.016,1.927-1.598,3.196-1.598h15.995c1.27,0,2.435,.583,3.196,1.598,.768,1.024,1.002,2.319,.642,3.552-.708,2.421-1.989,4.605-3.707,6.316-1.618,1.61-3.903,2.534-6.269,2.534Z"/>
</svg>

);
