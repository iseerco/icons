import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHouseCrack = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.657,7.395L14.157,.743c-1.271-.992-3.044-.992-4.313,0L1.342,7.396c-.853,.669-1.342,1.674-1.342,2.756v13.849H24V10.151c0-1.082-.489-2.087-1.343-2.757Zm-1.657,13.605h-6.047l2.007-5.81c.179-.592-.264-1.19-.883-1.19h-3.904l1.827-5h-2l-4.848,7.594c-.399,.602,.032,1.406,.754,1.406h3.23l-1.152,3H3V10.151c0-.154,.07-.299,.192-.394L11.692,3.106c.182-.143,.435-.143,.616,0l8.499,6.65c.123,.096,.193,.24,.193,.395v10.849Z"/></svg>

);
