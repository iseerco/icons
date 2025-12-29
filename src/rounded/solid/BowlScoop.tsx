import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BowlScoop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.674,13.811c-.347-.508-.921-.811-1.536-.811H1.862c-.615,0-1.189.303-1.536.811-.348.508-.422,1.153-.198,1.726,0,0,.169.423.198.472,1.622,2.706,3.927,2.964,5.973,2.992h4.701v3h-3c-.553,0-1,.447-1,1s.447,1,1,1h8c.553,0,1-.447,1-1s-.447-1-1-1h-3v-3h4.715c2.032-.028,4.337-.286,5.959-2.992.029-.049.198-.472.198-.472.224-.572.149-1.218-.198-1.726ZM2,11h20c.282,0,.552-.119.741-.329.189-.209.282-.489.254-.771C22.432,4.256,17.704,0,12,0S1.568,4.256,1.005,9.9c-.028.281.064.562.254.771.189.21.459.329.741.329Z"/>
</svg>

);
