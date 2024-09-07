import SwiftUI

struct Interesse: Identifiable {
    let id = UUID()
    let titulo: String
    var selecionado: Bool = false
}

struct TelaInteressesView: View {
    @State private var interesses: [Interesse] = [
        Interesse(titulo: "Proteção à mulher"),
        Interesse(titulo: "Qualificação Profissional"),
        Interesse(titulo: "Campanhas Educativas"),
        Interesse(titulo: "Apoio à artesã"),
        Interesse(titulo: "Formação de gênero"),
        Interesse(titulo: "Documentação e Cidadania"),
        Interesse(titulo: "Assessoria aos segmentos")
    ]
    
    var body: some View {
        VStack {
            HStack{
                Spacer()
                Image("logo")
                    .resizable()
                    .scaledToFit()
                    .frame(width: 50, height: 24)
                    .padding(.top, 20)
                    .padding(.trailing, 90)
            }
            
            Text("PERNAMBUCANA")
                .font(.system(size: 24))
                .fontWeight(.black)
                .foregroundColor(.black)
                .padding(.bottom, 10)
            
            VStack(spacing: 4) {
                Text("Nos ajude a te ajudar! Selecione seus")
                    .font(.system(size: 12))
                    .multilineTextAlignment(.center)
                Text("principais interesses ou necessidades.")
                    .font(.system(size: 12))
                    .multilineTextAlignment(.center)
            }
            .padding(.horizontal)
            .padding(.bottom, 20)
            
            // Checkboxes
            ForEach($interesses) { $interesse in
                HStack {
                    Text(interesse.titulo)
                        .font(.body)
                        .fontWeight(.bold)
                        .foregroundColor(.white)
                        .frame(maxWidth: .infinity, alignment: .leading)
                        .padding()
                    
                    Image(systemName: interesse.selecionado ? "checkmark.rectangle.fill" : "rectangle")
                        .resizable()
                        .frame(width: 25, height: 25)
                        .cornerRadius(8)
                        .foregroundColor(.white)
                        .padding(.trailing)
                }
                .background(interesse.selecionado ? Color("rosaEscuro") : Color("rosaClaro"))
                .frame(width: 299, height: 52)
                .cornerRadius(16)
                .onTapGesture {
                    interesse.selecionado.toggle()
                }
                .padding(.horizontal)
            }
            
            Button(action: {
            }) {
                HStack {
                    Text("Pedir socorro")
                        .font(.body)
                        .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                        .foregroundColor(.white)
                        .padding()
                    Spacer()
                    
                    Image("iconeSocorro")
                        .padding(.trailing, 5)
                }
                .frame(width: 299, height: 52)
                .background(Color.red)
                .cornerRadius(16)
                .padding(.horizontal)
            }
            .padding(.bottom, 20)
            
            Button(action: {
            }) {
                Text("Continuar")
                    .font(.body)
                    .foregroundColor(Color("rosaClaro"))
                    .padding()
            }
            .padding(.bottom, 20)
            
            Spacer()
        }
        .background(Color.white)
    }
}

struct TelaInteressesView_Previews: PreviewProvider {
    static var previews: some View {
        TelaInteressesView()
    }
}