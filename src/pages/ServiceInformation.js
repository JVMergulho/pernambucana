import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import logo from '../assets/logo.svg'; // O logo pode ser reutilizado ou alterado

const ServiceInformation = () => {
  const content = (
    <ul className="procedure-list">
      <li><strong>Boletim de Ocorrência Policial</strong>: Registro da ocorrência de violência doméstica.</li>
      <li><strong>Solicitação de Medidas Protetivas</strong>: Pedido formal das medidas protetivas de urgência.</li>
      <li><strong>Laudo Traumatológico</strong>: Caso haja lesão corporal, e/ou sexológico se houver violência sexual.</li>
      <li><strong>Ofício do Órgão solicitante</strong>: Documento do órgão responsável solicitando o abrigamento à SecMulher-PE.</li>
      <li><strong>Busca de pertences</strong>: Acompanhada por policiais para garantir a segurança da mulher.</li>
      <li><strong>Termo de Declaração</strong>: Documento formalizando a denúncia e o pedido de abrigamento.</li>
    </ul>
  );

  return (
    <ServiceTemplate 
      title="Serviço de proteção, Atendimento e Abrigo"
      logo={logo}
      subtitle="Procedimentos e documentos necessários para o abrigamento:"
      content={content}
    />
  );
};

export default ServiceInformation;