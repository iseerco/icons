import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Monument = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,22v2H0v-2H24Zm-2-2H2v-2h3.114l1.526-12.97c.078-.667,.383-1.296,.858-1.771L9.879,.879c1.133-1.134,3.109-1.134,4.243,0l2.38,2.38c.475,.475,.78,1.104,.858,1.771l1.526,12.969h3.114v2ZM15.578,7h-2.578v11h3.872l-1.294-11Zm-6.666-2.327c-.094,.094-.167,.205-.217,.327h6.609c-.05-.121-.123-.233-.217-.327l-2.381-2.38c-.378-.378-1.037-.378-1.414,0l-2.381,2.38Zm-1.784,13.327h3.872V7h-2.578l-1.294,11Z"/></svg>

);
