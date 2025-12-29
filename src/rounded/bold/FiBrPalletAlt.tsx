import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrPalletAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,19.5v1c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-1c0-.275-.225-.5-.5-.5h-7v1.5c0,.828-.671,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-1.5H3.5c-.276,0-.5.225-.5.5v1c0,.828-.671,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-1c0-1.93,1.57-3.5,3.5-3.5h17c1.93,0,3.5,1.57,3.5,3.5ZM0,10.5v-5c0-1.93,1.57-3.5,3.5-3.5h5c1.93,0,3.5,1.57,3.5,3.5v5c0,1.93-1.57,3.5-3.5,3.5H3.5c-1.93,0-3.5-1.57-3.5-3.5Zm3,0c0,.275.224.5.5.5h5c.276,0,.5-.225.5-.5v-5c0-.275-.224-.5-.5-.5H3.5c-.276,0-.5.225-.5.5v5Zm21-3v3c0,1.93-1.57,3.5-3.5,3.5h-3c-1.93,0-3.5-1.57-3.5-3.5v-3c0-1.93,1.57-3.5,3.5-3.5h3c1.93,0,3.5,1.57,3.5,3.5Zm-3,0c0-.275-.225-.5-.5-.5h-3c-.275,0-.5.225-.5.5v3c0,.275.225.5.5.5h3c.275,0,.5-.225.5-.5v-3Z"/>
</svg>

);
