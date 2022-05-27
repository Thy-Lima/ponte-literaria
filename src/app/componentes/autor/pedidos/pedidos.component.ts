import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],
})
export class PedidosComponent implements OnInit {

  constructor() { }

  public pedidosEmitidos = [
    { codigoPedido: 113268, itensPedido: 1, dataEmissaoPedido: '20/05/2022' },
    { codigoPedido: 113085, itensPedido: 1, dataEmissaoPedido: '18/05/2022' },
    { codigoPedido: 113026, itensPedido: 2, dataEmissaoPedido: '05/04/2022' },
    { codigoPedido: 112998, itensPedido: 1, dataEmissaoPedido: '12/03/2022' }
  ];

  public pedidosConfirmados = [
    { codigoPedido: 102541, itensPedido: 1, dataConfirmacaoPedido: '19/05/2022' },
    { codigoPedido: 102538, itensPedido: 1, dataConfirmacaoPedido: '19/05/2022' },
    { codigoPedido: 102537, itensPedido: 2, dataConfirmacaoPedido: '17/05/2022' },
    { codigoPedido: 102533, itensPedido: 1, dataConfirmacaoPedido: '15/05/2022' },
    { codigoPedido: 102527, itensPedido: 3, dataConfirmacaoPedido: '15/05/2022' },
    { codigoPedido: 102525, itensPedido: 1, dataConfirmacaoPedido: '14/05/2022' },
  ];

  public pedidosEnviados = [
    { codigoPedido: 105777, itensPedido: 1, dataEnvioPedido: '20/05/2022' },
    { codigoPedido: 105775, itensPedido: 1, dataEnvioPedido: '20/05/2022' },
    { codigoPedido: 105722, itensPedido: 2, dataEnvioPedido: '18/05/2022' },
    { codigoPedido: 105213, itensPedido: 1, dataEnvioPedido: '15/05/2022' },
    { codigoPedido: 105200, itensPedido: 3, dataEnvioPedido: '05/05/2022' },
    { codigoPedido: 105164, itensPedido: 1, dataEnvioPedido: '28/04/2022' },
    { codigoPedido: 105119, itensPedido: 1, dataEnvioPedido: '23/04/2022' },
    { codigoPedido: 105098, itensPedido: 1, dataEnvioPedido: '23/04/2022' },
    { codigoPedido: 105088, itensPedido: 1, dataEnvioPedido: '21/04/2022' },
    { codigoPedido: 105070, itensPedido: 2, dataEnvioPedido: '20/04/2022' },
  ];
  
  ngOnInit() {}

}
