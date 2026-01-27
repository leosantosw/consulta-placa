export type ConsultaPlacaData = {
  placa: string;
  nome: string;
  marca: string;
  ano: string;
  cor: string;
  combustivel: string;
  tipo: string;
  fabricante: string;
  imagem: string;
  placaFormatada: string;
  chassi: string;
};

export type ConsultaPlacaResult =
  | { data: ConsultaPlacaData; error: null }
  | { data: null; error: { message: string; status: number } };
