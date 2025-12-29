import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const StateCountry = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,4v-2l-6-2-6,2v2h1v4h-1v2h12v-2h-1v-4h1Zm-9,0h2v4h-2v-4Zm6,4h-2v-4h2v4ZM0,16v2h1v4H0v2h12v-2h-1v-4h1v-2l-6-2-6,2Zm3,2h2v4h-2v-4Zm6,4h-2v-4h2v4Zm11.914-3l3.086,3.086v1.914h-.914l-3-3h-6.086v-5.555l-7-5.945v-4.5H2.586L0,2.414V0h.414l3,3h5.586v5.556l7,5.944v4.5h4.914Z"/>
</svg>

);
