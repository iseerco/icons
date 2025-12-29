import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ThumbtackSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M4.227,8.677l11.096,11.096c-.357,.504-1.105,1.213-1.547,1.657l-4.896-4.896L1.707,23.707l-1.414-1.414,7.173-7.173L2.57,10.224c.448-.445,1.15-1.187,1.657-1.547Zm19.78,13.978l-7.181-7.181c.235-1.338-.122-2.814-.472-4.12l2.732-2.752,.57,.571c.901,.901,2.317,1.05,3.293,.346,1.245-.851,1.406-2.766,.318-3.806L18.344,.788c-.9-.901-2.316-1.048-3.293-.346-1.245,.851-1.406,2.766-.318,3.806l.646,.646-2.733,2.752c-1.308-.351-2.781-.706-4.12-.472L1.407,.056-.007,1.47,22.593,24.069l1.414-1.414Z"/>
</svg>

);
