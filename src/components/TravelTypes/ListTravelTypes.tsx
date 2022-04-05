import { TravelTypes } from './';

export function ListTravelTypes() {
  return (
    <>
      <TravelTypes icon="/cocktail.svg" text="vida noturna" />
      <TravelTypes icon="/beach.svg" text="praia" />
      <TravelTypes icon="/building.svg" text="moderno" />
      <TravelTypes icon="/museum.svg" text="clássico" />
      <TravelTypes icon="/earth.svg" text="e mais..." />
    </>
  );
}