import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrPodium = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.5,9H5v-2.5c0-1.378,1.122-2.5,2.5-2.5,0,0,.659-.006,.736-.019,.455,.618,1.188,1.019,2.014,1.019h4.25c3.287-.056,3.285-4.945,0-5h-4.25c-.826,0-1.559,.401-2.014,1.019-.077-.012-.736-.019-.736-.019C4.467,1,2,3.467,2,6.5v2.5h-.5c-1.972,.033-1.971,2.967,0,3h.729l1.234,7.403c.443,2.664,2.725,4.597,5.425,4.597h6.223c2.7,0,4.982-1.933,5.425-4.596l1.234-7.404h.729c1.972-.033,1.971-2.967,0-3Zm-4.922,9.911c-.202,1.21-1.239,2.089-2.466,2.089h-6.223c-1.228,0-2.265-.879-2.466-2.09l-1.152-6.91h13.459l-1.152,6.911Z"/></svg>

);
