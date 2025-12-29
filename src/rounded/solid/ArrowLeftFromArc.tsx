import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowLeftFromArc = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,12c0,6.617-5.383,12-12,12-.552,0-1-.447-1-1s.448-1,1-1c5.514,0,10-4.486,10-10S17.514,2,12,2c-.552,0-1-.447-1-1s.448-1,1-1c6.617,0,12,5.383,12,12Zm-21.538,1.116c-.036-.036-.064-.078-.096-.116h13.633c.552,0,1-.447,1-1s-.448-1-1-1H2.367c.033-.04.061-.082.098-.119l5.134-5.177c.389-.392.386-1.025-.006-1.414-.392-.39-1.026-.387-1.414.006L1.047,9.47c-.675.677-1.047,1.575-1.047,2.53s.372,1.854,1.045,2.527l5.134,5.177c.195.197.453.296.71.296.254,0,.509-.097.704-.29.392-.389.395-1.022.006-1.414l-5.137-5.18Z"/>
</svg>

);
