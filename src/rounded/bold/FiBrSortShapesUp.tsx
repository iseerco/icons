import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSortShapesUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,17v3c0,1.65-1.35,3-3,3h-3c-1.65,0-3-1.35-3-3v-3c0-1.65,1.35-3,3-3h3c1.65,0,3,1.35,3,3Zm.2-10.42l-2.69-4.39c-.4-.74-1.17-1.2-2.01-1.2s-1.61,.46-1.98,1.15l-2.74,4.48c-.39,.71-.37,1.56,.05,2.26s1.15,1.12,1.96,1.12h5.43c.81,0,1.55-.42,1.96-1.12s.43-1.54,.02-2.3ZM8.98,1.03c-.66-.66-1.54-1.03-2.48-1.03s-1.81,.36-2.44,1L.97,3.91c-.6,.57-.63,1.52-.06,2.12,.57,.6,1.52,.63,2.12,.06l1.97-1.86V22.5c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5V4.23l1.97,1.86c.29,.27,.66,.41,1.03,.41,.4,0,.8-.16,1.09-.47,.57-.6,.54-1.55-.06-2.12l-3.05-2.88Z"/></svg>

);
