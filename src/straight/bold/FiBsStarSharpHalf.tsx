import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsStarSharpHalf = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9.954,0l-2.226,6.956H1l-1,4.467,5.096,3.734-2.533,7.86,4.325.983,6.112-4.521V0h-3.046Zm-3.443,20.548l1.441-4.47.664-2.061-1.746-1.28-3.513-2.574.046-.207h6.597v8.011l-3.489,2.581Z"/>
</svg>

);
