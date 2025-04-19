export interface PedidoI {
    _id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    numero_pedido?: string;
    importe?: number;
    importe_impuestos?: number;
    cantidad_productos?: number;
    fecha?: Date;
}
