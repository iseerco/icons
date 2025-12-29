import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSortShapesDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,7v-3c0-1.65,1.35-3,3-3h3c1.65,0,3,1.35,3,3v3c0,1.65-1.35,3-3,3h-3c-1.65,0-3-1.35-3-3Zm9.2,12.58l-2.69-4.39c-.4-.74-1.17-1.2-2.01-1.2s-1.61,.46-1.98,1.15l-2.74,4.48c-.39,.71-.37,1.56,.05,2.26s1.15,1.12,1.96,1.12h5.43c.81,0,1.55-.42,1.96-1.12s.43-1.54,.02-2.3Zm-13.23-1.67l-1.97,1.86V1.5c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5V19.77l-1.97-1.86c-.6-.57-1.55-.54-2.12,.06-.57,.6-.54,1.55,.06,2.12l3.05,2.88c.66,.66,1.54,1.03,2.48,1.03s1.81-.36,2.44-1l3.09-2.91c.6-.57,.63-1.52,.06-2.12-.57-.6-1.52-.63-2.12-.06Z"/></svg>

);
