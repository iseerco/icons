import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BusinessTime = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,12c-3.308,0-6,2.692-6,6s2.692,6,6,6,6-2.692,6-6-2.692-6-6-6Zm1.293,8.707l-2.293-2.293v-3.414h2v2.586l1.707,1.707-1.414,1.414Zm-6.572,3.293H0V14H11.079c-.682,1.178-1.079,2.541-1.079,4,0,2.393,1.056,4.534,2.721,6Zm5.279-14c2.393,0,4.534,1.056,6,2.721V7c0-1.654-1.346-3-3-3h-3V2c0-1.103-.897-2-2-2H8c-1.103,0-2,.897-2,2v2H3c-1.654,0-3,1.346-3,3v5H12.721c1.409-1.241,3.254-2,5.279-2ZM8,2h8v2H8V2Z"/></svg>

);
