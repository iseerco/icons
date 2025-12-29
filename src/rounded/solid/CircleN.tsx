import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleN = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm5,15.889c0,1.018-.678,1.845-1.688,2.057-.154.033-.308.049-.459.049-.837,0-1.599-.48-1.946-1.268l-3.649-8.661c-.008-.019-.035-.082-.157-.054-.1.021-.1.062-.1.1v8.639c0,.553-.448,1-1,1s-1-.447-1-1v-8.639c0-1.018.678-1.845,1.688-2.057,1.007-.217,1.996.289,2.406,1.219l3.649,8.661c.009.019.039.084.157.054.1-.021.1-.062.1-.1V7.25c0-.553.448-1,1-1s1,.447,1,1v8.639Z"/></svg>

);
