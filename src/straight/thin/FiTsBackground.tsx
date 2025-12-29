import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBackground = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,0H2.5C1.12,0,0,1.12,0,2.5V24H24V2.5c0-1.38-1.12-2.5-2.5-2.5Zm1.5,14.93l-8.07,8.07h-5.9l13.97-13.97v5.9Zm-.15-13.08c.09,.2,.15,.42,.15,.65V7.61L7.61,23H1.71L22.85,1.85Zm-.71-.71L1,22.29v-5.9L16.39,1h5.11c.23,0,.45,.05,.65,.15ZM1,9.07L9.07,1h5.9L1,14.97v-5.9ZM2.5,1H7.66L1,7.66V2.5c0-.83,.67-1.5,1.5-1.5ZM1,22.95l.05,.05h-.05v-.05Zm15.34,.05l6.66-6.66v6.66h-6.66Z"/></svg>

);
