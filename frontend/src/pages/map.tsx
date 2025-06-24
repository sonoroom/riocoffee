import React, { useRef } from 'react';
import { useEffect } from 'react';
import { Card, CardBody, Input, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

// Данные кофеен
const coffeeShops = [
  {
    id: 2,
    name: "Rio Coffee Центр",
    address: "ул. Жусаева, 127/11",
    coords: [78.393542, 42.491163],
    hours: "8:00 - 18:00",
    phone: "+996 XXX XXX XXX"
  }
];

declare global {
  interface Window {
    ymaps: any;
  }
}

export const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    // Загружаем скрипт Яндекс.Карт
    const loadYandexMaps = () => {
      if (window.ymaps) {
        initMap();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?apikey=246e295b-defc-44be-af1d-487b37696a66&lang=ru_RU';
      script.onload = () => {
        window.ymaps.ready(initMap);
      };
      document.head.appendChild(script);
    };

    // Инициализация карты
    const initMap = () => {
      if (!mapRef.current || mapInstance.current) return;

      mapInstance.current = new window.ymaps.Map(mapRef.current, {
        center: [42.491163, 78.393542], // Координаты Каракола
        zoom: 18,
        controls: ['zoomControl', 'fullscreenControl', 'geolocationControl']
      }, {
        searchControlProvider: 'yandex#search'
      });

      // Добавляем маркеры кофеен
      coffeeShops.forEach(shop => {
        const placemark = new window.ymaps.Placemark(
          [shop.coords[1], shop.coords[0]], // Яндекс использует [широта, долгота]
          {
            balloonContentHeader: `<strong>${shop.name}</strong>`,
            balloonContentBody: `
              <div style="padding: 10px;">
                <p><strong>📍 Адрес:</strong> ${shop.address}</p>
                <p><strong>🕒 Часы работы:</strong> ${shop.hours}</p>
                <p><strong>📞 Телефон:</strong> ${shop.phone}</p>
                <br>
                <button onclick="buildRoute('${shop.coords[1]},${shop.coords[0]}')"
                        style="background: #ff6b35; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">
                  Построить маршрут
                </button>
              </div>
            `,
            balloonContentFooter: `<small>Rio Coffee</small>`,
            hintContent: shop.name
          },
          {
            preset: 'islands#redDotIcon', // Красная иконка
            iconColor: '#ff6b35'
          }
        );

        mapInstance.current.geoObjects.add(placemark);
      });

      // Функция построения маршрута
      (window as any).buildRoute = (coords: string) => {
        const [lat, lng] = coords.split(',');
        const url = `https://yandex.ru/maps/?rtext=~${lat},${lng}&rtt=auto`;
        window.open(url, '_blank');
      };
    };

    loadYandexMaps();

    return () => {
      if (mapInstance.current) {
        mapInstance.current.destroy();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-sans font-semibold mb-4">Наша кофейня</h1>
        {/* Карта */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div
            ref={mapRef}
            style={{ height: '500px', width: '100%' }}
            className="rounded-xl"
          />
        </div>

        {/* Список кофеен */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coffeeShops.map((shop) => (
            <div key={shop.id} className="bg-white rounded-xl p-6 shadow-sm border border-default-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-3">{shop.name}</h3>
              <div className="space-y-2 text-sm text-default-600">
                <p className="flex items-center gap-2">
                  <span>📍</span>
                  {shop.address}
                </p>
                <p className="flex items-center gap-2">
                  <span>🕒</span>
                  {shop.hours}
                </p>
                <p className="flex items-center gap-2">
                  <span>📞</span>
                  <a href={`tel:${shop.phone}`} className="hover:text-primary transition-colors">
                    {shop.phone}
                  </a>
                </p>
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => {
                    const url = `https://yandex.ru/maps/?rtext=~${shop.coords[1]},${shop.coords[0]}&rtt=auto`;
                    window.open(url, '_blank');
                  }}
                  className="flex-1 bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primary/90 transition-colors"
                >
                  Маршрут
                </button>
                <button
                  onClick={() => window.open(`tel:${shop.phone}`)}
                  className="flex-1 border border-default-200 text-default-700 px-4 py-2 rounded-lg text-sm hover:bg-default-50 transition-colors"
                >
                  Позвонить
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};