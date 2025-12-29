import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Milk = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20,5.3v-3.3c0-1.103-.897-2-2-2H6c-1.103,0-2,.897-2,2v3.3l-3,3.857v11.843c0,1.654,1.346,3,3,3h16c1.654,0,3-1.346,3-3v-11.843l-3-3.857Zm-6.894,3.7H3.656l2.333-3h9.784l-2.667,3Zm4.894-7v2H6v-2h12ZM3,21v-10h10v10c0,.352.072.686.184,1H4c-.552,0-1-.449-1-1Zm18,0c0,.551-.448,1-1,1h-4c-.552,0-1-.449-1-1v-11.12l3.215-3.617,2.785,3.58v11.157Z"/>
</svg>

);
