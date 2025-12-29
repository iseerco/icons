import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowDownFromArc = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.647,16.646l.705.709-6.221,6.177c-.312.312-.722.468-1.132.468s-.82-.156-1.133-.469l-6.22-6.176.705-.709,6.147,6.104V7h1v15.75l6.147-6.104ZM12,0C5.383,0,0,5.383,0,12h1C1,5.935,5.935,1,12,1s11,4.935,11,11h1C24,5.383,18.617,0,12,0Z"/>
</svg>

);
