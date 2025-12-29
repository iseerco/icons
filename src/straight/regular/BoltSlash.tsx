import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BoltSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17.084,15.67l2.551-3.847c.502-.757.548-1.725.119-2.525-.43-.801-1.261-1.298-2.17-1.298h-3.801L15.806,0h-3.321l-4.415,6.656L1.457.043.043,1.457l22.5,22.5,1.414-1.414-6.873-6.873Zm.5-5.67c.241,0,.358.152.407.244.049.091.111.273-.022.474l-2.327,3.509-4.227-4.227h6.169Zm-4.544-7.218l-1.785,7.058-1.741-1.741,3.526-5.317Zm.346,14.845l1.443,1.443-3.27,4.929h-3.321l2.023-8h-3.774c-.917,0-1.757-.503-2.191-1.313-.428-.798-.385-1.76.113-2.51l1.406-2.12,1.443,1.443-1.182,1.782c-.127.191-.065.369-.018.459.042.077.167.259.429.259h3.271l2.452,2.452-1.205,4.766,2.381-3.59Z"/>
</svg>

);
