import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsLampFloor = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12.5,11h7.59l-1.415-8.494c-.242-1.452-1.486-2.506-2.959-2.506h-7.431c-1.473,0-2.717,1.054-2.959,2.507l-1.416,8.493h7.59v12h-4.5v1h10v-1h-4.5v-12ZM6.312,2.671c.162-.969.991-1.671,1.973-1.671h7.431c.981,0,1.812.703,1.973,1.671l1.222,7.329H5.09l1.221-7.329Z"/>
</svg>

);
