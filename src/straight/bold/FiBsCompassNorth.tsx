import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCompassNorth = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.963,0-9-4.038-9-9S7.037,3,12,3s9,4.038,9,9-4.037,9-9,9Zm5.105-6.509c.271,.481,.1,1.091-.381,1.362-.302,.17-.671,.171-.974,.004l-3.75-1.592-3.731,1.61c-.483,.267-1.092,.092-1.359-.391-.168-.303-.167-.672,.004-.974L12,5.779l5.105,8.712Z"/>
</svg>

);
