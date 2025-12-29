import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Mushroom = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.771,15.057l-.368-.272A15.866,15.866,0,0,0,12,12a15.866,15.866,0,0,0-8.4,2.785l-.367.271-.445-.1A3.642,3.642,0,0,1,0,11.33C0,5.083,5.383,0,12,0S24,5.083,24,11.33a3.642,3.642,0,0,1-2.785,3.629ZM12,14a11.849,11.849,0,0,0-4.113.8A28.589,28.589,0,0,0,7,19a5,5,0,0,0,10,0,31.75,31.75,0,0,0-.923-4.209A11.815,11.815,0,0,0,12,14Z"/></svg>

);
