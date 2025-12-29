import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFaceAwesome = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.38,0,0,5.38,0,12s5.38,12,12,12,12-5.38,12-12S18.62,0,12,0Zm0,21c-4.96,0-9-4.04-9-9S7.04,3,12,3s9,4.04,9,9-4.04,9-9,9ZM7,11h-2v-1.5c0-1.65,1.35-3,3-3s3,1.35,3,3v1.5h-2v-1.05c-.08,.02-.16,.05-.25,.05-.69,0-1.25-.56-1.25-1.25,0-.04,.02-.07,.02-.11-.31,.17-.52,.49-.52,.86v1.5Zm12-1.5v1.5h-2v-1.05c-.08,.02-.16,.05-.25,.05-.69,0-1.25-.56-1.25-1.25,0-.04,.02-.07,.02-.11-.31,.17-.52,.49-.52,.86v1.5h-2v-1.5c0-1.65,1.35-3,3-3s3,1.35,3,3Zm-7,9.59c3.6,0,6.56-2.7,7-6.18H5c.44,3.48,3.4,6.18,7,6.18Zm3.53-4.41c.37,0,.71,0,1.01,.05-.92,1.55-2.61,2.6-4.54,2.6-.01,0-.02,0-.04,0,.47-1.53,1.88-2.65,3.57-2.65Z"/></svg>

);
