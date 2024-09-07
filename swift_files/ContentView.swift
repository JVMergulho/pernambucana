//
//  ContentView.swift
//  hackagov
//
//  Created by Raquel Silva dos Santos on 05/09/24.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        
        @State var nome: String = "Fátima"
        
        @State var respondeuPerguntaDiaria: Bool = true
    
        
        if !respondeuPerguntaDiaria {
            
            VStack {
                Image(ImageResource.logo)
                
            }.padding(.bottom, 15)
            
            VStack (alignment: .leading) {
                HStack {
                    Text("Olá,")
                        .font(.system(size: 24))
                    Text("\(nome)")
                        .font(.system(size: 24))
                        .fontWeight(.black)
                    Spacer()
                }
            }.frame(width: 310, height: 15)
            
            VStack (spacing: 15) {
                
                ZStack {
                    Rectangle()
                        .frame(width: 310, height: 126)
                        .cornerRadius(8)
                        .foregroundColor(Color(red: 1, green: 0.87, blue: 1))
                    
                    VStack (spacing: 10){
                        Text("Quão preparada você se sente  para atuar no mercado de trabalho com as qualificações que possui?")
                            .font(.system(size:12))
                            .frame(width: 300)
                            .multilineTextAlignment(.center)
                        
                        HStack(spacing: 20) {
                            
                            VStack {
                                Button(action: {
                                        respondeuPerguntaDiaria = true
                                    }
                                ) {
                                    Text("😁")
                                        .font(.system(size: 30))
                            }
                                
                                Text("Muito")
                                    .font(.system(size: 12))
                            }
                            
                            VStack {
                                Button(action: {
                                    DispatchQueue.main.asyncAfter(deadline: .now() + 3) {
                                        respondeuPerguntaDiaria = true
                                    }
                                }) {
                                    Text("😊")
                                        .font(.system(size: 30))
                            }
                                
                                Text("Preparada")
                                    .font(.system(size: 12))
                            }
                            
                            VStack {
                                Button(action: {
                                    DispatchQueue.main.asyncAfter(deadline: .now() + 3) {
                                        respondeuPerguntaDiaria = true
                                    }
                                }) {
                                    Text("😐")
                                        .font(.system(size: 30))
                            }
                                
                                Text("Neutro")
                                    .font(.system(size: 12))
                            }
                            
                            VStack {
                                Button(action: {
                                    DispatchQueue.main.asyncAfter(deadline: .now() + 3) {
                                        respondeuPerguntaDiaria = true
                                    }
                                }) {
                                    Text("😔")
                                        .font(.system(size: 30))
                            }
                                
                                Text("Pouco")
                                    .font(.system(size: 12))
                            }
                            
                            VStack {
                                Button(action: {
                                    DispatchQueue.main.asyncAfter(deadline: .now() + 3) {
                                        respondeuPerguntaDiaria = true
                                    }
                                }) {
                                    Text("😢")
                                        .font(.system(size: 30))
                            }
                                
                                Text("Nada")
                                    .font(.system(size: 12))
                            }
                            
                        }
                    }
                }
                
                Text("Veja o que tem disponível na sua região baseada em seus interesses")
                    .font(.system(size:12))

                ZStack {
                    ScrollView {
                        
                        
                        ZStack {
                            
                            ZStack {
                                Rectangle()
                                    .frame(width: 310, height: 146)
                                    .cornerRadius(8)
                                    .foregroundColor(Color(red: 0.7, green: 0.7, blue: 0.7))
                                    .opacity(0.3)
                                
                                
                                HStack {
                                    ZStack {
                                        Rectangle()
                                            .frame(width: 79, height: 146)
                                            .cornerRadius(8)
                                            .foregroundColor(Color(red: 0.45, green: 0.11, blue: 0.8))
                                        HStack {
                                            Spacer().frame(width: 20)
                                            Rectangle()
                                                .frame(width: 60, height: 146)
                                                .cornerRadius(0)
                                                .foregroundColor(Color(red: 0.45, green: 0.11, blue: 0.8))
                                        }
                                        VStack {
                                            Text("08")
                                                .font(.system(size: 40))
                                                .fontWeight(.bold)
                                                .foregroundStyle(.white)
                                            Text("NOV")
                                                .font(.system(size: 19))
                                                .fontWeight(.bold)
                                                .foregroundStyle(.white)
                                        }
                                        
                                    }
                                    Spacer()
                                }.frame(width: 310, height: 126)
                                
                            }
                            
                            HStack {
                                Spacer()
                                VStack {
                                    Text("CURSOS PROFISSIONALIZANTES")
                                        .font(.system(size: 14))
                                        .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                                        .frame(width: 200)
                                    HStack {
                                        Spacer()
                                            .frame(width: 15)
                                        Text("A Sec Mulher PE vai promover cursos relacionados á culinária.")
                                            .font(.system(size: 12))
                                            .fontWeight(.medium)
                                            .frame(width: 190)
                                    }.frame(width: 200)
                                    HStack (spacing: 7){
                                        Spacer()
                                            .frame(width: -20)
                                        Image(ImageResource.locsimbolo)
                                            .frame(width: 15, height: 15)
                                        Text("Casa Zero - Recife Antigo")
                                            .font(.system(size: 12))
                                            .fontWeight(.medium)
                                            .frame(width: 150)
                                    }.frame(width: 170)
                                }
                                
                            }.frame(width: 250)
                            
                        }
                        
                        ZStack {
                            
                            ZStack {
                                Rectangle()
                                    .frame(width: 310, height: 146)
                                    .cornerRadius(8)
                                    .foregroundColor(Color(red: 0.7, green: 0.7, blue: 0.7))
                                    .opacity(0.3)
                                
                                
                                HStack {
                                    ZStack {
                                        Rectangle()
                                            .frame(width: 79, height: 146)
                                            .cornerRadius(8)
                                            .foregroundColor(Color(red: 0.99, green: 0.68, blue: 1))
                                        HStack {
                                            Spacer().frame(width: 20)
                                            Rectangle()
                                                .frame(width: 60, height: 146)
                                                .cornerRadius(0)
                                                .foregroundColor(Color(red: 0.99, green: 0.68, blue: 1))
                                        }
                                        VStack {
                                            Text("?")
                                                .font(.system(size: 50))
                                                .fontWeight(.bold)
                                                .foregroundStyle(.white)
                                        }
                                        
                                    }
                                    Spacer()
                                }.frame(width: 310, height: 126)
                                
                            }
                            
                            HStack {
                                Spacer()
                                VStack {
                                    HStack {
                                        Text("COMO FAZER UMA DENÚNCIA")
                                            .font(.system(size: 14))
                                            .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                                        Spacer()
                                    }.frame(width: 170)
                                    HStack {
                                        Spacer()
                                            .frame(width: 15)
                                        Text("A Sec Mulher PE vai promover cursos relacionados á culinária.")
                                            .font(.system(size: 12))
                                            .fontWeight(.medium)
                                            .frame(width: 190)
                                    }.frame(width: 200)
                                    HStack (spacing: 7){
                                        Spacer()
                                            .frame(width: -20)
                                        Image(ImageResource.locsimbolo)
                                            .frame(width: 15, height: 15)
                                        Text("Casa Zero - Recife Antigo")
                                            .font(.system(size: 12))
                                            .fontWeight(.medium)
                                            .frame(width: 150)
                                    }.frame(width: 170)
                                }
                                
                            }.frame(width: 250)
                            
                        }
                        
                        
                        ZStack {
                            
                            ZStack {
                                Rectangle()
                                    .frame(width: 310, height: 146)
                                    .cornerRadius(8)
                                    .foregroundColor(Color(red: 0.7, green: 0.7, blue: 0.7))
                                    .opacity(0.3)
                                
                                
                                HStack {
                                    ZStack {
                                        Rectangle()
                                            .frame(width: 79, height: 146)
                                            .cornerRadius(8)
                                            .foregroundColor(Color(red: 0.45, green: 0.11, blue: 0.8))
                                        HStack {
                                            Spacer().frame(width: 20)
                                            Rectangle()
                                                .frame(width: 60, height: 146)
                                                .cornerRadius(0)
                                                .foregroundColor(Color(red: 0.45, green: 0.11, blue: 0.8))
                                        }
                                        VStack {
                                            Text("16")
                                                .font(.system(size: 40))
                                                .fontWeight(.bold)
                                                .foregroundStyle(.white)
                                            Text("NOV")
                                                .font(.system(size: 19))
                                                .fontWeight(.bold)
                                                .foregroundStyle(.white)
                                        }
                                        
                                    }
                                    Spacer()
                                }.frame(width: 310, height: 126)
                                
                            }
                            
                            HStack {
                                Spacer()
                                    .frame(width: 60)
                                VStack {
                                    Text("FEIRA DE ARTESANATOS")
                                        .font(.system(size: 14))
                                        .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                                        .frame(width: 210)
                                    Text("Incentivo e promoção da arte local de mulheres para a comunidade. ")
                                        .font(.system(size: 12))
                                        .fontWeight(.medium)
                                        .frame(width: 190)
                                    HStack (spacing: -9){
                                        Spacer()
                                        Image(ImageResource.locsimbolo)
                                            .frame(width: 15, height: 15)
                                        Text("Pracinha - Boa Viagem")
                                            .font(.system(size: 12))
                                            .fontWeight(.medium)
                                            .frame(width: 165)
                                    }.frame(width: 100)
                                }
                                
                            }
                            
                        }.frame(width: 250)
                        
                        
                        ZStack {
                            
                            ZStack {
                                Rectangle()
                                    .frame(width: 310, height: 146)
                                    .cornerRadius(8)
                                    .foregroundColor(Color(red: 0.7, green: 0.7, blue: 0.7))
                                    .opacity(0.3)
                                
                                
                                HStack {
                                    ZStack {
                                        Rectangle()
                                            .frame(width: 79, height: 146)
                                            .cornerRadius(8)
                                            .foregroundColor(Color(red: 0.45, green: 0.11, blue: 0.8))
                                        HStack {
                                            Spacer().frame(width: 20)
                                            Rectangle()
                                                .frame(width: 60, height: 146)
                                                .cornerRadius(0)
                                                .foregroundColor(Color(red: 0.45, green: 0.11, blue: 0.8))
                                        }
                                        VStack {
                                            Text("25")
                                                .font(.system(size: 40))
                                                .fontWeight(.bold)
                                                .foregroundStyle(.white)
                                            Text("NOV")
                                                .font(.system(size: 19))
                                                .fontWeight(.bold)
                                                .foregroundStyle(.white)
                                        }
                                        
                                    }
                                    Spacer()
                                }.frame(width: 310, height: 126)
                                
                            }
                            
                            HStack {
                                Spacer()
                                VStack {
                                    Text("RODA DE CONVERSA: EU MULHER!")
                                        .font(.system(size: 14))
                                        .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                                        .frame(width: 210)
                                    Text("Karina Dias, mãe atípica e empreendedora conversará com mulheres da entre a pulso.")
                                        .font(.system(size: 12))
                                        .fontWeight(.medium)
                                        .frame(width: 150)
                                    HStack (spacing: 7){
                                        Spacer()
                                        Image(ImageResource.locsimbolo)
                                            .frame(width: 15, height: 15)
                                        Text("Casa Zero - Recife Antigo")
                                            .font(.system(size: 12))
                                            .fontWeight(.medium)
                                            .frame(width: 150)
                                    }.frame(width: 190)
                                    
                                }
                                
                            }.frame(width: 250)
                            
                        }
                        Rectangle()
                            .foregroundColor(.clear)
                            .frame(height: 40)
                    }.frame(height: 350)
                    
                    VStack {
                        Spacer()
                        HStack {
                            Spacer()
                            Button(action: {}, label: {
                                Image(ImageResource.image)
                                
                            })
                        }.frame(width: 350)
                    }.frame(height: 350)
                    
                }
                
                
                
            }
            .padding()
        } else {
            
            HStack {
                
                HStack {
                    Image(ImageResource.logo2)
                    Spacer()
                }.frame(width: 280, height: 50)
                
                
                Image(ImageResource.busca)
            }
            
            VStack (alignment: .leading) {
                HStack {
                    Text("Olá,")
                        .font(.system(size: 16))
                    Text("\(nome)")
                        .font(.system(size: 16))
                        .fontWeight(.black)
                    Spacer()
                }
                Text("Que bom que você está bem!")
                    .font(.system(size: 16))
            }.frame(width: 310, height: 15)
            
            VStack (spacing: 15) {
                
                ZStack {
                    Rectangle()
                        .frame(width: 310, height: 84)
                        .cornerRadius(8)
                        .foregroundColor(Color(red: 0.8, green: 0.75, blue: 1))
                    
                    VStack (spacing: 10){
                        HStack {
                            Image(ImageResource.heart)
                            Text("O governo de Pernambuco cuida de vocē. Continue buscando oportunidades para crescer e se fortalecer.")
                                .font(.system(size:12))
                                .frame(width: 254)
                                .foregroundColor(Color(red: 0.45, green: 0.11, blue: 0.8))
                                .fontWeight(.bold)
                                .multilineTextAlignment(.leading)
                        }
                    }
                }
                Divider()
                    .frame(width: 248)
                
                HStack {
                    Text("Acesse aos serviços: ")
                        .font(.system(size:12))
                        .fontWeight(.black)
                    Spacer()
                }.frame(width: 320)
                
                
                ScrollView (.horizontal) {
                    HStack {
                        VStack {
                            ZStack {
                                Rectangle()
                                    .foregroundColor(.clear)
                                    .frame(width: 61, height: 77)
                                    .background(Color(red: 0.99, green: 0.38, blue: 1))
                                    .cornerRadius(16)
                                
                                Image(ImageResource.iconmulher)
                            }
                            Text("Proteção")
                                .font(.system(size:12))
                        }
                        
                        VStack {
                            ZStack {
                                Rectangle()
                                    .foregroundColor(.clear)
                                    .frame(width: 61, height: 77)
                                    .background(Color(red: 0.99, green: 0.38, blue: 1))
                                    .cornerRadius(16)
                                
                                Image(ImageResource.iconform)
                            }
                            Text("Campanhas")
                                .font(.system(size:12))
                        }
                        
                        VStack {
                            ZStack {
                                Rectangle()
                                    .foregroundColor(.clear)
                                    .frame(width: 61, height: 77)
                                    .background(Color(red: 0.99, green: 0.38, blue: 1))
                                    .cornerRadius(16)
                                
                                Image(ImageResource.iconart)
                            }
                            Text("Profissional")
                                .font(.system(size:12))
                        }
                        
                        VStack {
                            ZStack {
                                Rectangle()
                                    .foregroundColor(.clear)
                                    .frame(width: 61, height: 77)
                                    .background(Color(red: 0.99, green: 0.38, blue: 1))
                                    .cornerRadius(16)
                                
                                Image(ImageResource.icondoc)
                            }
                            Text("Documentos")
                                .font(.system(size:12))
                        }
                        
                        VStack {
                            ZStack {
                                Rectangle()
                                    .foregroundColor(.clear)
                                    .frame(width: 61, height: 77)
                                    .background(Color(red: 0.99, green: 0.38, blue: 1))
                                    .cornerRadius(16)
                                
                                Image(ImageResource.iconsaude)
                            }
                            Text("Saúde")
                                .font(.system(size:12))
                        }
                    }
                }.frame(width: 310)
                
                Divider()
                    .frame(width: 248)
                
                HStack {
                    Text("Veja o que tem disponível na sua região baseada em seus interesses")
                        .font(.system(size:12))
                        .fontWeight(.black)
                        .frame(width: 310, height: 30)
                    Spacer()
                }.frame(width: 300)
                
                
                
                ZStack {
                    ScrollView {
                        
                        
                        ZStack {
                            
                            ZStack {
                                Rectangle()
                                    .frame(width: 310, height: 146)
                                    .cornerRadius(8)
                                    .foregroundColor(Color(red: 0.7, green: 0.7, blue: 0.7))
                                    .opacity(0.3)
                                
                                
                                HStack {
                                    ZStack {
                                        Rectangle()
                                            .frame(width: 79, height: 146)
                                            .cornerRadius(8)
                                            .foregroundColor(Color(red: 0.45, green: 0.11, blue: 0.8))
                                        HStack {
                                            Spacer().frame(width: 20)
                                            Rectangle()
                                                .frame(width: 60, height: 146)
                                                .cornerRadius(0)
                                                .foregroundColor(Color(red: 0.45, green: 0.11, blue: 0.8))
                                        }
                                        VStack {
                                            Text("08")
                                                .font(.system(size: 40))
                                                .fontWeight(.bold)
                                                .foregroundStyle(.white)
                                            Text("NOV")
                                                .font(.system(size: 19))
                                                .fontWeight(.bold)
                                                .foregroundStyle(.white)
                                        }
                                        
                                    }
                                    Spacer()
                                }.frame(width: 310, height: 126)
                                
                            }
                            
                            HStack {
                                Spacer()
                                VStack {
                                    Text("CURSOS PROFISSIONALIZANTES")
                                        .font(.system(size: 14))
                                        .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                                        .frame(width: 200)
                                    HStack {
                                        Spacer()
                                            .frame(width: 15)
                                        Text("A Sec Mulher PE vai promover cursos relacionados á culinária.")
                                            .font(.system(size: 12))
                                            .fontWeight(.medium)
                                            .frame(width: 190)
                                    }.frame(width: 200)
                                    HStack (spacing: 7){
                                        Spacer()
                                            .frame(width: -20)
                                        Image(ImageResource.locsimbolo)
                                            .frame(width: 15, height: 15)
                                        Text("Casa Zero - Recife Antigo")
                                            .font(.system(size: 12))
                                            .fontWeight(.medium)
                                            .frame(width: 150)
                                    }.frame(width: 170)
                                }
                                
                            }.frame(width: 250)
                            
                        }
                        
                        
                        ZStack {
                            
                            ZStack {
                                Rectangle()
                                    .frame(width: 310, height: 146)
                                    .cornerRadius(8)
                                    .foregroundColor(Color(red: 0.7, green: 0.7, blue: 0.7))
                                    .opacity(0.3)
                                
                                
                                HStack {
                                    ZStack {
                                        Rectangle()
                                            .frame(width: 79, height: 146)
                                            .cornerRadius(8)
                                            .foregroundColor(Color(red: 0.45, green: 0.11, blue: 0.8))
                                        HStack {
                                            Spacer().frame(width: 20)
                                            Rectangle()
                                                .frame(width: 60, height: 146)
                                                .cornerRadius(0)
                                                .foregroundColor(Color(red: 0.45, green: 0.11, blue: 0.8))
                                        }
                                        VStack {
                                            Text("16")
                                                .font(.system(size: 40))
                                                .fontWeight(.bold)
                                                .foregroundStyle(.white)
                                            Text("NOV")
                                                .font(.system(size: 19))
                                                .fontWeight(.bold)
                                                .foregroundStyle(.white)
                                        }
                                        
                                    }
                                    Spacer()
                                }.frame(width: 310, height: 126)
                                
                            }
                            
                            HStack {
                                Spacer()
                                    .frame(width: 60)
                                VStack {
                                    Text("FEIRA DE ARTESANATOS")
                                        .font(.system(size: 14))
                                        .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                                        .frame(width: 210)
                                    Text("Incentivo e promoção da arte local de mulheres para a comunidade. ")
                                        .font(.system(size: 12))
                                        .fontWeight(.medium)
                                        .frame(width: 190)
                                    HStack (spacing: -9){
                                        Spacer()
                                        Image(ImageResource.locsimbolo)
                                            .frame(width: 15, height: 15)
                                        Text("Pracinha - Boa Viagem")
                                            .font(.system(size: 12))
                                            .fontWeight(.medium)
                                            .frame(width: 165)
                                    }.frame(width: 100)
                                }
                                
                            }
                            
                        }.frame(width: 250)
                        
                        
                        ZStack {
                            
                            ZStack {
                                Rectangle()
                                    .frame(width: 310, height: 146)
                                    .cornerRadius(8)
                                    .foregroundColor(Color(red: 0.7, green: 0.7, blue: 0.7))
                                    .opacity(0.3)
                                
                                
                                HStack {
                                    ZStack {
                                        Rectangle()
                                            .frame(width: 79, height: 146)
                                            .cornerRadius(8)
                                            .foregroundColor(Color(red: 0.45, green: 0.11, blue: 0.8))
                                        HStack {
                                            Spacer().frame(width: 20)
                                            Rectangle()
                                                .frame(width: 60, height: 146)
                                                .cornerRadius(0)
                                                .foregroundColor(Color(red: 0.45, green: 0.11, blue: 0.8))
                                        }
                                        VStack {
                                            Text("25")
                                                .font(.system(size: 40))
                                                .fontWeight(.bold)
                                                .foregroundStyle(.white)
                                            Text("NOV")
                                                .font(.system(size: 19))
                                                .fontWeight(.bold)
                                                .foregroundStyle(.white)
                                        }
                                        
                                    }
                                    Spacer()
                                }.frame(width: 310, height: 126)
                                
                            }
                            
                            HStack {
                                Spacer()
                                VStack {
                                    Text("RODA DE CONVERSA: EU MULHER!")
                                        .font(.system(size: 14))
                                        .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                                        .frame(width: 210)
                                    Text("Karina Dias, mãe atípica e empreendedora conversará com mulheres da entre a pulso.")
                                        .font(.system(size: 12))
                                        .fontWeight(.medium)
                                        .frame(width: 150)
                                    HStack (spacing: 7){
                                        Spacer()
                                        Image(ImageResource.locsimbolo)
                                            .frame(width: 15, height: 15)
                                        Text("Casa Zero - Recife Antigo")
                                            .font(.system(size: 12))
                                            .fontWeight(.medium)
                                            .frame(width: 150)
                                    }.frame(width: 190)
                                    
                                }
                                
                            }.frame(width: 250)
                            
                        }
                        Rectangle()
                            .foregroundColor(.clear)
                            .frame(height: 40)
                    }.frame(height: 320)
                    
                    VStack {
                        Spacer()
                        HStack {
                            Spacer()
                            Button(action: {}, label: {
                                Image(ImageResource.image)
                                
                            })
                        }.frame(width: 350)
                    }.frame(height: 350)
                    
                }
                
                
                
            }
            .padding()
            
        }
        
    }
}

#Preview {
    ContentView()
}
