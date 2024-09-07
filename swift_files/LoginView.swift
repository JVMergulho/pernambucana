import SwiftUI

struct LoginView: View {
    @State private var cpf: String = ""
    @State private var senha: String = ""
    @State private var nomeSobrenome: String = ""
    
    var body: some View {
        ZStack {
            VStack {
                Image("login") // Use o nome correto do recurso de imagem
                    .resizable()
                    .frame(width: 400, height: 190)
                Spacer()
            }
            .frame(height: 800)
            .ignoresSafeArea()
            
            VStack (spacing: 7) {
                Spacer()
                VStack(spacing: -20) {
                    Text("Seja bem-vinda ao")
                        .font(.system(size: 12))
                    Image("tituloimage") // Use o nome correto do recurso de imagem
                }
                
                Text("Feito para você pela Secretaria da Mulher do Governo do Estado de Pernambuco.")
                    .font(.system(size: 12))
                    .multilineTextAlignment(.center)
                    .frame(width: 245)
                
                VStack(spacing: 40) {
                    VStack(alignment: .leading, spacing: 11) {
                        Text("Cadastre-se")
                            .font(.system(size: 12))
                            .fontWeight(.bold)
                        
                        Text("Seu CPF (apenas números)")
                            .font(.system(size: 12))
                        
                        TextField("Digite seu CPF", text: $cpf)
                            .frame(width: 242, height: 36)
                            .font(.system(size: 12))
                            .background(Color.clear)
                            .cornerRadius(16)
                            .overlay(
                                RoundedRectangle(cornerRadius: 16)
                                    .inset(by: 0.5)
                                    .stroke(Color.black, lineWidth: 1)
                            )
                    }
                    
                    VStack(alignment: .leading, spacing: 11) {
                        Text("Registre uma senha")
                            .font(.system(size: 12))
                        
                        TextField("Digite sua senha", text: $senha)
                            .frame(width: 242, height: 36)
                            .font(.system(size: 12))
                            .background(Color.clear)
                            .cornerRadius(16)
                            .overlay(
                                RoundedRectangle(cornerRadius: 16)
                                    .inset(by: 0.5)
                                    .stroke(Color.black, lineWidth: 1)
                            )
                    }
                    
                    VStack(alignment: .leading, spacing: 12) {
                        HStack {
                            Text("Ou entre sem login, apenas com o seu nome!")
                                .font(.system(size: 12))
                                .fontWeight(.bold)
                            Spacer()
                        }
                        .frame(width: 240)
                        
                        Text("Nome e sobrenome")
                            .font(.system(size: 12))
                        
                        TextField("Digite seu nome e sobrenome", text: $nomeSobrenome)
                            .frame(width: 242, height: 36)
                            .background(Color.clear)
                            .font(.system(size: 12))
                            .cornerRadius(16)
                            .overlay(
                                RoundedRectangle(cornerRadius: 16)
                                    .inset(by: 0.5)
                                    .stroke(Color.black, lineWidth: 1)
                            )
                    }
                    
                    Button(action: {
                        // Ação para o botão "Pedir socorro"
                    }, label: {
                        ZStack {
                            Rectangle()
                                .foregroundColor(Color(red: 0.94, green: 0.23, blue: 0.08))
                                .frame(width: 239, height: 48)
                                .cornerRadius(48)
                            
                            HStack {
                                Image("simbo") // Use o nome correto do recurso de imagem
                                Text("Pedir socorro")
                                    .fontWeight(.bold)
                                    .foregroundColor(Color(red: 1, green: 0.87, blue: 1))
                            }
                        }
                    })
                    
                    Button(action: {
                        // Ação para o botão "Continuar"
                    }, label: {
                        Text("Continuar")
                            .font(.system(size: 14))
                            .fontWeight(.bold)
                            .foregroundColor(Color(red: 0.99, green: 0.38, blue: 1))
                    })
                }
            }
            .frame(height: 700)
        }
    }
}

#Preview {
    LoginView()
}
