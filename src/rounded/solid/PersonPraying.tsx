import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonPraying = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13,2.468C13,1.087,14.119-.032,15.5-.032s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm8.663,7.28l-3.207,2.843c-.035.032-.072.061-.112.086-.879.583-2.048.364-2.66-.5l-1.261-1.813-3.385,7.673,4.355,3.272c.52.383.732,1.053.53,1.666-.201.613-.771,1.024-1.415,1.024H4.983c-.552,0-1-.448-1-1s.448-1,1-1h7.976l-5.51-4.062c-1.458-1.187-1.791-2.477-1.057-3.974l2.649-6.169c.418-.855,1.146-1.455,2.019-1.69.685-.185,1.402-.122,2.074.184.928.34,1.736,1.055,2.223,1.992l1.918,2.685,3.062-2.714c.411-.366,1.045-.33,1.411.084.366.414.328,1.045-.085,1.412Z"/></svg>

);
