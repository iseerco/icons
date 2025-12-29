import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMonument = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,23v1H0v-1H24Zm-2-3H2v-1h3.552l1.588-14.399c.062-.562,.316-1.093,.717-1.494L10.232,.732c.943-.944,2.592-.944,3.535,0l2.375,2.375c.401,.401,.655,.932,.717,1.494l1.588,14.399h3.552v1Zm-5.992-14h-3.508v13h4.942l-1.434-13Zm-7.874-1.29l-.032,.29h7.795l-.032-.29c-.037-.337-.19-.656-.431-.896l-2.375-2.375c-.566-.566-1.555-.566-2.121,0l-2.375,2.375c-.24,.241-.393,.559-.43,.896Zm-1.576,14.29h4.942V6h-3.508l-1.434,13Z"/></svg>

);
