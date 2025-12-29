import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TermsInfo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18,12c-3.314,0-6,2.686-6,6s2.686,6,6,6,6-2.686,6-6-2.686-6-6-6Zm1,10h-2v-5h2v5Zm0-6h-2v-2h2v2Zm-9,2c0-2.393,1.056-4.534,2.721-6H4v-2H14v1.079c1.178-.682,2.541-1.079,4-1.079V3c0-1.654-1.346-3-3-3H3C1.346,0,0,1.346,0,3V24H12.721c-1.665-1.466-2.721-3.607-2.721-6ZM4,5H14v2H4v-2Zm4,12H4v-2h4v2Z"/>
</svg>

);
