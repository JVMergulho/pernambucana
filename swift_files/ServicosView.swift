import SwiftUI

struct ServicosView: View {
    var body: some View {
        
        VStack (spacing: 35) {

            VStack (spacing: 8) {
                HStack {
                    Image(ImageResource.logo2)
                    Spacer()
                    Image(ImageResource.busca)
                }.frame(width: 300)
                
                HStack {
                    Text("Todos os serviços disponíveis")
                        .font(.system(size: 16))
                    .fontWeight(.black)
                    Spacer()
                }.frame(width: 300)
            }
            
            VStack (spacing: 30) {
                HStack (spacing: 30) {
                    VStack {
                        
                        Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/, label: {
                            ZStack {
                                Rectangle()
                                    .foregroundColor(.clear)
                                    .frame(width: 80, height: 77)
                                    .background(Color(red: 0.59, green: 0.39, blue: 1))
                                .cornerRadius(16)
                                
                                Image(ImageResource.iconmulher)
                            }
                        })
                        
                        Text("Proteção à mulher")
                            .font(.system(size: 12))
                            .frame(width: 53)
                            .multilineTextAlignment(.center)
                    }
                    
                    VStack {
                        
                        Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/, label: {
                            ZStack {
                                Rectangle()
                                    .foregroundColor(.clear)
                                    .frame(width: 80, height: 77)
                                    .background(Color(red: 0.59, green: 0.39, blue: 1))
                                .cornerRadius(16)
                                
                                Image(ImageResource.iconform)
                            }
                        })
                        
                        Text("Campanhas Educativas")
                            .font(.system(size: 12))
                            .frame(width: 74)
                            .multilineTextAlignment(.center)
                    }
                    
                    VStack {
                        
                        Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/, label: {
                            ZStack {
                                Rectangle()
                                    .foregroundColor(.clear)
                                    .frame(width: 80, height: 77)
                                    .background(Color(red: 0.59, green: 0.39, blue: 1))
                                .cornerRadius(16)
                                
                                Image(ImageResource.mala)
                            }
                        })
                        
                        Text("Qualificação Profissional")
                            .font(.system(size: 12))
                            .frame(width: 75)
                            .multilineTextAlignment(.center)
                    }
                    
                }
                
                HStack (spacing: 25) {
                    VStack {
                        
                        Button(action: {}, label: {
                            ZStack {
                                Rectangle()
                                    .foregroundColor(.clear)
                                    .frame(width: 80, height: 77)
                                    .background(Color(red: 0.59, green: 0.39, blue: 1))
                                .cornerRadius(16)
                                
                                Image(ImageResource.iconsaude)
                            }
                        })
                        
                        Text("Saúde")
                            .font(.system(size: 12))
                            .frame(width: 75, height: 25)
                            .multilineTextAlignment(.center)
                    }
                    
                    VStack {
                        
                        Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/, label: {
                            
                            ZStack {
                                Rectangle()
                                    .foregroundColor(.clear)
                                    .frame(width: 80, height: 77)
                                    .background(Color(red: 0.59, green: 0.39, blue: 1))
                                .cornerRadius(16)
                                
                                Image(ImageResource.femme)
                            }
                            
                        })
                        
                        Text("Formação de gênero")
                            .font(.system(size: 12))
                            .frame(width: 90)
                            .multilineTextAlignment(.center)
                    }
                    
                    VStack {
                        
                        Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/, label: {
                            ZStack {
                                Rectangle()
                                    .foregroundColor(.clear)
                                    .frame(width: 80, height: 77)
                                    .background(Color(red: 0.59, green: 0.39, blue: 1))
                                .cornerRadius(16)
                                
                                Image(ImageResource.iconart)
                            }
                        })
                        
                        Text("Apoio à artesã")
                            .font(.system(size: 12))
                            .frame(width: 85)
                            .multilineTextAlignment(.center)
                        Spacer()
                    }
                    .frame(height: 110)
                    
                }
                
                HStack (spacing: 22) {
                    VStack {
                        
                        Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/, label: {
                            ZStack {
                                Rectangle()
                                    .foregroundColor(.clear)
                                    .frame(width: 80, height: 77)
                                    .background(Color(red: 0.59, green: 0.39, blue: 1))
                                .cornerRadius(16)
                                
                                Image(ImageResource.idicon)
                            }
                        })
                        
                        Text("Documentos e Cidadania")
                            .font(.system(size: 12))
                            .frame(width: 90)
                            .multilineTextAlignment(.center)
                    }
                    
                    VStack {
                        
                        Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/, label: {
                            ZStack {
                                Rectangle()
                                    .foregroundColor(.clear)
                                    .frame(width: 80, height: 77)
                                    .background(Color(red: 0.59, green: 0.39, blue: 1))
                                .cornerRadius(16)
                                
                                Image(ImageResource.commun)
                            }
                        })
                        
                        Text("Comissões e Comitês")
                            .font(.system(size: 12))
                            .frame(width: 90)
                            .multilineTextAlignment(.center)
                    }
                    
                    VStack {
                        
                        Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/, label: {
                            
                            ZStack {
                                Rectangle()
                                    .foregroundColor(.clear)
                                    .frame(width: 80, height: 77)
                                    .background(Color(red: 0.59, green: 0.39, blue: 1))
                                .cornerRadius(16)
                                
                                Image(ImageResource.orelha)
                            }
                            
                        })
                        
                        Text("Ouvidoria das Mulheres")
                            .font(.system(size: 12))
                            .frame(width: 90)
                            .multilineTextAlignment(.center)
                    }
                    
                }
                
                
                HStack (spacing: 22) {
                    VStack {
                        
                        Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/, label: {
                            ZStack {
                                Rectangle()
                                    .foregroundColor(.clear)
                                    .frame(width: 80, height: 77)
                                    .background(Color(red: 0.59, green: 0.39, blue: 1))
                                .cornerRadius(16)
                                
                                Image(ImageResource.deleg)
                            }
                        })
                        
                        Text("Delegacias Especializadas")
                            .font(.system(size: 12))
                            .frame(width: 90)
                            .multilineTextAlignment(.center)
                    }
                    
                Spacer()
                }.frame(width: 310)
                
                
                
            }
            
            Spacer()
        }
    }
}

#Preview {
    ServicosView()
}