import { MemeSVGViewer } from "orsys-tjs-meme";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

const MemeSVGViewerConnected = (props) => {
  const meme = useSelector((state: RootState) => {
    return state.current.meme;
  });

  const images = useSelector((state: RootState) => {
    return state.ressources.images;
  });
  return (
    <MemeSVGViewer
      {...props}
      image={images.find((i) => i.id === meme.imageId)}
      meme={meme}
      basePath=""
    />
  );
};

export default MemeSVGViewerConnected;
