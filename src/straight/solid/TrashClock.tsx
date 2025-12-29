import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrashClock = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,12c-3.308,0-6,2.692-6,6s2.692,6,6,6,6-2.692,6-6-2.692-6-6-6Zm1.293,8.707l-2.293-2.293v-3.414h2v2.586l1.707,1.707-1.414,1.414Zm-9.293-2.707c0-4.418,3.582-8,8-8,.598,0,1.18.066,1.741.19l.558-4.19h1.701v-2h-6v-2c0-1.103-.897-2-2-2h-6c-1.103,0-2,.897-2,2v2H0v2h1.643l1.704,15.331c.169,1.521,1.45,2.669,2.981,2.669h6.381c-1.661-1.466-2.709-3.61-2.709-6ZM8,2h6v2h-6v-2Z"/>
</svg>

);
