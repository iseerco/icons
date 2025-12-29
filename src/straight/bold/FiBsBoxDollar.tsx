import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBoxDollar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,3.5c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,0,0,1.57,0,3.5v6.5H1v14H23V10h1V3.5ZM3,3.5c0-.28,.22-.5,.5-.5H20.5c.28,0,.5,.22,.5,.5v3.5H3V3.5Zm1,17.5V10h6.98v1h-.38c-1.45,0-2.62,1.18-2.62,2.62,0,1.29,.92,2.38,2.19,2.59l3.28,.55c.3,.05,.52,.31,.52,.62,0,.34-.28,.62-.62,.62h-2.38c-.55,0-1-.45-1-1h-2c0,1.65,1.35,3,3,3v1H4Zm16,0h-7.02v-1h.38c1.45,0,2.62-1.18,2.62-2.62,0-1.29-.92-2.38-2.19-2.59l-3.28-.55c-.3-.05-.52-.31-.52-.62,0-.34,.28-.62,.62-.62h2.38c.55,0,1,.45,1,1h2c0-1.65-1.35-3-3-3v-1h7.02v11Z"/></svg>

);
