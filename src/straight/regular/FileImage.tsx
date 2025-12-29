import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileImage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6,9.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm16-1.914v16.414H2V3c0-1.654,1.346-3,3-3h9.414l7.586,7.586Zm-7-.586h3.586l-3.586-3.586v3.586ZM4,3v16.586l6.5-6.5,4,4,5.5-5.5v-2.586h-7V2H5c-.551,0-1,.449-1,1Zm16,19v-7.586l-5.5,5.5-4-4-6.086,6.086h15.586Z"/></svg>

);
