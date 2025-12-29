import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BoxDollar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,3c0-1.65-1.35-3-3-3H3C1.35,0,0,1.35,0,3v6H1v15H23V9h1V3ZM2,3c0-.55,.45-1,1-1H21c.55,0,1,.45,1,1V7H2V3ZM21,22H3V9H21v13ZM8,13.62c0-1.45,1.18-2.62,2.62-2.62h.38v-1h2v1c1.65,0,3,1.35,3,3h-2c0-.55-.45-1-1-1h-2.38c-.34,0-.62,.28-.62,.62,0,.31,.22,.57,.52,.62l3.29,.55c1.27,.21,2.19,1.3,2.19,2.59,0,1.45-1.18,2.62-2.62,2.62h-.38v1h-2v-1c-1.65,0-3-1.35-3-3h2c0,.55,.45,1,1,1h2.38c.34,0,.62-.28,.62-.62,0-.31-.22-.57-.52-.62l-3.29-.55c-1.27-.21-2.19-1.3-2.19-2.59Z"/></svg>

);
