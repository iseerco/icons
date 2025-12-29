import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LightbulbSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.57,16.15c.12-.13,.23-.28,.36-.39,1.95-1.71,3.07-4.17,3.07-6.76s-1.1-5.01-3.01-6.71C16.09,.58,13.52-.23,10.96,.06c-2.38,.27-4.57,1.53-6.05,3.43L1.46,.04,.04,1.45,22.54,23.95l1.41-1.41-6.38-6.38Zm-9.7,2.85c-.26-1.25-.95-2.44-2.01-3.42-2.15-2-3.17-4.83-2.79-7.76,.02-.15,.05-.29,.08-.43l11.61,11.61H7.87Zm8.13,2v3H8v-3h8Z"/></svg>

);
