import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ScaleComparisonAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m8.955,12.105l.082-1.105H-.036l.082,1.106c.315,2.199,2.23,3.858,4.454,3.858s4.141-1.659,4.455-3.859Zm15.082,1.895l-.082,1.105c-.313,2.2-2.229,3.859-4.455,3.859s-4.139-1.659-4.454-3.858l-.082-1.106h9.072Zm-11.036,8h7v2H4v-2h7V4.802L2.783,2.976l.434-1.952,7.783,1.73V0h2v3.198l8.217,1.826-.434,1.952-7.783-1.73v16.754ZM1.793,8.793l1.293-1.293-1.293-1.293,1.414-1.414,1.293,1.293,1.293-1.293,1.414,1.414-1.293,1.293,1.293,1.293-1.414,1.414-1.293-1.293-1.293,1.293-1.414-1.414Zm17.502,1.613l2.67-2.67,1.414,1.414-4.098,4.099-2.649-2.702,1.428-1.4,1.235,1.26Z"/>
</svg>

);
