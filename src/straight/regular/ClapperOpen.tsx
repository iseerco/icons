import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClapperOpen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M5.431,11L23.27,6.34l-.91-3.984c-.355-1.615-1.953-2.642-3.621-2.273L2.355,4.523C.74,4.879-.285,6.482,.072,8.105l.926,4.053h.002s0,11.842,0,11.842H24V11H5.431Zm3.339-2.94l-2.69,.703,2.459-3.845,2.7-.732-2.469,3.875ZM14.107,3.408l2.967-.805-2.448,3.927-3.01,.786,2.491-3.909Zm6.781,1.486l-3.446,.9,2.327-3.733c.311,.114,.561,.38,.638,.731l.48,2.102ZM2.832,6.465l2.835-.768-2.437,3.811-.741,.194-.465-2.033c-.118-.538,.224-1.073,.809-1.203Zm19.168,15.535H3V13H22v9Z"/>
</svg>

);
