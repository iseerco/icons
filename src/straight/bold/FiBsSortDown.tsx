import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSortDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.024,18c-.793,0-1.552-.339-2.082-.929L1.643,8H22.405l-8.31,9.082c-.521,.579-1.279,.918-2.071,.918Zm-.149-2.936l-.002,.003,.002-.003Zm.289-.009h0Zm-3.711-4.056l3.571,3.902,3.57-3.902h-7.142Z"/></svg>

);
