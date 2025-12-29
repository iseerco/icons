import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TreasureChest = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,.35c2.327,.826,4,3.043,4,5.65v3h-4V.35ZM6,9h3c0-1.654,1.346-3,3-3s3,1.346,3,3h3V0H6V9Zm9,2v4h-6v-4H0v13H4V13h2v11h12V13h2v11h4V11H15Zm-4-2v4h2v-4c0-.551-.448-1-1-1s-1,.449-1,1Zm-7,0V.35C1.673,1.176,0,3.393,0,6v3H4Z"/></svg>

);
