import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGlassWhiskey = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m-.003,1l1.71,18.817c.165,1.815,1.664,3.183,3.486,3.183h13.491c1.812,0,3.309-1.359,3.484-3.162l1.829-18.838H-.003Zm20.696,3l-.874,9H4.1l-.818-9h17.411Zm-2.009,16H5.193c-.261,0-.475-.195-.498-.455l-.322-3.545h15.154l-.345,3.548c-.024.257-.239.452-.498.452Z"/></svg>

);
