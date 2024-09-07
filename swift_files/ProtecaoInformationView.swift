import SwiftUI

struct ProtecaoInformationView: View {
    var body: some View {
            VStack(alignment: .leading, spacing: 20) {
                
                HStack {
                    Button(action: {
                    }) {
                        HStack {
                            Image(systemName: "chevron.left")
                            Text("Proteção")
                                .font(.system(size: 12))
                                .foregroundColor(.purple)
                                .fontWeight(.semibold)
                        }
                    }
                    .padding(.leading)
                    Spacer()
                }
                

                VStack(alignment: .leading, spacing: 2) {
                    Text("Serviço de proteção,\nAtendimento e")
                        .font(.system(size: 28, weight: .black))
                        .foregroundColor(.black)
                    HStack {
                        Text("Abrigo")
                            .font(.system(size: 28, weight: .black))
                            .foregroundColor(.black)
                        Image("logo")
                            .resizable()
                            .frame(width: 50, height: 24)
                            .foregroundColor(.purple)
                    }
                }
                .padding(.horizontal)
                
                Text("Procedimentos e documentos necessários para o abrigamento:")
                    .font(.headline)
                    .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                    .foregroundColor(.black)
                    .padding(.horizontal)
                    .padding(.leading, 2)
                ScrollView {
                    VStack(alignment: .leading, spacing: 15) {
                        Group {
                            Text("• **Boletim de Ocorrência Policial**: Registro da ocorrência de violência doméstica.")
                            Text("• **Solicitação de Medidas Protetivas**: Pedido formal das medidas protetivas de urgência.")
                            Text("• **Laudo Traumatológico**: Caso haja lesão corporal, e/ou sexológico se houver violência sexual.")
                            Text("• **Ofício do Órgão solicitante**: Documento do órgão responsável solicitando o abrigamento à SecMulher-PE.")
                            Text("• **Busca de pertences**: Acompanhada por policiais para garantir a segurança da mulher.")
                            Text("• **Termo de Declaração**: Documento formalizando a denúncia e o pedido de abrigamento.")
                        }
                        .font(.body)
                        .foregroundColor(.black)
                        .padding(.leading)
                    }
                    .padding(.horizontal)
                    Spacer(minLength: 50)
                    
                }
            }
        .overlay(
            VStack {
                Spacer()
                
                Button(action: {
                }) {
                    HStack {
                        Spacer()
                        Image("botaoSocorro")
                            .resizable()
                            .scaledToFit()
                            .frame(width: 58, height: 58)
                    }
                }
                .padding(.bottom, 20)
                .padding(.trailing, 20)
            }
        )
    }
}

struct ProtecaoInformationView_Previews: PreviewProvider {
    static var previews: some View {
        ProtecaoInformationView()
    }
}