import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Screw = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,2.121h0c0-1.172-.95-2.121-2.121-2.121h-7.757c-1.172,0-2.121.95-2.121,2.121h0c0,.563.223,1.102.621,1.5l2.379,2.379h6l2.379-2.379c.398-.398.621-.937.621-1.5Zm-5.784,5.879l-3.216,2.954v-2.954h3.216Zm2.784,10.14v1.204c0,1.326-.527,2.597-1.464,3.535l-.829.829c-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-.829-.829c-.101-.101-.178-.22-.269-.328l4.805-4.41Zm-6,.646l6-5.512v2.351l-5.731,5.265c-.162-.497-.269-1.013-.269-1.546v-.558Zm0-5.115l6-5.512v2.4l-6,5.512v-2.4Z"/>
</svg>

);
