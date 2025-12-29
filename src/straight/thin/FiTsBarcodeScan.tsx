import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBarcodeScan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2,14h1v9h-1V14Zm19,9h1V14h-1v9Zm-9,0h1V14h-1v9Zm-7,0h2V14h-2v9Zm3,0h2V14h-2v9Zm9,0h2V14h-2v9Zm-2,0h1V14h-1v9Zm7-12V1h-1V11h-2V1h-2V11h-1V1h-1V11h-2V1h-1V11h-2V1h-2V11h-1V1h-2V11H3V1h-1V11H0v1H24v-1h-2Z"/></svg>

);
