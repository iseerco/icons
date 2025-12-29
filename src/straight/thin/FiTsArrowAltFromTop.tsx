import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowAltFromTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,1V0H3V1H11.5V17H4.875l5.768,6.387c.345,.39,.84,.613,1.357,.613s1.011-.223,1.356-.611l5.769-6.389h-6.625V1h8.5ZM12.612,22.72l-.003,.003c-.316,.356-.899,.36-1.222-.003l-4.263-4.72h9.75l-4.263,4.72Z"/></svg>

);
