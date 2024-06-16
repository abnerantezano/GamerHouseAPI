from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Categoria, Producto, Carrito, ItemCarrito
from .serializers import ProductoSerializer, CategoriaSerializer, CarritoSerializer, ItemCarritoSerializer


class CategoriaView(APIView):
    def get(self, request):
        categorias = Categoria.objects.all()
        serializer = CategoriaSerializer(categorias, many=True)
        return Response(serializer.data)

class ProductoView(APIView):
    def get(self, request):
        categoria_id = request.query_params.get('categoria')
        productos = Producto.objects.all()
        if categoria_id:
            productos = Producto.objects.filter(categoria=categoria_id)
        serializer = ProductoSerializer(productos, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ProductoSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)
    
class ProductoDetailView(APIView):
    def get(self, request, id_producto):
        producto = Producto.objects.get(pk=id_producto)
        serializer = ProductoSerializer(producto)
        return Response(serializer.data)
    
    def patch(self, request, id_producto):
        producto = Producto.objects.get(pk=id_producto)
        serializer = ProductoSerializer(producto, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    

class CarritoView(APIView):
    def get(self, request):
        carritos = Carrito.objects.all()
        serializer = CarritoSerializer(carritos, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CarritoSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    
    
class ItemCarritoView(APIView):
    def get(self, request, id_carrito):
        carrito = Carrito.objects.get(pk=id_carrito)
        items = ItemCarrito.objects.filter(carrito=id_carrito)
        serializer = ItemCarritoSerializer(items, many=True)
        
        response_data = {
            'precio_total': carrito.precio_total,
            'items': serializer.data,
        }

        return Response(response_data)
    
    def post(self, request, id_carrito):
        request.data['carrito'] = id_carrito
        serializer = ItemCarritoSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        carrito = Carrito.objects.get(pk=id_carrito)
        response_data = {
            'precio_total': carrito.precio_total,
            'item': serializer.data,
        }

        return Response(response_data)
    
    
class ItemCarritoDetailView(APIView):
    def get(self, request, id_carrito, id_item):
        item = ItemCarrito.objects.get(pk=id_item, carrito=id_carrito)
        serializer = ItemCarritoSerializer(item)

        return Response(serializer.data)

    def delete(self, request, id_carrito, id_item):
        item = ItemCarrito.objects.get(pk=id_item, carrito=id_carrito)
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    def patch(self, request, id_carrito, id_item):
        item = ItemCarrito.objects.get(pk=id_item, carrito=id_carrito)
        serializer = ItemCarritoSerializer(item, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)