import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileSpreadsheet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.414,5h-4.414V.586l4.414,4.414ZM13,15h3v-2h-3v2Zm-2,2h-3v2h3v-2Zm2,0v2h3v-2h-3Zm2-10V0H5c-1.657,0-3,1.343-3,3V24H22V7h-7Zm3,14H6V11h12v10Zm-7-6v-2h-3v2h3Z"/></svg>

);
