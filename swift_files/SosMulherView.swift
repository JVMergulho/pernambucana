import SwiftUI

struct SOSMulherView: View {
    var body: some View {
        
        
        VStack (spacing: 20){
            
            HStack {
                Image(ImageResource.logo2)
                Text("Perto de mim")
                    .font(.system(size: 16))
                    .fontWeight(.black)
                Spacer()
            }.frame(width: 310)
            
            HStack {
                Text("Confira os pontos de socorro e atendimento à mulher mais próximos de você na sua região:")
                    .font(.system(size: 12))
                
                Spacer()
            }.frame(width: 310)
            
            
            Rectangle().frame(width: 300, height: 100)
            //mapa aq nao sei se qurres a imagem ou o mapa google!!!!
            
            VStack (spacing: 24) {
                
                HStack {
                    Text("Delegacias Especializadas em Atendimento à Mulher (DEAM) em RECIFE")
                        .font(.system(size: 12))
                        .fontWeight(.black)//recife entra como variavel
                    Spacer()
                }.frame(width: 310)
                
                ZStack {
                    ZStack {
                        Rectangle().frame(width: 313, height: 147)
                            .foregroundColor(.clear)
                            .overlay(
                                RoundedRectangle(cornerRadius: 16)
                                    .inset(by: 0.5)
                                    .stroke(Color(red: 0.85, green: 0.85, blue: 0.85), lineWidth: 1))
                        
                        VStack {
                            
                            HStack {
                                Image(ImageResource.roxooo)
                                Text("1ª DEAM do Recife")
                                    .font(.system(size: 14))
                                    .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                                    .foregroundColor(Color(red: 0.39, green: 0, blue: 0.78))
                                    .frame(width: 179, alignment: .topLeading)
                                Spacer()
                            }.frame(width: 280)
                            
                            Text("Atendimento prioritário para mulheres sob risco de violência doméstica e familiar.")
                                .font(.system(size: 12))
                                .frame(width: 268)
                            
                            Spacer()
                        }.frame(height: 97)
                        
                        
                    }
                    
                    ZStack {
                        
                        VStack {
                            Spacer()
                            Rectangle()
                                .foregroundColor(.clear)
                                .frame(width: 311, height: 20)
                                .background(Color(red: 0.8, green: 0.75, blue: 1))
                        }.frame(height: 105)
                        
                        ZStack {
                            VStack {
                                Spacer()
                                Rectangle()
                                    .foregroundColor(.clear)
                                    .frame(width: 311, height: 40)
                                    .background(Color(red: 0.8, green: 0.75, blue: 1))
                                    .cornerRadius(16)
                            }.frame(height: 145)
                            
                            VStack {
                                
                                Spacer()
                                
                                Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/, label: {
                                    HStack {
                                        Spacer()
                                        Text("copiar número")
                                            .font(.system(size: 12))
                                            .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                                            .foregroundColor(Color(red: 0.45, green: 0.11, blue: 0.8))
                                    }.frame(width: 270)
                                })
                            }.frame(height: 120)
                        }
                        
                    }
                }
                
                HStack {
                    Text("Coordenadoria Geral")
                        .font(.system(size: 12))
                        .fontWeight(.black)//recife entra como variavel
                    Spacer()
                }.frame(width: 310)
                
                
                ZStack {
                    ZStack {
                        Rectangle().frame(width: 313, height: 147)
                            .foregroundColor(.clear)
                            .overlay(
                                RoundedRectangle(cornerRadius: 16)
                                    .inset(by: 0.5)
                                    .stroke(Color(red: 0.85, green: 0.85, blue: 0.85), lineWidth: 1))
                        
                        VStack {
                            
                            HStack {
                                Image(ImageResource.roxooo)
                                Text("Cordenadora: Ana Patrícia")
                                    .font(.system(size: 14))
                                    .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                                    .foregroundColor(Color(red: 0.39, green: 0, blue: 0.78))
                                    .frame(width: 260, alignment: .topLeading)
                                Spacer()
                            }.frame(width: 280)
                            
                            HStack {
                                Text("Telefone: (81) 98494-0521")
                                    .font(.system(size: 12))
                                Spacer()
                            }.frame(width: 248)
                            HStack {
                                Text("E-mail: ana.patricia@secmulher.pe.gov.br")
                                    .font(.system(size: 12))
                                Spacer()
                            }.frame(width: 245)
                            
                            Spacer()
                        }.frame(height: 97)
                        
                        
                    }
                    
                    ZStack {
                        
                        VStack {
                            Spacer()
                            Rectangle()
                                .foregroundColor(.clear)
                                .frame(width: 311, height: 20)
                                .background(Color(red: 0.8, green: 0.75, blue: 1))
                        }.frame(height: 105)
                        
                        ZStack {
                            VStack {
                                Spacer()
                                Rectangle()
                                    .foregroundColor(.clear)
                                    .frame(width: 311, height: 40)
                                    .background(Color(red: 0.8, green: 0.75, blue: 1))
                                    .cornerRadius(16)
                            }.frame(height: 145)
                            
                            VStack {
                                
                                Spacer()
                                
                                Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/, label: {
                                    HStack {
                                        Spacer()
                                        Text("copiar número")
                                            .font(.system(size: 12))
                                            .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                                            .foregroundColor(Color(red: 0.45, green: 0.11, blue: 0.8))
                                    }.frame(width: 270)
                                })
                            }.frame(height: 120)
                        }
                        
                    }
                }
                
                
                
                
            }
            
        }
        
        
    }
}

#Preview {
    SOSMulherView()
}