import { Injectable } from '@angular/core';

export interface Producto {
    nombre: string;
    descripcion: string;
    descripcionDetallada: string;
    precio: number;
    imagen: string;
    imagenesAdicionales: string[];
    categoria: string;
    talles: string[];
}

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private productos: Producto[] = [
        {
            nombre: 'Alice In Chains',
            descripcion: 'Remera Alice In Chains con diseño exclusivo y alta calidad.',
            descripcionDetallada: 'Remera de Alice In Chains con diseño exclusivo y alta calidad. Fabricada con algodón premium para máxima comodidad y durabilidad. Diseño único que representa la esencia de la banda.',
            precio: 20000,
            imagen: 'assets/img/remeras/AliceInChains/AliceInChains1.jpeg',
            imagenesAdicionales: [
                'assets/img/remeras/AliceInChains/AliceInChains2.jpeg',
                'assets/img/remeras/AliceInChains/AliceInChains3.jpeg'
            ],
            categoria: 'remera',
            talles: ['M', 'L', 'XL', 'XXL']
        },
        {
            nombre: 'Borderline',
            descripcion: 'Remera Borderline con estilo único y confort excepcional.',
            descripcionDetallada: 'Remera Borderline con estilo único y confort excepcional. Diseño moderno y atemporal que combina elegancia con comodidad. Perfecta para cualquier ocasión.',
            precio: 20000,
            imagen: 'assets/img/remeras/Borderline/Borderline1.jpeg',
            imagenesAdicionales: [
                'assets/img/remeras/Borderline/Borderline2.jpeg',
                'assets/img/remeras/Borderline/Borderline3.jpeg'
            ],
            categoria: 'remera',
            talles: ['M', 'L', 'XL', 'XXL']
        },
        {
            nombre: 'Descarnado',
            descripcion: 'Remera Descarnado con diseño impactante y calidad premium.',
            descripcionDetallada: 'Remera Descarnado con diseño impactante y calidad premium. Estilo único que destaca por su originalidad y acabados de primera calidad.',
            precio: 20000,
            imagen: 'assets/img/remeras/Descarnado/Descarnado1.jpeg',
            imagenesAdicionales: [
                'assets/img/remeras/Descarnado/Descarnado2.jpeg',
                'assets/img/remeras/Descarnado/Descarnado3.jpeg'
            ],
            categoria: 'remera',
            talles: ['M', 'L', 'XL', 'XXL']
        },
        {
            nombre: 'Distant',
            descripcion: 'Remera Distant con diseño moderno y confort superior.',
            descripcionDetallada: 'Remera Distant con diseño moderno y confort superior. Combinación perfecta de estilo y funcionalidad para el uso diario.',
            precio: 20000,
            imagen: 'assets/img/remeras/Distant/Distant1.jpeg',
            imagenesAdicionales: [
                'assets/img/remeras/Distant/Distant2.jpeg',
                'assets/img/remeras/Distant/Distant3.jpeg',
                'assets/img/remeras/Distant/Distant4.jpeg'
            ],
            categoria: 'remera',
            talles: ['M', 'L', 'XL', 'XXL']
        },
        {
            nombre: 'Korn',
            descripcion: 'Remera Korn con diseño exclusivo de la banda.',
            descripcionDetallada: 'Remera Korn con diseño exclusivo de la banda. Calidad premium y diseño único que representa la esencia de Korn.',
            precio: 20000,
            imagen: 'assets/img/remeras/Korn/Korn1.jpeg',
            imagenesAdicionales: [
                'assets/img/remeras/Korn/Korn2.jpeg'
            ],
            categoria: 'remera',
            talles: ['M', 'L', 'XL', 'XXL']
        },
        {
            nombre: 'Rings Of Saturn',
            descripcion: 'Remera Rings Of Saturn con estilo metalero auténtico.',
            descripcionDetallada: 'Remera Rings Of Saturn con estilo metalero auténtico. Diseño que captura la intensidad y energía de la banda.',
            precio: 20000,
            imagen: 'assets/img/remeras/RingsOfSaturn/RingsOfSaturn1.jpeg',
            imagenesAdicionales: [
                'assets/img/remeras/RingsOfSaturn/RingsOfSaturn2.jpeg'
            ],
            categoria: 'remera',
            talles: ['M', 'L', 'XL', 'XXL']
        },
        {
            nombre: 'The Black Dahlia Murder',
            descripcion: 'Remera The Black Dahlia Murder con diseño impactante.',
            descripcionDetallada: 'Remera The Black Dahlia Murder con diseño impactante. Estilo único que representa la intensidad de la banda.',
            precio: 20000,
            imagen: 'assets/img/remeras/TheBlackDahliaMurder/TheBlackDahliaMurder1.jpeg',
            imagenesAdicionales: [
                'assets/img/remeras/TheBlackDahliaMurder/TheBlackDahliaMurder2.jpeg'
            ],
            categoria: 'remera',
            talles: ['M', 'L', 'XL', 'XXL']
        },
        {
            nombre: 'Peeling Flesh',
            descripcion: 'Remera Peeling Flesh con diseño brutal y auténtico.',
            descripcionDetallada: 'Remera Peeling Flesh con diseño brutal y auténtico. Representa la esencia del death metal más extremo con gráficos impactantes y calidad premium.',
            precio: 20000,
            imagen: 'assets/img/remeras/PeelingFlesh/PeelingFlesh1.jpeg',
            imagenesAdicionales: [
                'assets/img/remeras/PeelingFlesh/PeelingFlesh2.jpeg',
                'assets/img/remeras/PeelingFlesh/PeelingFlesh3.jpeg',
                'assets/img/remeras/PeelingFlesh/PeelingFlesh4.jpeg'
            ],
            categoria: 'remera',
            talles: ['M', 'L', 'XL', 'XXL']
        },
        {
            nombre: 'Deftones Rompe Vientos',
            descripcion: 'Campera Deftones Rompe Vientos con diseño exclusivo.',
            descripcionDetallada: 'Campera Deftones Rompe Vientos con diseño exclusivo. Perfecta para el clima frío con estilo único de la banda.',
            precio: 25000,
            imagen: 'assets/img/camperas/DeftonesRompeVientos/Deftones1.jpeg',
            imagenesAdicionales: [
                'assets/img/camperas/DeftonesRompeVientos/Deftones2.jpeg',
                'assets/img/camperas/DeftonesRompeVientos/Deftones3.jpeg'
            ],
            categoria: 'campera',
            talles: ['M', 'L', 'XL', 'XXL']
        }
    ];

    getProducts(): Producto[] {
        return this.productos;
    }

    getProductByName(name: string): Producto | undefined {
        return this.productos.find(p => p.nombre === name);
    }
}
