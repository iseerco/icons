import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsScrewdriver = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.957,8l3.018-5.235L21.234.024l-5.234,3.019v2.835l-5.75,5.75-1.768-1.768-7.311,7.311c-1.56,1.56-1.56,4.097,0,5.656.755.756,1.76,1.172,2.829,1.172s2.073-.416,2.828-1.172l7.311-7.311-1.768-1.768,5.75-5.75h2.835ZM4.707,20.707c-.377.379-1.036.379-1.414,0-.39-.39-.39-1.024,0-1.414l5.189-5.189,1.414,1.414-5.19,5.189Z"/>
</svg>

);
