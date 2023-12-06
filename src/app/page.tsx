import ExcalidrawBoard from "./_components/excalidraw";
import { Room } from "./_components/room";

export default async function Home() {

  return (
    <main>
      <Room>
        <ExcalidrawBoard />
      </Room>
    </main>
  );
}