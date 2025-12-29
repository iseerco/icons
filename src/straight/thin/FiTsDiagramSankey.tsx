import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDiagramSankey = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,0V1H15.83c-.39,0-.78,.16-1.06,.44l-4.56,4.56H0v-1H9.79L14.06,.73c.47-.47,1.1-.73,1.77-.73h8.17ZM11.77,22.56l-6.56-6.56H0v1H4.79l6.27,6.27c.47,.47,1.1,.73,1.77,.73h11.17v-1H12.83c-.39,0-.78-.16-1.06-.44ZM0,10v1H9.79l5.27,5.27c.47,.47,1.1,.73,1.77,.73h7.17v-1h-7.17c-.39,0-.78-.16-1.06-.44l-4.56-4.56h12.79v-1H0Z"/></svg>

);
