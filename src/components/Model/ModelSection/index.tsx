import React, { useEffect, useRef } from 'react';
import { register } from '../../../serviceWorker';
import useModel from '../ModelsWrapper/useModel';

import { Container } from './styles';

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  modelName: string
  overlayNode: React.ReactNode
}

const ModelSection: React.FC<Props> = ({ modelName, overlayNode, children, ...props }) => {
  const { registerModel } = useModel(modelName)

  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({ modelName, overlayNode, sectionRef })
    }
  }, [])

  return <Container ref={sectionRef} {...props}>{children}</Container>
};

export default ModelSection;
