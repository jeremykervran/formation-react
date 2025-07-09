import { MemeSVGViewer } from "orsys-tjs-meme";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

const MemeSVGViewerConnected = (props) => {
    const meme = useSelector((state: RootState) => {
      return state.current.meme;
    });
  
    const image = useSelector((state: RootState) => {
      return state.ressources.images.find((element) => element.id === meme.imageId);
    });
  return (
    <MemeSVGViewer
      {...props}
      image={image}
      meme={meme}
      basePath=''
    />
  );
}

export default MemeSVGViewerConnected;