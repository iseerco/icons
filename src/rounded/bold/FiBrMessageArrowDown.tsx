import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrMessageArrowDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15.87,12.707l-3.163,3.163c-.391.391-1.024.391-1.414,0l-3.163-3.163c-.63-.63-.184-1.707.707-1.707h1.663v-4.5c0-.829.672-1.5,1.5-1.5s1.5.671,1.5,1.5v4.5h1.663c.891,0,1.337,1.077.707,1.707Zm8.13-7.207v9c0,3.033-2.468,5.5-5.5,5.5h-1.172l-3.708,3.066c-.448.398-1.024.6-1.606.6-.595,0-1.195-.21-1.674-.635l-3.6-3.031h-1.24c-3.032,0-5.5-2.467-5.5-5.5V5.5C0,2.467,2.468,0,5.5,0h13c3.032,0,5.5,2.467,5.5,5.5Zm-3,0c0-1.378-1.121-2.5-2.5-2.5H5.5c-1.379,0-2.5,1.122-2.5,2.5v9c0,1.378,1.121,2.5,2.5,2.5h1.788c.354,0,.696.125.967.353l3.749,3.158,3.828-3.167c.27-.222.607-.344.956-.344h1.712c1.379,0,2.5-1.122,2.5-2.5V5.5Z"/></svg>

);
