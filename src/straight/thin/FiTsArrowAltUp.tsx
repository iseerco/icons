import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowAltUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.366,.609c-.696-.775-2.043-.77-2.731-.001L4.786,7h6.714V24h1V7h6.714L13.366,.609ZM7.056,6L11.376,1.278c.322-.359,.926-.359,1.248,0l4.32,4.722H7.056Z"/></svg>

);
