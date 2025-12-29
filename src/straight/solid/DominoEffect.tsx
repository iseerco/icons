import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DominoEffect = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,4v16h-2V4h2Zm-6,16h2V4h-2v16Zm-7.448-.816l1.896.633,5-15-1.896-.633-5,15Zm.948-8.184c.747,0,1.44-.536,1.56-1.273.153-.94-.568-1.739-1.479-1.739l-7.58.013,1.137-1.434c.553-.664.463-1.651-.2-2.204-.664-.553-1.651-.464-2.204.2l-2.733,3.937v10.5h4.693l3-8h3.807Z"/>
</svg>

);
