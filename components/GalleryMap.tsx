"use client";
import { useEffect, useRef } from "react";
import type { Exhibition, Station } from "@/types";

interface ExhibitionLine {
  exhibition: Exhibition;
  stations: Station[]; // ordered
}

interface GalleryMapProps {
  exhibitions: Exhibition[];
  activeStations: Array<{ station: Station; exhibition: Exhibition }>;
  exhibitionLines: ExhibitionLine[];
}

export default function GalleryMap({ activeStations, exhibitionLines }: GalleryMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<unknown>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    let map: {
      remove: () => void;
      on: (event: string, cb: () => void) => void;
      addSource: (id: string, source: object) => void;
      addLayer: (layer: object) => void;
    } | null = null;

    const initMap = async () => {
      const maplibre = await import("maplibre-gl");
      await import("maplibre-gl/dist/maplibre-gl.css");

      const mapStyle =
        process.env.NEXT_PUBLIC_MAP_STYLE ||
        "https://tiles.openfreemap.org/styles/liberty";

      map = new maplibre.Map({
        container: mapRef.current!,
        style: mapStyle,
        center: [14.42, 50.075],
        zoom: 11.5,
      }) as typeof map;

      mapInstance.current = map;

      map!.on("load", () => {
        // ── Route lines per exhibition ────────────────────────────────────
        for (const { exhibition, stations } of exhibitionLines) {
          if (stations.length < 2) continue;

          map!.addSource(`line-${exhibition.id}`, {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {},
              geometry: {
                type: "LineString",
                coordinates: stations.map((s) => [s.lng, s.lat]),
              },
            },
          });

          // Shadow stroke
          map!.addLayer({
            id: `line-shadow-${exhibition.id}`,
            type: "line",
            source: `line-${exhibition.id}`,
            paint: {
              "line-color": "#000",
              "line-width": 7,
              "line-opacity": 0.18,
            },
            layout: { "line-cap": "round", "line-join": "round" },
          });

          // Colored route line
          map!.addLayer({
            id: `line-${exhibition.id}`,
            type: "line",
            source: `line-${exhibition.id}`,
            paint: {
              "line-color": exhibition.color,
              "line-width": 4,
              "line-opacity": 0.95,
            },
            layout: { "line-cap": "round", "line-join": "round" },
          });
        }

        // ── Active station dots ───────────────────────────────────────────
        const geojson = {
          type: "FeatureCollection" as const,
          features: activeStations.map(({ station, exhibition }) => ({
            type: "Feature" as const,
            properties: { name: station.name, color: exhibition.color },
            geometry: {
              type: "Point" as const,
              coordinates: [station.lng, station.lat],
            },
          })),
        };

        map!.addSource("active-stations", { type: "geojson", data: geojson });

        map!.addLayer({
          id: "stations-outer",
          type: "circle",
          source: "active-stations",
          paint: { "circle-radius": 9, "circle-color": "#000" },
        });
        map!.addLayer({
          id: "stations-color",
          type: "circle",
          source: "active-stations",
          paint: { "circle-radius": 7, "circle-color": ["get", "color"] },
        });
        map!.addLayer({
          id: "stations-inner",
          type: "circle",
          source: "active-stations",
          paint: { "circle-radius": 2.5, "circle-color": "#fff" },
        });
      });
    };

    initMap().catch(console.error);

    return () => {
      map?.remove();
      mapInstance.current = null;
    };
  }, [activeStations, exhibitionLines]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "100%",
        filter: "grayscale(1) contrast(1.08)",
      }}
    />
  );
}
