import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTable = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.436,5.089c-.068-.236-.187-.449-.352-.622-.986-1.485-2.672-2.467-4.584-2.467H5.5c-1.912,0-3.598.982-4.584,2.467-.165.173-.284.386-.352.622-.358.729-.564,1.545-.564,2.411v9c0,3.033,2.467,5.5,5.5,5.5h13c3.033,0,5.5-2.467,5.5-5.5V7.5c0-.865-.206-1.682-.564-2.411ZM3,7.5c0-.171.018-.338.051-.5h7.449v4.5H3v-4Zm10.5-.5h7.449c.033.162.051.329.051.5v4h-7.5v-4.5ZM3,16.5v-2h7.5v4.5h-5c-1.378,0-2.5-1.122-2.5-2.5Zm15.5,2.5h-5v-4.5h7.5v2c0,1.378-1.122,2.5-2.5,2.5Z"/></svg>

);
