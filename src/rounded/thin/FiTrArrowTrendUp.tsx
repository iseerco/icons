import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrArrowTrendUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,6h-6c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h6c.231,0,.451,.053,.646,.147L13.441,15.852c-.244,.244-.639,.244-.883,0l-4.359-4.359c-.662-.662-1.736-.662-2.398,0L.146,17.146c-.195,.195-.195,.512,0,.707,.098,.098,.226,.146,.354,.146s.256-.049,.354-.146l5.654-5.654c.264-.262,.721-.262,.984,0l4.359,4.359c.613,.613,1.684,.613,2.297,0L22.853,7.854c.094,.196,.147,.415,.147,.646v6c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-6c0-1.379-1.121-2.5-2.5-2.5Z"/></svg>

);
