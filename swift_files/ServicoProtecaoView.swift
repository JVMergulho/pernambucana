//
//  ServicoProtecao.swift
//  hackagov
//
//  Created by Raquel Silva dos Santos on 06/09/24.
//

import SwiftUI

struct ServicoProtecao: View {
    var body: some View {
        
        VStack (spacing: 20) {
            
            VStack {
                HStack {
                    
                    Button(action: {}, label: { //precisa ter ação para voltar para a pgina de servicos
                        Image(ImageResource.stladin)
                        Text("Nossos serviços")
                            .font(.system(size: 14))
                            .fontWeight(.semibold)
                            .foregroundColor(Color(red: 0.45, green: 0.11, blue: 0.8))
                    })
                    Spacer()
                }.frame(width: 310)
            }.padding(.bottom, 10)
            
            ZStack {
                
                
                
                VStack (spacing: -10){
                    
                    VStack (spacing: 13) {
                        
                        HStack  (spacing: -95) {
                            Image(ImageResource.iconmulherp)
                            Text("PROTEÇÃO").font(.system(size: 16)).fontWeight(.black).frame(width: 310)
                            Spacer()
                        }
                        .frame(width: 310)
                        
                        HStack {
                            Text("Conheça as Iniciativas de Proteção e Suporte para Mulheres em Situação de Violência em Pernambuco.")
                                .font(.system(size: 14))
                            Spacer()
                        }
                        .frame(width: 310)
                        
                    }
                    
                        ScrollView {
                            
                            VStack (spacing: 16) {
                                
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
                                                Image(ImageResource.simbometade)
                                                Text("190 MULHER")
                                                    .font(.system(size: 14))
                                                    .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                                                    .foregroundColor(Color(red: 0.94, green: 0.28, blue: 0.96))
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
                                            .background(Color(red: 1, green: 0.87, blue: 1))
                                            .background(Color(red: 1, green: 0.87, blue: 1))
                                        }.frame(height: 105)
                                        
                                        ZStack {
                                            VStack {
                                                Spacer()
                                                Rectangle()
                                                .foregroundColor(.clear)
                                                .frame(width: 311, height: 40)
                                                .background(Color(red: 1, green: 0.87, blue: 1))
                                                .background(Color(red: 1, green: 0.87, blue: 1))
                                                .cornerRadius(16)
                                            }.frame(height: 145)
                                            
                                            VStack {
                                                
                                                Spacer()
                                                
                                                Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/, label: {
                                                    HStack {
                                                        Spacer()
                                                        Text("SAIBA MAIS")
                                                            .font(.system(size: 12))
                                                            .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                                                            .foregroundColor(Color(red: 0.45, green: 0.11, blue: 0.8))
                                                        Image(ImageResource.ladinhoseta)
                                                    }.frame(width: 270)
                                                })
                                            }.frame(height: 120)
                                        }
                                        
                                    }
                                }
                                
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
                                                Image(ImageResource.simbometade)
                                                Text("ABRIGOS TEMPORÁRIOS")
                                                    .font(.system(size: 14))
                                                    .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                                                    .foregroundColor(Color(red: 0.94, green: 0.28, blue: 0.96))
                                                    .frame(width: 179, alignment: .topLeading)
                                                Spacer()
                                            }.frame(width: 280)
                                            
                                            Text("Acolhimento em abrigos sigilosos para mulheres sob risco de morte devido à violência doméstica.")
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
                                            .background(Color(red: 1, green: 0.87, blue: 1))
                                            .background(Color(red: 1, green: 0.87, blue: 1))
                                        }.frame(height: 105)
                                        
                                        ZStack {
                                            VStack {
                                                Spacer()
                                                Rectangle()
                                                .foregroundColor(.clear)
                                                .frame(width: 311, height: 40)
                                                .background(Color(red: 1, green: 0.87, blue: 1))
                                                .background(Color(red: 1, green: 0.87, blue: 1))
                                                .cornerRadius(16)
                                            }.frame(height: 145)
                                            
                                            VStack {
                                                
                                                Spacer()
                                                
                                                Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/, label: {
                                                    HStack {
                                                        Spacer()
                                                        Text("SAIBA MAIS")
                                                            .font(.system(size: 12))
                                                            .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                                                            .foregroundColor(Color(red: 0.45, green: 0.11, blue: 0.8))
                                                        Image(ImageResource.ladinhoseta)
                                                    }.frame(width: 270)
                                                })
                                            }.frame(height: 120)
                                        }
                                        
                                    }
                                }
                                
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
                                                Image(ImageResource.simbometade)
                                                Text("PATRULHA MARIA DA PENHA")
                                                    .font(.system(size: 14))
                                                    .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                                                    .foregroundColor(Color(red: 0.94, green: 0.28, blue: 0.96))
                                                    .frame(width: 210, alignment: .topLeading)
                                                Spacer()
                                            }.frame(width: 280)
                                            
                                            Text("Atendimento especializado e preventivo da Polícia Militar para acompanhar mulheres que solicitaram Medidas Protetivas de Urgência.")
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
                                            .background(Color(red: 1, green: 0.87, blue: 1))
                                            .background(Color(red: 1, green: 0.87, blue: 1))
                                        }.frame(height: 105)
                                        
                                        ZStack {
                                            VStack {
                                                Spacer()
                                                Rectangle()
                                                .foregroundColor(.clear)
                                                .frame(width: 311, height: 40)
                                                .background(Color(red: 1, green: 0.87, blue: 1))
                                                .background(Color(red: 1, green: 0.87, blue: 1))
                                                .cornerRadius(16)
                                            }.frame(height: 145)
                                            
                                            VStack {
                                                
                                                Spacer()
                                                
                                                Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/, label: {
                                                    HStack {
                                                        Spacer()
                                                        Text("SAIBA MAIS")
                                                            .font(.system(size: 12))
                                                            .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                                                            .foregroundColor(Color(red: 0.45, green: 0.11, blue: 0.8))
                                                        Image(ImageResource.ladinhoseta)
                                                    }.frame(width: 270)
                                                })
                                            }.frame(height: 120)
                                        }
                                        
                                    }
                                }
                                
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
                                                Image(ImageResource.simbometade)
                                                Text("MONITORAMENTO ELETRÔNICO")
                                                    .font(.system(size: 14))
                                                    .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                                                    .foregroundColor(Color(red: 0.94, green: 0.28, blue: 0.96))
                                                    .frame(width: 230, alignment: .topLeading)
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
                                            .background(Color(red: 1, green: 0.87, blue: 1))
                                            .background(Color(red: 1, green: 0.87, blue: 1))
                                        }.frame(height: 105)
                                        
                                        ZStack {
                                            VStack {
                                                Spacer()
                                                Rectangle()
                                                .foregroundColor(.clear)
                                                .frame(width: 311, height: 40)
                                                .background(Color(red: 1, green: 0.87, blue: 1))
                                                .background(Color(red: 1, green: 0.87, blue: 1))
                                                .cornerRadius(16)
                                            }.frame(height: 145)
                                            
                                            VStack {
                                                
                                                Spacer()
                                                
                                                Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/, label: {
                                                    HStack {
                                                        Spacer()
                                                        Text("SAIBA MAIS")
                                                            .font(.system(size: 12))
                                                            .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                                                            .foregroundColor(Color(red: 0.45, green: 0.11, blue: 0.8))
                                                        Image(ImageResource.ladinhoseta)
                                                    }.frame(width: 270)
                                                })
                                            }.frame(height: 120)
                                        }
                                        
                                    }
                                }
                                
                                
                            }.frame(height: 700)
                            
                        }
                            .frame(height: 500)
                    
                    
                    
                        
                    //IMPOOOOO: faltam acoes no saiba mais prs direcionar pra outra tela ok
                    
                    
                }
            }
            
        }
        
        
        
    }
}

#Preview {
    ServicoProtecao()
}
