import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HandBackFist = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8.196,.02l-.196-.02c-1.654,0-3,1.346-3,3v1.581L.879,8.636c-.566,.567-.879,1.32-.879,2.122s.312,1.555,.854,2.095l5.146,5.541v5.607h15v-6.808l1.642-4.105c.238-.593,.358-1.218,.358-1.858V2.98L8.196,.02Zm12.804,11.21c0,.384-.072,.759-.215,1.114l-1.785,4.464v5.192H8v-4.393L2.293,11.464c-.189-.188-.293-.439-.293-.707s.104-.518,.287-.701l2.713-2.669v3.613h2V3c0-.524,.404-.955,.918-.997l13.082,2.616v6.61Z"/></svg>

);
